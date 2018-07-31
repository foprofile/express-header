var express 		= require('express');
var app 			= express();
var chai 			= require('chai');
var should 			= chai.should();
var expect 			= chai.expect;
var chaiHttp 		= require('chai-http');
var request 		= require('request');
var expressHeader 	= require('../index.js');

app.use(expressHeader([
	{key: 'x-alpha', value: 'x-alpha'},
	{key: 'x-beta' , value: 'x-beta' },
	{key: 'x-gamma', value: 'x-gamma'},
	{key: 'x-gamma', value: ''       }
]));

app.get('/', function (req, res) {
	res.send();
});

chai.use(chaiHttp);

describe('express-header', function() {

	it('should have the \'x-alpha\' header', function(done) {
		chai
			.request(app)
			.get('/')
			.end(function(err, res) {
				res.should.have.status(200);
				res.headers['x-alpha'].should.be.eql('x-alpha');
				done();
			});
	});

	it('should have the \'x-beta\' header', function(done) {
		chai
			.request(app)
			.get('/')
			.end(function(err, res) {
				res.should.have.status(200);
				res.headers['x-beta'].should.be.eql('x-beta');
				done();
			});
	});
	
	it('should not have the \'x-gamma\' header', function(done) {
		chai
			.request(app)
			.get('/')
			.end(function(err, res) {
				res.should.have.status(200);
				expect(res.headers['x-gamma']).to.be.undefined;
				done();
			});
	});
	
	it('should not have the \'x-delta\' header', function(done) {
		chai
			.request(app)
			.get('/')
			.end(function(err, res) {
				res.should.have.status(200);
				expect(res.headers['x-delta']).to.be.undefined;
				done();
			});
	});
	
});