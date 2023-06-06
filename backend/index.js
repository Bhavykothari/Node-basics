const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World! This is the course of Cloud computing and Devops with AWS certification. I am auto-deployed via Code Pipeline')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})