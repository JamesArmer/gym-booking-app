require('dotenv').config();

const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.mtoumbe.mongodb.net/?retryWrites=true&w=majority`;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({name: 'Silence'});
  console.log(silence.name); // 'Silence'
}
