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









const mongoose = require('mongoose');  // from mongoosejs.com                           //see here
const mongoURI = 'mongodb+srv://fillesroyale:Aabb123456aab@cluster0.6ez4pum.mongodb.net/fillesroyale?retryWrites=true&w=majority&appName=Cluster0'; // stored url in a const
                                                                                      // have to add database name fillesroyale
const mongoDB = () => {  
    mongoose.connect(mongoURI)
        .then(async() => {
            console.log('connected :)');

            //now here we will continue our story
            //we will fetch data from our database
            

            const fetched_data =await mongoose.connection.db.collection("userData01") //most important line, to fetch data, since we using async fun, we must use await
            fetched_data.find({}).toArray(function(err, data){   //({}) cauz we fetching all data, and storingit in array
                if(err) console.log(err);
                else console.log(data);
            });
        })
        .catch((error) => {
            console.error('Failed to connect to MongoDB', error);
        });
};

module.exports = mongoDB;  // since we are not calling it, we are importing it, we haven't used ();
