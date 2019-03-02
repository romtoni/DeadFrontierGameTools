function get_looting_item_name(gm_state_param, zone_param, loot_spot_param, loot_spot_used_param, loot_spot_left_param, chance_param, code_param, max_chance_param, reduce_loot_spot) {
	var gm_state = gm_state_param;
	var zone = zone_param;
	var loot_spot = loot_spot_param;
	var chance = eval(chance_param);
	var item_name;
	var item_quantity;
	var loot_spot_used = loot_spot_used_param;
	var loot_spot_left = loot_spot_left_param;
	var code = code_param;
	var item_code = "autochangeable";
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
	var gm_state_chance;
	var flag_mastercraft = 0;
	var epic_class_name = "";
	var max_chance = max_chance_param;

	var bonus_weaponchance_hunter_implant = document.getElementById('bonus_weaponchance_hunter_implant').value;
	var bonus_weaponchance_salvage_implant = document.getElementById('bonus_weaponchance_salvage_implant').value;
	var bonus_weaponchance_looter_implant = document.getElementById('bonus_weaponchance_looter_implant').value;
	var bonus_weaponchance_jackofall_implant = document.getElementById('bonus_weaponchance_jackofall_implant').value;
	var bonus_weaponchance_clan_loot_boost = document.getElementById('bonus_weaponchance_clan_loot_boost').value;
	var bonus_weaponchance_weekend_event_loot = document.getElementById('bonus_weaponchance_weekend_event_loot').value;
	var weaponchance_bonus = eval(bonus_weaponchance_hunter_implant) + eval(bonus_weaponchance_salvage_implant) + eval(bonus_weaponchance_looter_implant) + eval(bonus_weaponchance_jackofall_implant) + eval(bonus_weaponchance_clan_loot_boost) + eval(bonus_weaponchance_weekend_event_loot);

	var bonus_armorchance_scavenger_implant = document.getElementById('bonus_armorchance_scavenger_implant').value;
	var bonus_armorchance_salvage_implant = document.getElementById('bonus_armorchance_salvage_implant').value;
	var bonus_armorchance_looter_implant = document.getElementById('bonus_armorchance_looter_implant').value;
	var bonus_armorchance_jackofall_implant = document.getElementById('bonus_armorchance_jackofall_implant').value;
	var bonus_armorchance_clan_loot_boost = document.getElementById('bonus_armorchance_clan_loot_boost').value;
	var bonus_armorchance_weekend_event_loot = document.getElementById('bonus_armorchance_weekend_event_loot').value;
	var armorchance_bonus = eval(bonus_armorchance_scavenger_implant) + eval(bonus_armorchance_salvage_implant) + eval(bonus_armorchance_looter_implant) + eval(bonus_armorchance_jackofall_implant) + eval(bonus_armorchance_clan_loot_boost) + eval(bonus_armorchance_weekend_event_loot);

	var bonus_weaponarmor_chance = (eval(weaponchance_bonus) + eval(armorchance_bonus)) / eval(2);
	var item_id;
	if (gm_state == "Y") {
		multiplier_gm_state = 2;
		gm_state_chance = eval(2.5) * eval(multiplier_gm_state);

		chance = Math.floor(eval(chance) - eval(gm_state_chance) + (eval(gm_state_chance) + (eval(gm_state_chance) * eval(bonus_weaponarmor_chance) / eval(100))));
		if (eval(chance) > eval(max_chance)) chance = max_chance;

		switch (zone) {
			case "blue_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_01", "normal");
						item_code = "autochangeable";
						item_name = 'Plasters';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_02", "normal");
						item_code = "autochangeable";
						item_name = 'Steri Strips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_04", "normal");
						item_code = "autochangeable";
						item_name = 'Dog Biscuits';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_02", "normal");
						item_code = "autochangeable";
						item_name = 'Beer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_01", "normal");
						item_code = "autochangeable";
						item_name = 'Potato Chips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_03", "normal");
						item_code = "autochangeable";
						item_name = 'Candy';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 3);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_01", "normal");
						item_code = "";
						item_name = '.32 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_02", "normal");
						item_code = "";
						item_name = '9mm Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_03", "normal");
						item_code = "";
						item_name = '.357 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_14", "normal");
						item_code = "";
						item_name = '20 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 30);
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
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_weapon);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_weapon);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_weapon);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_weapon);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_weapon);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_weapon);
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
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_armor);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_armor);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("clothing_01", "normal");
						item_code = "autochangeable";
						item_name = 'Shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("clothing_02", "normal");
						item_code = "autochangeable";
						item_name = 'T-shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("clothing_03", "normal");
						item_code = "autochangeable";
						item_name = 'Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("clothing_04", "normal");
						item_code = "autochangeable";
						item_name = 'Trousers';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_05", "normal");
						item_code = "autochangeable";
						item_name = 'Cargo Pants';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_17", "normal");
						item_code = "autochangeable";
						item_name = 'Bobble Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("misc_09", "normal");
						item_code = "autochangeable";
						item_name = 'Claw Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "green_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_01", "normal");
						item_code = "autochangeable";
						item_name = 'Plasters';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_02", "normal");
						item_code = "autochangeable";
						item_name = 'Steri Strips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_04", "normal");
						item_code = "autochangeable";
						item_name = 'Dog Biscuits';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_02", "normal");
						item_code = "autochangeable";
						item_name = 'Beer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_01", "normal");
						item_code = "autochangeable";
						item_name = 'Potato Chips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_03", "normal");
						item_code = "autochangeable";
						item_name = 'Candy';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 3);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_01", "normal");
						item_code = "";
						item_name = '.32 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_02", "normal");
						item_code = "";
						item_name = '9mm Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_03", "normal");
						item_code = "";
						item_name = '.357 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_14", "normal");
						item_code = "";
						item_name = '20 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 30);
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
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_weapon);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_weapon);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_weapon);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_weapon);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_weapon);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_weapon);
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
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_armor);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_armor);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("clothing_01", "normal");
						item_code = "autochangeable";
						item_name = 'Shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("clothing_02", "normal");
						item_code = "autochangeable";
						item_name = 'T-shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("clothing_03", "normal");
						item_code = "autochangeable";
						item_name = 'Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("clothing_04", "normal");
						item_code = "autochangeable";
						item_name = 'Trousers';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_05", "normal");
						item_code = "autochangeable";
						item_name = 'Cargo Pants';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_17", "normal");
						item_code = "autochangeable";
						item_name = 'Bobble Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("misc_09", "normal");
						item_code = "autochangeable";
						item_name = 'Claw Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "yellow_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_03", "normal");
						item_code = "autochangeable";
						item_name = 'Antibiotics';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_04", "normal");
						item_code = "autochangeable";
						item_name = 'Antiseptic Spray';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_13", "normal");
						item_code = "autochangeable";
						item_name = 'Dog Food';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_11", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Hotdogs';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_10", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Spaghetti';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_12", "normal");
						item_code = "autochangeable";
						item_name = 'Baked Beans';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 3);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_04", "normal");
						item_code = "";
						item_name = '.38 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_05", "normal");
						item_code = "";
						item_name = '.40 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_03", "normal");
						item_code = "";
						item_name = '.357 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_14", "normal");
						item_code = "";
						item_name = '20 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_15", "normal");
						item_code = "";
						item_name = '16 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_09", "normal");
						item_code = "";
						item_name = '5.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 30);
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
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("clothing_07", "normal");
						item_code = "autochangeable";
						item_name = 'Leather Pants';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("clothing_06", "normal");
						item_code = "autochangeable";
						item_name = 'Jeans';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("clothing_08", "normal");
						item_code = "autochangeable";
						item_name = 'Combats';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_09", "normal");
						item_code = "autochangeable";
						item_name = 'Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_10", "normal");
						item_code = "autochangeable";
						item_name = 'Bomber Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("clothing_11", "normal");
						item_code = "autochangeable";
						item_name = 'Furr Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "orange_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_06", "normal");
						item_code = "autochangeable";
						item_name = 'Morphine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_26", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Vegetables';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_28", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Salmon';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_27", "normal");
						item_code = "autochangeable";
						item_name = 'Oats';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_20", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Tuna';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_10", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Spaghetti';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 7);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_06", "normal");
						item_code = "";
						item_name = '.45 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_05", "normal");
						item_code = "";
						item_name = '.40 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_10", "normal");
						item_code = "";
						item_name = '7.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_15", "normal");
						item_code = "";
						item_name = '16 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_09", "normal");
						item_code = "";
						item_name = '5.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 35);
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
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_12", "normal");
						item_code = "autochangeable";
						item_name = 'Leather Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("clothing_19", "normal");
						item_code = "autochangeable";
						item_name = 'Military Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("clothing_20", "normal");
						item_code = "autochangeable";
						item_name = 'Beret';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("clothing_21", "normal");
						item_code = "autochangeable";
						item_name = 'Tin Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("clothing_22", "normal");
						item_code = "autochangeable";
						item_name = 'Crash Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("misc_10", "normal");
						item_code = "autochangeable";
						item_name = 'Small Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "35") {
						dollar_scrap = get_dollar_scrap_items("misc_11", "normal");
						item_code = "autochangeable";
						item_name = 'Medium Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "red_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_06", "normal");
						item_code = "autochangeable";
						item_name = 'Morphine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_26", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Vegetables';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 7);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_06", "normal");
						item_code = "";
						item_name = '.45 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_10", "normal");
						item_code = "";
						item_name = '7.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = '16 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_09", "normal");
						item_code = "";
						item_name = 'Grenades';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 35);
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
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer`s Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("clothing_36", "normal");
						item_code = "autochangeable";
						item_name = 'Eye Patch';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("clothing_22", "normal");
						item_code = "autochangeable";
						item_name = 'Crash Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("misc_12", "normal");
						item_code = "autochangeable";
						item_name = 'Large Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "35") {
						dollar_scrap = get_dollar_scrap_items("misc_11", "normal");
						item_code = "autochangeable";
						item_name = 'Medium Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "black_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 19);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_37", "normal");
						item_code = "autochangeable";
						item_name = 'Dried Truffles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("medication_09", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin 8B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("medication_08", "normal");
						item_code = "autochangeable";
						item_name = 'Steroids';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("food_39", "normal");
						item_code = "autochangeable";
						item_name = 'Whiskey';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (300 - 50) + 50);
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (250 - 50) + 50);
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 50) + 50);
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("medication_06", "normal");
						item_code = "autochangeable";
						item_name = 'Morphine';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 8);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_19", "normal");
						item_code = "";
						item_name = 'Heavy Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_08", "normal");
						item_code = "";
						item_name = '.55 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_13", "normal");
						item_code = "";
						item_name = '14mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_17", "normal");
						item_code = "";
						item_name = '10 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = 'Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 9990) {
					item_id = Math.floor(Math.random() * 69);
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
						dollar_scrap = get_dollar_scrap_items("clothing_57", "normal");
						item_code = "autochangeable";
						item_name = 'Bio Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("misc_13", "normal");
						item_code = "autochangeable";
						item_name = 'XL Security Box';
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
					if (item_id == "48") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "49") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "50") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "51") {
						dollar_scrap = get_dollar_scrap_items("clothing_14", "normal");
						item_code = "autochangeable";
						item_name = 'Motorcycle Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "52") {
						dollar_scrap = get_dollar_scrap_items("clothing_15", "normal");
						item_code = "autochangeable";
						item_name = 'Trench Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "53") {
						dollar_scrap = get_dollar_scrap_items("clothing_23", "normal");
						item_code = "autochangeable";
						item_name = 'Bandana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "54") {
						dollar_scrap = get_dollar_scrap_items("clothing_24", "normal");
						item_code = "autochangeable";
						item_name = 'Cowboy Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "55") {
						dollar_scrap = get_dollar_scrap_items("clothing_26", "normal");
						item_code = "autochangeable";
						item_name = 'Construction Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "56") {
						dollar_scrap = get_dollar_scrap_items("clothing_27", "normal");
						item_code = "autochangeable";
						item_name = 'Fireman Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "57") {
						dollar_scrap = get_dollar_scrap_items("clothing_28", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "58") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "59") {
						dollar_scrap = get_dollar_scrap_items("clothing_33", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "60") {
						dollar_scrap = get_dollar_scrap_items("clothing_35", "normal");
						item_code = "autochangeable";
						item_name = 'Turban';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "61") {
						dollar_scrap = get_dollar_scrap_items("clothing_37", "normal");
						item_code = "autochangeable";
						item_name = 'Exterminator Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "62") {
						dollar_scrap = get_dollar_scrap_items("clothing_39", "normal");
						item_code = "autochangeable";
						item_name = 'Hockey Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "63") {
						dollar_scrap = get_dollar_scrap_items("clothing_44", "normal");
						item_code = "autochangeable";
						item_name = 'Baseball Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "64") {
						dollar_scrap = get_dollar_scrap_items("clothing_48", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "65") {
						dollar_scrap = get_dollar_scrap_items("clothing_49", "normal");
						item_code = "autochangeable";
						item_name = 'Nomad Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "66") {
						dollar_scrap = get_dollar_scrap_items("clothing_53", "normal");
						item_code = "autochangeable";
						item_name = 'Ski Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "67") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "68") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "69") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Tactical Goggles';
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
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 18);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_37", "normal");
						item_code = "autochangeable";
						item_name = 'Dried Truffles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("medication_09", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin 8B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("medication_08", "normal");
						item_code = "autochangeable";
						item_name = 'Steroids';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("food_39", "normal");
						item_code = "autochangeable";
						item_name = 'Whiskey';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (300 - 50) + 50);
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (250 - 50) + 50);
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 50) + 50);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 8);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_19", "normal");
						item_code = "";
						item_name = 'Heavy Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_08", "normal");
						item_code = "";
						item_name = '.55 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_13", "normal");
						item_code = "";
						item_name = '14mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_17", "normal");
						item_code = "";
						item_name = '10 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = 'Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 9990) {
					item_id = Math.floor(Math.random() * 69);
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
						dollar_scrap = get_dollar_scrap_items("clothing_57", "normal");
						item_code = "autochangeable";
						item_name = 'Bio Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("misc_13", "normal");
						item_code = "autochangeable";
						item_name = 'XL Security Box';
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
					if (item_id == "48") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "49") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "50") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "51") {
						dollar_scrap = get_dollar_scrap_items("clothing_14", "normal");
						item_code = "autochangeable";
						item_name = 'Motorcycle Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "52") {
						dollar_scrap = get_dollar_scrap_items("clothing_15", "normal");
						item_code = "autochangeable";
						item_name = 'Trench Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "53") {
						dollar_scrap = get_dollar_scrap_items("clothing_23", "normal");
						item_code = "autochangeable";
						item_name = 'Bandana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "54") {
						dollar_scrap = get_dollar_scrap_items("clothing_24", "normal");
						item_code = "autochangeable";
						item_name = 'Cowboy Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "55") {
						dollar_scrap = get_dollar_scrap_items("clothing_26", "normal");
						item_code = "autochangeable";
						item_name = 'Construction Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "56") {
						dollar_scrap = get_dollar_scrap_items("clothing_27", "normal");
						item_code = "autochangeable";
						item_name = 'Fireman Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "57") {
						dollar_scrap = get_dollar_scrap_items("clothing_28", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "58") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "59") {
						dollar_scrap = get_dollar_scrap_items("clothing_33", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "60") {
						dollar_scrap = get_dollar_scrap_items("clothing_35", "normal");
						item_code = "autochangeable";
						item_name = 'Turban';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "61") {
						dollar_scrap = get_dollar_scrap_items("clothing_37", "normal");
						item_code = "autochangeable";
						item_name = 'Exterminator Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "62") {
						dollar_scrap = get_dollar_scrap_items("clothing_39", "normal");
						item_code = "autochangeable";
						item_name = 'Hockey Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "63") {
						dollar_scrap = get_dollar_scrap_items("clothing_44", "normal");
						item_code = "autochangeable";
						item_name = 'Baseball Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "64") {
						dollar_scrap = get_dollar_scrap_items("clothing_48", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "65") {
						dollar_scrap = get_dollar_scrap_items("clothing_49", "normal");
						item_code = "autochangeable";
						item_name = 'Nomad Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "66") {
						dollar_scrap = get_dollar_scrap_items("clothing_53", "normal");
						item_code = "autochangeable";
						item_name = 'Ski Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "67") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "68") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "69") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Tactical Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 29);
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
						dollar_scrap = get_dollar_scrap_items("implant_01", "normal");
						item_code = "implant";
						item_name = 'Rage Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("implant_02", "normal");
						item_code = "implant";
						item_name = 'Agility Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("implant_03", "normal");
						item_code = "implant";
						item_name = 'Survival Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("implant_04", "normal");
						item_code = "implant";
						item_name = 'Notoriety Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("implant_05", "normal");
						item_code = "implant";
						item_name = 'Ingenuity Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("implant_06", "normal");
						item_code = "implant";
						item_name = 'Wealth Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("implant_07", "normal");
						item_code = "implant";
						item_name = 'Hunter Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("implant_08", "normal");
						item_code = "implant";
						item_name = 'Scavenger Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("implant_09", "normal");
						item_code = "implant";
						item_name = 'Experience Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "29") {
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
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 18);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_37", "normal");
						item_code = "autochangeable";
						item_name = 'Dried Truffles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("medication_09", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin 8B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("medication_08", "normal");
						item_code = "autochangeable";
						item_name = 'Steroids';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("food_39", "normal");
						item_code = "autochangeable";
						item_name = 'Whiskey';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (300 - 50) + 50);
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (250 - 50) + 50);
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 50) + 50);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 8);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_19", "normal");
						item_code = "";
						item_name = 'Heavy Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_08", "normal");
						item_code = "";
						item_name = '.55 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_13", "normal");
						item_code = "";
						item_name = '14mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_17", "normal");
						item_code = "";
						item_name = '10 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = 'Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 9990) {
					item_id = Math.floor(Math.random() * 69);
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
						dollar_scrap = get_dollar_scrap_items("clothing_57", "normal");
						item_code = "autochangeable";
						item_name = 'Bio Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("misc_13", "normal");
						item_code = "autochangeable";
						item_name = 'XL Security Box';
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
					if (item_id == "48") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "49") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "50") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "51") {
						dollar_scrap = get_dollar_scrap_items("clothing_14", "normal");
						item_code = "autochangeable";
						item_name = 'Motorcycle Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "52") {
						dollar_scrap = get_dollar_scrap_items("clothing_15", "normal");
						item_code = "autochangeable";
						item_name = 'Trench Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "53") {
						dollar_scrap = get_dollar_scrap_items("clothing_23", "normal");
						item_code = "autochangeable";
						item_name = 'Bandana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "54") {
						dollar_scrap = get_dollar_scrap_items("clothing_24", "normal");
						item_code = "autochangeable";
						item_name = 'Cowboy Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "55") {
						dollar_scrap = get_dollar_scrap_items("clothing_26", "normal");
						item_code = "autochangeable";
						item_name = 'Construction Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "56") {
						dollar_scrap = get_dollar_scrap_items("clothing_27", "normal");
						item_code = "autochangeable";
						item_name = 'Fireman Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "57") {
						dollar_scrap = get_dollar_scrap_items("clothing_28", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "58") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "59") {
						dollar_scrap = get_dollar_scrap_items("clothing_33", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "60") {
						dollar_scrap = get_dollar_scrap_items("clothing_35", "normal");
						item_code = "autochangeable";
						item_name = 'Turban';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "61") {
						dollar_scrap = get_dollar_scrap_items("clothing_37", "normal");
						item_code = "autochangeable";
						item_name = 'Exterminator Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "62") {
						dollar_scrap = get_dollar_scrap_items("clothing_39", "normal");
						item_code = "autochangeable";
						item_name = 'Hockey Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "63") {
						dollar_scrap = get_dollar_scrap_items("clothing_44", "normal");
						item_code = "autochangeable";
						item_name = 'Baseball Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "64") {
						dollar_scrap = get_dollar_scrap_items("clothing_48", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "65") {
						dollar_scrap = get_dollar_scrap_items("clothing_49", "normal");
						item_code = "autochangeable";
						item_name = 'Nomad Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "66") {
						dollar_scrap = get_dollar_scrap_items("clothing_53", "normal");
						item_code = "autochangeable";
						item_name = 'Ski Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "67") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "68") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "69") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Tactical Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 29);
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
						dollar_scrap = get_dollar_scrap_items("implant_01", "normal");
						item_code = "implant";
						item_name = 'Rage Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("implant_02", "normal");
						item_code = "implant";
						item_name = 'Agility Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("implant_03", "normal");
						item_code = "implant";
						item_name = 'Survival Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("implant_04", "normal");
						item_code = "implant";
						item_name = 'Notoriety Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("implant_05", "normal");
						item_code = "implant";
						item_name = 'Ingenuity Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("implant_06", "normal");
						item_code = "implant";
						item_name = 'Wealth Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("implant_07", "normal");
						item_code = "implant";
						item_name = 'Hunter Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("implant_08", "normal");
						item_code = "implant";
						item_name = 'Scavenger Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("implant_09", "normal");
						item_code = "implant";
						item_name = 'Experience Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("weapon_45", flag_weapon);
						item_code = "weapon";
						item_name = 'Ripsaw G12';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("implant_10", "normal");
						item_code = "implant";
						item_name = 'Violence Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("implant_12", "normal");
						item_code = "implant";
						item_name = 'Perception Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("implant_13", "normal");
						item_code = "implant";
						item_name = 'Hyper Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("implant_14", "normal");
						item_code = "implant";
						item_name = 'Ironskin Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("implant_15", "normal");
						item_code = "implant";
						item_name = 'Salvage Implant';
						item_quantity = 1;
						cash_quantity = 0;
						epic_class_name = "epic_loot_item";
					}
				}
				break;
		}
	} else {
		multiplier_gm_state = 1;
		gm_state_chance = eval(2.5) * eval(multiplier_gm_state);

		chance = Math.floor(eval(chance) - eval(gm_state_chance) + (eval(gm_state_chance) + (eval(gm_state_chance) * eval(bonus_weaponarmor_chance) / eval(100))));
		if (eval(chance) > eval(max_chance)) chance = max_chance;
		switch (zone) {
			case "blue_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_01", "normal");
						item_code = "autochangeable";
						item_name = 'Plasters';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_02", "normal");
						item_code = "autochangeable";
						item_name = 'Steri Strips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_04", "normal");
						item_code = "autochangeable";
						item_name = 'Dog Biscuits';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_02", "normal");
						item_code = "autochangeable";
						item_name = 'Beer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_01", "normal");
						item_code = "autochangeable";
						item_name = 'Potato Chips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_03", "normal");
						item_code = "autochangeable";
						item_name = 'Candy';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (20 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (25 - 10) + 50);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (30 - 10) + 50);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (35 - 10) + 50);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 3);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_01", "normal");
						item_code = "";
						item_name = '.32 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_02", "normal");
						item_code = "";
						item_name = '9mm Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_03", "normal");
						item_code = "";
						item_name = '.357 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_14", "normal");
						item_code = "";
						item_name = '20 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 30);
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
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_weapon);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_weapon);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_weapon);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_weapon);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_weapon);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_weapon);
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
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_armor);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_armor);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("clothing_01", "normal");
						item_code = "autochangeable";
						item_name = 'Shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("clothing_02", "normal");
						item_code = "autochangeable";
						item_name = 'T-shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("clothing_03", "normal");
						item_code = "autochangeable";
						item_name = 'Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("clothing_04", "normal");
						item_code = "autochangeable";
						item_name = 'Trousers';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_05", "normal");
						item_code = "autochangeable";
						item_name = 'Cargo Pants';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_17", "normal");
						item_code = "autochangeable";
						item_name = 'Bobble Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("misc_09", "normal");
						item_code = "autochangeable";
						item_name = 'Claw Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "green_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_01", "normal");
						item_code = "autochangeable";
						item_name = 'Plasters';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_02", "normal");
						item_code = "autochangeable";
						item_name = 'Steri Strips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_04", "normal");
						item_code = "autochangeable";
						item_name = 'Dog Biscuits';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_02", "normal");
						item_code = "autochangeable";
						item_name = 'Beer';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_01", "normal");
						item_code = "autochangeable";
						item_name = 'Potato Chips';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_03", "normal");
						item_code = "autochangeable";
						item_name = 'Candy';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (20 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (25 - 10) + 50);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (30 - 10) + 50);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (35 - 10) + 50);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 3);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_01", "normal");
						item_code = "";
						item_name = '.32 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_02", "normal");
						item_code = "";
						item_name = '9mm Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_03", "normal");
						item_code = "";
						item_name = '.357 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_14", "normal");
						item_code = "";
						item_name = '20 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 30);
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
						dollar_scrap = get_dollar_scrap_items("weapon_03", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Poker';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("weapon_04", flag_weapon);
						item_code = "weapon";
						item_name = 'Baseball Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("weapon_05", flag_weapon);
						item_code = "weapon";
						item_name = 'Chef Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("weapon_06", flag_weapon);
						item_code = "weapon";
						item_name = 'Cricket Bat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("weapon_07", flag_weapon);
						item_code = "weapon";
						item_name = 'Combat Knife';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("weapon_08", flag_weapon);
						item_code = "weapon";
						item_name = 'Golf Club';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("weapon_09", flag_weapon);
						item_code = "weapon";
						item_name = 'Fire Axe';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("weapon_53", flag_weapon);
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
						dollar_scrap = get_dollar_scrap_items("armor_01", flag_armor);
						item_code = "armor";
						item_name = 'Sports Armour';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "21") {
						dollar_scrap = get_dollar_scrap_items("armor_02", flag_armor);
						item_code = "armor";
						item_name = 'Zylon Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "22") {
						dollar_scrap = get_dollar_scrap_items("clothing_01", "normal");
						item_code = "autochangeable";
						item_name = 'Shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("clothing_02", "normal");
						item_code = "autochangeable";
						item_name = 'T-shirt';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("clothing_03", "normal");
						item_code = "autochangeable";
						item_name = 'Vest';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("clothing_04", "normal");
						item_code = "autochangeable";
						item_name = 'Trousers';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_05", "normal");
						item_code = "autochangeable";
						item_name = 'Cargo Pants';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_17", "normal");
						item_code = "autochangeable";
						item_name = 'Bobble Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("misc_09", "normal");
						item_code = "autochangeable";
						item_name = 'Claw Hammer';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "yellow_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_03", "normal");
						item_code = "autochangeable";
						item_name = 'Antibiotics';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_04", "normal");
						item_code = "autochangeable";
						item_name = 'Antiseptic Spray';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_13", "normal");
						item_code = "autochangeable";
						item_name = 'Dog Food';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_11", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Hotdogs';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_10", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Spaghetti';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_12", "normal");
						item_code = "autochangeable";
						item_name = 'Baked Beans';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 3);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_04", "normal");
						item_code = "";
						item_name = '.38 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_05", "normal");
						item_code = "";
						item_name = '.40 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_03", "normal");
						item_code = "";
						item_name = '.357 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_14", "normal");
						item_code = "";
						item_name = '20 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_15", "normal");
						item_code = "";
						item_name = '16 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_09", "normal");
						item_code = "";
						item_name = '5.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 30);
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
					if (item_id == "23") {
						dollar_scrap = get_dollar_scrap_items("clothing_07", "normal");
						item_code = "autochangeable";
						item_name = 'Leather Pants';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "24") {
						dollar_scrap = get_dollar_scrap_items("clothing_06", "normal");
						item_code = "autochangeable";
						item_name = 'Jeans';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "25") {
						dollar_scrap = get_dollar_scrap_items("clothing_08", "normal");
						item_code = "autochangeable";
						item_name = 'Combats';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_09", "normal");
						item_code = "autochangeable";
						item_name = 'Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_10", "normal");
						item_code = "autochangeable";
						item_name = 'Bomber Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("clothing_11", "normal");
						item_code = "autochangeable";
						item_name = 'Furr Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "orange_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_06", "normal");
						item_code = "autochangeable";
						item_name = 'Morphine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_26", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Vegetables';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_28", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Salmon';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_27", "normal");
						item_code = "autochangeable";
						item_name = 'Oats';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_20", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Tuna';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_10", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Spaghetti';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 7);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_06", "normal");
						item_code = "";
						item_name = '.45 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_05", "normal");
						item_code = "";
						item_name = '.40 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_10", "normal");
						item_code = "";
						item_name = '7.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_15", "normal");
						item_code = "";
						item_name = '16 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_09", "normal");
						item_code = "";
						item_name = '5.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 35);
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
					if (item_id == "26") {
						dollar_scrap = get_dollar_scrap_items("clothing_12", "normal");
						item_code = "autochangeable";
						item_name = 'Leather Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "27") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("clothing_19", "normal");
						item_code = "autochangeable";
						item_name = 'Military Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("clothing_20", "normal");
						item_code = "autochangeable";
						item_name = 'Beret';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("clothing_21", "normal");
						item_code = "autochangeable";
						item_name = 'Tin Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("clothing_22", "normal");
						item_code = "autochangeable";
						item_name = 'Crash Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("misc_10", "normal");
						item_code = "autochangeable";
						item_name = 'Small Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "35") {
						dollar_scrap = get_dollar_scrap_items("misc_11", "normal");
						item_code = "autochangeable";
						item_name = 'Medium Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "red_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 14);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("medication_06", "normal");
						item_code = "autochangeable";
						item_name = 'Morphine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_26", "normal");
						item_code = "autochangeable";
						item_name = 'Tinned Vegetables';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (100 - 10) + 10);
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 10) + 10);
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 10) + 10);
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 10) + 10);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 7500) {
					item_id = Math.floor(Math.random() * 7);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_06", "normal");
						item_code = "";
						item_name = '.45 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_10", "normal");
						item_code = "";
						item_name = '7.5 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = '16 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_09", "normal");
						item_code = "";
						item_name = 'Grenades';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shotgun Shells';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9 mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 7500 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 35);
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
					if (item_id == "28") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer`s Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "29") {
						dollar_scrap = get_dollar_scrap_items("clothing_36", "normal");
						item_code = "autochangeable";
						item_name = 'Eye Patch';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "30") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "31") {
						dollar_scrap = get_dollar_scrap_items("clothing_22", "normal");
						item_code = "autochangeable";
						item_name = 'Crash Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "32") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "33") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "34") {
						dollar_scrap = get_dollar_scrap_items("misc_12", "normal");
						item_code = "autochangeable";
						item_name = 'Large Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "35") {
						dollar_scrap = get_dollar_scrap_items("misc_11", "normal");
						item_code = "autochangeable";
						item_name = 'Medium Security Box';
						item_quantity = 1;
						cash_quantity = 0;
					}
				}
				break;

			case "black_zone":
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 19);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_37", "normal");
						item_code = "autochangeable";
						item_name = 'Dried Truffles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("medication_09", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin 8B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("medication_08", "normal");
						item_code = "autochangeable";
						item_name = 'Steroids';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("food_39", "normal");
						item_code = "autochangeable";
						item_name = 'Whiskey';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 50) + 50);
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 50) + 50);
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 50) + 50);
					}
					if (item_id == "19") {
						dollar_scrap = get_dollar_scrap_items("medication_06", "normal");
						item_code = "autochangeable";
						item_name = 'Morphine';
						item_quantity = 1;
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 8);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_19", "normal");
						item_code = "";
						item_name = 'Heavy Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (50 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_08", "normal");
						item_code = "";
						item_name = '.55 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_13", "normal");
						item_code = "";
						item_name = '14mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_17", "normal");
						item_code = "";
						item_name = '10 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = 'Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (50 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 70);

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
						dollar_scrap = get_dollar_scrap_items("clothing_57", "normal");
						item_code = "autochangeable";
						item_name = 'Bio Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("misc_13", "normal");
						item_code = "autochangeable";
						item_name = 'XL Security Box';
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
					if (item_id == "48") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "49") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "50") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "51") {
						dollar_scrap = get_dollar_scrap_items("clothing_14", "normal");
						item_code = "autochangeable";
						item_name = 'Motorcycle Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "52") {
						dollar_scrap = get_dollar_scrap_items("clothing_15", "normal");
						item_code = "autochangeable";
						item_name = 'Trench Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "53") {
						dollar_scrap = get_dollar_scrap_items("clothing_23", "normal");
						item_code = "autochangeable";
						item_name = 'Bandana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "54") {
						dollar_scrap = get_dollar_scrap_items("clothing_24", "normal");
						item_code = "autochangeable";
						item_name = 'Cowboy Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "55") {
						dollar_scrap = get_dollar_scrap_items("clothing_26", "normal");
						item_code = "autochangeable";
						item_name = 'Construction Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "56") {
						dollar_scrap = get_dollar_scrap_items("clothing_27", "normal");
						item_code = "autochangeable";
						item_name = 'Fireman Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "57") {
						dollar_scrap = get_dollar_scrap_items("clothing_28", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "58") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "59") {
						dollar_scrap = get_dollar_scrap_items("clothing_33", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "60") {
						dollar_scrap = get_dollar_scrap_items("clothing_35", "normal");
						item_code = "autochangeable";
						item_name = 'Turban';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "61") {
						dollar_scrap = get_dollar_scrap_items("clothing_37", "normal");
						item_code = "autochangeable";
						item_name = 'Exterminator Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "62") {
						dollar_scrap = get_dollar_scrap_items("clothing_39", "normal");
						item_code = "autochangeable";
						item_name = 'Hockey Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "63") {
						dollar_scrap = get_dollar_scrap_items("clothing_44", "normal");
						item_code = "autochangeable";
						item_name = 'Baseball Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "64") {
						dollar_scrap = get_dollar_scrap_items("clothing_48", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "65") {
						dollar_scrap = get_dollar_scrap_items("clothing_49", "normal");
						item_code = "autochangeable";
						item_name = 'Nomad Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "66") {
						dollar_scrap = get_dollar_scrap_items("clothing_53", "normal");
						item_code = "autochangeable";
						item_name = 'Ski Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "67") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "68") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "69") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Tactical Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "70") {
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
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 18);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_37", "normal");
						item_code = "autochangeable";
						item_name = 'Dried Truffles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("medication_09", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin 8B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("medication_08", "normal");
						item_code = "autochangeable";
						item_name = 'Steroids';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("food_39", "normal");
						item_code = "autochangeable";
						item_name = 'Whiskey';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 50) + 50);
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 50) + 50);
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 50) + 50);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 8);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_19", "normal");
						item_code = "";
						item_name = 'Heavy Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (50 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_08", "normal");
						item_code = "";
						item_name = '.55 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_13", "normal");
						item_code = "";
						item_name = '14mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_17", "normal");
						item_code = "";
						item_name = '10 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = 'Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (50 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 70);

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
						dollar_scrap = get_dollar_scrap_items("clothing_57", "normal");
						item_code = "autochangeable";
						item_name = 'Bio Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("misc_13", "normal");
						item_code = "autochangeable";
						item_name = 'XL Security Box';
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
					if (item_id == "48") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "49") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "50") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "51") {
						dollar_scrap = get_dollar_scrap_items("clothing_14", "normal");
						item_code = "autochangeable";
						item_name = 'Motorcycle Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "52") {
						dollar_scrap = get_dollar_scrap_items("clothing_15", "normal");
						item_code = "autochangeable";
						item_name = 'Trench Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "53") {
						dollar_scrap = get_dollar_scrap_items("clothing_23", "normal");
						item_code = "autochangeable";
						item_name = 'Bandana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "54") {
						dollar_scrap = get_dollar_scrap_items("clothing_24", "normal");
						item_code = "autochangeable";
						item_name = 'Cowboy Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "55") {
						dollar_scrap = get_dollar_scrap_items("clothing_26", "normal");
						item_code = "autochangeable";
						item_name = 'Construction Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "56") {
						dollar_scrap = get_dollar_scrap_items("clothing_27", "normal");
						item_code = "autochangeable";
						item_name = 'Fireman Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "57") {
						dollar_scrap = get_dollar_scrap_items("clothing_28", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "58") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "59") {
						dollar_scrap = get_dollar_scrap_items("clothing_33", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "60") {
						dollar_scrap = get_dollar_scrap_items("clothing_35", "normal");
						item_code = "autochangeable";
						item_name = 'Turban';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "61") {
						dollar_scrap = get_dollar_scrap_items("clothing_37", "normal");
						item_code = "autochangeable";
						item_name = 'Exterminator Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "62") {
						dollar_scrap = get_dollar_scrap_items("clothing_39", "normal");
						item_code = "autochangeable";
						item_name = 'Hockey Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "63") {
						dollar_scrap = get_dollar_scrap_items("clothing_44", "normal");
						item_code = "autochangeable";
						item_name = 'Baseball Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "64") {
						dollar_scrap = get_dollar_scrap_items("clothing_48", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "65") {
						dollar_scrap = get_dollar_scrap_items("clothing_49", "normal");
						item_code = "autochangeable";
						item_name = 'Nomad Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "66") {
						dollar_scrap = get_dollar_scrap_items("clothing_53", "normal");
						item_code = "autochangeable";
						item_name = 'Ski Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "67") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "68") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "69") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Tactical Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "70") {
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
				if (eval(chance) >= 0 && eval(chance) < 5000) {
					item_id = Math.floor(Math.random() * 18);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("misc_08", "normal");
						item_code = "autochangeable";
						item_name = 'Wooden Planks';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("food_37", "normal");
						item_code = "autochangeable";
						item_name = 'Dried Truffles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("medication_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin-2';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("medication_09", "normal");
						item_code = "autochangeable";
						item_name = 'Nerotonin 8B';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("medication_08", "normal");
						item_code = "autochangeable";
						item_name = 'Steroids';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("food_32", "normal");
						item_code = "autochangeable";
						item_name = 'Red Wine';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("food_33", "normal");
						item_code = "autochangeable";
						item_name = 'Mixed Nuts';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("food_34", "normal");
						item_code = "autochangeable";
						item_name = 'Caviar';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("food_39", "normal");
						item_code = "autochangeable";
						item_name = 'Whiskey';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "9") {
						dollar_scrap = get_dollar_scrap_items("misc_07", "normal");
						item_code = "autochangeable";
						item_name = 'Nails';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "10") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "11") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Broken Beyond Repair';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "12") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Nothing I Can Use';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "13") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Useless Junk';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "14") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable";
						item_name = 'Not Much Here';
						item_quantity = 0;
						cash_quantity = 0;
						epic_class_name = "no_loot_item";
					}
					if (item_id == "15") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (200 - 50) + 50);
					}
					if (item_id == "16") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (175 - 50) + 50);
					}
					if (item_id == "17") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (150 - 50) + 50);
					}
					if (item_id == "18") {
						dollar_scrap = get_dollar_scrap_items("", "normal");
						item_code = "autochangeable_cash";
						item_name = 'Cash';
						item_quantity = cash_quantity = Math.ceil(Math.random() * (125 - 50) + 50);
					}
				} else if (eval(chance) >= 5000 && eval(chance) < 9990) {
					item_id = Math.floor(Math.random() * 8);

					if (item_id == "0") {
						dollar_scrap = get_dollar_scrap_items("ammo_19", "normal");
						item_code = "";
						item_name = 'Heavy Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (50 - 20) + 20);
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("ammo_07", "normal");
						item_code = "";
						item_name = '.50 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "2") {
						dollar_scrap = get_dollar_scrap_items("ammo_08", "normal");
						item_code = "";
						item_name = '.55 Handgun Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "3") {
						dollar_scrap = get_dollar_scrap_items("ammo_11", "normal");
						item_code = "";
						item_name = '9mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "4") {
						dollar_scrap = get_dollar_scrap_items("ammo_12", "normal");
						item_code = "";
						item_name = '12.7mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "5") {
						dollar_scrap = get_dollar_scrap_items("ammo_13", "normal");
						item_code = "";
						item_name = '14mm Rifle Ammo';
						item_quantity = Math.ceil(Math.random() * (100 - 50) + 50);
						cash_quantity = 0;
					}
					if (item_id == "6") {
						dollar_scrap = get_dollar_scrap_items("ammo_16", "normal");
						item_code = "";
						item_name = '12 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "7") {
						dollar_scrap = get_dollar_scrap_items("ammo_17", "normal");
						item_code = "";
						item_name = '10 Gauge Shells';
						item_quantity = Math.ceil(Math.random() * (100 - 40) + 40);
						cash_quantity = 0;
					}
					if (item_id == "8") {
						dollar_scrap = get_dollar_scrap_items("ammo_18", "normal");
						item_code = "";
						item_name = 'Grenade Ammo';
						item_quantity = Math.ceil(Math.random() * (50 - 20) + 20);
						cash_quantity = 0;
					}
				} else if (eval(chance) >= 9990 && eval(chance) <= 10000) {
					item_id = Math.floor(Math.random() * 70);

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
						dollar_scrap = get_dollar_scrap_items("clothing_57", "normal");
						item_code = "autochangeable";
						item_name = 'Bio Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "1") {
						dollar_scrap = get_dollar_scrap_items("misc_13", "normal");
						item_code = "autochangeable";
						item_name = 'XL Security Box';
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
					if (item_id == "48") {
						dollar_scrap = get_dollar_scrap_items("weapon_117", flag_weapon);
						item_code = "weapon";
						item_name = 'AA-12';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "49") {
						dollar_scrap = get_dollar_scrap_items("weapon_167", flag_weapon);
						item_code = "weapon";
						item_name = 'PAW 20';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "50") {
						dollar_scrap = get_dollar_scrap_items("clothing_13", "normal");
						item_code = "autochangeable";
						item_name = 'Winter Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "51") {
						dollar_scrap = get_dollar_scrap_items("clothing_14", "normal");
						item_code = "autochangeable";
						item_name = 'Motorcycle Jacket';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "52") {
						dollar_scrap = get_dollar_scrap_items("clothing_15", "normal");
						item_code = "autochangeable";
						item_name = 'Trench Coat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "53") {
						dollar_scrap = get_dollar_scrap_items("clothing_23", "normal");
						item_code = "autochangeable";
						item_name = 'Bandana';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "54") {
						dollar_scrap = get_dollar_scrap_items("clothing_24", "normal");
						item_code = "autochangeable";
						item_name = 'Cowboy Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "55") {
						dollar_scrap = get_dollar_scrap_items("clothing_26", "normal");
						item_code = "autochangeable";
						item_name = 'Construction Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "56") {
						dollar_scrap = get_dollar_scrap_items("clothing_27", "normal");
						item_code = "autochangeable";
						item_name = 'Fireman Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "57") {
						dollar_scrap = get_dollar_scrap_items("clothing_28", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "58") {
						dollar_scrap = get_dollar_scrap_items("clothing_32", "normal");
						item_code = "autochangeable";
						item_name = 'Officer Cap';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "59") {
						dollar_scrap = get_dollar_scrap_items("clothing_33", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Hat';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "60") {
						dollar_scrap = get_dollar_scrap_items("clothing_35", "normal");
						item_code = "autochangeable";
						item_name = 'Turban';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "61") {
						dollar_scrap = get_dollar_scrap_items("clothing_37", "normal");
						item_code = "autochangeable";
						item_name = 'Exterminator Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "62") {
						dollar_scrap = get_dollar_scrap_items("clothing_39", "normal");
						item_code = "autochangeable";
						item_name = 'Hockey Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "63") {
						dollar_scrap = get_dollar_scrap_items("clothing_44", "normal");
						item_code = "autochangeable";
						item_name = 'Baseball Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "64") {
						dollar_scrap = get_dollar_scrap_items("clothing_48", "normal");
						item_code = "autochangeable";
						item_name = 'Flying Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "65") {
						dollar_scrap = get_dollar_scrap_items("clothing_49", "normal");
						item_code = "autochangeable";
						item_name = 'Nomad Helmet';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "66") {
						dollar_scrap = get_dollar_scrap_items("clothing_53", "normal");
						item_code = "autochangeable";
						item_name = 'Ski Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "67") {
						dollar_scrap = get_dollar_scrap_items("clothing_54", "normal");
						item_code = "autochangeable";
						item_name = 'Sunglasses';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "68") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Surgical Mask';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "69") {
						dollar_scrap = get_dollar_scrap_items("clothing_55", "normal");
						item_code = "autochangeable";
						item_name = 'Tactical Goggles';
						item_quantity = 1;
						cash_quantity = 0;
					}
					if (item_id == "70") {
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

	var bonus_ammoloot_ingenuity_implant = document.getElementById('bonus_ammoloot_ingenuity_implant').value;
	var bonus_ammoloot_salvage_implant = document.getElementById('bonus_ammoloot_salvage_implant').value;
	var bonus_ammoloot_looter_implant = document.getElementById('bonus_ammoloot_looter_implant').value;
	var bonus_ammoloot_jackofall_implant = document.getElementById('bonus_ammoloot_jackofall_implant').value;
	var bonus_ammoloot_clan_loot_boost = document.getElementById('bonus_ammoloot_clan_loot_boost').value;
	var bonus_ammoloot_weekend_event_loot = document.getElementById('bonus_ammoloot_weekend_event_loot').value;
	var ammo_loot_bonus = eval(bonus_ammoloot_ingenuity_implant) + eval(bonus_ammoloot_salvage_implant) + eval(bonus_ammoloot_looter_implant) + eval(bonus_ammoloot_jackofall_implant) + eval(bonus_ammoloot_clan_loot_boost) + eval(bonus_ammoloot_weekend_event_loot);
	var modified_item_quantity;
	if (eval(item_quantity) == 0) modified_item_quantity = 0;
	else if (eval(item_quantity) > 1) modified_item_quantity = Math.ceil(eval(item_quantity) + (eval(item_quantity) * (eval(ammo_loot_bonus) / eval(100)))) * eval(multiplier_gm_state);
	else modified_item_quantity = 1;
	var modified_dollar_scrap = eval(modified_item_quantity) * eval(dollar_scrap);

	slot_number = loot_spot;
	var slot_number_str = slot_number.toString();
	var slot_number_length = slot_number_str.length;

	if (eval(slot_number_length) == 1 && eval(slot_number) < 10) slot_number = "0" + slot_number;

	document.getElementById('checklist_slot_' + slot_number).disabled = false;
	document.getElementById('quantity_slot_' + slot_number).value = modified_item_quantity;
	document.getElementById('scraps_slot_' + slot_number).value = modified_dollar_scrap;

	if (item_code == 'autochangeable_cash') {
		document.getElementById('item_name_slot_' + slot_number).value = item_name;

		document.getElementById('checklist_slot_' + slot_number).checked = true;

		var bonus_cashloot_wealth_implant = document.getElementById('bonus_cashloot_wealth_implant').value;
		var bonus_cashloot_salvage_implant = document.getElementById('bonus_cashloot_salvage_implant').value;
		var bonus_cashloot_looter_implant = document.getElementById('bonus_cashloot_looter_implant').value;
		var bonus_cashloot_jackofall_implant = document.getElementById('bonus_cashloot_jackofall_implant').value;
		var bonus_cashloot_clan_loot_boost = document.getElementById('bonus_cashloot_clan_loot_boost').value;
		var bonus_cashloot_weekend_event_loot = document.getElementById('bonus_cashloot_weekend_event_loot').value;
		var cash_loot_bonus = eval(bonus_cashloot_wealth_implant) + eval(bonus_cashloot_salvage_implant) + eval(bonus_cashloot_looter_implant) + eval(bonus_cashloot_jackofall_implant) + eval(bonus_cashloot_clan_loot_boost) + eval(bonus_cashloot_weekend_event_loot);
		var modified_cash_quantity = Math.ceil(eval(cash_quantity) + (eval(cash_quantity) * (eval(cash_loot_bonus) / eval(100)))) * eval(multiplier_gm_state);

		document.getElementById('cash_looted').value = modified_cash_quantity;
		var cash_looted = modified_cash_quantity;
		document.getElementById('lbl_cash_looted').innerHTML = "<label id='lbl_cash_looted'><strong>" + numberWithCommas(modified_cash_quantity) + "</strong> Dollars </label>";

		var current_cash_looted = document.getElementById('cash_looted').value;
		var cash_looted = eval(cash_quantity) + eval(current_cash_looted);
		var total_cash_looted = document.getElementById('total_cash_looted').value;

		total_cash_looted = eval(total_cash_looted) + eval(modified_cash_quantity);
		document.getElementById('total_cash_looted').value = total_cash_looted;

		document.getElementById('lbl_total_cash_looted').innerHTML = "<label id='lbl_total_cash_looted'><strong>" + numberWithCommas(total_cash_looted) + "</strong> Dollars </label>";
	} else if (item_code == 'autochangeable') {
		document.getElementById('item_name_slot_' + slot_number).value = item_name;
		document.getElementById('checklist_slot_' + slot_number).checked = true;
	} else if (item_code == 'armor' || item_code == 'weapon') {
		if (item_code == 'armor' && eval(totalStatArmor) > 0) addedName = " MC (" + getStatArmorAgility + "/" + getStatArmorEndurance + ")";
		else if (item_code == 'weapon' && eval(totalStatWeapon) > 0) addedName = " MC (" + getStatWeaponAccuracy + "/" + getStatWeaponReloading + "/" + getStatWeaponCriticalHit + ")";

		document.getElementById('item_name_slot_' + slot_number).value = item_name + addedName;
		document.getElementById('checklist_slot_' + slot_number).checked = false;
	} else {
		document.getElementById('item_name_slot_' + slot_number).value = item_name;
		document.getElementById('checklist_slot_' + slot_number).checked = false;
	}


	if (code == 'looting') loot_spot_used = eval(loot_spot_used) + eval(loot_spot);
	if (code == 'relooting') {
		loot_spot_used = eval(loot_spot_used) + eval(reduce_loot_spot);
		loot_spot_left = eval(loot_spot_left) - eval(reduce_loot_spot);
	}

	document.getElementById('loot_spot_left').value = loot_spot_left;
	document.getElementById('loot_spot_used').value = loot_spot_used;

	document.getElementById('item_name_slot_' + slot_number).className = epic_class_name;
}