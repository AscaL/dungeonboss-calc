/**
 * Hero.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

'use strict';

var _ = require('lodash');

module.exports = {

	attributes: {

		name: {
			type: 'string',
			required: true
		},

		attack: {
			type: 'integer',
			required: true
		},

		defense: {
			type: 'integer',
			required: true
		},

		skill: {
			type: 'integer',
			required: true
		},

		health: {
			type: 'integer',
			required: true
		},

		critChance: {
			type: 'integer',
			required: true
		},

		critMultiplier: {
			type: 'integer',
			required: true
		},

		hitChance: {
			type: 'integer',
			required: true
		},

		dodgeChance: {
			type: 'integer',
			required: true
		},

		poisonResist: {
			type: 'integer',
			required: true
		},

		fireResist: {
			type: 'integer',
			required: true
		},

		coldResist: {
			type: 'integer',
			required: true
		},

		diseaseResist: {
			type: 'integer',
			required: true
		},

		freezeResist: {
			type: 'integer',
			required: true
		},

		lightningResist: {
			type: 'integer',
			required: true
		},

		spiritResist: {
			type: 'integer',
			required: true
		},

		stars: {
			type: 'integer',
			enum: [1, 2, 3, 4, 5],
			defaultsTo: 1
		},

		ascension: {
			type: 'integer',
			enum: [0, 1, 2],
			defaultsTo: 0
		},

		level: {
			type: 'integer',
			defaultsTo: 1
		}
	},

	/* Function that calculates the stats of a Hero, give level, ascension and stars */
	calculateStats: function (hero, level, stars, ascensions, cb) {
		sails.log.verbose('level:', level);
		sails.log.verbose('stars:', stars);
		sails.log.verbose('ascensions:', ascensions);

		Hero.findOne({
				name: hero
			})
			.then(function (heroFullStats) {
				var heroStats = _.pick(heroFullStats, ['attack', 'defense', 'skill', 'health']);
				sails.log.verbose('heroStats:', heroStats);

				var newHeroStats = {};
				newHeroStats.name = hero;

				_.forOwn(heroStats, function (statValue, statName) {
					sails.log.verbose('stat:', statName, statValue);
					var a = ((level - 1) * 0.08) + 1;
					sails.log.verbose('a:', a);
					var b = statValue * starPower(stars);
					sails.log.verbose('b:', b);
					var c = b * ascPower(ascensions, statName);
					sails.log.verbose('c:', c);
					var newStat = _.round(c * a, 1);

					sails.log.verbose('newStat:', newStat);
					newHeroStats[statName] = newStat;
				})
				sails.log.verbose('newHeroStats:', newHeroStats);
				return cb(null, newHeroStats);

			})
			.catch(function (err) {
				return cb(err)
			})
	}

};

function starPower(star) {
	sails.log.verbose('star:', star);

	var starVal = {
		1: 1,
		2: 1.125,
		3: 1.25,
		4: 1.375,
		5: 1.5
	}
	sails.log.verbose('starVal:', starVal);
	sails.log.verbose('star:', star);

	sails.log.verbose('get starval, star:', _.get(starVal, star.));

	return _.get(starVal, star);
}

function ascPower(asc, statName) {
	var currentStats = statName;
	sails.log.verbose('statName:', statName);

	var ascAttackVal = {
		name: 'attack',
		0: 1,
		1: 1.088,
		2: 1.186,
	}

	var ascDefenseVal = {
		name: 'defense',
		0: 1,
		1: 1.0805,
		2: 1.177,
	}

	var ascSkillVal = {
		name: 'skill',
		0: 1,
		1: 1.0805,
		2: 1.177,
	}

	var ascHealthVal = {
		name: 'health',
		0: 1,
		1: 1.082,
		2: 1.179,
	}

	var ascVal = {
		ascAttackVal: ascAttackVal,
		ascDefenseVal: ascDefenseVal,
		ascSkillVal: ascSkillVal,
		ascHealthVal: ascHealthVal
	}

	var finalValue = null;
	_.forEach(ascVal, function (ascObj) {
		sails.log.verbose('ascObj:', ascObj);
		if (_.isEqual(ascObj.name, statName)) {
			sails.log.verbose('_get(ascObj, asc):', _.get(ascObj, asc));
			finalValue = _.get(ascObj, asc)
		}
	})
	sails.log.verbose('finalValue:', finalValue);


	sails.log.verbose('get starval, star:', _.get(ascVal, asc));
	return finalValue;
}
