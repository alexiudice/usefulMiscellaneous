#!/bin/sh
# shellcheck shell=dash

# alexiudice
#

function gg_full_update () {
  for fn in $GIT_HOME/graphgrid-boot*; do
    echo "$fn"
    cd "$fn"
    eval "git fetch --all"
    eval "git checkout $1"
    eval "git reset --hard origin/$1"
    printf "\n\n"
  done
}

function gg_full_reset () {
  for fn in $GIT_HOME/graphgrid-boot*; do
    echo "$fn"
    cd "$fn"
    eval "git checkout $1"
    eval "git reset --hard origin/$1"
    printf "\n\n"
  done
}

function gg_LOP () {
  cd $GIT_HOME/

  local listOfProjects=$(ls | grep "graphgrid")

  echo "$listOfProjects"
}

function gg_fetch_all () {
  for fn in $GIT_HOME/graphgrid-boot*; do
    echo "$fn"
    cd "$fn"
    eval "git fetch --all"
    printf "\n\n"
  done
}

function gg_checkout_all () {
  for fn in $GIT_HOME/graphgrid-boot*; do
    echo "$fn"
    cd "$fn"
    eval "git checkout $1"
    printf "\n\n"
  done
}

function gg_newBranch_all () {
  for fn in $GIT_HOME/graphgrid-boot*; do
    echo "$fn"
    cd "$fn"
    eval "git checkout -b $1"
    printf "\n\n"
  done
}

function gg_resetHard_all () {
  for fn in $GIT_HOME/graphgrid-boot*; do
    echo "$fn"
    cd "$fn"
    eval "git reset --hard $1"
    printf "\n\n"
  done
}