function check_route(route_param) {
	var route = route_param;
	var total_blocks;

	switch (route) {
		case "nh_to_ds":
			total_blocks = 20;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "nh_to_p13":
			total_blocks = 31;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "nh_to_fp":
			total_blocks = 32;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "nh_to_sb":
			total_blocks = 68;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "ds_to_nh":
			total_blocks = 20;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "ds_to_p13":
			total_blocks = 40;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "ds_to_fp":
			total_blocks = 41;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "ds_to_sb":
			total_blocks = 71;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "p13_to_nh":
			total_blocks = 75;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "p13_to_ds":
			total_blocks = 40;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "p13_to_fp":
			total_blocks = 33;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "p13_to_sb":
			total_blocks = 75;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "fp_to_nh":
			total_blocks = 32;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "fp_to_ds":
			total_blocks = 41;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "fp_to_p13":
			total_blocks = 33;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "fp_to_sb":
			total_blocks = 41;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "sb_to_nh":
			total_blocks = 68;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "sb_to_ds":
			total_blocks = 71;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "sb_to_p13":
			total_blocks = 75;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "sb_to_fp":
			total_blocks = 41;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
		case "others":
			total_blocks = 0;
			document.getElementById("total_blocks").readOnly = false;
			document.getElementById("total_blocks").className = "inputnumber_editable";
			break;
		default:
			total_blocks = 0;
			document.getElementById("total_blocks").readOnly = true;
			document.getElementById("total_blocks").className = "inputnumber";
			break;
	}

	document.getElementById("total_blocks").value = total_blocks;

	var endurance = document.getElementById("endurance").value;
	check_endurance(endurance);

	var agility = document.getElementById("agility").value;
	check_agility(agility);

}

function check_implant(implant_name_param) {
	var implant_name = implant_name_param;

	if (document.getElementById(implant_name).checked == true) {
		document.getElementById(implant_name + '_slot').disabled = false;
		if (document.getElementById('bonus_speed_' + implant_name) != null) document.getElementById('bonus_speed_' + implant_name).disabled = false;
	} else {
		document.getElementById(implant_name + '_slot').value = 0;
		document.getElementById(implant_name + '_slot').disabled = true;
		if (document.getElementById('bonus_speed_' + implant_name) != null) {
			document.getElementById('bonus_speed_' + implant_name).disabled = true;
			document.getElementById('bonus_speed_' + implant_name).value = 0;
		}
	}
}

function check_endurance(endurance_param) {
	var endurance = endurance_param;

	if (endurance > 124) endurance = 124;
	else if (endurance < 25) endurance = 25;

	document.getElementById("endurance").value = endurance;
}

function check_agility(agility_param) {
	var agility = agility_param;

	if (agility > 124) agility = 124;
	else if (agility < 25) agility = 25;

	document.getElementById("agility").value = agility;
	count_modified_agility();
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

	document.getElementById("damage_boost").checked = false;
	document.getElementById("exp_boost").checked = false;
	document.getElementById("speed_boost").checked = false;

	document.getElementById("weekend_event_speed").value = "";
	document.getElementById("bonus_weekend_event_speed").value = 0;
	document.getElementById("bonus_weekend_event_speed").disabled = true;

	document.getElementById("modified_agility").value = 25;
	document.getElementById("walkspeed").value = 0;
	document.getElementById("runspeed").value = 0;
	document.getElementById("speed_duration").value = 0;
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
	var bonus_implant_speed = 0;

	if (implant_name == 'agility_implant') bonus_implant_speed = eval(implant_slot) * eval(0.75);
	else if (implant_name == 'hyper_implant') bonus_implant_speed = eval(implant_slot) * eval(1.5);
	else if (implant_name == 'motl_implant') bonus_implant_speed = eval(implant_slot) * eval(5);
	else if (implant_name == 'haste_implant') bonus_implant_speed = eval(implant_slot) * eval(10);
	else if (implant_name == 'jackofall_implant') bonus_implant_speed = eval(implant_slot) * eval(3.5);

	if (document.getElementById('bonus_speed_' + implant_name) != null) document.getElementById('bonus_speed_' + implant_name).value = bonus_implant_speed;
	document.getElementById(implant_name + '_slot').value = implant_slot;

	count_modified_agility();
}

function check_boost(boost_name_param) {
	var boost_name = boost_name_param;
	//alert (boost_name);

	if (document.getElementById(boost_name).checked == true) {
		if (boost_name == "speed_boost") {
			document.getElementById('bonus_speed_boost').value = 35
		}
	} else {
		if (boost_name == "speed_boost") {
			document.getElementById('bonus_speed_boost').value = 0;
		}
	}
	count_modified_agility();
}

function check_weekend_event_speed(weekend_event_speed_param) {
	var weekend_event_speed = weekend_event_speed_param;

	if (weekend_event_speed == "" || weekend_event_speed == "N") {
		document.getElementById('bonus_weekend_event_speed').value = 0;
		document.getElementById('bonus_weekend_event_speed').disabled = true;
	} else if (weekend_event_speed == "Y")

	{
		document.getElementById('bonus_weekend_event_speed').value = 100;
		document.getElementById('bonus_weekend_event_speed').disabled = false;
	}
	count_modified_agility();
}

function count_modified_agility() {
	var agility = document.getElementById("agility").value;
	get_time_used(agility);

	var endurance = document.getElementById("endurance").value;
	var bonus_speed_agility_implant = document.getElementById("bonus_speed_agility_implant").value;
	var bonus_speed_hyper_implant = document.getElementById("bonus_speed_hyper_implant").value;
	var bonus_speed_motl_implant = document.getElementById("bonus_speed_motl_implant").value;
	var bonus_speed_haste_implant = document.getElementById("bonus_speed_haste_implant").value;
	var bonus_speed_jackofall_implant = document.getElementById("bonus_speed_jackofall_implant").value;
	var bonus_speed_boost = document.getElementById("bonus_speed_boost").value;
	var bonus_weekend_event_speed = document.getElementById("bonus_weekend_event_speed").value;

	var modified_agility = eval(agility) + (eval(agility) * eval(bonus_speed_agility_implant) / eval(100)) + (eval(agility) * eval(bonus_speed_hyper_implant) / eval(100)) + (eval(agility) * eval(bonus_speed_motl_implant) / eval(100)) + (eval(agility) * eval(bonus_speed_haste_implant) / eval(100)) + (eval(agility) * eval(bonus_speed_jackofall_implant) / eval(100)) + (eval(agility) * eval(bonus_speed_boost) / eval(100)) + (eval(agility) * eval(bonus_weekend_event_speed) / eval(100));

	document.getElementById("modified_agility").value = modified_agility;

	count_walkspeed(modified_agility);
	count_runspeed(modified_agility);
	count_speed_duration(endurance);

	count_default_time_used_per_block();
}

function count_walkspeed(modified_agility_param) {
	var modified_agility = modified_agility_param;
	var walkspeed = eval(1.2) * ((eval(modified_agility) * eval(0.0043)) + eval(1.1)) * eval(2.2);

	document.getElementById("walkspeed").value = walkspeed;
}

function count_runspeed(modified_agility_param) {
	var modified_agility = modified_agility_param;
	var runspeed = eval(1.2) * ((eval(modified_agility) * eval(0.0043)) + eval(1.1)) * eval(3.5);

	document.getElementById("runspeed").value = runspeed;
}

function count_speed_duration(endurance_param) {
	var endurance = endurance_param;
	var speed_duration = (eval(endurance) - eval(25)) / eval(6.1875) + eval(24);

	document.getElementById("speed_duration").value = speed_duration;
}

function count_default_time_used_per_block() {
	var multiplier = document.getElementById('multiplier').value;
	var time_used_per_agility = document.getElementById('time_used_per_agility').value;
	var energy_used_per_agility = document.getElementById('energy_used_per_agility').value;

	var bonus_speed_agility_implant = document.getElementById("bonus_speed_agility_implant").value;
	var bonus_speed_hyper_implant = document.getElementById("bonus_speed_hyper_implant").value;
	var bonus_speed_motl_implant = document.getElementById("bonus_speed_motl_implant").value;
	var bonus_speed_haste_implant = document.getElementById("bonus_speed_haste_implant").value;
	var bonus_speed_jackofall_implant = document.getElementById("bonus_speed_jackofall_implant").value;
	var bonus_speed_boost = document.getElementById("bonus_speed_boost").value;
	var bonus_weekend_event_speed = document.getElementById("bonus_weekend_event_speed").value;

	var total_bonus_implant = eval(bonus_speed_agility_implant) + eval(bonus_speed_hyper_implant) + eval(bonus_speed_motl_implant) + eval(bonus_speed_haste_implant) + eval(bonus_speed_jackofall_implant);
	var total_bonus_agility_modifier = (eval(total_bonus_implant) + eval(bonus_speed_boost) + eval(bonus_weekend_event_speed)) / eval(100);

	var default_time_used_per_block = (eval(44.15) - (eval(multiplier) * (eval(15) / eval(100)))) - (eval(time_used_per_agility) * (eval(total_bonus_agility_modifier)) * eval(100));

	document.getElementById("default_time_used_per_block").value = default_time_used_per_block;
}


function process_travelling_time() {
	var modified_agility = document.getElementById("modified_agility").value;
	var default_time_used_per_block = document.getElementById("default_time_used_per_block").value;
	var total_blocks = document.getElementById("total_blocks").value;
	var recovery_time = 60;
	var total_estimated_travelling_time = " 0 minutes";

	var total_running_time = (eval(default_time_used_per_block) * eval(total_blocks));
	var total_recovery_time = (eval(recovery_time) * eval(total_blocks));
	//alert(total_running_time);
	//alert(total_recovery_time);
	var rough_travelling_time = eval(total_running_time) + eval(total_recovery_time);

	var total_estimated_travelling_time_hour = Math.floor(Math.ceil(eval(rough_travelling_time) / eval(60)) / eval(60));
	var total_estimated_travelling_time_minutes = Math.ceil(eval(rough_travelling_time) / eval(60)) % eval(60);

	var total_estimated_travelling_time = total_estimated_travelling_time_hour + " hours " + total_estimated_travelling_time_minutes + " minutes";

	document.getElementById('lbl_estimated_travelling_time').innerHTML = "<lable id='lbl_estimated_travelling_time'>" + total_running_time + " + " + total_recovery_time + " = <strong>" + rough_travelling_time + "</strong> seconds = <strong>" + total_estimated_travelling_time + "</strong></label>";
}

function download_excel_travelling_time_formula() {
	window.open("df_estimated_travelling_time.xlsx");
}