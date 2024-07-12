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
