## start zookeeper

docker run --name zookeeper -p 2181:2181 -d zookeeper

## start kafka

docker run -p 9092:9092 --name kafka -e KAFKA_ZOOKEEPER_CONNECT=Subhasishs-Air:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://Subhasishs-Air:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka
