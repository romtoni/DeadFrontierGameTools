function get_looting_item_name_boss(gm_state_param, zone_param, loot_spot_param, chance_param) {
	var gm_state = gm_state_param;
	var zone = zone_param;
	var loot_spot = loot_spot_param;
	var chance = chance_param;
	var item_name;
	var item_quantity;
	var item_code = "";
	var dollar_scrap = 0;
	var addedName = "";
	var totalStatArmor = 0;
	var totalStatWeapon = 0;
	var flag_armor = "normal";
	var flag_weapon = "normal";
	var getStatArmorAgility = 0;
	var getStatArmorEndurance = 0;
	var getStatWeaponAccuracy = 0;
	var getStatWeaponCriticalHit = 0;
	var getStatWeaponReloading = 0;
	var multiplier_gm_state = 1;
	var flag_mastercraft = 0;
	var epic_class_name = "";
	var item_id;

	if (gm_state == "Y") {
		switch (zone) {
			case "blue_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 21);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_01", flag_weapon);
						item_code = "weapon";
						item_name = 'Pen Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_02", flag_weapon);
						item_code = "weapon";
						item_name = 'Hunting Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_armor);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_armor);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_armor);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_armor);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_armor);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_armor);
						item_code = "weapon";
						item_name = 'Beta Tomcat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_54", flag_weapon);
						item_code = "weapon";
						item_name = 'Williams PPK';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_55", flag_weapon);
						item_code = "weapon";
						item_name = 'Gerring HP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_56", flag_weapon);
						item_code = "weapon";
						item_name = 'Fifty-Seven';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_81", flag_weapon);
						item_code = "weapon";
						item_name = 'Beta RX4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_82", flag_weapon);
						item_code = "weapon";
						item_name = 'Mini-41';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_83", flag_weapon);
						item_code = "weapon";
						item_name = 'SL8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_104", flag_weapon);
						item_code = "weapon";
						item_name = 'Mancini M1';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_105", flag_weapon);
						item_code = "weapon";
						item_name = 'Highlander';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_123", flag_weapon);
						item_code = "weapon";
						item_name = 'Skorpion';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_161", flag_weapon);
						item_code = "weapon";
						item_name = 'M79';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_weapon);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_weapon);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "green_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 21);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_01", flag_weapon);
						item_code = "weapon";
						item_name = 'Pen Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_02", flag_weapon);
						item_code = "weapon";
						item_name = 'Hunting Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_armor);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_armor);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_armor);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_armor);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_armor);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_armor);
						item_code = "weapon";
						item_name = 'Beta Tomcat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_54", flag_weapon);
						item_code = "weapon";
						item_name = 'Williams PPK';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_55", flag_weapon);
						item_code = "weapon";
						item_name = 'Gerring HP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_56", flag_weapon);
						item_code = "weapon";
						item_name = 'Fifty-Seven';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_81", flag_weapon);
						item_code = "weapon";
						item_name = 'Beta RX4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_82", flag_weapon);
						item_code = "weapon";
						item_name = 'Mini-41';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_83", flag_weapon);
						item_code = "weapon";
						item_name = 'SL8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_104", flag_weapon);
						item_code = "weapon";
						item_name = 'Mancini M1';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_105", flag_weapon);
						item_code = "weapon";
						item_name = 'Highlander';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_123", flag_weapon);
						item_code = "weapon";
						item_name = 'Skorpion';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_161", flag_weapon);
						item_code = "weapon";
						item_name = 'M79';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_weapon);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_weapon);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "yellow_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 22);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_10", flag_weapon);
						item_code = "weapon";
						item_name = 'Bowie Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_11", flag_weapon);
						item_code = "weapon";
						item_name = 'Iron Pipe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_12", flag_weapon);
						item_code = "weapon";
						item_name = 'Nail Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_13", flag_weapon);
						item_code = "weapon";
						item_name = 'Razor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_14", flag_weapon);
						item_code = "weapon";
						item_name = 'Crowbar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_57", flag_weapon);
						item_code = "weapon";
						item_name = 'Kolt Python';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_58", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 19';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_59", flag_weapon);
						item_code = "weapon";
						item_name = 'Beta 8000';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_60", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 75';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_61", flag_weapon);
						item_code = "weapon";
						item_name = 'Luger';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_84", flag_weapon);
						item_code = "weapon";
						item_name = 'M24';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_85", flag_weapon);
						item_code = "weapon";
						item_name = 'M1 Garand';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_106", flag_weapon);
						item_code = "weapon";
						item_name = 'Washington 870';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_107", flag_weapon);
						item_code = "weapon";
						item_name = 'Chester 1300';
						item_quantity = 1;
						cash_quantity = 0;
					}

					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_108", flag_weapon);
						item_code = "weapon";
						item_name = 'Washington 1100';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_109", flag_weapon);
						item_code = "weapon";
						item_name = 'Sega-20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_124", flag_weapon);
						item_code = "weapon";
						item_name = 'UZI';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_125", flag_weapon);
						item_code = "weapon";
						item_name = 'FM P90';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_126", flag_weapon);
						item_code = "weapon";
						item_name = 'MP5';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_127", flag_weapon);
						item_code = "weapon";
						item_name = 'PP90';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("armor_03", flag_armor);
						item_code = "armor";
						item_name = 'Kevlar Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_04", flag_armor);
						item_code = "armor";
						item_name = 'Flak Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("armor_07", flag_armor);
						item_code = "armor";
						item_name = 'SN-42';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "orange_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 25);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_15", flag_weapon);
						item_code = "weapon";
						item_name = 'Scalpel';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_16", flag_weapon);
						item_code = "weapon";
						item_name = 'Kris';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_17", flag_weapon);
						item_code = "weapon";
						item_name = 'Shovel';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_19", flag_weapon);
						item_code = "weapon";
						item_name = 'Trench Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_62", flag_weapon);
						item_code = "weapon";
						item_name = 'Webster 1942';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_63", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 17';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_64", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 25';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_65", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 99';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_66", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC Apollo';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_67", flag_weapon);
						item_code = "weapon";
						item_name = 'USP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_86", flag_weapon);
						item_code = "weapon";
						item_name = 'Glacial Warfare';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_87", flag_weapon);
						item_code = "weapon";
						item_name = 'Chesterfield';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_88", flag_weapon);
						item_code = "weapon";
						item_name = 'M21';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_89", flag_weapon);
						item_code = "weapon";
						item_name = 'MSG-9';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_110", flag_weapon);
						item_code = "weapon";
						item_name = 'WALL 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_111", flag_weapon);
						item_code = "weapon";
						item_name = 'SPSA 12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_112", flag_weapon);
						item_code = "weapon";
						item_name = 'Mannberg 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_128", flag_weapon);
						item_code = "weapon";
						item_name = 'Gramm M11';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_129", flag_weapon);
						item_code = "weapon";
						item_name = 'UMP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_162", flag_weapon);
						item_code = "weapon";
						item_name = 'HK69';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("armor_06", flag_armor);
						item_code = "armor";
						item_name = 'Mesh RX-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "red_zone":
				if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 27);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_41", flag_weapon);
						item_code = "weapon";
						item_name = 'Dilmar PS';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_19", flag_weapon);
						item_code = "weapon";
						item_name = 'Trench Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_42", flag_weapon);
						item_code = "weapon";
						item_name = 'Ronan Pro';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_68", flag_weapon);
						item_code = "weapon";
						item_name = 'Kolt Anaconda';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 25';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_65", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_140", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FNC';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_141", flag_weapon);
						item_code = "weapon";
						item_name = 'M16';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_142", flag_weapon);
						item_code = "weapon";
						item_name = 'Mesa ACR';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_143", flag_weapon);
						item_code = "weapon";
						item_name = 'SA80';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_144", flag_weapon);
						item_code = "weapon";
						item_name = 'Stell AUG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_163", flag_weapon);
						item_code = "weapon";
						item_name = 'GM94';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Mannberg 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_128", flag_weapon);
						item_code = "weapon";
						item_name = 'Gramm M11';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_129", flag_weapon);
						item_code = "weapon";
						item_name = 'UMP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_162", flag_weapon);
						item_code = "weapon";
						item_name = 'HK69';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("armor_06", flag_armor);
						item_code = "armor";
						item_name = 'Mesh RX-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "black_zone":
				if (eval(chance) >= 0 && eval(chance) <= 9990) {
					item_id = Math.floor(Math.random() * 47);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("armor_06", flag_armor);
						item_code = "armor";
						item_name = 'Mesh RX-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("armor_12", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("armor_13", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive XT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("armor_08", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("armor_09", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh GT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_146", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FAL';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_43", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel MS800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_147", flag_weapon);
						item_code = "weapon";
						item_name = 'AK 47';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_91", flag_weapon);
						item_code = "weapon";
						item_name = 'Hawk OP96';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_113", flag_weapon);
						item_code = "weapon";
						item_name = 'Sweeper';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_131", flag_weapon);
						item_code = "weapon";
						item_name = 'K-50M';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("weapon_150", flag_weapon);
						item_code = "weapon";
						item_name = 'FM Mitrail';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("weapon_23", flag_weapon);
						item_code = "weapon";
						item_name = 'Sledge Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("weapon_70", flag_weapon);
						item_code = "weapon";
						item_name = 'Desert Fox';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("weapon_93", flag_weapon);
						item_code = "weapon";
						item_name = 'M82A2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("weapon_92", flag_weapon);
						item_code = "weapon";
						item_name = 'Dragon SVD';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("weapon_165", flag_weapon);
						item_code = "weapon";
						item_name = 'Falcon MM1';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("weapon_71", flag_weapon);
						item_code = "weapon";
						item_name = 'SW 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("weapon_44", flag_weapon);
						item_code = "weapon";
						item_name = 'Grinder';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("weapon_148", flag_weapon);
						item_code = "weapon";
						item_name = 'M4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("weapon_151", flag_weapon);
						item_code = "weapon";
						item_name = 'FM MAG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "35") {
						dollar_scrap = get_dollar_scrap_items("weapon_152", flag_weapon);
						item_code = "weapon";
						item_name = 'M60';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "36") {
						dollar_scrap = get_dollar_scrap_items("weapon_25", flag_weapon);
						item_code = "weapon";
						item_name = 'Battle Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "37") {
						dollar_scrap = get_dollar_scrap_items("weapon_24", flag_weapon);
						item_code = "weapon";
						item_name = 'Katana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "38") {
						dollar_scrap = get_dollar_scrap_items("weapon_72", flag_weapon);
						item_code = "weapon";
						item_name = 'Alpha Bull';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "39") {
						dollar_scrap = get_dollar_scrap_items("weapon_94", flag_weapon);
						item_code = "weapon";
						item_name = 'VSS Vintorez';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "40") {
						dollar_scrap = get_dollar_scrap_items("weapon_114", flag_weapon);
						item_code = "weapon";
						item_name = 'USAN-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "41") {
						dollar_scrap = get_dollar_scrap_items("weapon_166", flag_weapon);
						item_code = "weapon";
						item_name = 'XM25';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "42") {
						dollar_scrap = get_dollar_scrap_items("weapon_133", flag_weapon);
						item_code = "weapon";
						item_name = 'Criss Victor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "43") {
						dollar_scrap = get_dollar_scrap_items("weapon_26", flag_weapon);
						item_code = "weapon";
						item_name = 'Wakizashi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "44") {
						dollar_scrap = get_dollar_scrap_items("weapon_46", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel 090';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "45") {
						dollar_scrap = get_dollar_scrap_items("weapon_27", flag_weapon);
						item_code = "weapon";
						item_name = 'Nodachi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "46") {
						dollar_scrap = get_dollar_scrap_items("weapon_74", flag_weapon);
						item_code = "weapon";
						item_name = '475 Magnum';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "47") {
						dollar_scrap = get_dollar_scrap_items("weapon_96", flag_weapon);
						item_code = "weapon";
						item_name = '577 Rex';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 20);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_172", flag_weapon);
						item_code = "weapon";
						item_name = 'Junker 6';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_17", flag_armor);
						item_code = "armor";
						item_name = 'Bio Reactive';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_24", flag_armor);
						item_code = "armor";
						item_name = 'Tatakau Reactive';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_18", flag_armor);
						item_code = "armor";
						item_name = 'Nomad Mesh';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("armor_20", flag_armor);
						item_code = "armor";
						item_name = 'Shinobu Mesh';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_154", flag_weapon);
						item_code = "weapon";
						item_name = 'Vulcan';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_50", flag_weapon);
						item_code = "weapon";
						item_name = 'Goretooth 44G';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_137", flag_weapon);
						item_code = "weapon";
						item_name = 'Street Dog 99';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_135", flag_weapon);
						item_code = "weapon";
						item_name = 'Uziel 14mm';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_149", flag_weapon);
						item_code = "weapon";
						item_name = 'Hammerhead 47';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_158", flag_weapon);
						item_code = "weapon";
						item_name = 'SCAR 9000';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_35", flag_weapon);
						item_code = "weapon";
						item_name = 'Spiker';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_38", flag_weapon);
						item_code = "weapon";
						item_name = 'Dual Blade';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_76", flag_weapon);
						item_code = "weapon";
						item_name = 'Greyhawk 55';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_78", flag_weapon);
						item_code = "weapon";
						item_name = 'Doubleshot AAX';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_99", flag_weapon);
						item_code = "weapon";
						item_name = 'Ironsight 33F';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_101", flag_weapon);
						item_code = "weapon";
						item_name = 'Worg Carbine';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_118", flag_weapon);
						item_code = "weapon";
						item_name = 'Painshot 10';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_119", flag_weapon);
						item_code = "weapon";
						item_name = 'Ace Barrel GZ3';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_170", flag_weapon);
						item_code = "weapon";
						item_name = 'Immolator';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_45", flag_weapon);
						item_code = "weapon";
						item_name = 'Ripsaw G12';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
				}
				break;

			case "white_zone":
				if (eval(chance) >= 0 && eval(chance) < 7000) {
					item_id = Math.floor(Math.random() * 24);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_71", flag_weapon);
						item_code = "weapon";
						item_name = 'SW 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_146", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FAL';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_43", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel MS800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_147", flag_weapon);
						item_code = "weapon";
						item_name = 'AK 47';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_91", flag_weapon);
						item_code = "weapon";
						item_name = 'Hawk OP96';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_113", flag_weapon);
						item_code = "weapon";
						item_name = 'Sweeper';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_131", flag_weapon);
						item_code = "weapon";
						item_name = 'K-50M';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_150", flag_weapon);
						item_code = "weapon";
						item_name = 'FM Mitrail';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_23", flag_weapon);
						item_code = "weapon";
						item_name = 'Sledge Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_70", flag_weapon);
						item_code = "weapon";
						item_name = 'Desert Fox';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_93", flag_weapon);
						item_code = "weapon";
						item_name = 'M82A2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_92", flag_weapon);
						item_code = "weapon";
						item_name = 'Dragon SVD';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_165", flag_weapon);
						item_code = "weapon";
						item_name = 'Falcon MM1';
						item_quantity = 1;
						cash_quantity = 0;
					}

				} else if (eval(chance) >= 7000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 13);

					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("armor_12", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_13", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive XT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_08", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_09", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh GT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_44", flag_weapon);
						item_code = "weapon";
						item_name = 'Grinder';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_148", flag_weapon);
						item_code = "weapon";
						item_name = 'M4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_151", flag_weapon);
						item_code = "weapon";
						item_name = 'FM MAG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_152", flag_weapon);
						item_code = "weapon";
						item_name = 'M60';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_25", flag_weapon);
						item_code = "weapon";
						item_name = 'Battle Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_24", flag_weapon);
						item_code = "weapon";
						item_name = 'Katana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_72", flag_weapon);
						item_code = "weapon";
						item_name = 'Alpha Bull';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_94", flag_weapon);
						item_code = "weapon";
						item_name = 'VSS Vintorez';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_114", flag_weapon);
						item_code = "weapon";
						item_name = 'USAN-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_166", flag_weapon);
						item_code = "weapon";
						item_name = 'XM25';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 28);

					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_133", flag_weapon);
						item_code = "weapon";
						item_name = 'Criss Victor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_26", flag_weapon);
						item_code = "weapon";
						item_name = 'Wakizashi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_46", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel 090';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_27", flag_weapon);
						item_code = "weapon";
						item_name = 'Nodachi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_74", flag_weapon);
						item_code = "weapon";
						item_name = '475 Magnum';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_96", flag_weapon);
						item_code = "weapon";
						item_name = '577 Rex';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_172", flag_weapon);
						item_code = "";
						item_name = 'Junker 6';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("armor_17", flag_armor);
						item_code = "armor";
						item_name = 'Bio Reactive';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("armor_24", flag_armor);
						item_code = "armor";
						item_name = 'Tatakau Reactive';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("armor_18", flag_armor);
						item_code = "armor";
						item_name = 'Nomad Mesh';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("armor_20", flag_armor);
						item_code = "armor";
						item_name = 'Shinobu Mesh';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_154", flag_weapon);
						item_code = "weapon";
						item_name = 'Vulcan';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_50", flag_weapon);
						item_code = "weapon";
						item_name = 'Goretooth 44G';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_137", flag_weapon);
						item_code = "weapon";
						item_name = 'Street Dog 99';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_135", flag_weapon);
						item_code = "weapon";
						item_name = 'Uziel 14mm';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_149", flag_weapon);
						item_code = "weapon";
						item_name = 'Hammerhead 47';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_158", flag_weapon);
						item_code = "weapon";
						item_name = 'SCAR 9000';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_35", flag_weapon);
						item_code = "weapon";
						item_name = 'Spiker';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_38", flag_weapon);
						item_code = "weapon";
						item_name = 'Dual Blade';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_76", flag_weapon);
						item_code = "weapon";
						item_name = 'Greyhawk 55';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_78", flag_weapon);
						item_code = "weapon";
						item_name = 'Doubleshot AAX';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_99", flag_weapon);
						item_code = "weapon";
						item_name = 'Ironsight 33F';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_101", flag_weapon);
						item_code = "weapon";
						item_name = 'Worg Carbine';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("weapon_118", flag_weapon);
						item_code = "weapon";
						item_name = 'Painshot 10';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("weapon_119", flag_weapon);
						item_code = "weapon";
						item_name = 'Ace Barrel GZ3';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("weapon_170", flag_weapon);
						item_code = "weapon";
						item_name = 'Immolator';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("weapon_45", flag_weapon);
						item_code = "weapon";
						item_name = 'Ripsaw G12';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
				}
				break;

			case "wasteland":
				if (eval(chance) >= 0 && eval(chance) < 7000) {
					item_id = Math.floor(Math.random() * 24);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_71", flag_weapon);
						item_code = "weapon";
						item_name = 'SW 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_146", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FAL';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_43", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel MS800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_147", flag_weapon);
						item_code = "weapon";
						item_name = 'AK 47';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_91", flag_weapon);
						item_code = "weapon";
						item_name = 'Hawk OP96';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_113", flag_weapon);
						item_code = "weapon";
						item_name = 'Sweeper';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_131", flag_weapon);
						item_code = "weapon";
						item_name = 'K-50M';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_150", flag_weapon);
						item_code = "weapon";
						item_name = 'FM Mitrail';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_23", flag_weapon);
						item_code = "weapon";
						item_name = 'Sledge Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_70", flag_weapon);
						item_code = "weapon";
						item_name = 'Desert Fox';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_93", flag_weapon);
						item_code = "weapon";
						item_name = 'M82A2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_92", flag_weapon);
						item_code = "weapon";
						item_name = 'Dragon SVD';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_165", flag_weapon);
						item_code = "weapon";
						item_name = 'Falcon MM1';
						item_quantity = 1;
						cash_quantity = 0;
					}

				} else if (eval(chance) >= 7000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 13);

					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("armor_12", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_13", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive XT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_08", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_09", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh GT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_44", flag_weapon);
						item_code = "weapon";
						item_name = 'Grinder';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_148", flag_weapon);
						item_code = "weapon";
						item_name = 'M4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_151", flag_weapon);
						item_code = "weapon";
						item_name = 'FM MAG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_152", flag_weapon);
						item_code = "weapon";
						item_name = 'M60';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_25", flag_weapon);
						item_code = "weapon";
						item_name = 'Battle Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_24", flag_weapon);
						item_code = "weapon";
						item_name = 'Katana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_72", flag_weapon);
						item_code = "weapon";
						item_name = 'Alpha Bull';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_94", flag_weapon);
						item_code = "weapon";
						item_name = 'VSS Vintorez';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_114", flag_weapon);
						item_code = "weapon";
						item_name = 'USAN-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_166", flag_weapon);
						item_code = "weapon";
						item_name = 'XM25';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 28);

					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_133", flag_weapon);
						item_code = "weapon";
						item_name = 'Criss Victor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_26", flag_weapon);
						item_code = "weapon";
						item_name = 'Wakizashi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_46", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel 090';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_27", flag_weapon);
						item_code = "weapon";
						item_name = 'Nodachi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_74", flag_weapon);
						item_code = "weapon";
						item_name = '475 Magnum';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_96", flag_weapon);
						item_code = "weapon";
						item_name = '577 Rex';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_172", flag_weapon);
						item_code = "";
						item_name = 'Junker 6';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("armor_17", flag_armor);
						item_code = "armor";
						item_name = 'Bio Reactive';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("armor_24", flag_armor);
						item_code = "armor";
						item_name = 'Tatakau Reactive';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("armor_18", flag_armor);
						item_code = "armor";
						item_name = 'Nomad Mesh';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("armor_20", flag_armor);
						item_code = "armor";
						item_name = 'Shinobu Mesh';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_154", flag_weapon);
						item_code = "weapon";
						item_name = 'Vulcan';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_50", flag_weapon);
						item_code = "weapon";
						item_name = 'Goretooth 44G';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_137", flag_weapon);
						item_code = "weapon";
						item_name = 'Street Dog 99';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_135", flag_weapon);
						item_code = "weapon";
						item_name = 'Uziel 14mm';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_149", flag_weapon);
						item_code = "weapon";
						item_name = 'Hammerhead 47';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_158", flag_weapon);
						item_code = "weapon";
						item_name = 'SCAR 9000';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_35", flag_weapon);
						item_code = "weapon";
						item_name = 'Spiker';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_38", flag_weapon);
						item_code = "weapon";
						item_name = 'Dual Blade';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_76", flag_weapon);
						item_code = "weapon";
						item_name = 'Greyhawk 55';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_78", flag_weapon);
						item_code = "weapon";
						item_name = 'Doubleshot AAX';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_99", flag_weapon);
						item_code = "weapon";
						item_name = 'Ironsight 33F';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_101", flag_weapon);
						item_code = "weapon";
						item_name = 'Worg Carbine';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("weapon_118", flag_weapon);
						item_code = "weapon";
						item_name = 'Painshot 10';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("weapon_119", flag_weapon);
						item_code = "weapon";
						item_name = 'Ace Barrel GZ3';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("weapon_170", flag_weapon);
						item_code = "weapon";
						item_name = 'Immolator';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("weapon_45", flag_weapon);
						item_code = "weapon";
						item_name = 'Ripsaw G12';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}

				}
				break;
		}
	} else {
		switch (zone) {
			case "blue_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 21);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_01", flag_weapon);
						item_code = "weapon";
						item_name = 'Pen Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_02", flag_weapon);
						item_code = "weapon";
						item_name = 'Hunting Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_armor);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_armor);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_armor);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_armor);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_armor);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_armor);
						item_code = "weapon";
						item_name = 'Beta Tomcat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_54", flag_weapon);
						item_code = "weapon";
						item_name = 'Williams PPK';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_55", flag_weapon);
						item_code = "weapon";
						item_name = 'Gerring HP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_56", flag_weapon);
						item_code = "weapon";
						item_name = 'Fifty-Seven';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_81", flag_weapon);
						item_code = "weapon";
						item_name = 'Beta RX4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_82", flag_weapon);
						item_code = "weapon";
						item_name = 'Mini-41';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_83", flag_weapon);
						item_code = "weapon";
						item_name = 'SL8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_104", flag_weapon);
						item_code = "weapon";
						item_name = 'Mancini M1';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_105", flag_weapon);
						item_code = "weapon";
						item_name = 'Highlander';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_123", flag_weapon);
						item_code = "weapon";
						item_name = 'Skorpion';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_161", flag_weapon);
						item_code = "weapon";
						item_name = 'M79';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_weapon);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_weapon);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "green_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 21);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_01", flag_weapon);
						item_code = "weapon";
						item_name = 'Pen Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_02", flag_weapon);
						item_code = "weapon";
						item_name = 'Hunting Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_armor);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_armor);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_armor);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_armor);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_armor);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_armor);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_armor);
						item_code = "weapon";
						item_name = 'Beta Tomcat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_54", flag_weapon);
						item_code = "weapon";
						item_name = 'Williams PPK';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_55", flag_weapon);
						item_code = "weapon";
						item_name = 'Gerring HP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_56", flag_weapon);
						item_code = "weapon";
						item_name = 'Fifty-Seven';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_81", flag_weapon);
						item_code = "weapon";
						item_name = 'Beta RX4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_82", flag_weapon);
						item_code = "weapon";
						item_name = 'Mini-41';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_83", flag_weapon);
						item_code = "weapon";
						item_name = 'SL8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_104", flag_weapon);
						item_code = "weapon";
						item_name = 'Mancini M1';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_105", flag_weapon);
						item_code = "weapon";
						item_name = 'Highlander';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_123", flag_weapon);
						item_code = "weapon";
						item_name = 'Skorpion';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_161", flag_weapon);
						item_code = "weapon";
						item_name = 'M79';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_weapon);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_weapon);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "yellow_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 22);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_10", flag_weapon);
						item_code = "weapon";
						item_name = 'Bowie Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_11", flag_weapon);
						item_code = "weapon";
						item_name = 'Iron Pipe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_12", flag_weapon);
						item_code = "weapon";
						item_name = 'Nail Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_13", flag_weapon);
						item_code = "weapon";
						item_name = 'Razor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_14", flag_weapon);
						item_code = "weapon";
						item_name = 'Crowbar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_57", flag_weapon);
						item_code = "weapon";
						item_name = 'Kolt Python';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_58", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 19';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_59", flag_weapon);
						item_code = "weapon";
						item_name = 'Beta 8000';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_60", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 75';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_61", flag_weapon);
						item_code = "weapon";
						item_name = 'Luger';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_84", flag_weapon);
						item_code = "weapon";
						item_name = 'M24';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_85", flag_weapon);
						item_code = "weapon";
						item_name = 'M1 Garand';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_106", flag_weapon);
						item_code = "weapon";
						item_name = 'Washington 870';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_107", flag_weapon);
						item_code = "weapon";
						item_name = 'Chester 1300';
						item_quantity = 1;
						cash_quantity = 0;
					}

					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_108", flag_weapon);
						item_code = "weapon";
						item_name = 'Washington 1100';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_109", flag_weapon);
						item_code = "weapon";
						item_name = 'Sega-20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_124", flag_weapon);
						item_code = "weapon";
						item_name = 'UZI';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_125", flag_weapon);
						item_code = "weapon";
						item_name = 'FM P90';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_126", flag_weapon);
						item_code = "weapon";
						item_name = 'MP5';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_127", flag_weapon);
						item_code = "weapon";
						item_name = 'PP90';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("armor_03", flag_armor);
						item_code = "armor";
						item_name = 'Kevlar Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_04", flag_armor);
						item_code = "armor";
						item_name = 'Flak Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("armor_07", flag_armor);
						item_code = "armor";
						item_name = 'SN-42';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "orange_zone":
				if (eval(chance) >= 0 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 25);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_15", flag_weapon);
						item_code = "weapon";
						item_name = 'Scalpel';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_16", flag_weapon);
						item_code = "weapon";
						item_name = 'Kris';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_17", flag_weapon);
						item_code = "weapon";
						item_name = 'Shovel';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_19", flag_weapon);
						item_code = "weapon";
						item_name = 'Trench Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_62", flag_weapon);
						item_code = "weapon";
						item_name = 'Webster 1942';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_63", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 17';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_64", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 25';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_65", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 99';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_66", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC Apollo';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_67", flag_weapon);
						item_code = "weapon";
						item_name = 'USP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_86", flag_weapon);
						item_code = "weapon";
						item_name = 'Glacial Warfare';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_87", flag_weapon);
						item_code = "weapon";
						item_name = 'Chesterfield';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_88", flag_weapon);
						item_code = "weapon";
						item_name = 'M21';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_89", flag_weapon);
						item_code = "weapon";
						item_name = 'MSG-9';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_110", flag_weapon);
						item_code = "weapon";
						item_name = 'WALL 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_111", flag_weapon);
						item_code = "weapon";
						item_name = 'SPSA 12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_112", flag_weapon);
						item_code = "weapon";
						item_name = 'Mannberg 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_128", flag_weapon);
						item_code = "weapon";
						item_name = 'Gramm M11';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_129", flag_weapon);
						item_code = "weapon";
						item_name = 'UMP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_162", flag_weapon);
						item_code = "weapon";
						item_name = 'HK69';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("armor_06", flag_armor);
						item_code = "armor";
						item_name = 'Mesh RX-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "red_zone":
				if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 27);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_41", flag_weapon);
						item_code = "weapon";
						item_name = 'Dilmar PS';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_19", flag_weapon);
						item_code = "weapon";
						item_name = 'Trench Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_42", flag_weapon);
						item_code = "weapon";
						item_name = 'Ronan Pro';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_68", flag_weapon);
						item_code = "weapon";
						item_name = 'Kolt Anaconda';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'Lock 25';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_65", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_140", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FNC';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_141", flag_weapon);
						item_code = "weapon";
						item_name = 'M16';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_142", flag_weapon);
						item_code = "weapon";
						item_name = 'Mesa ACR';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_143", flag_weapon);
						item_code = "weapon";
						item_name = 'SA80';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_144", flag_weapon);
						item_code = "weapon";
						item_name = 'Stell AUG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_163", flag_weapon);
						item_code = "weapon";
						item_name = 'GM94';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Mannberg 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_128", flag_weapon);
						item_code = "weapon";
						item_name = 'Gramm M11';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_129", flag_weapon);
						item_code = "weapon";
						item_name = 'UMP';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_162", flag_weapon);
						item_code = "weapon";
						item_name = 'HK69';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("armor_06", flag_armor);
						item_code = "armor";
						item_name = 'Mesh RX-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "black_zone":
				if (eval(chance) >= 0 && eval(chance) <= 9990) {
					item_id = Math.floor(Math.random() * 47);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("armor_06", flag_armor);
						item_code = "armor";
						item_name = 'Mesh RX-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("armor_12", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("armor_13", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive XT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("armor_08", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("armor_09", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh GT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_146", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FAL';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_43", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel MS800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_147", flag_weapon);
						item_code = "weapon";
						item_name = 'AK 47';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_91", flag_weapon);
						item_code = "weapon";
						item_name = 'Hawk OP96';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_113", flag_weapon);
						item_code = "weapon";
						item_name = 'Sweeper';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_131", flag_weapon);
						item_code = "weapon";
						item_name = 'K-50M';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("weapon_150", flag_weapon);
						item_code = "weapon";
						item_name = 'FM Mitrail';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("weapon_23", flag_weapon);
						item_code = "weapon";
						item_name = 'Sledge Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("weapon_70", flag_weapon);
						item_code = "weapon";
						item_name = 'Desert Fox';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("weapon_93", flag_weapon);
						item_code = "weapon";
						item_name = 'M82A2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("weapon_92", flag_weapon);
						item_code = "weapon";
						item_name = 'Dragon SVD';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("weapon_165", flag_weapon);
						item_code = "weapon";
						item_name = 'Falcon MM1';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("weapon_71", flag_weapon);
						item_code = "weapon";
						item_name = 'SW 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("weapon_44", flag_weapon);
						item_code = "weapon";
						item_name = 'Grinder';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("weapon_148", flag_weapon);
						item_code = "weapon";
						item_name = 'M4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("weapon_151", flag_weapon);
						item_code = "weapon";
						item_name = 'FM MAG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "35") {
						dollar_scrap = get_dollar_scrap_items("weapon_152", flag_weapon);
						item_code = "weapon";
						item_name = 'M60';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "36") {
						dollar_scrap = get_dollar_scrap_items("weapon_25", flag_weapon);
						item_code = "weapon";
						item_name = 'Battle Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "37") {
						dollar_scrap = get_dollar_scrap_items("weapon_24", flag_weapon);
						item_code = "weapon";
						item_name = 'Katana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "38") {
						dollar_scrap = get_dollar_scrap_items("weapon_72", flag_weapon);
						item_code = "weapon";
						item_name = 'Alpha Bull';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "39") {
						dollar_scrap = get_dollar_scrap_items("weapon_94", flag_weapon);
						item_code = "weapon";
						item_name = 'VSS Vintorez';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "40") {
						dollar_scrap = get_dollar_scrap_items("weapon_114", flag_weapon);
						item_code = "weapon";
						item_name = 'USAN-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "41") {
						dollar_scrap = get_dollar_scrap_items("weapon_166", flag_weapon);
						item_code = "weapon";
						item_name = 'XM25';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 8);

					getStatArmorAgility = Math.floor(Math.random() * 24);
					getStatArmorEndurance = Math.floor(Math.random() * 24);
					getStatWeaponAccuracy = Math.floor(Math.random() * 8);
					getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
					getStatWeaponReloading = Math.floor(Math.random() * 8);

					totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
					totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

					if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
					if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_133", flag_weapon);
						item_code = "weapon";
						item_name = 'Criss Victor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_26", flag_weapon);
						item_code = "weapon";
						item_name = 'Wakizashi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_46", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel 090';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_27", flag_weapon);
						item_code = "weapon";
						item_name = 'Nodachi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_74", flag_weapon);
						item_code = "weapon";
						item_name = '475 Magnum';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_96", flag_weapon);
						item_code = "weapon";
						item_name = '577 Rex';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_154", flag_weapon);
						item_code = "weapon";
						item_name = 'Vulcan';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
				}
				break;

			case "white_zone":
				if (eval(chance) >= 0 && eval(chance) < 7000) {
					item_id = Math.floor(Math.random() * 24);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_71", flag_weapon);
						item_code = "weapon";
						item_name = 'SW 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_146", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FAL';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_43", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel MS800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_147", flag_weapon);
						item_code = "weapon";
						item_name = 'AK 47';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_91", flag_weapon);
						item_code = "weapon";
						item_name = 'Hawk OP96';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_113", flag_weapon);
						item_code = "weapon";
						item_name = 'Sweeper';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_131", flag_weapon);
						item_code = "weapon";
						item_name = 'K-50M';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_150", flag_weapon);
						item_code = "weapon";
						item_name = 'FM Mitrail';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_23", flag_weapon);
						item_code = "weapon";
						item_name = 'Sledge Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_70", flag_weapon);
						item_code = "weapon";
						item_name = 'Desert Fox';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_93", flag_weapon);
						item_code = "weapon";
						item_name = 'M82A2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_92", flag_weapon);
						item_code = "weapon";
						item_name = 'Dragon SVD';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_165", flag_weapon);
						item_code = "weapon";
						item_name = 'Falcon MM1';
						item_quantity = 1;
						cash_quantity = 0;
					}

				} else if (eval(chance) >= 7000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 13);

					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("armor_12", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_13", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive XT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_08", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_09", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh GT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_44", flag_weapon);
						item_code = "weapon";
						item_name = 'Grinder';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_148", flag_weapon);
						item_code = "weapon";
						item_name = 'M4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_151", flag_weapon);
						item_code = "weapon";
						item_name = 'FM MAG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_152", flag_weapon);
						item_code = "weapon";
						item_name = 'M60';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_25", flag_weapon);
						item_code = "weapon";
						item_name = 'Battle Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_24", flag_weapon);
						item_code = "weapon";
						item_name = 'Katana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_72", flag_weapon);
						item_code = "weapon";
						item_name = 'Alpha Bull';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_94", flag_weapon);
						item_code = "weapon";
						item_name = 'VSS Vintorez';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_114", flag_weapon);
						item_code = "weapon";
						item_name = 'USAN-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_166", flag_weapon);
						item_code = "weapon";
						item_name = 'XM25';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 8);

					getStatArmorAgility = Math.floor(Math.random() * 24);
					getStatArmorEndurance = Math.floor(Math.random() * 24);
					getStatWeaponAccuracy = Math.floor(Math.random() * 8);
					getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
					getStatWeaponReloading = Math.floor(Math.random() * 8);

					totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
					totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

					if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
					if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_133", flag_weapon);
						item_code = "weapon";
						item_name = 'Criss Victor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_26", flag_weapon);
						item_code = "weapon";
						item_name = 'Wakizashi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_46", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel 090';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_27", flag_weapon);
						item_code = "weapon";
						item_name = 'Nodachi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_74", flag_weapon);
						item_code = "weapon";
						item_name = '475 Magnum';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_96", flag_weapon);
						item_code = "weapon";
						item_name = '577 Rex';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_154", flag_weapon);
						item_code = "weapon";
						item_name = 'Vulcan';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
				}
				break;

			case "wasteland":
				if (eval(chance) >= 0 && eval(chance) < 7000) {
					item_id = Math.floor(Math.random() * 24);
					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_71", flag_weapon);
						item_code = "weapon";
						item_name = 'SW 500';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_10", flag_armor);
						item_code = "armor";
						item_name = 'Reactive SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_11", flag_armor);
						item_code = "armor";
						item_name = 'Reactive XT800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_05", flag_armor);
						item_code = "armor";
						item_name = 'Mesh SLX';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_130", flag_weapon);
						item_code = "weapon";
						item_name = 'Chicago Typewriter';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_145", flag_weapon);
						item_code = "weapon";
						item_name = 'XM8';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_146", flag_weapon);
						item_code = "weapon";
						item_name = 'FM FAL';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_18", flag_weapon);
						item_code = "weapon";
						item_name = 'Wood Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_20", flag_weapon);
						item_code = "weapon";
						item_name = 'Machete';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_69", flag_weapon);
						item_code = "weapon";
						item_name = 'CK 97B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_90", flag_weapon);
						item_code = "weapon";
						item_name = 'SIC 550';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_43", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel MS800';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_147", flag_weapon);
						item_code = "weapon";
						item_name = 'AK 47';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_21", flag_weapon);
						item_code = "weapon";
						item_name = 'Kukri';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("weapon_22", flag_weapon);
						item_code = "weapon";
						item_name = 'Sabre';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("weapon_91", flag_weapon);
						item_code = "weapon";
						item_name = 'Hawk OP96';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("weapon_113", flag_weapon);
						item_code = "weapon";
						item_name = 'Sweeper';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("weapon_164", flag_weapon);
						item_code = "weapon";
						item_name = 'RG6';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("weapon_131", flag_weapon);
						item_code = "weapon";
						item_name = 'K-50M';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("weapon_150", flag_weapon);
						item_code = "weapon";
						item_name = 'FM Mitrail';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "20") {
						dollar_scrap = get_dollar_scrap_items("weapon_23", flag_weapon);
						item_code = "weapon";
						item_name = 'Sledge Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("weapon_70", flag_weapon);
						item_code = "weapon";
						item_name = 'Desert Fox';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("weapon_93", flag_weapon);
						item_code = "weapon";
						item_name = 'M82A2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("weapon_92", flag_weapon);
						item_code = "weapon";
						item_name = 'Dragon SVD';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("weapon_165", flag_weapon);
						item_code = "weapon";
						item_name = 'Falcon MM1';
						item_quantity = 1;
						cash_quantity = 0;
					}

				} else if (eval(chance) >= 7000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 13);

					flag_mastercraft = Math.floor(Math.random() * 100);
					if (eval(flag_mastercraft) > 50) {
						getStatArmorAgility = Math.floor(Math.random() * 24);
						getStatArmorEndurance = Math.floor(Math.random() * 24);
						getStatWeaponAccuracy = Math.floor(Math.random() * 8);
						getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
						getStatWeaponReloading = Math.floor(Math.random() * 8);

						totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
						totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

						if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
						if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";
					}

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("armor_12", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("armor_13", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Reactive XT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("armor_08", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("armor_09", flag_armor);
						item_code = "armor";
						item_name = 'Exterminator Mesh GT';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_44", flag_weapon);
						item_code = "weapon";
						item_name = 'Grinder';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_148", flag_weapon);
						item_code = "weapon";
						item_name = 'M4';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_151", flag_weapon);
						item_code = "weapon";
						item_name = 'FM MAG';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_152", flag_weapon);
						item_code = "weapon";
						item_name = 'M60';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_25", flag_weapon);
						item_code = "weapon";
						item_name = 'Battle Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_24", flag_weapon);
						item_code = "weapon";
						item_name = 'Katana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("weapon_72", flag_weapon);
						item_code = "weapon";
						item_name = 'Alpha Bull';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("weapon_94", flag_weapon);
						item_code = "weapon";
						item_name = 'VSS Vintorez';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("weapon_114", flag_weapon);
						item_code = "weapon";
						item_name = 'USAN-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("weapon_166", flag_weapon);
						item_code = "weapon";
						item_name = 'XM25';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 8);

					getStatArmorAgility = Math.floor(Math.random() * 24);
					getStatArmorEndurance = Math.floor(Math.random() * 24);
					getStatWeaponAccuracy = Math.floor(Math.random() * 8);
					getStatWeaponCriticalHit = Math.floor(Math.random() * 8);
					getStatWeaponReloading = Math.floor(Math.random() * 8);

					totalStatArmor = eval(getStatArmorAgility) + eval(getStatArmorEndurance);
					totalStatWeapon = eval(getStatWeaponAccuracy) + eval(getStatWeaponCriticalHit) + eval(getStatWeaponReloading);

					if (eval(totalStatArmor) > 0) flag_armor = "mastercrafted";
					if (eval(totalStatWeapon) > 0) flag_weapon = "mastercrafted";

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("weapon_133", flag_weapon);
						item_code = "weapon";
						item_name = 'Criss Victor';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("weapon_26", flag_weapon);
						item_code = "weapon";
						item_name = 'Wakizashi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("weapon_46", flag_weapon);
						item_code = "weapon";
						item_name = 'Steel 090';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_27", flag_weapon);
						item_code = "weapon";
						item_name = 'Nodachi';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_74", flag_weapon);
						item_code = "weapon";
						item_name = '475 Magnum';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_96", flag_weapon);
						item_code = "weapon";
						item_name = '577 Rex';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_154", flag_weapon);
						item_code = "weapon";
						item_name = 'Vulcan';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
				}
				break;
		}
	}
	var slot_number = loot_spot;
	if (eval(slot_number) < 10) slot_number = "0" + slot_number;
	document.getElementById('checklist_slot_' + slot_number).disabled = true;
	document.getElementById('quantity_slot_' + slot_number).value = item_quantity;
	document.getElementById('scraps_slot_' + slot_number).value = dollar_scrap;

	if (item_code == 'armor' || item_code == 'weapon') {
		if (item_code == 'armor' && eval(totalStatArmor) > 0) addedName = " MC (" + getStatArmorAgility + "/" + getStatArmorEndurance + ")";
		else if (item_code == 'weapon' && eval(totalStatWeapon) > 0) addedName = " MC (" + getStatWeaponAccuracy + "/" + getStatWeaponReloading + "/" + getStatWeaponCriticalHit + ")";
		document.getElementById('item_name_slot_' + slot_number).value = item_name + addedName;
		document.getElementById('checklist_slot_' + slot_number).checked = false;
	} else {
		document.getElementById('item_name_slot_' + slot_number).value = item_name;
		document.getElementById('checklist_slot_' + slot_number).checked = false;
	}

	document.getElementById('item_name_slot_' + slot_number).className = epic_class_name;
}