const { MongoClient } = require('mongodb');
// imported mongodb driver to connect to mongodb database

const uri = 'mongodb://127.0.0.1';
// uri is the path to the database

const client = new MongoClient(uri);
// client is the connection to the database

// data1 is the data to be inserted into the database
const data1 = {
  id: 4,
  age: 15,
  'full name': 'Vignesh Sadanand Potdar',
  'eye color': 'yellow',
  user: ['Vighnesh']

}

// main function to connect to the database and insert the data
const main = async () => {
  // try catch block to handle errors
  try {
    // connect to the database
    await client.connect();
    // select the database
    const db = client.db("data_base_1");
    // select the collection
    const collection = db.collection
      ("collection_o_students");
    // find all the data in the collection
    const data = await collection.find({}).toArray();
    // insert the data into the collection
    await collection.insertOne(data1);
    // print the data
    console.log(data);
    // return done if the process is completed successfully 
    return "done";

  } catch (error) {
    // print the error if any error occurs
    console.error(error);
  } finally {
    // close the connection to the database if the process is completed or an error occurs 
    await client.close();
  }
};

// call the main function
main()
  // print the message if the process is completed successfully
  .then(() => console.log("Process completed."))
  // print the error if any error occurs
  .catch(console.error);

