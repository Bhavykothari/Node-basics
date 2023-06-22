const express = require('express')
const app = express()
const port = process.env.PORT || 4000 ;

app.get('/hello', (req, res) => {
  res.send('Its just a Kick start aage aage dekho hota hain kya..!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})