'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var agent = request.agent('http://localhost:1337');

describe('- Hero', function () {
	describe('- createDb()', function () {
		it('- Should create the heroes database and return 200', function (done) {
			agent
				.get('/Hero/createDb')
				.expect(200, done);
		});
	});

	describe('- calculateStats()', function () {
		it('- Should create the heroes database and return 200', function (done) {
			agent
				.post('/Hero/calculateStats')
				.send({
					hero: 'Abigail the Brutal',
					level: 44,
					stars: 2,
					ascensions: 1
				})
				.expect(200, {
					name: 'Abigail the Brutal',
					attack: 820.6,
					defense: 680,
					skill: 647.7,
					health: 2140.2
				}, done);
		});
	});
});
