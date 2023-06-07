const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;

app.get('/hello', (req, res) => {
  res.send('The Application programming interface reference documentation provides detailed information about a function or object in Node.js. This documentation indicates what arguments a method accepts, the return value of that method, and what errors may be related to that method. It also indicates which methods are available for different versions of Node.js.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})