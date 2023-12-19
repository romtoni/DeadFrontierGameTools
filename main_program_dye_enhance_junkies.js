function display() {
	document.getElementById('table_enhance').style.display = 'block';
	document.getElementById('table_dye').style.display = 'none';
	
	document.getElementById('lbl_result_weapon').style.display = 'block';
	document.getElementById('lbl_result_armor').style.display = 'none';
}

function check_mode_choices(mode_choices_param) {
	var mode_choices = mode_choices_param;

	if (mode_choices == "enhance") {
		document.getElementById('table_enhance').style.display = 'block';
		document.getElementById('table_dye').style.display = 'none';

	}

	if (mode_choices == "dye") {
		document.getElementById('table_enhance').style.display = 'none';
		document.getElementById('table_dye').style.display = 'block';

	}
	document.getElementById("item_choices_dye").value = "";
	document.getElementById("dye_cost").value = "";
	document.getElementById("item_target_dye").value = "";

	document.getElementById("item_color_available").innerHTML = "<select name='item_color_available' id='item_color_available'><option value='' selected='selected'>--Colors Available--</option></select>";
	document.getElementById("item_choices").value = "";
	document.getElementById("enhance_cost").value = "";
	document.getElementById("weapon_item_target").value = "";
	document.getElementById("weapon_item_target").disabled = true;
	document.getElementById("weapon_accuracy_mc").disabled = true;
	document.getElementById("weapon_reloading_mc").disabled = true;
	document.getElementById("weapon_criticalhit_mc").disabled = true;
	document.getElementById("weapon_accuracy_mc").className = "inputnumber";
	document.getElementById("weapon_reloading_mc").className = "inputnumber";
	document.getElementById("weapon_criticalhit_mc").className = "inputnumber";
	document.getElementById("weapon_accuracy_mc").value = "";
	document.getElementById("weapon_reloading_mc").value = "";
	document.getElementById("weapon_criticalhit_mc").value = "";

	document.getElementById("armor_item_target").value = "";
	document.getElementById("armor_item_target").disabled = true;
	document.getElementById("armor_agility_mc").disabled = true;
	document.getElementById("armor_endurance_mc").disabled = true;
	document.getElementById("armor_agility_mc").className = "inputnumber";
	document.getElementById("armor_endurance_mc").className = "inputnumber";
	document.getElementById("armor_agility_mc").value = "";
	document.getElementById("armor_endurance_mc").value = "";
}