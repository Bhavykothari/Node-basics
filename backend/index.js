const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;

app.get('/hello', (req, res) => {
  res.send('Total new code')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})