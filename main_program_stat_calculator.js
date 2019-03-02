function check_profession(profession_param, profession_old_param) {

	var profession = profession_param;
	var profession_old = profession_old_param;

	if (profession == "") {
		document.getElementById('strength').readOnly = true;
		document.getElementById('endurance').readOnly = true;
		document.getElementById('agility').readOnly = true;
		document.getElementById('accuracy').readOnly = true;
		document.getElementById('critical_hit').readOnly = true;
		document.getElementById('reloading').readOnly = true;

		document.getElementById('melee').readOnly = true;
		document.getElementById('pistol').readOnly = true;
		document.getElementById('rifle').readOnly = true;
		document.getElementById('shotgun').readOnly = true;
		document.getElementById('machine_gun').readOnly = true;
		document.getElementById('explosive').readOnly = true;

		document.getElementById('weapon_accuracy1').readOnly = true;
		document.getElementById('weapon_reloading1').readOnly = true;
		document.getElementById('weapon_critical_hit1').readOnly = true;

		document.getElementById('weapon_accuracy2').readOnly = true;
		document.getElementById('weapon_reloading2').readOnly = true;
		document.getElementById('weapon_critical_hit2').readOnly = true;

		document.getElementById('weapon_accuracy3').readOnly = true;
		document.getElementById('weapon_reloading3').readOnly = true;
		document.getElementById('weapon_critical_hit3').readOnly = true;

		document.getElementById('armor_endurance').readOnly = true;
		document.getElementById('armor_agility').readOnly = true;
	} else {
		document.getElementById('strength').readOnly = false;
		document.getElementById('endurance').readOnly = false;
		document.getElementById('agility').readOnly = false;
		document.getElementById('accuracy').readOnly = false;
		document.getElementById('critical_hit').readOnly = false;
		document.getElementById('reloading').readOnly = false;

		document.getElementById('melee').readOnly = false;
		document.getElementById('pistol').readOnly = false;
		document.getElementById('rifle').readOnly = false;
		document.getElementById('shotgun').readOnly = false;
		document.getElementById('machine_gun').readOnly = false;
		document.getElementById('explosive').readOnly = false;

		document.getElementById('weapon_accuracy1').readOnly = false;
		document.getElementById('weapon_reloading1').readOnly = false;
		document.getElementById('weapon_critical_hit1').readOnly = false;

		document.getElementById('weapon_accuracy2').readOnly = false;
		document.getElementById('weapon_reloading2').readOnly = false;
		document.getElementById('weapon_critical_hit2').readOnly = false;

		document.getElementById('weapon_accuracy3').readOnly = false;
		document.getElementById('weapon_reloading3').readOnly = false;
		document.getElementById('weapon_critical_hit3').readOnly = false;

		document.getElementById('armor_endurance').readOnly = false;
		document.getElementById('armor_agility').readOnly = false;
	}


	if (profession != profession_old) {
		document.getElementById('profession_old').value = profession;
		document.getElementById('target_level').value = 1;
		document.getElementById('stat_available_point').value = 0;
		document.getElementById('total_stat_point_used').value = 0;
		document.getElementById('max_stat_point').value = 0;
		document.getElementById('proficiency_available_point').value = 0;
		document.getElementById('total_proficiency_point_used').value = 0;
		document.getElementById('max_proficiency_point').value = 0;

	}

	switch (profession) {
		case "boxer":
			bonus_strength = 20;
			bonus_endurance = 0;
			bonus_agility = 0;
			bonus_accuracy = 0;
			bonus_critical_hit = 0;
			bonus_reloading = 0;
			bonus_melee = 10;
			bonus_pistol = 0;
			bonus_rifle = 0;
			bonus_shotgun = 0;
			bonus_machine_gun = 0;
			bonus_explosive = 0;
			break;
		case "soldier":
			bonus_strength = 5;
			bonus_endurance = 10;
			bonus_agility = 0;
			bonus_accuracy = 10;
			bonus_critical_hit = 0;
			bonus_reloading = 10;
			bonus_melee = 0;
			bonus_pistol = 0;
			bonus_rifle = 0;
			bonus_shotgun = 0;
			bonus_machine_gun = 10;
			bonus_explosive = 0;
			break;
		case "policeofficer":
			bonus_strength = 0;
			bonus_endurance = 0;
			bonus_agility = 0;
			bonus_accuracy = 10;
			bonus_critical_hit = 0;
			bonus_reloading = 5;
			bonus_melee = 0;
			bonus_pistol = 10;
			bonus_rifle = 0;
			bonus_shotgun = 10;
			bonus_machine_gun = 0;
			bonus_explosive = 0;
			break;

		case "fireman":
			bonus_strength = 0;
			bonus_endurance = 20;
			bonus_agility = 0;
			bonus_accuracy = 0;
			bonus_critical_hit = 0;
			bonus_reloading = 0;
			bonus_melee = 10;
			bonus_pistol = 0;
			bonus_rifle = 0;
			bonus_shotgun = 0;
			bonus_machine_gun = 0;
			bonus_explosive = 0;
			break;
		case "athlete":
			bonus_strength = 0;
			bonus_endurance = 0;
			bonus_agility = 25;
			bonus_accuracy = 0;
			bonus_critical_hit = 0;
			bonus_reloading = 0;
			bonus_melee = 0;
			bonus_pistol = 0;
			bonus_rifle = 0;
			bonus_shotgun = 0;
			bonus_machine_gun = 0;
			bonus_explosive = 0;
			break;
		case "student":
			bonus_strength = 1;
			bonus_endurance = 2;
			bonus_agility = 2;
			bonus_accuracy = 0;
			bonus_critical_hit = 0;
			bonus_reloading = 0;
			bonus_melee = 0;
			bonus_pistol = 0;
			bonus_rifle = 0;
			bonus_shotgun = 0;
			bonus_machine_gun = 0;
			bonus_explosive = 0;
			break;
		default:
			bonus_strength = 0;
			bonus_endurance = 0;
			bonus_agility = 0;
			bonus_accuracy = 0;
			bonus_critical_hit = 0;
			bonus_reloading = 0;
			bonus_melee = 0;
			bonus_pistol = 0;
			bonus_rifle = 0;
			bonus_shotgun = 0;
			bonus_machine_gun = 0;
			bonus_explosive = 0;
			break;
	}

	var default_strength = 25;
	var default_endurance = 25;
	var default_agility = 25;
	var default_accuracy = 25;
	var default_critical_hit = 25;
	var default_reloading = 25;

	var default_melee = 5;
	var default_pistol = 5;
	var default_rifle = 0;
	var default_shotgun = 0;
	var default_machine_gun = 0;
	var default_explosive = 0;

	document.getElementById('strength').value = eval(default_strength) + eval(bonus_strength);
	document.getElementById('endurance').value = eval(default_endurance) + eval(bonus_endurance);
	document.getElementById('agility').value = eval(default_agility) + eval(bonus_agility);
	document.getElementById('accuracy').value = eval(default_accuracy) + eval(bonus_accuracy);
	document.getElementById('critical_hit').value = eval(default_critical_hit) + eval(bonus_critical_hit);
	document.getElementById('reloading').value = eval(default_reloading) + eval(bonus_reloading);

	document.getElementById('melee').value = eval(default_melee) + eval(bonus_melee);
	document.getElementById('pistol').value = eval(default_pistol) + eval(bonus_pistol);
	document.getElementById('rifle').value = eval(default_rifle) + eval(bonus_rifle);
	document.getElementById('shotgun').value = eval(default_shotgun) + eval(bonus_shotgun);
	document.getElementById('machine_gun').value = eval(default_machine_gun) + eval(bonus_machine_gun);
	document.getElementById('explosive').value = eval(default_explosive) + eval(bonus_explosive);

	var total_stat_point_used = (eval(default_strength) + eval(bonus_strength)) + (eval(default_endurance) + eval(bonus_endurance)) + (eval(default_agility) + eval(bonus_agility)) + (eval(default_accuracy) + eval(bonus_accuracy)) + (eval(default_critical_hit) + eval(bonus_critical_hit)) + (eval(default_reloading) + eval(bonus_reloading));
	document.getElementById('total_stat_point_used').value = total_stat_point_used;

	var stat_available_point = document.getElementById("stat_available_point").value;
	var max_stat_point = eval(total_stat_point_used) + eval(stat_available_point);
	document.getElementById("max_stat_point").value = max_stat_point;

	var total_proficiency_point_used = (eval(default_melee) + eval(bonus_melee)) + (eval(default_pistol) + eval(bonus_pistol)) + (eval(default_rifle) + eval(bonus_rifle)) + (eval(default_shotgun) + eval(bonus_shotgun)) + (eval(default_machine_gun) + eval(bonus_machine_gun)) + (eval(default_explosive) + eval(bonus_explosive));
	document.getElementById('total_proficiency_point_used').value = total_proficiency_point_used;

	var proficiency_available_point = document.getElementById("proficiency_available_point").value;
	var max_proficiency_point = eval(total_proficiency_point_used) + eval(proficiency_available_point);
	document.getElementById("max_proficiency_point").value = max_proficiency_point;


	document.getElementById('strength_default').value = eval(default_strength) + eval(bonus_strength);
	document.getElementById('endurance_default').value = eval(default_endurance) + eval(bonus_endurance);
	document.getElementById('agility_default').value = eval(default_agility) + eval(bonus_agility);
	document.getElementById('accuracy_default').value = eval(default_accuracy) + eval(bonus_accuracy);
	document.getElementById('critical_hit_default').value = eval(default_critical_hit) + eval(bonus_critical_hit);
	document.getElementById('reloading_default').value = eval(default_reloading) + eval(bonus_reloading);

	document.getElementById('melee_default').value = eval(default_melee) + eval(bonus_melee);
	document.getElementById('pistol_default').value = eval(default_pistol) + eval(bonus_pistol);
	document.getElementById('rifle_default').value = eval(default_rifle) + eval(bonus_rifle);
	document.getElementById('shotgun_default').value = eval(default_shotgun) + eval(bonus_shotgun);
	document.getElementById('machine_gun_default').value = eval(default_machine_gun) + eval(bonus_machine_gun);
	document.getElementById('explosive_default').value = eval(default_explosive) + eval(bonus_explosive);

	process_stat_calculator();
}

function check_target_level(target_level_param) {
	var target_level = target_level_param;
	var total_stat;
	var total_proficiency;
	var target_level_stat_after_50;
	var target_level_proficiency_after_50;
	var target_level_stat_after_220;
	var target_level_proficiency_after_220;

	if (eval(target_level) < 1) target_level = 1;

	if (eval(target_level) <= 50) {
		total_stat = (eval(target_level) * eval(5)) - eval(5);
		total_proficiency = (eval(target_level) * eval(5)) - eval(5);
	} else if (eval(target_level) > 50 && eval(target_level) <= 220) {
		target_level_stat_after_50 = eval(target_level) - eval(50);
		target_level_proficiency_after_50 = eval(target_level) - eval(50);
		total_stat = 245 + (eval(target_level_stat_after_50) * eval(1));
		total_proficiency = 245 + eval(eval(target_level_proficiency_after_50) * eval(2));
	} else if (eval(target_level) > 220 && eval(target_level) <= 325) {
		target_level_stat_after_220 = eval(target_level) - eval(220);
		target_level_proficiency_after_220 = eval(target_level) - eval(220);
		total_stat = 415 + (eval(target_level_stat_after_220) * eval(0));
		total_proficiency = 585 + eval(eval(target_level_proficiency_after_220) * eval(1));
	}

	document.getElementById('target_level').value = target_level;
	document.getElementById('stat_available_point').value = total_stat;
	document.getElementById('proficiency_available_point').value = total_proficiency;

	var profession = document.getElementById('list_profession').value;
	var profession_old = document.getElementById('profession_old').value;
	check_profession(profession, profession_old);
}

function sum_all_stat() {
	var strength = document.getElementById('strength').value;
	var endurance = document.getElementById('endurance').value;
	var agility = document.getElementById('agility').value;
	var accuracy = document.getElementById('accuracy').value;
	var critical_hit = document.getElementById('critical_hit').value;
	var reloading = document.getElementById('reloading').value;
	var max_stat_point = document.getElementById('max_stat_point').value;
	var stat_available_point = document.getElementById('stat_available_point').value;

	var strength_default = document.getElementById('strength_default').value;
	var endurance_default = document.getElementById('endurance_default').value;
	var agility_default = document.getElementById('agility_default').value;
	var accuracy_default = document.getElementById('accuracy_default').value;
	var critical_hit_default = document.getElementById('critical_hit_default').value;
	var reloading_default = document.getElementById('reloading_default').value;

	if (eval(strength) > 100) strength = 100;
	else if (eval(strength) < eval(strength_default)) strength = strength_default;

	if (eval(endurance) > 100) endurance = 100;
	else if (eval(endurance) < eval(endurance_default)) endurance = strength_default;

	if (eval(agility) > 100) agility = 100;
	else if (eval(agility) < eval(agility_default)) agility = strength_default;

	if (eval(accuracy) > 100) accuracy = 100;
	else if (eval(accuracy) < eval(accuracy_default)) accuracy = strength_default;

	if (eval(critical_hit) > 100) critical_hit = 100;
	else if (eval(critical_hit) < eval(critical_hit_default)) critical_hit = strength_default;

	if (eval(reloading) > 100) reloading = 100;
	else if (eval(reloading) < eval(reloading_default)) reloading = strength_default;


	var total_stat_point_used = eval(strength) + eval(endurance) + eval(agility) + eval(accuracy) + eval(critical_hit) + eval(reloading);
	var stat_available_point = eval(max_stat_point) - eval(total_stat_point_used);

	document.getElementById("total_stat_point_used").value = total_stat_point_used;
	document.getElementById("stat_available_point").value = stat_available_point;

	document.getElementById('strength').value = strength;
	document.getElementById('endurance').value = endurance;
	document.getElementById('agility').value = agility;
	document.getElementById('accuracy').value = accuracy;
	document.getElementById('critical_hit').value = critical_hit;
	document.getElementById('reloading').value = reloading;
	process_stat_calculator();
}

function sum_all_proficiency() {
	var melee = document.getElementById('melee').value;
	var pistol = document.getElementById('pistol').value;
	var rifle = document.getElementById('rifle').value;
	var shotgun = document.getElementById('shotgun').value;
	var machine_gun = document.getElementById('machine_gun').value;
	var explosive = document.getElementById('explosive').value;
	var max_proficiency_point = document.getElementById('max_proficiency_point').value;
	var proficiency_available_point = document.getElementById('proficiency_available_point').value;

	var melee_default = document.getElementById('melee_default').value;
	var pistol_default = document.getElementById('pistol_default').value;
	var rifle_default = document.getElementById('rifle_default').value;
	var shotgun_default = document.getElementById('shotgun_default').value;
	var machine_gun_default = document.getElementById('machine_gun_default').value;
	var explosive_default = document.getElementById('explosive_default').value;

	if (eval(melee) > 120) melee = 120;
	else if (eval(melee) < eval(melee_default)) melee = melee_default;

	if (eval(pistol) > 120) pistol = 120;
	else if (eval(pistol) < eval(pistol_default)) pistol = pistol_default;

	if (eval(rifle) > 120) rifle = 120;
	else if (eval(rifle) < eval(rifle_default)) rifle = rifle_default;

	if (eval(shotgun) > 120) shotgun = 120;
	else if (eval(shotgun) < eval(shotgun_default)) shotgun = shotgun_default;

	if (eval(machine_gun) > 120) machine_gun = 120;
	else if (eval(machine_gun) < eval(machine_gun_default)) machine_gun = machine_gun_default;

	if (eval(explosive) > 120) explosive = 120;
	else if (eval(explosive) < eval(explosive_default)) explosive = explosive_default;


	var total_proficiency_point_used = eval(melee) + eval(pistol) + eval(rifle) + eval(shotgun) + eval(machine_gun) + eval(explosive);
	var proficiency_available_point = eval(max_proficiency_point) - eval(total_proficiency_point_used);

	document.getElementById("total_proficiency_point_used").value = total_proficiency_point_used;
	document.getElementById("proficiency_available_point").value = proficiency_available_point;

	document.getElementById('melee').value = melee;
	document.getElementById('pistol').value = pistol;
	document.getElementById('rifle').value = rifle;
	document.getElementById('shotgun').value = shotgun;
	document.getElementById('machine_gun').value = machine_gun;
	document.getElementById('explosive').value = explosive;

	process_stat_calculator();
}

function check_added_stat(stat_id_param, stat_value_param) {
	var stat_id = stat_id_param;
	var stat_value = stat_value_param;

	if (eval(stat_value) > 8) document.getElementById(stat_id).value = 8;
	else document.getElementById(stat_id).value = stat_value;

	process_stat_calculator();
}

function check_added_stat_armor(stat_id_param, stat_value_param) {
	var stat_id = stat_id_param;
	var stat_value = stat_value_param;

	if (eval(stat_value) > 24) document.getElementById(stat_id).value = 24;
	else document.getElementById(stat_id).value = stat_value;

	process_stat_calculator();
}

function process_stat_calculator() {
	document.getElementById('curr_level').value = document.getElementById('target_level').value;
	document.getElementById('curr_strength').value = document.getElementById('strength').value;
	document.getElementById('curr_endurance').value = document.getElementById('endurance').value;
	document.getElementById('curr_agility').value = document.getElementById('agility').value;

	var stat_accuracy = document.getElementById('accuracy').value;
	var weapon_accuracy1 = document.getElementById('weapon_accuracy1').value;
	var weapon_accuracy2 = document.getElementById('weapon_accuracy2').value;
	var weapon_accuracy3 = document.getElementById('weapon_accuracy3').value;

	document.getElementById('curr_accuracy').value = eval(stat_accuracy) + eval(weapon_accuracy1) + eval(weapon_accuracy2) + eval(weapon_accuracy3);

	var stat_reloading = document.getElementById('reloading').value;
	var weapon_reloading1 = document.getElementById('weapon_reloading1').value;
	var weapon_reloading2 = document.getElementById('weapon_reloading2').value;
	var weapon_reloading3 = document.getElementById('weapon_reloading3').value;

	document.getElementById('curr_reloading').value = eval(stat_reloading) + eval(weapon_reloading1) + eval(weapon_reloading2) + eval(weapon_reloading3);

	var stat_critical_hit = document.getElementById('critical_hit').value;
	var weapon_critical_hit1 = document.getElementById('weapon_critical_hit1').value;
	var weapon_critical_hit2 = document.getElementById('weapon_critical_hit2').value;
	var weapon_critical_hit3 = document.getElementById('weapon_critical_hit3').value;

	document.getElementById('curr_critical_hit').value = eval(stat_critical_hit) + eval(weapon_critical_hit1) + eval(weapon_critical_hit2) + eval(weapon_critical_hit3);

	var stat_agility = document.getElementById('agility').value;
	var armor_agility = document.getElementById('armor_agility').value;

	document.getElementById('curr_agility').value = eval(stat_agility) + eval(armor_agility);

	var stat_endurance = document.getElementById('endurance').value;
	var armor_endurance = document.getElementById('armor_endurance').value;

	document.getElementById('curr_endurance').value = eval(stat_endurance) + eval(armor_endurance);
}

function download_excel_formula() {
	window.open("df_stat_calculator.xlsx");
}