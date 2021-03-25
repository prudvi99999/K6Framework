#echo $@

k6 run -e CASHE_ENV=%1 -e CASHE_API=%2 -c ./config/%3.k6.json --out influxdb=http://localhost:8086/myk6db ./scripts/perf-test.js



