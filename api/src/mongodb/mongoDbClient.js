// // mongoDbClient.js

// import { MongoClient } from 'mongodb';
// import { dbDetails } from '../config/config.js'

// let db;

// const url = (username, password) => {
//   return `mongodb+srv://${username}:${password}@test-cluster0.hxnsnlh.mongodb.net/?retryWrites=true&w=majority&appName=test-Cluster0`;
// }

// export function fetchCollection(name) {
//   return fetchDatabase().collection(name);
// }

// function fetchDatabase() {
//   if(db != undefined) {
//     return db;
//   }

//   const client = new MongoClient(url(dbDetails.username, dbDetails.password));

//   db = client.db("chat-api-v1");

//   return db;
// }

// mongoDbClient.js

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Ladda miljövariabler från .env-filen
dotenv.config();

let db;

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/shitchat';

export async function fetchCollection(name) {
  const database = await fetchDatabase();
  return database.collection(name);
}

async function fetchDatabase() {
  if (db != undefined) {
    return db;
  }

  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('shitchat'); // Använd samma namn som i URL
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }

  return db;
}
