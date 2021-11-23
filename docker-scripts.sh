#!/bin/bash

# alexiudice
#
# Some docker sripts

function docker_stop_containers () {
  docker container stop $(docker container ls -aq)
}

function docker_rm_containers () {
  docker container rm $(docker container ls -aq)
}

function docker_run () {
  docker-compose up --detach --build
}