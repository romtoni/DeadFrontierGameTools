function check_looting_type(looting_type_param, looting_zone_param) {
	var looting_zone = looting_zone_param;
	var looting_type = looting_type_param;

	if (looting_type == 'boss_hunt') {
		var zombie_boss_name;
		var max_slot_spot;

		switch (looting_zone) {
			case "blue_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='flamingzombie'>Flaming Zombie</option></select>";
				break;
			case "green_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='flamingzombie'>Flaming Zombie</option><option value='mother'>Mother</option><option value='titan'>Titan</option></select>";
				break;
			case "yellow_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='flamingzombie'>Flaming Zombie</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option></select>";
				break;
			case "orange_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option></select>";
				break;
			case "red_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value))'><option value=''>--No Boss--</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option></select>";
				break;
			case "black_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option></select>";
				break;
			case "white_zone":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='flaminglongarm'>Flaming Long Arm</option><option value='flamingrumbler'>Flaming Rumbler</option><option value='flamingfleshhound'>Flaming Flesh Hound</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option><option value='flamingblacktitan'>Flaming Black Titan</option></select>";
				break;
			case "wasteland":
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value, looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option><option value='devilhound'>Devil Hound</option></select>";
				break;

			default:
				zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value,looting_zone.value, looting_type.value)'><option value=''>--No Boss--</option></select>";
				break;
		}
	} else if (looting_type == 'inner_city') {
		zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_max_loot_spot(zombie_boss_name.value,looting_zone.value,looting_type.value)'><option value=''>--No Boss--</option></select>";
	}
	document.getElementById("zombie_boss_name").innerHTML = zombie_boss_name;
	if (looting_type == 'boss_hunt') {
		document.getElementById('max_loot_spot').value = 0;
	} else if (looting_type == 'inner_city') {
		max_loot_spot = 100;
		document.getElementById('max_loot_spot').value = max_loot_spot;
	}
}

function get_max_loot_spot(zombie_boss_name_param, looting_zone_param, looting_type_param) {
	var zombie_boss_name = zombie_boss_name_param;
	var looting_zone = looting_zone_param;
	var looting_type = looting_type_param;

	if (looting_type == 'boss_hunt') {
		switch (looting_zone) {
			case "blue_zone":
				max_loot_spot = 1;
				break;
			case "green_zone":
				max_loot_spot = 1;
				break;
			case "yellow_zone":
				max_loot_spot = 1;
				break;
			case "orange_zone":
				max_loot_spot = 1;
				break;
			case "red_zone":
				max_loot_spot = 1;
				break;
			case "black_zone":
				if (zombie_boss_name == 'flamingblacktitan' || zombie_boss_name == 'blacktitan') max_loot_spot = 1;
				else if (zombie_boss_name == 'flaminglongarm' || zombie_boss_name == 'flamingrumbler' || zombie_boss_name == 'flamingfleshhound') max_loot_spot = 5;
				else max_loot_spot = 2;
				break;
			case "white_zone":
				if (zombie_boss_name == 'flamingblacktitan' || zombie_boss_name == 'blacktitan') max_loot_spot = 1;
				else if (zombie_boss_name == 'flaminglongarm' || zombie_boss_name == 'flamingrumbler' || zombie_boss_name == 'flamingfleshhound') max_loot_spot = 5;
				else max_loot_spot = 2;
				break;
			case "wasteland":
				max_loot_spot = 1;
				break;

			default:
				max_loot_spot = 0;
				break;
		}
		document.getElementById('max_loot_spot').value = max_loot_spot;
	} else if (looting_type == 'inner_city') {
		max_loot_spot = 100;
		document.getElementById('max_loot_spot').value = max_loot_spot;
	}
}

function check_implant(implant_name_param) {
	var implant_name = implant_name_param;

	if (document.getElementById(implant_name).checked == true) {
		document.getElementById(implant_name + '_slot').disabled = false;
		if (document.getElementById('bonus_weaponchance_' + implant_name) != null) document.getElementById('bonus_weaponchance_' + implant_name).disabled = false;
		if (document.getElementById('bonus_armorchance_' + implant_name) != null) document.getElementById('bonus_armorchance_' + implant_name).disabled = false;
		if (document.getElementById('bonus_ammoloot_' + implant_name) != null) document.getElementById('bonus_ammoloot_' + implant_name).disabled = false;
		if (document.getElementById('bonus_cashloot_' + implant_name) != null) document.getElementById('bonus_cashloot_' + implant_name).disabled = false;
	} else {
		document.getElementById(implant_name + '_slot').value = 0;
		document.getElementById(implant_name + '_slot').disabled = true;
		if (document.getElementById('bonus_weaponchance_' + implant_name) != null) {
			document.getElementById('bonus_weaponchance_' + implant_name).disabled = true;
			document.getElementById('bonus_weaponchance_' + implant_name).value = 0;
		}
		if (document.getElementById('bonus_armorchance_' + implant_name) != null) {
			document.getElementById('bonus_armorchance_' + implant_name).disabled = true;
			document.getElementById('bonus_armorchance_' + implant_name).value = 0;
		}
		if (document.getElementById('bonus_ammoloot_' + implant_name) != null) {
			document.getElementById('bonus_ammoloot_' + implant_name).disabled = true;
			document.getElementById('bonus_ammoloot_' + implant_name).value = 0;
		}
		if (document.getElementById('bonus_cashloot_' + implant_name) != null) {
			document.getElementById('bonus_cashloot_' + implant_name).disabled = true;
			document.getElementById('bonus_cashloot_' + implant_name).value = 0;
		}
	}
}

function check_level(level_param) {
	var level = eval(level_param);
	if (level == "") {
		document.getElementById("level").value = 0;
		document.getElementById("implant_maxslot").disabled = true;
		document.getElementById("implant_remainingslot").disabled = true;
		level = 0;
	}

	if (level == 0) {
		document.getElementById("implant_maxslot").disabled = true;
		document.getElementById("implant_remainingslot").disabled = true;
		document.getElementById("implant_maxslot").value = 0;
		document.getElementById("implant_remainingslot").value = 0;
	} else if (level >= 1 && level < 51) {
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false;
		document.getElementById("implant_maxslot").value = 0;
		document.getElementById("implant_remainingslot").value = 0;
	} else if (level >= 51 && level < 120) {
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false;
		document.getElementById("implant_maxslot").value = 4;
		document.getElementById("implant_remainingslot").value = 4;
	} else if (level >= 120 && level < 220) {
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false;
		document.getElementById("implant_maxslot").value = 8;
		document.getElementById("implant_remainingslot").value = 8;
	} else if (level >= 220 && level < 325) {
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false;
		document.getElementById("implant_maxslot").value = 12;
		document.getElementById("implant_remainingslot").value = 12;
	} else if (level >= 325) {
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false;
		document.getElementById("implant_maxslot").value = 16;
		document.getElementById("implant_remainingslot").value = 16;
	}

	document.getElementById("rage_implant").checked = false;
	document.getElementById("rage_implant_slot").value = 0;
	document.getElementById("rage_implant_slot").disabled = true;

	document.getElementById("experience_implant").checked = false;
	document.getElementById("experience_implant_slot").value = 0;
	document.getElementById("experience_implant_slot").disabled = true;

	document.getElementById("agility_implant").checked = false;
	document.getElementById("agility_implant_slot").value = 0;
	document.getElementById("agility_implant_slot").disabled = true;

	document.getElementById("survival_implant").checked = false;
	document.getElementById("survival_implant_slot").value = 0;
	document.getElementById("survival_implant_slot").disabled = true;

	document.getElementById("notoriety_implant").checked = false;
	document.getElementById("notoriety_implant_slot").value = 0;
	document.getElementById("notoriety_implant_slot").disabled = true;

	document.getElementById("hunter_implant").checked = false;
	document.getElementById("hunter_implant_slot").value = 0;
	document.getElementById("hunter_implant_slot").disabled = true;

	document.getElementById("scavenger_implant").checked = false;
	document.getElementById("scavenger_implant_slot").value = 0;
	document.getElementById("scavenger_implant_slot").disabled = true;

	document.getElementById("ingenuity_implant").checked = false;
	document.getElementById("ingenuity_implant_slot").value = 0;
	document.getElementById("ingenuity_implant_slot").disabled = true;

	document.getElementById("wealth_implant").checked = false;
	document.getElementById("wealth_implant_slot").value = 0;
	document.getElementById("wealth_implant_slot").disabled = true;

	document.getElementById("violence_implant").checked = false;
	document.getElementById("violence_implant_slot").value = 0;
	document.getElementById("violence_implant_slot").disabled = true;

	document.getElementById("perception_implant").checked = false;
	document.getElementById("perception_implant_slot").value = 0;
	document.getElementById("perception_implant_slot").disabled = true;

	document.getElementById("hyper_implant").checked = false;
	document.getElementById("hyper_implant_slot").value = 0;
	document.getElementById("hyper_implant_slot").disabled = true;

	document.getElementById("ironskin_implant").checked = false;
	document.getElementById("ironskin_implant_slot").value = 0;
	document.getElementById("ironskin_implant_slot").disabled = true;

	document.getElementById("salvage_implant").checked = false;
	document.getElementById("salvage_implant_slot").value = 0;
	document.getElementById("salvage_implant_slot").disabled = true;

	document.getElementById("motl_implant").checked = false;
	document.getElementById("motl_implant_slot").value = 0;
	document.getElementById("motl_implant_slot").disabled = true;

	document.getElementById("destruction_implant").checked = false;
	document.getElementById("destruction_implant_slot").value = 0;
	document.getElementById("destruction_implant_slot").disabled = true;

	document.getElementById("genius_implant").checked = false;
	document.getElementById("genius_implant_slot").value = 0;
	document.getElementById("genius_implant_slot").disabled = true;

	document.getElementById("haste_implant").checked = false;
	document.getElementById("haste_implant_slot").value = 0;
	document.getElementById("haste_implant_slot").disabled = true;

	document.getElementById("looter_implant").checked = false;
	document.getElementById("looter_implant_slot").value = 0;
	document.getElementById("looter_implant_slot").disabled = true;

	document.getElementById("jackofall_implant").checked = false;
	document.getElementById("jackofall_implant_slot").value = 0;
	document.getElementById("jackofall_implant_slot").disabled = true;

	document.getElementById("clan_loot_boost").value = "";
	document.getElementById("bonus_weaponchance_clan_loot_boost").value = 0;
	document.getElementById("bonus_weaponchance_clan_loot_boost").disabled = true;
	document.getElementById("bonus_armorchance_clan_loot_boost").value = 0;
	document.getElementById("bonus_armorchance_clan_loot_boost").disabled = true;
	document.getElementById("bonus_ammoloot_clan_loot_boost").value = 0;
	document.getElementById("bonus_ammoloot_clan_loot_boost").disabled = true;
	document.getElementById("bonus_cashloot_clan_loot_boost").value = 0;
	document.getElementById("bonus_cashloot_clan_loot_boost").disabled = true;

	document.getElementById("damage_boost").checked = false;
	document.getElementById("exp_boost").checked = false;
	document.getElementById("speed_boost").checked = false;

	document.getElementById("weekend_event_weaponarmor_loot_chance").value = "N";
	document.getElementById("weekend_event_ammo_loot_bonus").value = "N";
	document.getElementById("weekend_event_cash_loot_bonus").value = "N";

	document.getElementById("bonus_weaponchance_weekend_event_loot").value = 0;
	document.getElementById("bonus_weaponchance_weekend_event_loot").disabled = true;
	document.getElementById("bonus_armorchance_weekend_event_loot").value = 0;
	document.getElementById("bonus_armorchance_weekend_event_loot").disabled = true;
	document.getElementById("bonus_ammoloot_weekend_event_loot").value = 0;
	document.getElementById("bonus_ammoloot_weekend_event_loot").disabled = true;
	document.getElementById("bonus_cashloot_weekend_event_loot").value = 0;
	document.getElementById("bonus_cashloot_weekend_event_loot").disabled = true;
}

function sum_all_slot() {
	var rage_implant_slot = document.getElementById('rage_implant_slot').value;
	var experience_implant_slot = document.getElementById('experience_implant_slot').value;
	var agility_implant_slot = document.getElementById('agility_implant_slot').value;
	var survival_implant_slot = document.getElementById('survival_implant_slot').value;
	var notoriety_implant_slot = document.getElementById('notoriety_implant_slot').value;
	var survival_implant_slot = document.getElementById('survival_implant_slot').value;
	var hunter_implant_slot = document.getElementById('hunter_implant_slot').value;
	var scavenger_implant_slot = document.getElementById('scavenger_implant_slot').value;
	var ingenuity_implant_slot = document.getElementById('ingenuity_implant_slot').value;
	var wealth_implant_slot = document.getElementById('wealth_implant_slot').value;

	var violence_implant_slot = document.getElementById('violence_implant_slot').value;
	var perception_implant_slot = document.getElementById('perception_implant_slot').value;
	var hyper_implant_slot = document.getElementById('hyper_implant_slot').value;
	var ironskin_implant_slot = document.getElementById('ironskin_implant_slot').value;
	var salvage_implant_slot = document.getElementById('salvage_implant_slot').value;

	var motl_implant_slot = document.getElementById('motl_implant_slot').value;
	var destruction_implant_slot = document.getElementById('destruction_implant_slot').value;
	var genius_implant_slot = document.getElementById('genius_implant_slot').value;
	var haste_implant_slot = document.getElementById('haste_implant_slot').value;
	var looter_implant_slot = document.getElementById('looter_implant_slot').value;
	var jackofall_implant_slot = document.getElementById('jackofall_implant_slot').value;

	var total_used_slot = eval(rage_implant_slot) + eval(experience_implant_slot) + eval(agility_implant_slot) + eval(survival_implant_slot) + eval(survival_implant_slot) + eval(notoriety_implant_slot) + eval(survival_implant_slot) + eval(hunter_implant_slot) + eval(scavenger_implant_slot) + eval(ingenuity_implant_slot) + eval(wealth_implant_slot) + eval(violence_implant_slot) + eval(perception_implant_slot) + eval(hyper_implant_slot) + eval(ironskin_implant_slot) + eval(salvage_implant_slot) + eval(motl_implant_slot) + eval(destruction_implant_slot) + eval(genius_implant_slot) + eval(haste_implant_slot) + eval(looter_implant_slot) + eval(jackofall_implant_slot);
	return total_used_slot;
}

function count_slot(max_implant_slot_param, implant_name_param, add_slot_param) {
	var implant_name = implant_name_param;
	var add_slot = add_slot_param;
	if (add_slot == "" || add_slot == "undefined") add_slot = 0;

	var max_implant_slot = eval(max_implant_slot_param);
	var total_used_slot = sum_all_slot();
	var remaining_implant_slot = eval(max_implant_slot) - eval(total_used_slot);

	if (remaining_implant_slot < 0) {
		alert('Implant slot is overlimit');
		document.getElementById('implant_remainingslot').value = eval(max_implant_slot) - eval(total_used_slot) + eval(add_slot);
		count_implant_bonus(implant_name, 0);
	} else {
		document.getElementById('implant_remainingslot').value = remaining_implant_slot;
		count_implant_bonus(implant_name, add_slot);
	}
}

function count_implant_bonus(implant_name_param, implant_slot_param) {
	var implant_name = implant_name_param;
	var implant_slot = implant_slot_param;
	var bonus_implant_weapon = 0;
	var bonus_implant_armor = 0;
	var bonus_implant_ammo = 0;
	var bonus_implant_cash = 0;

	if (implant_name == 'hunter_implant') bonus_implant_weapon = eval(implant_slot) * eval(3);
	else if (implant_name == 'scavenger_implant') bonus_implant_armor = eval(implant_slot) * eval(3);
	else if (implant_name == 'ingenuity_implant') bonus_implant_ammo = eval(implant_slot) * eval(5);
	else if (implant_name == 'wealth_implant') bonus_implant_cash = eval(implant_slot) * eval(5);
	else if (implant_name == 'salvage_implant') {
		bonus_implant_weapon = eval(implant_slot) * eval(5);
		bonus_implant_armor = eval(implant_slot) * eval(5);
		bonus_implant_ammo = eval(implant_slot) * eval(5);
		bonus_implant_cash = eval(implant_slot) * eval(5);
	} else if (implant_name == 'looter_implant') {
		bonus_implant_weapon = eval(implant_slot) * eval(30);
		bonus_implant_armor = eval(implant_slot) * eval(30);
		bonus_implant_ammo = eval(implant_slot) * eval(30);
		bonus_implant_cash = eval(implant_slot) * eval(30);
	} else if (implant_name == 'jackofall_implant') {
		bonus_implant_weapon = eval(implant_slot) * eval(15);
		bonus_implant_armor = eval(implant_slot) * eval(15);
		bonus_implant_ammo = eval(implant_slot) * eval(15);
		bonus_implant_cash = eval(implant_slot) * eval(15);
	}


	if (document.getElementById('bonus_weaponchance_' + implant_name) != null) document.getElementById('bonus_weaponchance_' + implant_name).value = bonus_implant_weapon;
	if (document.getElementById('bonus_armorchance_' + implant_name) != null) document.getElementById('bonus_armorchance_' + implant_name).value = bonus_implant_armor;
	if (document.getElementById('bonus_ammoloot_' + implant_name) != null) document.getElementById('bonus_ammoloot_' + implant_name).value = bonus_implant_ammo;
	if (document.getElementById('bonus_cashloot_' + implant_name) != null) document.getElementById('bonus_cashloot_' + implant_name).value = bonus_implant_cash;

	document.getElementById(implant_name + '_slot').value = implant_slot;
}

function check_boost(boost_name_param) {
	var boost_name = boost_name_param;
	//alert (boost_name);

	if (document.getElementById(boost_name).checked == true) {
		if (boost_name == "clan_loot_boost") {
			document.getElementById('bonus_weaponchance_clan_loot_boost').value = 0;
			document.getElementById('bonus_weaponchance_clan_loot_boost').disabled = false;
			document.getElementById('bonus_armorchance_clan_loot_boost').value = 0;
			document.getElementById('bonus_armorchance_clan_loot_boost').disabled = false;
			document.getElementById('bonus_ammoloot_clan_loot_boost').value = 0;
			document.getElementById('bonus_ammoloot_clan_loot_boost').disabled = false;
			document.getElementById('bonus_cashloot_clan_loot_boost').value = 0;
			document.getElementById('bonus_cashloot_clan_loot_boost').disabled = false;
		}
	} else {
		if (boost_name == "clan_loot_boost") {
			document.getElementById('bonus_weaponchance_clan_loot_boost').value = 0;
			document.getElementById('bonus_weaponchance_clan_loot_boost').disabled = true;
			document.getElementById('bonus_armorchance_clan_loot_boost').value = 0;
			document.getElementById('bonus_armorchance_clan_loot_boost').disabled = true;
			document.getElementById('bonus_ammoloot_clan_loot_boost').value = 0;
			document.getElementById('bonus_ammoloot_clan_loot_boost').disabled = true;
			document.getElementById('bonus_cashloot_clan_loot_boost').value = 0;
			document.getElementById('bonus_cashloot_clan_loot_boost').disabled = true;
		}
	}
}

function check_weekend_event_weaponarmorloot(weekend_event_loot_param) {
	var weekend_event_loot = weekend_event_loot_param;

	if (weekend_event_loot == "" || weekend_event_loot == "N") {
		document.getElementById('bonus_weaponchance_weekend_event_loot').value = 0;
		document.getElementById('bonus_weaponchance_weekend_event_loot').disabled = true;
		document.getElementById('bonus_armorchance_weekend_event_loot').value = 0;
		document.getElementById('bonus_armorchance_weekend_event_loot').disabled = true;
	} else if (weekend_event_loot == "Y") {
		document.getElementById('bonus_weaponchance_weekend_event_loot').value = 200;
		document.getElementById('bonus_weaponchance_weekend_event_loot').disabled = false;
		document.getElementById('bonus_armorchance_weekend_event_loot').value = 200;
		document.getElementById('bonus_armorchance_weekend_event_loot').disabled = false;
	}
}

function check_weekend_event_ammoloot(weekend_event_loot_param) {
	var weekend_event_loot = weekend_event_loot_param;

	if (weekend_event_loot == "" || weekend_event_loot == "N") {
		document.getElementById('bonus_ammoloot_weekend_event_loot').value = 0;
		document.getElementById('bonus_ammoloot_weekend_event_loot').disabled = true;
	} else if (weekend_event_loot == "Y") {
		document.getElementById('bonus_ammoloot_weekend_event_loot').value = 200;
		document.getElementById('bonus_ammoloot_weekend_event_loot').disabled = false;
	}
}

function check_weekend_event_cashloot(weekend_event_loot_param) {
	var weekend_event_loot = weekend_event_loot_param;

	if (weekend_event_loot == "" || weekend_event_loot == "N") {
		document.getElementById('bonus_cashloot_weekend_event_loot').value = 0;
		document.getElementById('bonus_cashloot_weekend_event_loot').disabled = true;
	} else if (weekend_event_loot == "Y") {
		document.getElementById('bonus_cashloot_weekend_event_loot').value = 200;
		document.getElementById('bonus_cashloot_weekend_event_loot').disabled = false;
	}
}

function process_looting() {
	var zone = document.getElementById('looting_zone').value;
	var gm_state = document.getElementById('gm_state').value;
	var max_chance = 10000;
	var chance;
	var min_inventory_slot = 1;
	var max_inventory_slot = 30;
	var min_loot_spot = 1;
	var max_loot_spot = document.getElementById('max_loot_spot').value;
	var loot_spot;
	var looting_type = document.getElementById('looting_type').value;
	var looting_zone = document.getElementById('looting_zone').value;
	var loot_spot_used = 0;
	var loot_spot_left = max_loot_spot;
	var code = 'looting';
	var reduce_loot_spot = 0;

	document.getElementById('total_cash_looted').value = 0;
	document.getElementById('total_dollar_scrap').value = 0;
	document.getElementById('total_dollar_per_loot_run').value = 0;

	for (loot_spot = min_inventory_slot; loot_spot <= max_inventory_slot; loot_spot++) {
		chance = Math.floor(Math.random() * max_chance);
		if (looting_type == 'inner_city') {
			get_looting_item_name(gm_state, zone, loot_spot, loot_spot_used, loot_spot_left, chance, code, max_chance, reduce_loot_spot);
			sum_all_scrap();
			sum_all_dollar_per_loot_run();
			sum_ammo_looted_per_type();
		} else if (looting_type == 'boss_hunt') {
			get_looting_item_name_boss(gm_state, zone, loot_spot, loot_spot_used, chance);
			empty_all_slot();
			sum_all_scrap();
			sum_all_dollar_per_loot_run();
		}
	}

	if (looting_type == 'inner_city') {
		loot_spot_used = document.getElementById('loot_spot_used').value;
		var loot_spot_left = eval(max_loot_spot) - eval(loot_spot_used);
		document.getElementById('loot_spot_left').value = loot_spot_left;

		document.getElementById('btnreloot').disabled = false;
	} else if (looting_type == 'boss_hunt') {
		loot_spot_used = document.getElementById('max_loot_spot').value;
		document.getElementById('loot_spot_left').value = 0;
		document.getElementById('loot_spot_used').value = 0;
		document.getElementById('btnreloot').disabled = true;
	}

}


function process_relooting() {
	var max_loot_spot = document.getElementById('loot_spot_left').value;
	if (eval(max_loot_spot) == 0) {
		alert('No more loot spot available');
		document.getElementById('btnreloot').disabled = true;
	} else {
		var zone = document.getElementById('looting_zone').value;
		var gm_state = document.getElementById('gm_state').value;
		var max_chance = 10000;
		var chance;
		var min_inventory_slot = 1;
		var max_inventory_slot = 30;
		var min_loot_spot = 1;
		var loot_spot;
		var looting_type = document.getElementById('looting_type').value;
		var looting_zone = document.getElementById('looting_zone').value;
		var loot_spot_used = document.getElementById('loot_spot_used').value;
		var loot_spot_left = document.getElementById('loot_spot_left').value;
		var checklist_slot;
		var code = 'relooting';
		var loot_spot_left = max_loot_spot;
		var reduce_loot_spot = 0;
		for (loot_spot = min_inventory_slot; loot_spot <= max_inventory_slot; loot_spot++) {
			if (eval(loot_spot) < 10) loot_spot = "0" + loot_spot;
			checklist_slot = document.getElementById('checklist_slot_' + loot_spot).checked;
			if (checklist_slot == true) {
				reduce_loot_spot = eval(reduce_loot_spot) + eval(1);
				if (eval(reduce_loot_spot) > eval(loot_spot_left)) {
					document.getElementById('checklist_slot_' + loot_spot).checked = false;
					reduce_loot_spot = loot_spot_left;

				}
				checklist_slot = document.getElementById('checklist_slot_' + loot_spot).checked;
				if (checklist_slot == true) {
					chance = Math.floor(Math.random() * max_chance);
					if (looting_type == 'inner_city') get_looting_item_name(gm_state, zone, loot_spot, loot_spot_used, loot_spot_left, chance, code, max_chance, reduce_loot_spot);
				}
			}
		}
		sum_all_scrap();
		sum_all_dollar_per_loot_run();
		sum_ammo_looted_per_type();
	}
}

function empty_all_slot() {
	var max_loot_spot = document.getElementById('max_loot_spot').value;
	var extra_slot_number = eval(max_loot_spot) + 1;
	for (slot_number = extra_slot_number; slot_number <= 30; slot_number++) {
		if (eval(slot_number) < 10) slot_number = "0" + slot_number;
		document.getElementById('checklist_slot_' + slot_number).checked = false;
		document.getElementById('item_name_slot_' + slot_number).value = "";
		document.getElementById('quantity_slot_' + slot_number).value = "";
		document.getElementById('scraps_slot_' + slot_number).value = "";
	}
	document.getElementById('total_handgun_32').value = 0;
	document.getElementById('total_handgun_9mm').value = 0;
	document.getElementById('total_handgun_357').value = 0;
	document.getElementById('total_handgun_38').value = 0;
	document.getElementById('total_handgun_40').value = 0;
	document.getElementById('total_handgun_45').value = 0;
	document.getElementById('total_handgun_50').value = 0;
	document.getElementById('total_handgun_55').value = 0;
	document.getElementById('total_rifle_55mm').value = 0;
	document.getElementById('total_rifle_75mm').value = 0;
	document.getElementById('total_rifle_9mm').value = 0;
	document.getElementById('total_rifle_127mm').value = 0;
	document.getElementById('total_rifle_14mm').value = 0;
	document.getElementById('total_shotgun_20g').value = 0;
	document.getElementById('total_shotgun_16g').value = 0;
	document.getElementById('total_shotgun_12g').value = 0;
	document.getElementById('total_shotgun_10g').value = 0;
	document.getElementById('total_explosive_grenade').value = 0;
	document.getElementById('total_explosive_heavygrenade').value = 0;

}

function sum_ammo_looted_per_type() {
	var max_slot_number = 30;
	var slot_number;
	var total_handgun_32 = 0;
	var total_handgun_9mm = 0;
	var total_handgun_357 = 0;
	var total_handgun_38 = 0;
	var total_handgun_40 = 0;
	var total_handgun_45 = 0;
	var total_handgun_50 = 0;
	var total_handgun_55 = 0;
	var total_rifle_55mm = 0;
	var total_rifle_75mm = 0;
	var total_rifle_9mm = 0;
	var total_rifle_127mm = 0;
	var total_rifle_14mm = 0;
	var total_shotgun_20g = 0;
	var total_shotgun_16g = 0;
	var total_shotgun_12g = 0;
	var total_shotgun_10g = 0;
	var total_explosive_grenade = 0;
	var total_explosive_heavygrenade = 0;
	var item_name;
	var quantity;
	for (slot_number = 1; slot_number <= max_slot_number; slot_number++) {
		if (eval(slot_number) < 10) slot_number = "0" + slot_number;
		item_name = document.getElementById('item_name_slot_' + slot_number).value;
		quantity = document.getElementById('quantity_slot_' + slot_number).value;

		if (item_name == '.32 Handgun Ammo') total_handgun_32 = eval(total_handgun_32) + eval(quantity);
		if (item_name == '9mm Handgun Ammo') total_handgun_9mm = eval(total_handgun_9mm) + eval(quantity);
		if (item_name == '.357 Handgun Ammo') total_handgun_357 = eval(total_handgun_357) + eval(quantity);
		if (item_name == '.38 Handgun Ammo') total_handgun_38 = eval(total_handgun_38) + eval(quantity);
		if (item_name == '.40 Handgun Ammo') total_handgun_40 = eval(total_handgun_40) + eval(quantity);
		if (item_name == '.45 Handgun Ammo') total_handgun_45 = eval(total_handgun_45) + eval(quantity);
		if (item_name == '.50 Handgun Ammo') total_handgun_50 = eval(total_handgun_50) + eval(quantity);
		if (item_name == '.55 Handgun Ammo') total_handgun_55 = eval(total_handgun_55) + eval(quantity);
		if (item_name == '5.5mm Rifle Ammo') total_rifle_55mm = eval(total_rifle_55mm) + eval(quantity);
		if (item_name == '7.5mm Rifle Ammo') total_rifle_75mm = eval(total_rifle_75mm) + eval(quantity);
		if (item_name == '9mm Rifle Ammo') total_rifle_9mm = eval(total_rifle_9mm) + eval(quantity);
		if (item_name == '12.7mm Rifle Ammo') total_rifle_127mm = eval(total_rifle_127mm) + eval(quantity);
		if (item_name == '14mm Rifle Ammo') total_rifle_14mm = eval(total_rifle_14mm) + eval(quantity);
		if (item_name == '20 Gauge Shells') total_shotgun_20g = eval(total_shotgun_20g) + eval(quantity);
		if (item_name == '16 Gauge Shells') total_shotgun_16g = eval(total_shotgun_16g) + eval(quantity);
		if (item_name == '12 Gauge Shells') total_shotgun_12g = eval(total_shotgun_12g) + eval(quantity);
		if (item_name == '10 Gauge Shells') total_shotgun_10g = eval(total_shotgun_10g) + eval(quantity);
		if (item_name == 'Grenade Ammo') total_explosive_grenade = eval(total_explosive_grenade) + eval(quantity);
		if (item_name == 'Heavy Grenade Ammo') total_explosive_heavygrenade = eval(total_explosive_heavygrenade) + eval(quantity);
	}
	document.getElementById('total_handgun_32').value = total_handgun_32;
	document.getElementById('total_handgun_9mm').value = total_handgun_9mm;
	document.getElementById('total_handgun_357').value = total_handgun_357;
	document.getElementById('total_handgun_38').value = total_handgun_38;
	document.getElementById('total_handgun_40').value = total_handgun_40;
	document.getElementById('total_handgun_45').value = total_handgun_45;
	document.getElementById('total_handgun_50').value = total_handgun_50;
	document.getElementById('total_handgun_55').value = total_handgun_55;
	document.getElementById('total_rifle_55mm').value = total_rifle_55mm;
	document.getElementById('total_rifle_75mm').value = total_rifle_75mm;
	document.getElementById('total_rifle_9mm').value = total_rifle_9mm;
	document.getElementById('total_rifle_127mm').value = total_rifle_127mm;
	document.getElementById('total_rifle_14mm').value = total_rifle_14mm;
	document.getElementById('total_shotgun_20g').value = total_shotgun_20g;
	document.getElementById('total_shotgun_16g').value = total_shotgun_16g;
	document.getElementById('total_shotgun_12g').value = total_shotgun_12g;
	document.getElementById('total_shotgun_10g').value = total_shotgun_10g;
	document.getElementById('total_explosive_grenade').value = total_explosive_grenade;
	document.getElementById('total_explosive_heavygrenade').value = total_explosive_heavygrenade;
}

function sum_all_scrap() {
	var max_slot_number = 30;
	var slot_number;
	var total_dollar_scrap = 0;
	for (slot_number = 1; slot_number <= max_slot_number; slot_number++) {
		if (eval(slot_number) < 10) slot_number = "0" + slot_number;
		dollar_scrap = document.getElementById('scraps_slot_' + slot_number).value;
		if (dollar_scrap == "") dollar_scrap = 0;
		total_dollar_scrap = eval(total_dollar_scrap) + eval(dollar_scrap);
	}
	document.getElementById('total_dollar_scrap').value = total_dollar_scrap;
	document.getElementById('lbl_total_dollar_scrap').innerHTML = "<label id='lbl_total_dollar_scrap'><strong>" + numberWithCommas(total_dollar_scrap) + "</strong> Dollars </label>";
}

function sum_all_dollar_per_loot_run() {
	var total_cash_looted = document.getElementById('total_cash_looted').value;
	var total_dollar_scrap = document.getElementById('total_dollar_scrap').value;
	var total_dollar_per_loot_run = eval(total_cash_looted) + eval(total_dollar_scrap);

	document.getElementById('total_dollar_per_loot_run').value = total_dollar_per_loot_run;
	document.getElementById('lbl_total_dollar_per_loot_run').innerHTML = "<label id='lbl_total_dollar_per_loot_run'><strong>" + numberWithCommas(total_dollar_per_loot_run) + "</strong> Dollars</label>";
}


function numberWithCommas(value_param) {
	return value_param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function download_excel_looting_formula() {
	window.open("df_loot_table.xlsx");
}