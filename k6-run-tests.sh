#!/bin/bash
echo $@

#export CASHE_ENV=staging
#export CASHE_API=simple

k6 run -e CASHE_ENV=$1 -e CASHE_API=$2 -c ./config/$3.k6.json --out influxdb=http://localhost:8086/myk6db ./scripts/perf-test.js

#./k6-run-tests.sh staging uma load
#./k6-run-tests.sh staging uma spike
#./k6-run-tests.sh staging uma stress
#./k6-run-tests.sh staging uma simple

