'use strict';

var Sails = require('sails');
var sails = null;

// Global before hook
before(function (done) {
	// Lift Sails with test database
	Sails.lift({
		log: {
			/* If you need to see what errors are given change this to 'error' */
			level: 'silent'
		},
		models: {
			connection: 'test',
			migrate: 'drop'
		}
	}, function (err, server) {
		sails = server;
		if (err) {
			return done(err);
		}
		// here you can load fixtures, etc.
		done(err, sails);
	});
});

// Global after hook
after(function (done) {
	console.log() // Skip a line before displaying Sails lowering logs
	Sails.lower(done);
});
