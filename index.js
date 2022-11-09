const express = require ('express');
const cors = require ('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER)
console.log(precess.env.DB_PASSWORD)

const uri = `mongodb+srv://:<password>@cluster0.panqagk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});





app.get('/', (req, res) =>{
    res.send('service running')
})

app.listen(port, () =>{
    console.log(`server running ${port}`);
})