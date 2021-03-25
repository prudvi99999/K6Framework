# Grafana Installation

https://computingforgeeks.com/how-to-install-grafana-on-fedora/

cat <<EOF | sudo tee /etc/yum.repos.d/grafana.repo
[grafana]
name=grafana
baseurl=https://packages.grafana.com/oss/rpm
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://packages.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
EOF

sudo dnf -y install grafana

sudo systemctl start grafana-server
sudo systemctl enable grafana-server

sudo systemctl status grafana-server

# InfluxDB Installation

https://computingforgeeks.com/how-to-install-influxdb-on-fedora/

cat <<EOF | sudo tee /etc/yum.repos.d/influxdb.repo
[influxdb]
name = InfluxDB Repository - RHEL 
baseurl = https://repos.influxdata.com/rhel/7/x86_64/stable/
enabled = 1
gpgcheck = 1
gpgkey = https://repos.influxdata.com/influxdb.key
EOF

sudo dnf install influxdb

rpm -qi influxdb

sudo systemctl start influxdb

sudo systemctl enable influxdb

sudo systemctl status influxdb

# K6 Installation

https://docs.k6.io/docs/installation

wget https://bintray.com/loadimpact/rpm/rpm -O bintray-loadimpact-rpm.repo
sudo mv bintray-loadimpact-rpm.repo /etc/yum.repos.d/
sudo yum install k6


