const express = require('express')
const app = express()
const port = 5000 
const mongoDB= require('./database') //since we using nodejs, we say require insted of import
mongoDB(); //once we built it through require and now to execute, we called  it.


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

