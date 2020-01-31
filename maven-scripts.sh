#!/bin/bash

# alexiudice
#
# Some maven scripts

function mvn_build () {
  mvn clean install -Pgraphgrid,build-project,build-docker -DskipTests
}

function mvn_run () {
  docker-compose up --detach --build
}

function mvn_quick () {
  mvn clean install -Pgraphgrid,build-project,build-docker -DskipTests \
  	&& docker-compose up --detach --build
}


