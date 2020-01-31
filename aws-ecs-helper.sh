#!/bin/sh
# shellcheck shell=dash

# alexiudice
#
# A script to quickly get the private IP addresses of the ec2 containers 
#   holding services running in a specific cluster.
#
# Makes it easy to get these and ssh in without having to go use the browser.
# 
# 
# Usage:
#    ec_service_ip <cluster> <service>
#    ec_graph_ip <cluster> <graphAbbreviationName>
# 
# 
# Ex:
#  ec_service_ip vive-stag search
#
#   Output: 
#     172.26.34.4
#     172.26.34.118
#
# Ex:
#  ec_graph_ip vive-stag ongdb
#
#   Output: 
#     172.26.36.12



# $1 = cluster (vive-stag, gg-dev, etc.)
# $2 = service name (search, nlp, fuze, etc.)
function ec_service_ip () {
  cluster="$1-frazr-core"
  service="$1-$2"
  taskArns=$(aws ecs list-tasks --output text --query taskArns[*] --cluster "$cluster" --service-name "$service" | awk '{print $1 " " $2}')

  containerInstanceArns=$(aws ecs describe-tasks --output text --query tasks[*].containerInstanceArn --cluster "$cluster" --tasks $(echo "$taskArns")  | awk '{print $1 " " $2}')

  ec2InstanceIds=$(aws ecs describe-container-instances --output text --query containerInstances[*].ec2InstanceId --cluster "$cluster" --container-instances $(echo "$containerInstanceArns")  | awk '{print $1 " " $2}')

  aws ec2 describe-instances --output text --query Reservations[*].Instances[*].PrivateIpAddress --instance-ids $(echo "$ec2InstanceIds")
}


# $1 = cluster (vive-stag, gg-dev, etc.)
# $2 = graph abbreviation name (neo, ongdb)
function ec_graph_ip () {
  tagValue="$1-$2"
  filters="Name=tag:Cluster,Values=$tagValue"
  aws ec2 describe-instances --output text --query Reservations[*].Instances[*].PrivateIpAddress  --filters $(echo "$filters")
}


