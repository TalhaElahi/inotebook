const connectToMongo = require('./db');
connectToMongo();

var cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

//Available routes
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/talha-test',require('./routes/talha_test'))





// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/api/v1/login', (req, res) => {
//     res.send('Hello login!')
//   })

//   app.get('/api/v1/signup', (req, res) => {
//     res.send('Hello signup!')
//   })

//   app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
app.listen(port, () => {
  console.log(`iNotebook listening at http://localhost:${port}`)
})