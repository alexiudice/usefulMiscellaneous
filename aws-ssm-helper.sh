#!/bin/sh
# shellcheck shell=dash

# alexiudice
#
# Retrieves multiple pages of params from the AWS SSM Parameter Store without having to manually enter --next-token.
#
# Requires aws and jq to be installed.
# 
# 
# Usage:
#    ssm_params_path "<aws ssm path>"
# 
# 
# Ex:
#    ssm_params_path "/1.3/search/development/" 


function ssm_params_path () {
  if [ -n "$2" ]
  then
    result=$(aws ssm get-parameters-by-path --path "$1" --next-token "$2")
  else
    result=$(aws ssm get-parameters-by-path --path "$1")
  fi 

  nextToken=$(echo "$result" | jq -r '.NextToken')

  echo "$result" | jq -r '.Parameters[]'
  
  if [ -n "$nextToken" ] && [ "${nextToken}" != "null" ]
  then
    ssm_params_path "$1" "$nextToken"
  fi
}

# Can get more general paths like "/1.3/search" using the --recursive option
function ssm_params_path_recursive () {
  if [ -n "$2" ]
  then
    result=$(aws ssm get-parameters-by-path --recursive --path "$1" --next-token "$2")
  else
    result=$(aws ssm get-parameters-by-path --recursive --path "$1")
  fi 

  nextToken=$(echo "$result" | jq -r '.NextToken')

  echo "$result" | jq -r '.Parameters[]'
  
  if [ -n "$nextToken" ] && [ "${nextToken}" != "null" ]
  then
    ssm_params_path_recursive "$1" "$nextToken"
  fi
}