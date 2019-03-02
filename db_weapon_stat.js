function get_weapon_stat(weapon_name_param, code_param) {
	var weapon_name = weapon_name_param;
	var base_dps = 0;
	var critical_hit_dps = 0;
	var base_dph = 0;
	var critical_hit_dph = 0;

	switch (weapon_name) {
		case 'fist':
			weapon_name = 'Fist';
			base_dps = 1;
			critical_hit_dps = 2;
			base_dph = 0.67;
			critical_hit_dph = 3.33;
			break;
		case 'firepoker':
			weapon_name = 'Fire Poker';
			base_dps = 2.8;
			critical_hit_dps = 11.76;
			base_dph = 2.8;
			critical_hit_dph = 14;
			break;
		case 'baseballbat':
			weapon_name = 'Baseball Bat';
			base_dps = 2.8;
			critical_hit_dps = 11.76;
			base_dph = 2.8;
			critical_hit_dph = 14;
			break;
		case 'penknife':
			weapon_name = 'Pen Knife';
			base_dps = 3.3;
			critical_hit_dps = 13.86;
			base_dph = 2.2;
			critical_hit_dph = 11;
			break;
		case 'huntingknife':
			weapon_name = 'Hunting Knife';
			base_dps = 3.3;
			critical_hit_dps = 13.86;
			base_dph = 2.2;
			critical_hit_dph = 11;
			break;
		case 'chefknife':
			weapon_name = 'Chef Knife';
			base_dps = 4.2;
			critical_hit_dps = 17.64;
			base_dph = 2.8;
			critical_hit_dph = 14;
			break;
		case 'cricketbat':
			weapon_name = 'Cricket Bat';
			base_dps = 4;
			critical_hit_dps = 16.8;
			base_dph = 4;
			critical_hit_dph = 20;
			break;
		case 'golfclub':
			weapon_name = 'Golf Club';
			base_dps = 5.8;
			critical_hit_dps = 24.36;
			base_dph = 5.8;
			critical_hit_dph = 29;
			break;
		case 'fireaxe':
			weapon_name = 'Fire Axe';
			base_dps = 5.8;
			critical_hit_dps = 24.36;
			base_dph = 5.8;
			critical_hit_dph = 29;
			break;
		case 'combatknife':
			weapon_name = 'Combat Knife';
			base_dps = 5.1;
			critical_hit_dps = 21.42;
			base_dph = 3.4;
			critical_hit_dph = 17;
			break;
		case 'bowieknife':
			weapon_name = 'Bowie Knife';
			base_dps = 6.9;
			critical_hit_dps = 28.98;
			base_dph = 4.6;
			critical_hit_dph = 23;
			break;
		case 'ironpipe':
			weapon_name = 'Iron Pipe';
			base_dps = 7;
			critical_hit_dps = 29.4;
			base_dph = 7;
			critical_hit_dph = 35;
			break;
		case 'nailbat':
			weapon_name = 'Nail Bat';
			base_dps = 6.4;
			critical_hit_dps = 26.88;
			base_dph = 6.4;
			critical_hit_dph = 32;
			break;
		case 'razor':
			weapon_name = 'Razor';
			base_dps = 7.53;
			critical_hit_dps = 31.63;
			base_dph = 5.02;
			critical_hit_dph = 25.1;
			break;
		case 'crowbar':
			weapon_name = 'Crowbar';
			base_dps = 8.2;
			critical_hit_dps = 34.44;
			base_dph = 8.2;
			critical_hit_dph = 41;
			break;
		case 'scalpel':
			weapon_name = 'Scalpel';
			base_dps = 8.7;
			critical_hit_dps = 36.54;
			base_dph = 5.8;
			critical_hit_dph = 29;
			break;
		case 'kris':
			weapon_name = 'Kris';
			base_dps = 10.5;
			critical_hit_dps = 44.1;
			base_dph = 7;
			critical_hit_dph = 35;
			break;
		case 'shovel':
			weapon_name = 'Shovel';
			base_dps = 10.6;
			critical_hit_dps = 44.52;
			base_dph = 10.6;
			critical_hit_dph = 53;
			break;
		case 'trenchknife':
			weapon_name = 'Trench Knife';
			base_dps = 12.3;
			critical_hit_dps = 51.66;
			base_dph = 8.2;
			critical_hit_dph = 41;
			break;
		case 'woodaxe':
			weapon_name = 'Wood Axe';
			base_dps = 13;
			critical_hit_dps = 54.6;
			base_dph = 13;
			critical_hit_dph = 65;
			break;
		case 'machete':
			weapon_name = 'Machete';
			base_dps = 13;
			critical_hit_dps = 54.6;
			base_dph = 13;
			critical_hit_dph = 65;
			break;
		case 'kukri':
			weapon_name = 'Kukri';
			base_dps = 14.1;
			critical_hit_dps = 59.22;
			base_dph = 9.4;
			critical_hit_dph = 47;
			break;
		case 'sabre':
			weapon_name = 'Sabre';
			base_dps = 15.4;
			critical_hit_dps = 64.68;
			base_dph = 15.4;
			critical_hit_dph = 77;
			break;
		case 'sledgehammer':
			weapon_name = 'Sledge Hammer';
			base_dps = 15.4;
			critical_hit_dps = 64.68;
			base_dph = 15.4;
			critical_hit_dph = 77;
			break;
		case 'battleaxe':
			weapon_name = 'Battle Axe';
			base_dps = 17.2;
			critical_hit_dps = 72.24;
			base_dph = 17.2;
			critical_hit_dph = 86;
			break;
		case 'katana':
			weapon_name = 'Katana';
			base_dps = 17.2;
			critical_hit_dps = 72.24;
			base_dph = 17.2;
			critical_hit_dph = 86;
			break;
		case 'amputator':
			weapon_name = 'Amputator';
			base_dps = 19;
			critical_hit_dps = 79.8;
			base_dph = 19;
			critical_hit_dph = 95;
			break;
		case 'doomcane':
			weapon_name = 'Doom Cane';
			base_dps = 20.2;
			critical_hit_dps = 84.84;
			base_dph = 20.2;
			critical_hit_dph = 101;
			break;
		case 'wakizashi':
			weapon_name = 'Wakizashi';
			base_dps = 20.4;
			critical_hit_dps = 85.68;
			base_dph = 13.6;
			critical_hit_dph = 68;
			break;
		case 'titaniumblades':
			weapon_name = 'Titanium Blades';
			base_dps = 21.2;
			critical_hit_dps = 89.04;
			base_dph = 10.6;
			critical_hit_dph = 53;
			break;
		case 'nodachi':
			weapon_name = 'Nodachi';
			base_dps = 21.4;
			critical_hit_dps = 89.88;
			base_dph = 21.4;
			critical_hit_dph = 107;
			break;
		case 'duskkris':
			weapon_name = 'Dusk Kris';
			base_dps = 30.3;
			critical_hit_dps = 127.26;
			base_dph = 20.2;
			critical_hit_dph = 101;
			break;
		case 'duskrazor':
			weapon_name = 'Dusk Razor';
			base_dps = 29.8;
			critical_hit_dps = 125.16;
			base_dph = 29.8;
			critical_hit_dph = 149;
			break;
		case 'corpsecrusher':
			weapon_name = 'Corpse Crusher';
			base_dps = 25.6;
			critical_hit_dps = 107.52;
			base_dph = 25.6;
			critical_hit_dph = 128;
			break;
		case 'spiker':
			weapon_name = 'Spiker';
			base_dps = 27.4;
			critical_hit_dps = 115.08;
			base_dph = 27.4;
			critical_hit_dph = 137;
			break;
		case 'sharktail':
			weapon_name = 'Sharktail';
			base_dps = 31;
			critical_hit_dps = 130.2;
			base_dph = 31;
			critical_hit_dph = 155;
			break;
		case 'dualblade':
			weapon_name = 'Dual Blade';
			base_dps = 33.4;
			critical_hit_dps = 140.28;
			base_dph = 33.4;
			critical_hit_dph = 167;
			break;
		case 'xduskkris':
			weapon_name = 'X-Dusk Kris';
			base_dps = 35.7;
			critical_hit_dps = 149.94;
			base_dph = 23.8;
			critical_hit_dph = 119;
			break;
		case 'xduskrazor':
			weapon_name = 'X-Dusk Razor';
			base_dps = 41.8;
			critical_hit_dps = 175.56;
			base_dph = 41.8;
			critical_hit_dph = 209;
			break;
		case 'gutsplitter':
			weapon_name = 'Gut Splitter';
			base_dps = 42;
			critical_hit_dps = 176.4;
			base_dph = 28;
			critical_hit_dph = 140;
			break;
		case 'dilmarps':
			weapon_name = 'Dilmar PS';
			base_dps = 7.5;
			critical_hit_dps = 31.5;
			base_dph = 0.88;
			critical_hit_dph = 4.38;
			break;
		case 'ronanpro':
			weapon_name = 'Ronan Pro';
			base_dps = 12.86;
			critical_hit_dps = 54;
			base_dph = 1.75;
			critical_hit_dph = 8.75;
			break;
		case 'steelms800':
			weapon_name = 'Steel MS800';
			base_dps = 17.14;
			critical_hit_dps = 72;
			base_dph = 2.6;
			critical_hit_dph = 13;
			break;
		case 'grinder':
			weapon_name = 'Grinder';
			base_dps = 25.71;
			critical_hit_dps = 108;
			base_dph = 4.2;
			critical_hit_dph = 21;
			break;
		case 'steel090':
			weapon_name = 'Steel 090';
			base_dps = 34.29;
			critical_hit_dps = 144;
			base_dph = 5.9;
			critical_hit_dph = 29.5;
			break;
		case 'corpsegrinder':
			weapon_name = 'Corpse Grinder';
			base_dps = 51.43;
			critical_hit_dps = 216;
			base_dph = 6.65;
			critical_hit_dph = 33.26;
			break;
		case 'dusksaw':
			weapon_name = 'Dusk Saw';
			base_dps = 51.43;
			critical_hit_dps = 216;
			base_dph = 7.5;
			critical_hit_dph = 37.51;
			break;
		case 'ripsawg12':
			weapon_name = 'Ripsaw G12';
			base_dps = 51.43;
			critical_hit_dps = 216;
			base_dph = 7;
			critical_hit_dph = 35.01;
			break;
		case 'buzzbladern8':
			weapon_name = 'Buzzblade RN8';
			base_dps = 60;
			critical_hit_dps = 252;
			base_dph = 1;
			critical_hit_dph = 2;
			break;
		case 'goretooth44g':
			weapon_name = 'Goretooth 44g';
			base_dps = 68.57;
			critical_hit_dps = 288;
			base_dph = 1;
			critical_hit_dph = 2;
			break;
		case 'xdusksaw':
			weapon_name = 'X-Dusk Saw';
			base_dps = 77.14;
			critical_hit_dps = 324;
			base_dph = 13.5;
			critical_hit_dph = 67.51;
			break;
		case 'grinderx3':
			weapon_name = 'Grinder X3';
			base_dps = 77.14;
			critical_hit_dps = 324;
			base_dph = 13.5;
			critical_hit_dph = 67.51;
			break;

		case 'betatomcat':
			weapon_name = 'Beta Tomcat';
			base_dps = 6.05;
			critical_hit_dps = 25.41;
			base_dph = 3.03;
			critical_hit_dph = 15.13;
			break;
		case 'williamsppk':
			weapon_name = 'Wiliams PPK';
			base_dps = 6.05;
			critical_hit_dps = 25.41;
			base_dph = 3.03;
			critical_hit_dph = 15.13;
			break;
		case 'gerringhp':
			weapon_name = 'Gerring HP';
			base_dps = 6.05;
			critical_hit_dps = 25.41;
			base_dph = 3.03;
			critical_hit_dph = 15.13;
			break;
		case 'fiftyseven':
			weapon_name = 'Fifty-Seven';
			base_dps = 6.05;
			critical_hit_dps = 25.41;
			base_dph = 3.03;
			critical_hit_dph = 15.13;
			break;
		case 'lock19':
			weapon_name = 'lock 19';
			base_dps = 7.4;
			critical_hit_dps = 31.08;
			base_dph = 3.7;
			critical_hit_dph = 18.5;
			break;
		case 'koltpython':
			weapon_name = 'Kolt Python';
			base_dps = 8.25;
			critical_hit_dps = 34.65;
			base_dph = 3.03;
			critical_hit_dph = 15.13;
			break;

		case 'beta8000':
			weapon_name = 'Beta 8000';
			base_dps = 10.1;
			critical_hit_dps = 42.42;
			base_dph = 5.05;
			critical_hit_dph = 25.25;
			break;
		case 'ck75':
			weapon_name = 'CK 75';
			base_dps = 7.4;
			critical_hit_dps = 31.08;
			base_dph = 3.7;
			critical_hit_dph = 18.5;
			break;
		case 'luger':
			weapon_name = 'Luger';
			base_dps = 7.4;
			critical_hit_dps = 31.08;
			base_dph = 3.7;
			critical_hit_dph = 18.5;
			break;
		case 'lock17':
			weapon_name = 'Lock 17';
			base_dps = 7.4;
			critical_hit_dps = 31.08;
			base_dph = 3.7;
			critical_hit_dph = 18.5;
			break;
		case 'lock25':
			weapon_name = 'Lock 25';
			base_dps = 12.8;
			critical_hit_dps = 53.76;
			base_dph = 6.4;
			critical_hit_dph = 32;
			break;

		case 'webster1942':
			weapon_name = 'Webster 1942';
			base_dps = 10.5;
			critical_hit_dps = 44.1;
			base_dph = 7;
			critical_hit_dph = 35;
			break;
		case 'ck99':
			weapon_name = 'CK 99';
			base_dps = 15.5;
			critical_hit_dps = 65.1;
			base_dph = 7.75;
			critical_hit_dph = 38.75;
			break;
		case 'sicapollo':
			weapon_name = 'Sic Apollo';
			base_dps = 15.5;
			critical_hit_dps = 65.1;
			base_dph = 7.75;
			critical_hit_dph = 38.75;
			break;
		case 'usp':
			weapon_name = 'USP';
			base_dps = 15.5;
			critical_hit_dps = 65.1;
			base_dph = 7.75;
			critical_hit_dph = 38.75;
			break;
		case 'koltanaconda':
			weapon_name = 'Kolt Anaconda';
			base_dps = 15;
			critical_hit_dps = 63;
			base_dph = 10;
			critical_hit_dph = 50;
			break;

		case 'ck97b':
			weapon_name = 'CK 97b';
			base_dps = 18.2;
			critical_hit_dps = 76.44;
			base_dph = 9.1;
			critical_hit_dph = 45.5;
			break;

		case 'desertfox':
			weapon_name = 'Desert Fox';
			base_dps = 20.9;
			critical_hit_dps = 87.78;
			base_dph = 10.45;
			critical_hit_dph = 52.25;
			break;
		case 'sw500':
			weapon_name = 'SW 500';
			base_dps = 19.5;
			critical_hit_dps = 81.9;
			base_dph = 13;
			critical_hit_dph = 65;
			break;
		case 'alphabull':
			weapon_name = 'Alpha Bull';
			base_dps = 26.25;
			critical_hit_dps = 110.25;
			base_dph = 17.5;
			critical_hit_dph = 87.5;
			break;
		case '475magnum':
			weapon_name = '475 Magnum';
			base_dps = 31.7;
			critical_hit_dps = 133.14;
			base_dph = 15.85;
			critical_hit_dph = 79.25;
			break;
		case 'corpseshooter':
			weapon_name = 'Corpse Shooter';
			base_dps = 31.88;
			critical_hit_dps = 133.88;
			base_dph = 21.25;
			critical_hit_dph = 106.27;
			break;
		case 'greyhawk55':
			weapon_name = 'Greyhawk 55';
			base_dps = 34.8;
			critical_hit_dps = 146.16;
			base_dph = 23.2;
			critical_hit_dph = 116;
			break;
		case 'vlockxd11':
			weapon_name = 'Vlock XD11';
			base_dps = 36.29;
			critical_hit_dps = 152.42;
			base_dph = 18.15;
			critical_hit_dph = 90.73;
			break;
		case 'duskenforcer':
			weapon_name = 'Dusk Enforcer';
			base_dps = 38;
			critical_hit_dps = 159.6;
			base_dph = 19;
			critical_hit_dph = 95;
			break;
		case 'doubleshot':
			weapon_name = 'Doubleshot AAX';
			base_dps = 40.88;
			critical_hit_dps = 171.68;
			base_dph = 27.25;
			critical_hit_dph = 136.27;
			break;
		case 'xduskenforcer':
			weapon_name = 'X-Dusk Enforcer';
			base_dps = 59;
			critical_hit_dps = 247.8;
			base_dph = 1;
			critical_hit_dph = 2;
			break;
		case 'desertrat':
			weapon_name = 'Desert Rat';
			base_dps = 61.4;
			critical_hit_dps = 257.88;
			base_dph = 30.7;
			critical_hit_dph = 153.5;
			break;

		case 'betarx4':
			weapon_name = 'Beta RX4';
			base_dps = 11;
			critical_hit_dps = 46.2;
			base_dph = 11;
			critical_hit_dph = 55;
			break;
		case 'mini41':
			weapon_name = 'Mini-41';
			base_dps = 11;
			critical_hit_dps = 46.2;
			base_dph = 11;
			critical_hit_dph = 55;
			break;
		case 'sl8':
			weapon_name = 'SL8';
			base_dps = 13;
			critical_hit_dps = 54.6;
			base_dph = 13;
			critical_hit_dph = 65;
			break;
		case 'm24':
			weapon_name = 'M24';
			base_dps = 15;
			critical_hit_dps = 63;
			base_dph = 15;
			critical_hit_dph = 75;
			break;
		case 'm1garand':
			weapon_name = 'M1 Garand';
			base_dps = 17;
			critical_hit_dps = 71.4;
			base_dph = 17;
			critical_hit_dph = 85;
			break;
		case 'chesterfield':
			weapon_name = 'Chesterfield';
			base_dps = 17;
			critical_hit_dps = 71.4;
			base_dph = 17;
			critical_hit_dph = 85;
			break;
		case 'm21':
			weapon_name = 'M21';
			base_dps = 17;
			critical_hit_dps = 71.4;
			base_dph = 17;
			critical_hit_dph = 85;
			break;
		case 'glacialwarfare':
			weapon_name = 'Glacial Warfare';
			base_dps = 17;
			critical_hit_dps = 71.4;
			base_dph = 17;
			critical_hit_dph = 85;
			break;

		case 'msg9':
			weapon_name = 'MSG-9';
			base_dps = 17;
			critical_hit_dps = 71.4;
			base_dph = 17;
			critical_hit_dph = 85;
			break;
		case 'sic550':
			weapon_name = 'SIC 550';
			base_dps = 19.5;
			critical_hit_dps = 81.9;
			base_dph = 13;
			critical_hit_dph = 65;
			break;

		case 'hawkop96':
			weapon_name = 'Hawk OP96';
			base_dps = 21;
			critical_hit_dps = 88.2;
			base_dph = 21;
			critical_hit_dph = 105;
			break;
		case 'm82a2':
			weapon_name = 'M82A2';
			base_dps = 21;
			critical_hit_dps = 88.2;
			base_dph = 21;
			critical_hit_dph = 105;
			break;

		case 'dragonsvd':
			weapon_name = 'Dragon SVD';
			base_dps = 22.5;
			critical_hit_dps = 94.5;
			base_dph = 15;
			critical_hit_dph = 75;
			break;
		case 'vssvintorez':
			weapon_name = 'VSS Vintorez';
			base_dps = 25.5;
			critical_hit_dps = 107.1;
			base_dph = 17;
			critical_hit_dph = 85;
			break;
		case 'rebellion':
			weapon_name = 'Rebellion';
			base_dps = 27;
			critical_hit_dps = 113.4;
			base_dph = 18;
			critical_hit_dph = 90;
			break;
		case '577rex':
			weapon_name = '577 Rex';
			base_dps = 29;
			critical_hit_dps = 121.8;
			base_dph = 29;
			critical_hit_dph = 145;
			break;
		case 'corpsepiercer':
			weapon_name = 'Corpse Piercer';
			base_dps = 32;
			critical_hit_dps = 134.4;
			base_dph = 32;
			critical_hit_dph = 160;
			break;
		case 'duskcarbine':
			weapon_name = 'Dusk Carbine';
			base_dps = 34.5;
			critical_hit_dps = 144.9;
			base_dph = 23;
			critical_hit_dph = 115;
			break;
		case 'ironsight33f':
			weapon_name = 'Ironsight33-f';
			base_dps = 35;
			critical_hit_dps = 147;
			base_dph = 35;
			critical_hit_dph = 175;
			break;
		case 'marksmang8':
			weapon_name = 'Marksman G8';
			base_dps = 39;
			critical_hit_dps = 163.8;
			base_dph = 26;
			critical_hit_dph = 130;
			break;
		case 'worgcarbine':
			weapon_name = 'Worg Carbine';
			base_dps = 48;
			critical_hit_dps = 201.6;
			base_dph = 24;
			critical_hit_dph = 120;
			break;
		case 'xduskcarbine':
			weapon_name = 'X-Dusk Carbine';
			base_dps = 70.5;
			critical_hit_dps = 296.1;
			base_dph = 47;
			critical_hit_dph = 235;
			break;
		case 'longshotpp10':
			weapon_name = 'Longshot PP10';
			base_dps = 77;
			critical_hit_dps = 323.4;
			base_dph = 77;
			critical_hit_dph = 385;
			break;
		case 'mancinim1':
			weapon_name = 'Mancini M1';
			base_dps = 17.2;
			critical_hit_dps = 17.2;
			base_dph = 17.2;
			critical_hit_dph = 17.2;
			break;
		case 'highlander':
			weapon_name = 'Highlander';
			base_dps = 26.4;
			critical_hit_dps = 26.4;
			base_dph = 26.4;
			critical_hit_dph = 26.4;
			break;
		case 'washington870':
			weapon_name = 'Washington 870';
			base_dps = 39.6;
			critical_hit_dps = 39.6;
			base_dph = 26.4;
			critical_hit_dph = 26.4;
			break;
		case 'sega20':
			weapon_name = 'Sega-20';
			base_dps = 43;
			critical_hit_dps = 43;
			base_dph = 21.5;
			critical_hit_dph = 21.5;
			break;
		case 'chester1300':
			weapon_name = 'Chester 1300';
			base_dps = 53.4;
			critical_hit_dps = 53.4;
			base_dph = 35.6;
			critical_hit_dph = 35.6;
			break;
		case 'washington1100':
			weapon_name = 'Washington 1100';
			base_dps = 53.4;
			critical_hit_dps = 53.4;
			base_dph = 35.6;
			critical_hit_dph = 35.6;
			break;
		case 'wall500':
			weapon_name = 'Wall 500';
			base_dps = 53.4;
			critical_hit_dps = 53.4;
			base_dph = 35.6;
			critical_hit_dph = 35.6;
			break;
		case 'spsa12':
			weapon_name = 'SPSA 12';
			base_dps = 53.4;
			critical_hit_dps = 53.4;
			base_dph = 35.6;
			critical_hit_dph = 35.6;
			break;
		case 'mannberg500':
			weapon_name = 'Mannberg 500';
			base_dps = 60.08;
			critical_hit_dps = 60.08;
			base_dph = 40.05;
			critical_hit_dph = 40.05;
			break;
		case 'sweeper':
			weapon_name = 'Sweeper';
			base_dps = 80.1;
			critical_hit_dps = 80.1;
			base_dph = 40.05;
			critical_hit_dph = 40.05;
			break;
		case 'usan12':
			weapon_name = 'USAN-12';
			base_dps = 106.8;
			critical_hit_dps = 106.8;
			base_dph = 35.6;
			critical_hit_dph = 35.6;
			break;
		case 'corpseblaster':
			weapon_name = 'Corpse Blaster';
			base_dps = 100.8;
			critical_hit_dps = 100.8;
			base_dph = 67.2;
			critical_hit_dph = 67.2;
			break;
		case 'aa12':
			weapon_name = 'AA-12';
			base_dps = 126.95;
			critical_hit_dps = 126.95;
			base_dph = 42.32;
			critical_hit_dph = 42.32;
			break;
		case 'painshot10':
			weapon_name = 'Painshot 10';
			base_dps = 121.5;
			critical_hit_dps = 121.5;
			base_dph = 81;
			critical_hit_dph = 81;
			break;
		case 'biforcec7':
			weapon_name = 'Biforce C7';
			base_dps = 139.92;
			critical_hit_dps = 139.92;
			base_dph = 69.96;
			critical_hit_dph = 69.96;
			break;
		case 'duskstriker':
			weapon_name = 'Dusk Striker';
			base_dps = 148.2;
			critical_hit_dps = 148.2;
			base_dph = 49.4;
			critical_hit_dph = 49.4;
			break;
		case 'acebarrelgz3':
			weapon_name = 'Ace Barrel GZ3';
			base_dps = 162.9;
			critical_hit_dps = 162.9;
			base_dph = 108.6;
			critical_hit_dph = 108.6;
			break;
		case 'xduskstriker':
			weapon_name = 'X-Dusk Striker';
			base_dps = 217.2;
			critical_hit_dps = 217.2;
			base_dph = 72.4;
			critical_hit_dph = 72.4;
			break;
		case 'buckblast99a':
			weapon_name = 'Buckblast 99A';
			base_dps = 243;
			critical_hit_dps = 243;
			base_dph = 81;
			critical_hit_dph = 81;
			break;
		case 'skorpion':
			weapon_name = 'Skorpion';
			base_dps = 24;
			critical_hit_dps = 24;
			base_dph = 2.8;
			critical_hit_dph = 14;
			break;
		case 'uzi':
			weapon_name = 'UZI';
			base_dps = 24;
			critical_hit_dps = 45.6;
			base_dph = 2.8;
			critical_hit_dph = 14;
			break;
		case 'fmp90':
			weapon_name = 'FM P90';
			base_dps = 24;
			critical_hit_dps = 45.6;
			base_dph = 2.8;
			critical_hit_dph = 14;
			break;
		case 'mp5':
			weapon_name = 'MP5';
			base_dps = 34.29;
			critical_hit_dps = 65.14;
			base_dph = 4;
			critical_hit_dph = 20.01;
			break;
		case 'pp90':
			weapon_name = 'PP90';
			base_dps = 34.29;
			critical_hit_dps = 65.14;
			base_dph = 4;
			critical_hit_dph = 20.01;
			break;
		case 'grammm11':
			weapon_name = 'Gramm M11';
			base_dps = 44.57;
			critical_hit_dps = 84.69;
			base_dph = 5.2;
			critical_hit_dph = 26;
			break;
		case 'ump':
			weapon_name = 'UMP';
			base_dps = 60;
			critical_hit_dps = 114;
			base_dph = 7;
			critical_hit_dph = 35.01;
			break;
		case 'chicagotypewriter':
			weapon_name = 'Chicago Typewriter';
			base_dps = 70.29;
			critical_hit_dps = 133.54;
			base_dph = 8.2;
			critical_hit_dph = 41.01;
			break;
		case 'k50m':
			weapon_name = 'K-50M';
			base_dps = 78.51;
			critical_hit_dps = 149.18;
			base_dph = 9.16;
			critical_hit_dph = 45.81;
			break;
		case 'crissvictor':
			weapon_name = 'Criss Victor';
			base_dps = 83.66;
			critical_hit_dps = 158.95;
			base_dph = 9.76;
			critical_hit_dph = 48.81;
			break;
		case 'corpseripper':
			weapon_name = 'Corpse Ripper';
			base_dps = 101.14;
			critical_hit_dps = 192.17;
			base_dph = 11.8;
			critical_hit_dph = 59.01;
			break;
		case 'dusksmg':
			weapon_name = 'Dusk SMG';
			base_dps = 109.37;
			critical_hit_dps = 207.81;
			base_dph = 12.76;
			critical_hit_dph = 63.81;
			break;
		case 'uziel14mm':
			weapon_name = 'Uziel 14MM';
			base_dps = 111.43;
			critical_hit_dps = 211.71;
			base_dph = 13;
			critical_hit_dph = 65.01;
			break;
		case 'handshocka8':
			weapon_name = 'Handshock A8';
			base_dps = 121.71;
			critical_hit_dps = 231.26;
			base_dph = 14.2;
			critical_hit_dph = 71.01;
			break;
		case 'streetdog99':
			weapon_name = 'Street Dog 99';
			base_dps = 144.34;
			critical_hit_dps = 274.25;
			base_dph = 16.48;
			critical_hit_dph = 84.21;
			break;
		case 'xdusksmg':
			weapon_name = 'X-Dusk SMG';
			base_dps = 173.14;
			critical_hit_dps = 328.97;
			base_dph = 20.2;
			critical_hit_dph = 101.02;
			break;
		case 'ninecutterx':
			weapon_name = 'Nine Cutter X';
			base_dps = 173.14;
			critical_hit_dps = 328.97;
			base_dph = 20.2;
			critical_hit_dph = 101.02;
			break;
		case 'm16':
			weapon_name = 'M16';
			base_dps = 90.86;
			critical_hit_dps = 107.21;
			base_dph = 10.6;
			critical_hit_dph = 53.01;
			break;
		case 'fmfnc':
			weapon_name = 'FM FNC';
			base_dps = 90.86;
			critical_hit_dps = 107.21;
			base_dph = 10.6;
			critical_hit_dph = 53.01;
			break;
		case 'sa80':
			weapon_name = 'SA 80';
			base_dps = 90.86;
			critical_hit_dps = 107.21;
			base_dph = 10.6;
			critical_hit_dph = 53.01;
			break;
		case 'mesaacr':
			weapon_name = 'Mesa ACR';
			base_dps = 90.86;
			critical_hit_dps = 107.21;
			base_dph = 10.6;
			critical_hit_dph = 53.01;
			break;
		case 'xm8':
			weapon_name = 'XM8';
			base_dps = 90.86;
			critical_hit_dps = 107.21;
			base_dph = 10.6;
			critical_hit_dph = 53.01;
			break;
		case 'stellaug':
			weapon_name = 'Stell AUG';
			base_dps = 90.86;
			critical_hit_dps = 107.21;
			base_dph = 10.6;
			critical_hit_dph = 53.01;
			break;
		case 'fmfal':
			weapon_name = 'FM FAL';
			base_dps = 101.14;
			critical_hit_dps = 119.35;
			base_dph = 11.8;
			critical_hit_dph = 59.01;
			break;
		case 'ak47':
			weapon_name = 'AK 47';
			base_dps = 111.43;
			critical_hit_dps = 131.49;
			base_dph = 13;
			critical_hit_dph = 65.01;
			break;
		case 'fmmitrail':
			weapon_name = 'FM Mitrail';
			base_dps = 151.2;
			critical_hit_dps = 178.42;
			base_dph = 1;
			critical_hit_dph = 2;
			break;
		case 'm4':
			weapon_name = 'M4';
			base_dps = 132;
			critical_hit_dps = 155.76;
			base_dph = 15.4;
			critical_hit_dph = 77.01;
			break;
		case 'hammerhead47':
			weapon_name = 'Hammerhead 47';
			base_dps = 245.14;
			critical_hit_dps = 289.27;
			base_dph = 28.6;
			critical_hit_dph = 143.02;
			break;

		case 'fmmag':
			weapon_name = 'FM MAG';
			base_dps = 186;
			critical_hit_dps = 219.48;
			base_dph = 12.35;
			critical_hit_dph = 61.76;
			break;
		case 'm60':
			weapon_name = 'M60';
			base_dps = 186;
			critical_hit_dps = 219.48;
			base_dph = 15.2;
			critical_hit_dph = 75.98;
			break;
		case 'corpsedestroyer':
			weapon_name = 'Corpse Destroyer';
			base_dps = 273.24;
			critical_hit_dps = 297.84;
			base_dph = 22.32;
			critical_hit_dph = 111.62;
			break;
		case 'duskmag':
			weapon_name = 'Dusk MAG';
			base_dps = 296.33;
			critical_hit_dps = 323;
			base_dph = 24.21;
			critical_hit_dph = 121.05;
			break;
		case 'xduskmag':
			weapon_name = 'X-Dusk MAG';
			base_dps = 402.86;
			critical_hit_dps = 439.11;
			base_dph = 1;
			critical_hit_dph = 2;
			break;
		case 'xlgunner8':
			weapon_name = 'XLGunner-8';
			base_dps = 308.57;
			critical_hit_dps = 364.11;
			base_dph = 25.21;
			critical_hit_dph = 126.05;
			break;
		case 'vulcan':
			weapon_name = 'Vulcan';
			base_dps = 237.55;
			critical_hit_dps = 258.93;
			base_dph = 19.41
			critical_hit_dph = 97.04;
			break;
		case 'scar9000':
			weapon_name = 'SCAR 9000';
			base_dps = 352.96;
			critical_hit_dps = 384.73;
			base_dph = 28.84;
			critical_hit_dph = 144.18;
			break;
		case 'gau19':
			weapon_name = 'GAU-19';
			base_dps = 477.55;
			critical_hit_dps = 520.53;
			base_dph = 39.02;
			critical_hit_dph = 195.08;
			break;
		case 'ugau19':
			weapon_name = 'UGAU-19';
			base_dps = 477.55;
			critical_hit_dps = 520.53;
			base_dph = 39.02;
			critical_hit_dph = 195.08;
			break;
		case 'ugau19v2':
			weapon_name = 'UGAU-19 v2';
			base_dps = 600;
			critical_hit_dps = 654;
			base_dph = 20;
			critical_hit_dph = 100;
			break;
		case 'wraithcannon':
			weapon_name = 'Wraith Cannon';
			base_dps = 661.22;
			critical_hit_dps = 720.73;
			base_dph = 54.02;
			critical_hit_dph = 270.11;
			break;
		case 'unlimitedwraithcannon':
			weapon_name = 'Unlimited Wraith Cannon';
			base_dps = 661.22;
			critical_hit_dps = 720.73;
			base_dph = 54.02;
			critical_hit_dph = 270.11;
			break;
		case 'm79':
			weapon_name = 'M79';
			base_dps = 29;
			critical_hit_dps = 145;
			base_dph = 29;
			critical_hit_dph = 253.75;
			break;
		case 'hk69':
			weapon_name = 'HK 69';
			base_dps = 36;
			critical_hit_dps = 180;
			base_dph = 29;
			critical_hit_dph = 253.75;
			break;
		case 'gm94':
			weapon_name = 'GM 94';
			base_dps = 29;
			critical_hit_dps = 145;
			base_dph = 29;
			critical_hit_dph = 253.75;
			break;
		case 'rg6':
			weapon_name = 'RG6';
			base_dps = 29;
			critical_hit_dps = 145;
			base_dph = 1;
			critical_hit_dph = 2;
			break;
		case 'falconmm1':
			weapon_name = 'Falcon-MM1';
			base_dps = 29;
			critical_hit_dps = 145;
			base_dph = 29;
			critical_hit_dph = 253.75;
			break;
		case 'xm25':
			weapon_name = 'XM25';
			base_dps = 43.5;
			critical_hit_dps = 217.5;
			base_dph = 29;
			critical_hit_dph = 253.75;
			break;
		case 'paw20':
			weapon_name = 'PAW-20';
			base_dps = 52;
			critical_hit_dps = 260;
			base_dph = 26;
			critical_hit_dph = 277.5;
			break;
		case 'corpseerruptor':
			weapon_name = 'Corpse Erruptor';
			base_dps = 56;
			critical_hit_dps = 280;
			base_dph = 28;
			critical_hit_dph = 245;
			break;
		case 'dusklauncher':
			weapon_name = 'Dusk Launcher';
			base_dps = 61.5;
			critical_hit_dps = 307.5;
			base_dph = 41;
			critical_hit_dph = 385.75;
			break;
		case 'immolatorad':
			weapon_name = 'Immolator AD';
			base_dps = 59;
			critical_hit_dps = 295;
			base_dph = 59;
			critical_hit_dph = 516.25;
			break;
		case 'bishopce9':
			weapon_name = 'Bishop CE9';
			base_dps = 66;
			critical_hit_dps = 330;
			base_dph = 44;
			critical_hit_dph = 385;
			break;
		case 'junker6':
			weapon_name = 'Junker 6';
			base_dps = 72;
			critical_hit_dps = 360;
			base_dph = 48;
			critical_hit_dph = 420;
			break;
		case 'boomerpx':
			weapon_name = 'Boomer PX';
			base_dps = 95;
			critical_hit_dps = 475;
			base_dph = 95;
			critical_hit_dph = 831.25;
			break;
		case 'xdusklauncher':
			weapon_name = 'X-Dusk Launcher';
			base_dps = 91.5;
			critical_hit_dps = 457.5;
			base_dph = 61;
			critical_hit_dph = 533.73;
			break;
		case 'banhammer':
			weapon_name = 'Ban Hammer';
			base_dps = 31;
			critical_hit_dps = 130.2;
			base_dph = 31;
			critical_hit_dph = 155;
			break;
		case 'bm59':
			weapon_name = 'BM59';
			base_dps = 101.14;
			critical_hit_dps = 119.35;
			base_dph = 12.7;
			critical_hit_dph = 63.51;
			break;
		case 'gaussrifle':
			weapon_name = 'Gauss Rifle';
			base_dps = 69;
			critical_hit_dps = 289.8;
			base_dph = 23;
			critical_hit_dph = 115;
			break;
		case 'tlimgun':
			weapon_name = 'Tlim Gun';
			base_dps = 391.91;
			critical_hit_dps = 396.62;
			base_dph = 8.88;
			critical_hit_dph = 44.42;
			break;
		case 'dawnrazor':
			weapon_name = 'Dawn Razor';
			base_dps = 3.3;
			critical_hit_dps = 13.86;
			base_dph = 2.2;
			critical_hit_dph = 11;
			break;
		case 'gau19betatomcat':
			weapon_name = 'GAU-19 - Beta Tomcat';
			base_dps = 3.3;
			critical_hit_dps = 13.86;
			base_dph = 2.2;
			critical_hit_dph = 11;
			break;
		case 'patriarchblade':
			weapon_name = 'Patriarch Blade';
			base_dps = 13;
			critical_hit_dps = 54.6;
			base_dph = 13;
			critical_hit_dph = 65;
			break;
		default:
			weapon_name = '';
			base_dps = 0;
			critical_hit_dps = 0;
			base_dph = 0;
			critical_hit_dph = 0;
			break;
	}

	var code = code_param;
	if (code == 'dps') {
		document.getElementById("base_dps").value = base_dps;
		document.getElementById("critical_hit_dps").value = critical_hit_dps;
	} else if (code == 'dph') {
		document.getElementById("enemy_player_weapon_base_dph").value = base_dph;
		document.getElementById("enemy_player_weapon_critical_hit_dph").value = critical_hit_dph;

		document.getElementById("enemy_player_rage_implant").checked = false;
		document.getElementById("enemy_player_rage_implant_slot").value = 0;
		document.getElementById("enemy_player_rage_implant_slot").disabled = true;
		document.getElementById("enemy_player_bonus_damage_rage_implant").value = 0;
		document.getElementById("enemy_player_bonus_damage_rage_implant").disabled = true;

		document.getElementById("enemy_player_violence_implant").checked = false;
		document.getElementById("enemy_player_violence_implant_slot").value = 0;
		document.getElementById("enemy_player_violence_implant_slot").disabled = true;
		document.getElementById("enemy_player_bonus_damage_violence_implant").value = 0;
		document.getElementById("enemy_player_bonus_damage_violence_implant").disabled = true;

		document.getElementById("enemy_player_motl_implant").checked = false;
		document.getElementById("enemy_player_motl_implant_slot").value = 0;
		document.getElementById("enemy_player_motl_implant_slot").disabled = true;
		document.getElementById("enemy_player_bonus_damage_motl_implant").value = 0;
		document.getElementById("enemy_player_bonus_damage_motl_implant").disabled = true;

		document.getElementById("enemy_player_destruction_implant").checked = false;
		document.getElementById("enemy_player_destruction_implant_slot").value = 0;
		document.getElementById("enemy_player_destruction_implant_slot").disabled = true;
		document.getElementById("enemy_player_bonus_damage_destruction_implant").value = 0;
		document.getElementById("enemy_player_bonus_damage_destruction_implant").disabled = true;

		document.getElementById("enemy_player_jackofall_implant").checked = false;
		document.getElementById("enemy_player_jackofall_implant_slot").value = 0;
		document.getElementById("enemy_player_jackofall_implant_slot").disabled = true;
		document.getElementById("enemy_player_bonus_damage_jackofall_implant").value = 0;
		document.getElementById("enemy_player_bonus_damage_jackofall_implant").disabled = true;

		document.getElementById("enemy_player_damage_boost").checked = false;
		document.getElementById("enemy_player_bonus_damage_boost").value = 0;
		document.getElementById("enemy_player_bonus_damage_boost").disabled = true;

		document.getElementById("enemy_player_clan_damage_boost").checked = false;
		document.getElementById("enemy_player_bonus_clan_damage_boost").value = 0;
		document.getElementById("enemy_player_bonus_clan_damage_boost").disabled = true;

		document.getElementById("enemy_player_weekend_event_damage").checked = false;
		document.getElementById("enemy_player_bonus_weekend_event_damage").value = 0;
		document.getElementById("enemy_player_bonus_weekend_event_damage").disabled = true;

		document.getElementById("total_added_enemy_base_dph").value = base_dph;
		document.getElementById("total_added_enemy_critical_hit_dph").value = critical_hit_dph;
	}

}