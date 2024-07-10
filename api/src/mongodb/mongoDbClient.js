// mongoDbClient.js

import { MongoClient } from 'mongodb';
import { dbDetails } from '../config/config.js'

let db;

const url = (username, password, host) => {
  return `mongodb://${username}:${password}@${host}`;
}

export function fetchCollection(name) {
  return fetchDatabase().collection(name);
}

function fetchDatabase() {
  if(db != undefined) {
    return db;
  }

  const client = new MongoClient(url(dbDetails.username, dbDetails.password, dbDetails.host));

  db = client.db(dbDetails.database);

  return db;
}

// mongoDbClient.js

// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';

// // Ladda miljövariabler från .env-filen
// dotenv.config();

// let db;

// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/shitchat';

// export async function fetchCollection(name) {
//   const database = await fetchDatabase();
//   return database.collection(name);
// }

// async function fetchDatabase() {
//   if (db != undefined) {
//     return db;
//   }

//   const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     db = client.db('shitchat'); // Använd samma namn som i URL
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//     throw error;
//   }

//   return db;
// }

//---------------------------------------------------------

// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';

// // Ladda miljövariabler från .env-filen
// dotenv.config();

// let db;

// // Funktion för att bygga MongoDB-URL från miljövariabler
// const url = process.env.MONGODB_URI || `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}`;

// export async function fetchCollection(name) {
//   const database = await fetchDatabase();
//   return database.collection(name);
// }

// async function fetchDatabase() {
//   if (db != undefined) {
//     return db;
//   }

//   console.log(`Connecting to MongoDB at ${url}`);

//   const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     db = client.db(process.env.DB_NAME);
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//     throw error;
//   }

//   return db;
// }
