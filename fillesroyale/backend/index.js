const express = require('express')
const app = express()
const port = 5000 
const mongoDB= require('./database') //since we using nodejs, we say require insted of import
mongoDB(); //once we built it through require and now to execute, we called  it.



app.use(express.json()) //have to include express.json in out app.use
app.use('/api', require("./Routes/CreatUser"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

