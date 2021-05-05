'use strict'

const express = require('express')
const app = express()
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const expressHeader = require('../index.js')

app.use(expressHeader([
  { key: 'x-alpha', value: 'x-alpha' },
  { key: 'x-beta', value: 'x-beta' },
  { key: 'x-gamma', value: 'x-gamma' },
  { key: 'x-gamma', value: '' }
]))

app.get('/', (req, res) => {
  res.send()
})

chai.use(chaiHttp)

describe('express-header', function () {
  it('should have the \'x-alpha\' header', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (!err) {
          expect(res).have.status(200)
          expect(res.headers['x-alpha']).to.be.eql('x-alpha')
          done()
        }
      })
  })

  it('should have the \'x-beta\' header', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (!err) {
          expect(res).have.status(200)
          expect(res.headers['x-beta']).to.be.eql('x-beta')
          done()
        }
      })
  })

  it('should not have the \'x-gamma\' header', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (!err) {
          expect(res).have.status(200)
          expect(res.headers['x-gamma']).to.be.undefined
          done()
        }
      })
  })

  it('should not have the \'x-delta\' header', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (!err) {
          expect(res).have.status(200)
          expect(res.headers['x-delta']).to.be.undefined
          done()
        }
      })
  })
})
