function get_armor_stat(armor_type_param, player_code_param) {
	var armor_type = armor_type_param;
	var player_code = player_code_param;
	var armor_name;
	var armor_durability;
	var armor_damage_absorption;

	switch (armor_type) {
		case 'sportsarmour':
			armor_name = "Sports Armour";
			armor_durability = 20;
			armor_damage_absorption = 20;
			break;
		case 'zylonvest':
			armor_name = "Zylon Vest";
			armor_durability = 40;
			armor_damage_absorption = 25;
			break;
		case 'kevlarvest':
			armor_name = "Kevlar Vest";
			armor_durability = 60;
			armor_damage_absorption = 30;
			break;
		case 'meshslx':
			armor_name = "Mesh SLX";
			armor_durability = 80;
			armor_damage_absorption = 40;
			break;
		case 'meshrx2':
			armor_name = "Mesh RX-2";
			armor_durability = 100;
			armor_damage_absorption = 45;
			break;
		case 'exterminatormesh':
			armor_name = "Exterminator Mesh";
			armor_durability = 120;
			armor_damage_absorption = 50;
			break;
		case 'exterminatormeshgt':
			armor_name = "Exterminator Mesh GT";
			armor_durability = 140;
			armor_damage_absorption = 55;
			break;
		case 'nomadmesh':
			armor_name = "Nomad Mesh";
			armor_durability = 180;
			armor_damage_absorption = 60;
			break;
		case 'duskmesh':
			armor_name = "Dusk Mesh";
			armor_durability = 200;
			armor_damage_absorption = 60;
			break;
		case 'scavengermesh':
			armor_name = "Scavenger Mesh";
			armor_durability = 210;
			armor_damage_absorption = 65;
			break;
		case 'shinobumesh':
			armor_name = "Shinobu Mesh";
			armor_durability = 260;
			armor_damage_absorption = 70;
			break;
		case 'xdushmesh':
			armor_name = "X Dusk Mesh";
			armor_durability = 300;
			armor_damage_absorption = 85;
			break;
		case 'hazardmesh':
			armor_name = "Hazard Mesh";
			armor_durability = 350;
			armor_damage_absorption = 80;
			break;
		case 'flakjacket':
			armor_name = "Flak Jacket";
			armor_durability = 80;
			armor_damage_absorption = 35;
			break;
		case 'sn42':
			armor_name = "SN-42";
			armor_durability = 100;
			armor_damage_absorption = 50;
			break;
		case 'corpsecarapace':
			armor_name = "Corpse Carapace";
			armor_durability = 400;
			armor_damage_absorption = 50;
			break;
		case 'reactiveslx':
			armor_name = "Reactive SLX";
			armor_durability = 120;
			armor_damage_absorption = 55;
			break;
		case 'reactivext800':
			armor_name = "Reactive XT800";
			armor_durability = 150;
			armor_damage_absorption = 60;
			break;
		case 'exterminatorreactive':
			armor_name = "Exterminator Reactive";
			armor_durability = 180;
			armor_damage_absorption = 70;
			break;
		case 'exterminatorreactivext':
			armor_name = "Exterminator Reactive XT";
			armor_durability = 220;
			armor_damage_absorption = 85;
			break;
		case 'bioreactive':
			armor_name = "Bio Reactive";
			armor_durability = 280;
			armor_damage_absorption = 85;
			break;
		case 'duskreactive':
			armor_name = "Dusk Reactive";
			armor_durability = 300;
			armor_damage_absorption = 90;
			break;
		case 'steelcasereactive':
			armor_name = "Steelcase Reactive";
			armor_durability = 340;
			armor_damage_absorption = 85;
			break;
		case 'tatakaureactive':
			armor_name = "Tatakau Reactive";
			armor_durability = 390;
			armor_damage_absorption = 85;
			break;
		case 'xduskreactive':
			armor_name = "X-Dusk Reactive";
			armor_durability = 280;
			armor_damage_absorption = 85;
			break;
		case 'scarabreactive':
			armor_name = "Scarab Reactive";
			armor_durability = 500;
			armor_damage_absorption = 90;
			break;
		case 'vengeanceguard':
			armor_name = "Vengeance Guard";
			armor_durability = 800;
			armor_damage_absorption = 90;
			break;
		default:
			armor_name = "";
			armor_durability = 0;
			armor_damage_absorption = 0;
			break;
	}

	document.getElementById(player_code + "_armor_durability").value = armor_durability;
	document.getElementById(player_code + "_armor_damage_absorption").value = armor_damage_absorption;

}