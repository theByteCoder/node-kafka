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
    const admin = kafka.admin();
    await admin.connect();
    console.log("Admin connected");
    await admin.createTopics({
      topics: [
        {
          topic,
          numPartitions: 2,
        },
      ],
    });
    console.log(`Topic ${topic} created`);
    await admin.disconnect();
    console.log("Admin disconnected");
  } catch (e) {
    console.log(e);
  } finally {
    process.exit(0);
  }
}
