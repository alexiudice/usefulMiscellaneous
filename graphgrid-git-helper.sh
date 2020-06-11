#!/bin/sh
# shellcheck shell=dash

# alexiudice
#

function projectsVariable () {
  cd $GIT_HOME/
  projects=$(ls -d "$PWD/"* | egrep "graphgrid-(boot|sdk).*")
}

function gg_full_update () {
  projectsVariable
  for fn in $(echo "$projects"); do
    echo "$fn"
    cd "$fn"
    eval "git fetch --all"
    eval "git checkout $1 && git reset --hard origin/$1"
    printf "\n\n"
  done
  cd $GIT_HOME/
}

function gg_full_reset () {
  projectsVariable
  for fn in $(echo "$projects"); do
    echo "$fn"
    cd "$fn"
    eval "git checkout $1 && git reset --hard origin/$1"
    printf "\n\n"
  done
  cd $GIT_HOME/
}

function gg_LOP () {
  projectsVariable
  echo "$projects"
}

function gg_fetch_all () {
  projectsVariable
  for fn in $(echo "$projects"); do
    echo "$fn"
    cd "$fn"
    eval "git fetch --all"
    printf "\n\n"
  done
  cd $GIT_HOME/
}

function gg_checkout_all () {
  projectsVariable
  for fn in $(echo "$projects"); do
    echo "$fn"
    cd "$fn"
    eval "git checkout $1"
    printf "\n\n"
  done
  cd $GIT_HOME/
}

function gg_newBranch_all () {
  projectsVariable
  for fn in $(echo "$projects"); do
    echo "$fn"
    cd "$fn"
    eval "git checkout -b $1"
    printf "\n\n"
  done
  cd $GIT_HOME/
}

function gg_resetHard_all () {
  projectsVariable
  for fn in $(echo "$projects"); do
    echo "$fn"
    cd "$fn"
    eval "git reset --hard $1"
    printf "\n\n"
  done
  cd $GIT_HOME/
}

