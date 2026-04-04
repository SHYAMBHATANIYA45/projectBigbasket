  const express = require('express')
  const app = express()
  const dotenv = require('dotenv')
  const mongoose = require('mongoose')
  const path = require('path');
  const cors = require('cors')
  
  //connect .env file with server
  dotenv.config({path: './.env'})

  //
  app.use(express.json());
  app.use(cors())

  let localhost = process.env.LOCALHOST
  let port = process.env.port

  //connect mongodb to server
  mongoose.connect(process.env.mongodb_url).then((response)=>{
  console.log('connection successful')
  }).catch((error)=>{
  console.log(error)
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  //NOT UNDERSTAND
  app.use('/api',require('../server/router/produtRouter'))

  app.listen(port,localhost, () => {
    console.log(`Express Server is Started at : http://${localhost}:${port}`);
  })
