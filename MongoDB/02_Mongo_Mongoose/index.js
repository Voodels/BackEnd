//                          Mongooose
// Mongoose is a library that allows us to interact with MongoDB
const mongoose = require('mongoose');
// imported mongoose to connect to mongodb database
const uri = 'mongodb+srv://vighneshpotdar:2112004VSP37@cluster0.8y8t01q.mongodb.net/shop?retryWrites=true&w=majority'
// uri is the path to the database
mongoose.connect(uri);
// connect to the database

// we need to create a schema for the data
const dataSchema = new mongoose.Schema({
  id: Number,
  age: Number,
  full_name: String,
  eye_color: String,
  user: [String]
})

// we need to create a model for the data
const Data = new mongoose.model('Data', dataSchema);

//
const main = async () => {
  try {
    const data = await Data.find({})
    console.log(data)

  } catch (error) {
    console.log(error)
  } finally {
    mongoose.connection.close();
  }
}

main();