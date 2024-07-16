const express = require('express')
const app = express()
const port = 5000 
const mongoDB= require('./database') //since we using nodejs, we say require insted of import
mongoDB(); //once we built it through require and now to execute, we called  it.

const cors = require('cors'); // Import the cors package

// Use the CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust the origin to match your React app's URL
  credentials: true,
}));

//to sort problem with cross origin barriers
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json()) //have to include express.json in out app.use
app.use('/api', require("./Routes/CreatUser"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

