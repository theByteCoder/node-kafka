require("dotenv").config();
const { Kafka } = require("kafkajs");

run();
async function run() {
  const topic = process.env.topicName;
  try {
    const kafka = new Kafka({
      clientId: process.env.clientId,
      brokers: ["Subhasishs-Air:9092"],
    });
    const consumer = kafka.consumer({
      groupId: "consumer-group",
    });
    await consumer.connect();
    console.log("Consumer connected");
    await consumer.subscribe({
      topic,
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Consumed message ${result.message.value} on partition ${result.partition}`
        );
      },
    });
  } catch (e) {
    console.log(e);
  }
}
