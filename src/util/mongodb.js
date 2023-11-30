// // util/mongodb.js
// import { MongoClient } from 'mongodb';

// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export async function connectToDatabase() {
//   if (!client.isConnected()) await client.connect();
//   return client.db('your-database-name');
// }

// export async function findUserByEmail(email) {
//   const db = await connectToDatabase();
//   return await db.collection('users').findOne({ email });
// }

// export async function createUser(userData) {
//   const db = await connectToDatabase();
//   return await db.collection('users').insertOne(userData);
// }
