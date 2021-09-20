require("dotenv").config();
const { Kafka } = require("kafkajs");

run();
async function run() {
  const topic = process.env.topicName;
  const message = process.argv[2];
  const partition = message[0].toLowerCase() < "n" ? 0 : 1;
  try {
    const kafka = new Kafka({
      clientId: process.env.clientId,
      brokers: ["Subhasishs-Air:9092"],
    });
    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");
    const result = await producer.send({
      topic,
      messages: [
        {
          value: message,
          partition,
        },
      ],
    });
    console.log(`Produced message ${JSON.stringify(result)}`);
    await producer.disconnect();
    console.log("Producer disconnected");
  } catch (e) {
    console.log(e);
  } finally {
    process.exit(0);
  }
}
