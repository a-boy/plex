const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/p', (req, res) => {
  res.send('p[]=2,3,4,5,7,11,13,17,19')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})