#!/bin/bash

# alexiudice
#
# Some maven scripts

function mvn_quickBuild () {
  mvn clean install -Pgraphgrid,build-project,build-docker -DskipTests
}
