require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./config/keys').mongoURI
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const jobs = require('./routes/api/jobs')
const User = require('./models/User')
const fileUploadRoutes = require('./routes/fileUploads')
const path = require('path')
const reviews = require('./routes/api/reviews')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./config/passport')(passport)

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.use('/api/reviews', reviews)
app.use('/api/users', users)
app.use('/api/jobs', jobs)
app.use('/api/photos', fileUploadRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))
