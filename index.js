require('dotenv').config({ silent: true })
const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(flash())

app.use(ejsLayouts)

app.use(require('./middleware/setCurrentUser'))

app.set('view engine', 'ejs')

app.use('/auth', require('./routes/user_router'))

app.get('/', (req, res) => {
  res.render('home')
})

app.use(require('./middleware/isLoggedIn'))

app.use('/todo', require('./routes/todo_router'))

app.get('/profile', (req, res) => {
  res.render('user/profile')
})

app.listen(process.env.PORT || 3000)
