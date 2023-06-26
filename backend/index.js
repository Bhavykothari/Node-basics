const express = require('express')
const app = express()
const port = process.env.PORT || 9000 ;

app.get('/hello', (req, res) => {
  res.send(' NodeJs server is started ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
