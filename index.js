const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ping', (req, res) => {
  res.send('Pong')
})

app.get('/marcoo', (req, res) => {
  res.send('poloo')
})



/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

app.listen(port, console.log("http://localhost:"+ port));