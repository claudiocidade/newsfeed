#!/usr/bin/env bash
if [ $1 = "/(prd|dev)/" ]:
  docker-compose -f docker-compose.$1.yml
fi