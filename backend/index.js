const express = require('express')
const cors = require('cors')
require('dotenv').config()
const TransactionRoutes = require("./routes/TransactionRoutes")
const app = express()
app.use(cors())
app.use(express.json())
app.use('/transactions',TransactionRoutes)

app.listen(8080,()=>{
  console.log("app rodando")
})
require("./config/connection")