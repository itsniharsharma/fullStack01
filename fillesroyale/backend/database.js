// const mongoose = require('mongoose');  //from mongoosejs.com
// const mongoURI = 'mongodb+srv://fillesroyale:Aabb123456aab@cluster0.6ez4pum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' //stored url in a const
// // mongoose.connect(mongoURI);  //to connect with database, we need url, v simple, put the const in this

// const mongoDB=async()=>{
//   await mongoose.connect(mongoURI, {useNewUrlParser:true}, ()=>{
//         console.log('connected :)');  //once url is hanshaked, this function returnes a confirmation
//     });
// }

// url we can find : cluster(0) connect, connect with our application

// since, we have to import our database.js to our express environment, we have to import it
// Hence to import we put   mongoose.connect(mongoURI, ()=>{
//         console.log('connected :)');  //once url is hanshaked, this function returnes a confirmation
//     });

// in a function

// module.exports=mongoDB;  //since we are not calling it, we are importing it, we havnt used ();

//since MONGOOSE.prototype, nolonger accepts callback, we have to use await and promise method

const mongoose = require("mongoose"); // from mongoosejs.com                           //see here
const mongoURI =
  "mongodb+srv://fillesroyale:Aabb123456aab@cluster0.6ez4pum.mongodb.net/fillesroyale?retryWrites=true&w=majority&appName=Cluster0"; // stored url in a const
// have to add database name fillesroyale

const mongoDB = () => {
  mongoose.connect(mongoURI)
    .then(async () => {
      console.log("Connected to MongoDB :)");

      // Access the database
      const db = mongoose.connection.db;
      console.log(`Database Name: ${db.databaseName}`);

      // List all collections in the database
      const collections = await db.listCollections().toArray();
      console.log("Collections:", collections);

      // Check if the collection exists
      const collectionExists = collections.some(
        (collection) => collection.name === "userData01"
      );
      if (!collectionExists) {
        console.error("Collection userData01 does not exist");
        return;
      }

      // Fetch data from the collection
      const fetched_data = db.collection("userData01");
      const data = await fetched_data.find({}).toArray();
      console.log("Fetched Data:", data);

      if (data.length === 0) {
        console.log("No data found in the collection");
      }
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB", error);
    });
};

module.exports = mongoDB; // since we are not calling it, we are importing it, we haven't used ();
