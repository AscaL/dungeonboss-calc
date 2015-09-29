/**
 * Hero.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

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
			required: true,
			enum: [1, 2, 3, 4, 5],
			defaultsTo: 1
		},

		ascension: {
			type: 'integer',
			required: true,
			enum: [0, 1, 2],
			defaultsTo: 0
		}
	}
};
