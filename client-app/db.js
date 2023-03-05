const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const url = process.env.DATABASE_URL;

const dbName = 'myapp';
const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectToDb() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

function getDb() {
  return client.db(dbName);
}

module.exports = {
  connectToDb,
  getDb,
};
