# Setup

## start zookeeper

docker run --name zookeeper -p 2181:2181 -d zookeeper

## start kafka

docker run -p 9092:9092 --name kafka -e KAFKA_ZOOKEEPER_CONNECT=Subhasishs-Air:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://Subhasishs-Air:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka

# Usage
1. Git clone
2. Execute file topic.js with below command. Here, topic is created with 2 partitions.
  - node src/kafka/topic
4. Launch 3 terminals
5. On each ternminal, navigate to git cloned directory
6. On first 2 terminals, run below command. Here, each of the 2 terminals will be responsible for 1 partition.
  - node src/kafka/consumer
7. On third terminal, run below commands. Also, check the consumer terminals.
  - node src/kafka/producer User1
  - node src/kafka/producer User2
  - node src/kafka/producer AnyUser1
  - node src/kafka/producer AnyUser2 
