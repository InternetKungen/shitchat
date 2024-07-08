// server.js

import express from 'express';
import cors from 'cors';
import { fetchCollection } from './src/mongodb/mongoDbClient.js';

import authRoutes from './src/router/authRoutes.js';
import broadcastRoutes from './src/router/broadcastRoutes.js';
import channelRoutes from './src/router/channelRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

/** Config */
app.use(cors());
app.use(express.json());

/** Databas */
// Gör databasen tillgänglig för alla router-filer
app.use((req, res, next) => {
  req.db = fetchCollection(); // Lägg till databasen i request-objektet
  next();
});

/** Routes */
app.use('/', authRoutes);
app.use('/', broadcastRoutes);
app.use('/', channelRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
