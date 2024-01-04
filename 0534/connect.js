const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; // Change this to your desired port

// Replace 'your_database_name' with your actual database name
const dbName = 'SITE';

// Replace this connection string with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/' + dbName;

app.use(express.json());

app.post('/store-content', async (req, res) => {
    try {
        const { productTitle, price } = req.body;

        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('giri'); // Replace with your collection name

        const result = await collection.insertOne({ productTitle, price });

        client.close();

        res.status(201).json({ message: 'Content stored successfully', insertedId: result.insertedId });
    } catch (error) {
        console.error('Error storing content in MongoDB:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
