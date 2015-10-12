'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var agent = request.agent('http://localhost:1337');

describe('- Hero', function () {
	describe('- createDb()', function () {
		it('- Should create the heroes database and return 200', function (done) {
			agent
				.get('/Hero/createDb')
				.expect(200, done)
		})
	})

	describe('- calculateStats()', function () {
		it('- Should create the heroes database and return 200', function (done) {
			agent
				.post('/Hero/calculateStats')
				.send({
					hero: 'Abigail the Brutal',
					level: 15,
					stars: 3,
					ascensions: 1
				})
				.expect(200, {
					name: 'Abigail the Brutal',
					attack: 400.2,
					defense: 333.9,
					skill: 318,
					health: 1049.4
				}, done)
		})
	})

	describe('- GET /hero', function () {
		it('- respond with json', function (done) {
			agent
				.get('/hero')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
		})
	})

})
