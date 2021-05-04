'use strict'

const express = require('../node_modules/express')
// import express from '../node_modules/express'
const expressHeader = require('../')
// import expressHeader from '../'

const app = express()
const PORT = 3000

app.use(expressHeader([
  { key: 'X-Alpha', value: 'Alpha' },
  { key: 'X-Beta', value: 'Beta' },
  { key: 'x-gamma', value: 'Gamma' },
  { key: 'x-gamma', value: '' }
]))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)
