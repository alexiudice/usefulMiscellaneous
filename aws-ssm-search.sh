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
#    ssm_search "<regex>" 
# 
# 
# Ex:
#    ssm_search "broker.*" 


function ssm_search () {
  aws ssm describe-parameters \
  --output text \
  | egrep '^PARAMETERS' \
  | awk '{print $4}' \
  | egrep "$1"
}