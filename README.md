
# Performance testing

## Run time parameters

environment
    platform
    userGroup 

    comman-line parameters
        config file path

config file parameters
platform-config.json
userGroup-users.json
platform-scenarios.json

# Life cycle

##init()
load scenarios and tests into JavaScript objects

##setup()
get tokens for the configured users and store in map

##test()
for each VU 
   run the test

##teardown()
  cleanup activities

export CASHE_ENV=staging
export CASHE_API=simple
export CASHE_USER_GROUP=dummy-users


## Command

k6 run -c ./config/simple.k6.json --out influxdb=http://localhost:8086/myk6db ./scripts/perf-test.js





CASHE_ENV=staging PERF_TYPE=simple USER_GROUP=dummy-users k6 run -c ./test-data/scenarios/$PERF_TYPE.k6.json --out influxdb=http://localhost:8086/myk6db ./scripts/perf-test.js







