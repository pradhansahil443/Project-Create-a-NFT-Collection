const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbname = 'E-comm';
async function getData() {
    let result = await client.connect();
    console.log('Connected Successfully!');
    let db = result.db(dbname);
    let collection = db.collection('Products');
    let response = await collection.find({}).toArray();
    console.log(response)
}
getData();