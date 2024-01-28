require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! kya hal ji')
})

app.get('/twitter', (req, res) => {
    res.send('shubham.hqhr.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at here</>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})