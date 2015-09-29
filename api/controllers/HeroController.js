/**
 * HeroController
 *
 * @description :: Server-side logic for managing Heroes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createDb: function (req, res) {

		console.log('createdb');

		Hero.create([{
			name: 'Abigail the Brutal',
			attack: 151,
			defense: 126,
			skill: 120,
			health: 396,
			critChance: 15,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 32,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Ignus the Mad',
			attack: 151,
			defense: 98,
			skill: 139,
			health: 330,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 100,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Lady Nimriel',
			attack: 167,
			defense: 120,
			skill: 126,
			health: 397,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 27,
			fireResist: 12,
			coldResist: 2,
			diseaseResist: 27,
			freezeResist: 2,
			lightningResist: 27,
			spiritResist: 2
		},
		{
			name: 'Lupina',
			attack: 157,
			defense: 114,
			skill: 132,
			health: 396,
			critChance: 15,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 1,
			fireResist: 31,
			coldResist: 1,
			diseaseResist: 1,
			freezeResist: 1,
			lightningResist: 1,
			spiritResist: 1
		},
		{
			name: 'Mangle Jaw',
			attack: 151,
			defense: 126,
			skill: 138,
			health: 342,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 32,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Nitpick',
			attack: 139,
			defense: 121,
			skill: 121,
			health: 330,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 32,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Rogar Stonecrusher',
			attack: 137,
			defense: 139,
			skill: 111,
			health: 367,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 32,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Squinch',
			attack: 114,
			defense: 115,
			skill: 132,
			health: 313,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 32,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Torchy',
			attack: 140,
			defense: 110,
			skill: 125,
			health: 244,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 32,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Bovus El Doro',
			attack: 158,
			defense: 132,
			skill: 110,
			health: 414,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Chief NubNub',
			attack: 133,
			defense: 110,
			skill: 143,
			health: 435,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2 + 50
		},
		{
			name: 'Cruel King Bramble',
			attack: 150,
			defense: 157,
			skill: 162,
			health: 429,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Jabber Clenchjaw',
			attack: 145,
			defense: 110,
			skill: 110,
			health: 330,
			critChance: 6 + 9,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Julius',
			attack: 0,
			defense: 0,
			skill: 0,
			health: 0,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Phemus',
			attack: 164,
			defense: 125,
			skill: 120,
			health: 598,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Phenol Thoxian',
			attack: 145,
			defense: 138,
			skill: 102,
			health: 544,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Rocky the Shiitake',
			attack: 134,
			defense: 104,
			skill: 164,
			health: 346,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Tsume',
			attack: 151,
			defense: 120,
			skill: 108,
			health: 451,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Willow Swift',
			attack: 145,
			defense: 110,
			skill: 121,
			health: 330,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 32,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Zurk',
			attack: 123,
			defense: 139,
			skill: 88,
			health: 332,
			critChance: 5,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 31,
			fireResist: 1,
			coldResist: 1,
			diseaseResist: 1,
			freezeResist: 1,
			lightningResist: 1,
			spiritResist: 1
		},
		{
			name: 'IGOROK',
			attack: 178,
			defense: 164,
			skill: 136,
			health: 533,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'King Yorick',
			attack: 156,
			defense: 163,
			skill: 102,
			health: 482,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Samurai Takumi',
			attack: 150,
			defense: 138,
			skill: 132,
			health: 360,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Selwyn the Enduring',
			attack: 139,
			defense: 110,
			skill: 132,
			health: 330,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 32,
			diseaseResist: 2,
			freezeResist: 100,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Sir William',
			attack: 121,
			defense: 169,
			skill: 93,
			health: 398,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 1,
			fireResist: 1,
			coldResist: 31,
			diseaseResist: 1,
			freezeResist: 31,
			lightningResist: 1,
			spiritResist: 1
		},
		{
			name: 'Stone Fist',
			attack: 126,
			defense: 171,
			skill: 96,
			health: 498,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 32,
			diseaseResist: 2,
			freezeResist: 32,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Therand Fiddlestrom',
			attack: 145,
			defense: 140,
			skill: 132,
			health: 360,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 32,
			diseaseResist: 2,
			freezeResist: 32,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Yasmin Bloom',
			attack: 121,
			defense: 90,
			skill: 140,
			health: 360,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 32,
			diseaseResist: 2,
			freezeResist: 32,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Yokozuna',
			attack: 124,
			defense: 132,
			skill: 120,
			health: 548,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Balog the Barbarian',
			attack: 124,
			defense: 121,
			skill: 90,
			health: 461,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Dagrund Blacksmoke',
			attack: 145,
			defense: 126,
			skill: 144,
			health: 396,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 32,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Ella Ametryst',
			attack: 162,
			defense: 120,
			skill: 144,
			health: 342,
			critChance: 6,
			critMultiplier: 2.5,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 32,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Kobal the Pestilent',
			attack: 163,
			defense: 114,
			skill: 138,
			health: 342,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 32,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Life Reaper Brom',
			attack: 181,
			defense: 138,
			skill: 108,
			health: 374,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 32,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Overlord Executum',
			attack: 156,
			defense: 180,
			skill: 102,
			health: 415,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 32,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Pontifex Mortis',
			attack: 178,
			defense: 145,
			skill: 169,
			health: 429,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Shadowblade',
			attack: 151,
			defense: 120,
			skill: 144,
			health: 343,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 19,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 32,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Alexandros',
			attack: 129,
			defense: 176,
			skill: 122,
			health: 399,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 32,
			spiritResist: 2
		},
		{
			name: 'Archangle Emily',
			attack: 157,
			defense: 169,
			skill: 123,
			health: 409,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 32,
			spiritResist: 2
		},
		{
			name: 'Black Diamond',
			attack: 158,
			defense: 121,
			skill: 169,
			health: 274,
			critChance: 6,
			critMultiplier: 2.5,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 32,
			spiritResist: 2
		},
		{
			name: 'Dhaegon Stonecrusher',
			attack: 136,
			defense: 137,
			skill: 109,
			health: 363,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Ekko',
			attack: 157,
			defense: 125,
			skill: 149,
			health: 324,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 100,
			spiritResist: 100
		},
		{
			name: 'Masuta Kira',
			attack: 0,
			defense: 0,
			skill: 0,
			health: 0,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 2,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		},
		{
			name: 'Sifu Jianzhi',
			attack: 158,
			defense: 120,
			skill: 138,
			health: 359,
			critChance: 6,
			critMultiplier: 2,
			hitChance: 100,
			dodgeChance: 0,
			poisonResist: 19,
			fireResist: 2,
			coldResist: 2,
			diseaseResist: 2,
			freezeResist: 2,
			lightningResist: 2,
			spiritResist: 2
		}])
		.then(function (resp) {
			console.log('Done creating Db');
			return res.ok();
		})
		.catch(function (error) {
			console.log('Failed creating Db');
			return res.serverError(error);
		})
	}

};
