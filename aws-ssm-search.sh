#!/bin/sh
# shellcheck shell=dash

# alexiudice
#
# Searches for keys across the entire param store using a regex.
#
# Requires aws to be installed.
# 
# 
# Usage:
#    ssm_search_keys "<regex>" 
#    ssm_search_values "<regex>" 
# 
# 
# Ex:
#    ssm_search_keys "broker.*" 
#    ssm_search_keys "localhost:.*" 


function ssm_search_keys () {
  aws ssm describe-parameters \
  --output text \
  | egrep '^PARAMETERS' \
  | awk '{print $5}' \
  | egrep "$1"
}

function ssm_search_values () {
  result=$(aws ssm describe-parameters --output text | egrep '^PARAMETERS' | awk '{print $5}')
  batch=$(echo "$result" | xargs -n 10)

  while IFS=$'\n' read -r line
  do
    aws ssm get-parameters --output text --names $(echo "$line") | awk -v l="$1" '$5 ~ l {print $4 " ||| " $6}'
  done <<< "$batch"
}

# Works but is slow.
function ssm_search_values_old () {
  result=$(aws ssm describe-parameters --output text | egrep '^PARAMETERS' | awk '{print $5}')
  while read -r line; do
    tmp=$(aws ssm get-parameter --output text --name $line | awk '{print $5}' | egrep "$1")
    if [[ ! -z $(echo "$tmp") ]]
    then
      echo "$line ||| $tmp"
    fi  
  done <<< "$result"
}

# Searches a regex on both values and keys
function ssm_search_both () {
  result=$(aws ssm describe-parameters --output text | egrep '^PARAMETERS' | awk '{print $5}')
  batch=$(echo "$result" | xargs -n 10)

  while IFS=$'\n' read -r line
  do
    aws ssm get-parameters --output text --names $(echo "$line") | awk '{print $4 " ||| " $6}' | egrep "$1"
  done <<< "$batch"
}