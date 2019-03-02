function display_none()
{
	document.getElementById("tr_hr_singlezombie").style.display = "none";
	document.getElementById("table_singlezombie").style.display = "none";
		
	document.getElementById("tr_hr_zonebased").style.display = "none";
	document.getElementById("table_zonebased").style.display = "none";
}

function check_gameplaymode(mode_param)
{
	var gameplay_mode = mode_param;
	if (mode_param == 'multiplayer')
	{
		alert("Not available yet");
		document.getElementById("gameplaymode").value = "singleplayer";
		
		document.getElementById("zombie").value = "";
		document.getElementById("zombie_hp").value=0;
		document.getElementById("zombie_exp").value=0;
		
		document.getElementById("weapon").value = "";
		document.getElementById("base_dps").value=0;
		document.getElementById("critical_hit_dps").value=0;
		
		document.getElementById("level").value=0;
		document.getElementById("implant_maxslot").value=0;
		
		document.getElementById("rage_implant").checked = false;
		document.getElementById("rage_implant_slot").value=0;
		document.getElementById("rage_implant_slot").disabled = true;
		
		document.getElementById("experience_implant").checked = false;
		document.getElementById("experience_implant_slot").value=0;
		document.getElementById("experience_implant_slot").disabled = true;
		
		document.getElementById("agility_implant").checked = false;
		document.getElementById("agility_implant_slot").value=0;
		document.getElementById("agility_implant_slot").disabled = true;
		
		document.getElementById("survival_implant").checked = false;
		document.getElementById("survival_implant_slot").value=0;
		document.getElementById("survival_implant_slot").disabled = true;
		
		document.getElementById("notoriety_implant").checked = false;
		document.getElementById("notoriety_implant_slot").value=0;
		document.getElementById("notoriety_implant_slot").disabled = true;
		
		document.getElementById("hunter_implant").checked = false;
		document.getElementById("hunter_implant_slot").value=0;
		document.getElementById("hunter_implant_slot").disabled = true;
		
		document.getElementById("scavenger_implant").checked = false;
		document.getElementById("scavenger_implant_slot").value=0;
		document.getElementById("scavenger_implant_slot").disabled = true;
		
		document.getElementById("ingenuity_implant").checked = false;
		document.getElementById("ingenuity_implant_slot").value=0;
		document.getElementById("ingenuity_implant_slot").disabled = true;
		
		document.getElementById("wealth_implant").checked = false;
		document.getElementById("wealth_implant_slot").value=0;
		document.getElementById("wealth_implant_slot").disabled = true;
		
		document.getElementById("violence_implant").checked = false;
		document.getElementById("violence_implant_slot").value=0;
		document.getElementById("violence_implant_slot").disabled = true;
		
		document.getElementById("perception_implant").checked = false;
		document.getElementById("perception_implant_slot").value=0;
		document.getElementById("perception_implant_slot").disabled = true;
		
		document.getElementById("hyper_implant").checked = false;
		document.getElementById("hyper_implant_slot").value=0;
		document.getElementById("hyper_implant_slot").disabled = true;
		
		document.getElementById("ironskin_implant").checked = false;
		document.getElementById("ironskin_implant_slot").value=0;
		document.getElementById("ironskin_implant_slot").disabled = true;
		
		document.getElementById("salvage_implant").checked = false;
		document.getElementById("salvage_implant_slot").value=0;
		document.getElementById("salvage_implant_slot").disabled = true;
		
		document.getElementById("motl_implant").checked = false;
		document.getElementById("motl_implant_slot").value=0;
		document.getElementById("motl_implant_slot").disabled = true;
		
		document.getElementById("destruction_implant").checked = false;
		document.getElementById("destruction_implant_slot").value=0;
		document.getElementById("destruction_implant_slot").disabled = true;
		
		document.getElementById("genius_implant").checked = false;
		document.getElementById("genius_implant_slot").value=0;
		document.getElementById("genius_implant_slot").disabled = true;
		
		document.getElementById("haste_implant").checked = false;
		document.getElementById("haste_implant_slot").value=0;
		document.getElementById("haste_implant_slot").disabled = true;
		
		document.getElementById("looter_implant").checked = false;
		document.getElementById("looter_implant_slot").value=0;
		document.getElementById("looter_implant_slot").disabled = true;
		
		document.getElementById("jackofall_implant").checked = false;
		document.getElementById("jackofall_implant_slot").value=0;
		document.getElementById("jackofall_implant_slot").disabled = true;
		
		document.getElementById("damage_boost").checked = false;
		document.getElementById("exp_boost").checked = false;
		document.getElementById("speed_boost").checked = false;
		
		document.getElementById("char_class").value = "";
		document.getElementById("bonus_exp_char_class").value=0;
		document.getElementById("bonus_exp_char_class").disabled = true;
		
		document.getElementById("hunger_state").value = "";
		
		document.getElementById("weekend_event_exp").value = "";
		document.getElementById("bonus_weekend_event_exp").value=0;
		document.getElementById("bonus_weekend_event_exp").disabled = true;
		
		document.getElementById("weekend_event_damage").value = "";
		document.getElementById("bonus_weekend_event_damage").value=0;
		document.getElementById("bonus_weekend_event_damage").disabled = true;
		
		document.getElementById("gm_state").value = "";

	}
}

function check_calculation_method(calculation_method_param)
{
	var calculation_method = calculation_method_param;

	if (calculation_method == "singlezombie")
	{
		document.getElementById("tr_hr_singlezombie").style.display = "block";
		document.getElementById("table_singlezombie").style.display = "block";
		
		document.getElementById("tr_hr_zonebased").style.display = "none";
		document.getElementById("table_zonebased").style.display = "none";
	}
	else if (calculation_method == "zonebased")
	{
		document.getElementById("tr_hr_singlezombie").style.display = "none";
		document.getElementById("table_singlezombie").style.display = "none";
		
		document.getElementById("tr_hr_zonebased").style.display = "block";
		document.getElementById("table_zonebased").style.display = "block";
	}
	else
	{
		document.getElementById("tr_hr_singlezombie").style.display = "none";
		document.getElementById("table_singlezombie").style.display = "none";
		
		document.getElementById("tr_hr_zonebased").style.display = "none";
		document.getElementById("table_zonebased").style.display = "none";
	}
	
	document.getElementById("zombie_hp").value = 0;
	document.getElementById("zombie_exp").value = 0;
	
	document.getElementById("single_zombie_hp").value = 0;
	document.getElementById("single_zombie_exp").value = 0;
	
	document.getElementById("grinding_zone").value = "";
	document.getElementById("zombie_boss_name").value = "";
	document.getElementById("zombie_boss_spawn_rate").value = 0;
	document.getElementById("zombie_boss_spawn").value = 0;
	document.getElementById("zombie_boss_hp").value = 0;
	document.getElementById("zombie_boss_exp").value = 0;
	
	document.getElementById("zombie").value = "";
	
	check_grinding_zone("");
	check_boss_zone("");
	
}

function check_implant(implant_name_param)
{
	var implant_name = implant_name_param;
	//alert (implant_name);
	
	if (document.getElementById(implant_name).checked == true) 
	{
		document.getElementById(implant_name+'_slot').disabled = false;
		if (document.getElementById('bonus_damage_'+implant_name) != null) document.getElementById('bonus_damage_'+implant_name).disabled = false;
		if (document.getElementById('bonus_exp_'+implant_name) != null) document.getElementById('bonus_exp_'+implant_name).disabled = false;
	}
	else
	{
		document.getElementById(implant_name+'_slot').value = 0;
		document.getElementById(implant_name+'_slot').disabled = true;
		if (document.getElementById('bonus_damage_'+implant_name) != null) 
        {
            document.getElementById('bonus_damage_'+implant_name).disabled = true;
			document.getElementById('bonus_damage_'+implant_name).value = 0;
        }
        if (document.getElementById('bonus_exp_'+implant_name) != null) 
        {
            document.getElementById('bonus_exp_'+implant_name).disabled = true;	
            document.getElementById('bonus_exp_'+implant_name).value = 0;
        }
	}
}

function check_level(level_param)
{
	var level = eval(level_param);
	if (level == "") 
	{
		document.getElementById("level").value=0;
		document.getElementById("implant_maxslot").disabled = true;
		document.getElementById("implant_remainingslot").disabled = true; 
		level = 0;
	}
	
	if (level == 0)
	{ 
		document.getElementById("implant_maxslot").disabled = true;
		document.getElementById("implant_remainingslot").disabled = true; 
		document.getElementById("implant_maxslot").value=0; 
		document.getElementById("implant_remainingslot").value=0; 
	}
	else if (level >= 1 && level < 51) 
	{ 
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false; 
		document.getElementById("implant_maxslot").value=0; 
		document.getElementById("implant_remainingslot").value=0; 
	}
	else if (level >= 51 && level < 120) 
	{ 
		document.getElementById("implant_maxslot").disabled = false; 
		document.getElementById("implant_remainingslot").disabled = false; 
		document.getElementById("implant_maxslot").value=4; 
		document.getElementById("implant_remainingslot").value=4; 
	}
	else if (level >= 120 && level < 220) 
	{ 
		document.getElementById("implant_maxslot").disabled = false; 
		document.getElementById("implant_remainingslot").disabled = false; 
		document.getElementById("implant_maxslot").value=8; 
		document.getElementById("implant_remainingslot").value=8; 
	}
	else if (level >= 220 && level < 325) 
	{ 
		document.getElementById("implant_maxslot").disabled = false; 
		document.getElementById("implant_remainingslot").disabled = false; 
		document.getElementById("implant_maxslot").value=12;
		document.getElementById("implant_remainingslot").value=12; 
	}
	else if (level >= 325)
	{ 
		document.getElementById("implant_maxslot").disabled = false;
		document.getElementById("implant_remainingslot").disabled = false; 
		document.getElementById("implant_maxslot").value=16; 
		document.getElementById("implant_remainingslot").value=16; 
	}
	
	document.getElementById("rage_implant").checked = false;
	document.getElementById("rage_implant_slot").value=0;
	document.getElementById("rage_implant_slot").disabled = true;
	
	document.getElementById("experience_implant").checked = false;
	document.getElementById("experience_implant_slot").value=0;
	document.getElementById("experience_implant_slot").disabled = true;
	
	document.getElementById("agility_implant").checked = false;
	document.getElementById("agility_implant_slot").value=0;
	document.getElementById("agility_implant_slot").disabled = true;
	
	document.getElementById("survival_implant").checked = false;
	document.getElementById("survival_implant_slot").value=0;
	document.getElementById("survival_implant_slot").disabled = true;
	
	document.getElementById("notoriety_implant").checked = false;
	document.getElementById("notoriety_implant_slot").value=0;
	document.getElementById("notoriety_implant_slot").disabled = true;
	
	document.getElementById("hunter_implant").checked = false;
	document.getElementById("hunter_implant_slot").value=0;
	document.getElementById("hunter_implant_slot").disabled = true;
	
	document.getElementById("scavenger_implant").checked = false;
	document.getElementById("scavenger_implant_slot").value=0;
	document.getElementById("scavenger_implant_slot").disabled = true;
	
	document.getElementById("ingenuity_implant").checked = false;
	document.getElementById("ingenuity_implant_slot").value=0;
	document.getElementById("ingenuity_implant_slot").disabled = true;
	
	document.getElementById("wealth_implant").checked = false;
	document.getElementById("wealth_implant_slot").value=0;
	document.getElementById("wealth_implant_slot").disabled = true;
	
	document.getElementById("violence_implant").checked = false;
	document.getElementById("violence_implant_slot").value=0;
	document.getElementById("violence_implant_slot").disabled = true;
	
	document.getElementById("perception_implant").checked = false;
	document.getElementById("perception_implant_slot").value=0;
	document.getElementById("perception_implant_slot").disabled = true;
	
	document.getElementById("hyper_implant").checked = false;
	document.getElementById("hyper_implant_slot").value=0;
	document.getElementById("hyper_implant_slot").disabled = true;
	
	document.getElementById("ironskin_implant").checked = false;
	document.getElementById("ironskin_implant_slot").value=0;
	document.getElementById("ironskin_implant_slot").disabled = true;
	
	document.getElementById("salvage_implant").checked = false;
	document.getElementById("salvage_implant_slot").value=0;
	document.getElementById("salvage_implant_slot").disabled = true;
	
	document.getElementById("motl_implant").checked = false;
	document.getElementById("motl_implant_slot").value=0;
	document.getElementById("motl_implant_slot").disabled = true;
	
	document.getElementById("destruction_implant").checked = false;
	document.getElementById("destruction_implant_slot").value=0;
	document.getElementById("destruction_implant_slot").disabled = true;
	
	document.getElementById("genius_implant").checked = false;
	document.getElementById("genius_implant_slot").value=0;
	document.getElementById("genius_implant_slot").disabled = true;
	
	document.getElementById("haste_implant").checked = false;
	document.getElementById("haste_implant_slot").value=0;
	document.getElementById("haste_implant_slot").disabled = true;
	
	document.getElementById("looter_implant").checked = false;
	document.getElementById("looter_implant_slot").value=0;
	document.getElementById("looter_implant_slot").disabled = true;
	
	document.getElementById("jackofall_implant").checked = false;
	document.getElementById("jackofall_implant_slot").value=0;
	document.getElementById("jackofall_implant_slot").disabled = true;
	
	document.getElementById("damage_boost").checked = false;
	document.getElementById("exp_boost").checked = false;
	document.getElementById("speed_boost").checked = false;
	
	document.getElementById("char_class").value = "";
	document.getElementById("bonus_exp_char_class").value=0;
	document.getElementById("bonus_exp_char_class").disabled = true;
	
	document.getElementById("hunger_state").value = "";
	
	document.getElementById("weekend_event_exp").value = "";
	document.getElementById("bonus_weekend_event_exp").value=0;
	document.getElementById("bonus_weekend_event_exp").disabled = true;
	
	document.getElementById("weekend_event_damage").value = "";
	document.getElementById("bonus_weekend_event_damage").value=0;
	document.getElementById("bonus_weekend_event_damage").disabled = true;
	
	document.getElementById("gm_state").value = "";
}

function sum_all_slot()
{
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


function count_slot(max_implant_slot_param, implant_name_param, add_slot_param)
{
	var implant_name = implant_name_param;
	var add_slot = add_slot_param;
    if (add_slot == "" || add_slot == "undefined") add_slot = 0;

	var max_implant_slot = eval(max_implant_slot_param);
	var total_used_slot = sum_all_slot();
	var remaining_implant_slot = eval(max_implant_slot) - eval(total_used_slot);

	if (remaining_implant_slot < 0 )
	{
		alert('Implant slot is overlimit');
		document.getElementById('implant_remainingslot').value = eval(max_implant_slot) - eval(total_used_slot) + eval(add_slot);
		count_implant_bonus(implant_name, 0);
	}
	else
	{
		document.getElementById('implant_remainingslot').value = remaining_implant_slot;
		count_implant_bonus(implant_name, add_slot);
	}
}

function count_implant_bonus(implant_name_param, implant_slot_param)
{
	var implant_name = implant_name_param;
	var implant_slot = implant_slot_param;
	var bonus_implant_exp = 0 ;
	var bonus_implant_damage = 0 ;
	
	if (implant_name == 'rage_implant') bonus_implant_damage = eval(implant_slot) * eval(1);
	else if (implant_name == 'violence_implant') bonus_implant_damage = eval(implant_slot) * eval(2);
	else if (implant_name == 'destruction_implant') bonus_implant_damage = eval(implant_slot) * eval(10);
	
	else if (implant_name == 'experience_implant') bonus_implant_exp = eval(implant_slot) * eval(1);
	else if (implant_name == 'perception_implant') bonus_implant_exp = eval(implant_slot) * eval(2);
	else if (implant_name == 'genius_implant') bonus_implant_exp = eval(implant_slot) * eval(15);
	
	else if (implant_name == 'motl_implant') 
	{
		bonus_implant_exp = eval(implant_slot) * eval(5);
		bonus_implant_damage = eval(implant_slot) * eval(5);
	}
	else if (implant_name == 'jackofall_implant') 
	{
		bonus_implant_exp = eval(implant_slot) * eval(3.5);
		bonus_implant_damage = eval(implant_slot) * eval(3.5);
	}
	
	if (document.getElementById('bonus_damage_'+implant_name) != null) document.getElementById('bonus_damage_'+implant_name).value = bonus_implant_damage;

	if (document.getElementById('bonus_exp_'+implant_name) != null) document.getElementById('bonus_exp_'+implant_name).value = bonus_implant_exp;

    document.getElementById(implant_name+'_slot').value = implant_slot;
}

function check_boost(boost_name_param)
{
	var boost_name = boost_name_param;
	//alert (boost_name);
	
	if (document.getElementById(boost_name).checked == true) 
	{
		if (boost_name == "damage_boost") 
		{
			document.getElementById('bonus_damage_boost').value = 35
			document.getElementById('bonus_damage_boost').disabled = false;
		}
		if (boost_name == "exp_boost") 
		{
			document.getElementById('bonus_exp_boost').value = 50
			document.getElementById('bonus_exp_boost').disabled = false;
		}
		if (boost_name == "clan_damage_boost") 
		{
			document.getElementById('bonus_clan_damage_boost').disabled = false;
		}
		if (boost_name == "clan_exp_boost") 
		{
			document.getElementById('bonus_clan_exp_boost').disabled = false;
		}
	}
	else
	{
		if (boost_name == "damage_boost") 
		{
			document.getElementById('bonus_damage_boost').value = 0;
			document.getElementById('bonus_damage_boost').disabled = true;
		}
		if (boost_name == "exp_boost") 
		{
			document.getElementById('bonus_exp_boost').value = 0;
			document.getElementById('bonus_exp_boost').disabled = true;
		}
		if (boost_name == "clan_damage_boost") 
		{
			document.getElementById('bonus_clan_damage_boost').value = 0;
			document.getElementById('bonus_clan_damage_boost').disabled = true;
		}
		if (boost_name == "clan_exp_boost") 
		{
			document.getElementById('bonus_clan_exp_boost').value = 0;
			document.getElementById('bonus_clan_exp_boost').disabled = true;
		}
	}
}

function check_char_class(hunger_state_param, char_class_param)
{
	var hunger_state = hunger_state_param;
	var char_class = char_class_param;
	
	if (char_class == "") 	document.getElementById('bonus_exp_char_class').disabled = true;
	else
	{
		if ( char_class == "student" ) document.getElementById('bonus_exp_char_class').value = "22";
		else if ( char_class == "teacher" || char_class == "priest" || char_class == "lawyer" || char_class == "accountant" || char_class == "journalist" || char_class == "actor" || char_class == "stockbroker" || char_class == "architect" || char_class == "entertainer" ) document.getElementById('bonus_exp_char_class').value = "30";
		else document.getElementById('bonus_exp_char_class').value = 0;
		
		document.getElementById('bonus_exp_char_class').disabled = false;
	}
	check_hunger_state(hunger_state, char_class);
}

function check_hunger_state(hunger_state_param, char_class_param)
{
	var hunger_state = hunger_state_param;
	var char_class = char_class_param;
	
	if ( char_class == "" || hunger_state == "") 
	{
		document.getElementById('exp_hunger_state').value = 0;
		document.getElementById('exp_hunger_state').disabled = true;
	}
	else
	{
		if ( char_class == "soldier" )
		{
			if ( hunger_state == "nourished" ) document.getElementById('exp_hunger_state').value = 100;
			else if ( hunger_state == "fine" ) document.getElementById('exp_hunger_state').value = 75;
			else if ( hunger_state == "hungry" ) document.getElementById('exp_hunger_state').value = 50;
			else if ( hunger_state == "starving" ) document.getElementById('exp_hunger_state').value = 25;
		}
		else
		{
			if ( hunger_state == "nourished" ) document.getElementById('exp_hunger_state').value = 150;
			else if ( hunger_state == "fine" ) document.getElementById('exp_hunger_state').value = 100;
			else if ( hunger_state == "hungry" ) document.getElementById('exp_hunger_state').value = 75;
			else if ( hunger_state == "starving" ) document.getElementById('exp_hunger_state').value = 50
		}
		
		document.getElementById('exp_hunger_state').disabled = false;
	}

}

function check_weekend_event_exp(weekend_event_exp_param)
{
	var weekend_event_exp = weekend_event_exp_param;
	
	if (weekend_event_exp == "" || weekend_event_exp == "N")
	{
		document.getElementById('bonus_weekend_event_exp').value = 0;
		document.getElementById('bonus_weekend_event_exp').disabled = true;
	}
	else if (weekend_event_exp == "Y")

	{
		document.getElementById('bonus_weekend_event_exp').value = 100;
		document.getElementById('bonus_weekend_event_exp').disabled = false;
	}	
}

function check_weekend_event_damage(weekend_event_damage_param)
{
	var weekend_event_damage = weekend_event_damage_param;
	
	if (weekend_event_damage == "" || weekend_event_damage == "N")
	{
		document.getElementById('bonus_weekend_event_damage').value = 0;
		document.getElementById('bonus_weekend_event_damage').disabled = true;
	}
	else if (weekend_event_damage == "Y")
	{
		document.getElementById('bonus_weekend_event_damage').value = 100;
		document.getElementById('bonus_weekend_event_damage').disabled = false;
	}	
}

function check_gm_state(gm_state_param)
{
	var gm_state = gm_state_param;
	
	if (gm_state == "" || gm_state == "N")
	{
		document.getElementById('bonus_gm_state').value = 1;
		document.getElementById('bonus_gm_state').disabled = true;
	}
	else if (gm_state == "Y")
	{
		document.getElementById('bonus_gm_state').value = 2;
		document.getElementById('bonus_gm_state').disabled = false;
	}	
}

function sum_total_exp_modifier()
{
	// FORMULA EXP MODIFIER 
	// EXP Hunger State + (Hunger State * Bonus EXP Class) + (EXP Hunger State * EXP Implant) + (EXP Hunger State * EXP Boost) + (EXP Hunger State * Weekend Event EXP)) * GM State)	
	
	var exp_hunger_state = document.getElementById("exp_hunger_state").value;
	
	var bonus_exp_char_class = document.getElementById("bonus_exp_char_class").value;
	
	var bonus_exp_experience_implant = document.getElementById("bonus_exp_experience_implant").value;
	var bonus_exp_perception_implant = document.getElementById("bonus_exp_perception_implant").value;
	var bonus_exp_motl_implant = document.getElementById("bonus_exp_motl_implant").value;
	var bonus_exp_genius_implant = document.getElementById("bonus_exp_genius_implant").value;
	var bonus_exp_jackofall_implant = document.getElementById("bonus_exp_jackofall_implant").value;

	var bonus_exp_boost = document.getElementById("bonus_exp_boost").value;
	var bonus_clan_exp_boost = document.getElementById("bonus_clan_exp_boost").value;
	
	var bonus_weekend_event_exp = document.getElementById("bonus_weekend_event_exp").value;
	var bonus_gm_state = document.getElementById("bonus_gm_state").value;
	
	var total_bonus_exp_implant = eval(bonus_exp_experience_implant) + eval(bonus_exp_perception_implant) + eval(bonus_exp_motl_implant) + eval(bonus_exp_genius_implant)  + eval(bonus_exp_jackofall_implant);
	var total_exp_modifier = (eval(exp_hunger_state) + ( eval(exp_hunger_state) * eval(bonus_exp_char_class)/eval(100)) + (eval(exp_hunger_state) * eval(total_bonus_exp_implant)/eval(100)) +  (eval(exp_hunger_state) * eval(bonus_exp_boost)/eval(100)) +  (eval(exp_hunger_state) * eval(bonus_clan_exp_boost)/eval(100)) + (eval(exp_hunger_state) * eval(bonus_weekend_event_exp)/eval(100))) * eval(bonus_gm_state);

	return total_exp_modifier;
}

function sum_total_damage_modifier(dps_param)
{
	//FORMULA DAMAGE Modifier
	// (DPS + (DPS * Damage Implant) + (DPS * Damage Boost) + (DPS * Weekend Event Damage)) / Zombie HP 
	
	var dps = dps_param;

	var bonus_damage_rage_implant = document.getElementById("bonus_damage_rage_implant").value;
	var bonus_damage_violence_implant = document.getElementById("bonus_damage_violence_implant").value;
	var bonus_damage_motl_implant = document.getElementById("bonus_damage_motl_implant").value;
	var bonus_damage_destruction_implant = document.getElementById("bonus_damage_destruction_implant").value;
	var bonus_damage_jackofall_implant = document.getElementById("bonus_damage_jackofall_implant").value;

	var bonus_damage_boost = document.getElementById("bonus_damage_boost").value;
	var bonus_clan_damage_boost = document.getElementById("bonus_clan_damage_boost").value;
	
	var bonus_weekend_event_damage = document.getElementById("bonus_weekend_event_damage").value;
	
	var zombie_hp = document.getElementById("zombie_hp").value;
	
	var total_bonus_damage_implant = eval(bonus_damage_rage_implant) + eval(bonus_damage_violence_implant) + eval(bonus_damage_motl_implant) + eval(bonus_damage_destruction_implant) + eval(bonus_damage_jackofall_implant);
	
	var total_damage_modifier = ( eval(dps) + ( eval(dps) * eval(total_bonus_damage_implant) / eval(100) ) + ( eval(dps) * eval(bonus_damage_boost) / eval(100) ) + ( eval(dps) * eval(bonus_clan_damage_boost) / eval(100) ) + ( eval(dps) * eval(bonus_weekend_event_damage) / eval(100) )  ) / eval(zombie_hp);
	
	return total_damage_modifier;
}


function process_estimation_exp_per_zombie()
{
	// FORMULA EXP PER ZOMBIE PER HOUR BY BASE DPS
	// ZOMBIE EXP * EXP MODIFIER

	var zombie_exp = document.getElementById("zombie_exp").value;
	var total_exp_modifier = sum_total_exp_modifier();
	var estimation_exp_per_zombie = eval(zombie_exp) * eval(total_exp_modifier)/eval(100);
	
	var x_zombie_exp = numberWithCommas(zombie_exp);
	var x_estimation_exp_per_zombie = numberWithCommas(estimation_exp_per_zombie);
	
    document.getElementById('lbl_estimated_exp_per_zombie').innerHTML = "<label id='lbl_estimated_exp_per_zombie'>"+x_zombie_exp+" * "+total_exp_modifier+"% = <strong>"+x_estimation_exp_per_zombie+"</strong> EXP</label>";
}

function process_estimation_exp_per_zombie_per_hour_by_base_dps()
{
	// FORMULA EXP PER ZOMBIE PER HOUR BY BASE DPS
	// ZOMBIE EXP * ( DAMAGE MODIFIER * 3600 ) * EXP MODIFIER
	
	var zombie_exp = document.getElementById("zombie_exp").value;
	var base_dps = document.getElementById("base_dps").value;
	
	var total_damage_modifier = sum_total_damage_modifier(base_dps);
	var total_exp_modifier = sum_total_exp_modifier();
	
	if (isNaN(total_damage_modifier) == true ) total_damage_modifier = "0.1";

	var estimation_exp_per_zombie_per_hour_base_dps = Math.round(eval(zombie_exp) * (eval(total_damage_modifier) * eval(3600)) * (eval(total_exp_modifier)/eval(100)));
	
	var x_zombie_exp = numberWithCommas(zombie_exp);
	var x_estimation_exp_per_zombie_per_hour_base_dps = numberWithCommas(estimation_exp_per_zombie_per_hour_base_dps);
	
    document.getElementById('lbl_estimated_exp_per_zombie_per_hour_base_dps').innerHTML = "<label id='lbl_estimated_exp_per_zombie_per_hour_base_dps'>"+x_zombie_exp+" * ("+total_damage_modifier+" * 3,600) * "+total_exp_modifier+"% = <strong>"+x_estimation_exp_per_zombie_per_hour_base_dps+"</strong> EXP per Hour (by Base DPS)</label>";
}

function process_estimation_exp_per_zombie_per_hour_by_critical_hit_dps()
{
	// FORMULA EXP PER ZOMBIE PER HOUR BY CRITICAL HIT DPS
	// ZOMBIE EXP * ( DAMAGE MODIFIER * 3600 ) * EXP MODIFIER
	
	var zombie_exp = document.getElementById("zombie_exp").value;
	var critical_hit_dps = document.getElementById("critical_hit_dps").value;
	
	var total_damage_modifier = sum_total_damage_modifier(critical_hit_dps);
	var total_exp_modifier = sum_total_exp_modifier();
	
	if (isNaN(total_damage_modifier) == true ) total_damage_modifier = 0.1;

	var estimation_exp_per_zombie_per_hour_critical_hit_dps = Math.round(eval(zombie_exp) * (eval(total_damage_modifier) * eval(3600)) * (eval(total_exp_modifier)/eval(100)));
	var x_zombie_exp = numberWithCommas(zombie_exp);
	var x_estimation_exp_per_zombie_per_hour_critical_hit_dps = numberWithCommas(estimation_exp_per_zombie_per_hour_critical_hit_dps);
	
    document.getElementById('lbl_estimated_exp_per_zombie_per_hour_critical_hit_dps').innerHTML = "<label id='lbl_estimated_exp_per_zombie_per_hour_critical_hit_dps'>"+x_zombie_exp+" * ("+total_damage_modifier+" * 3,600) * "+total_exp_modifier+"% = <strong>"+x_estimation_exp_per_zombie_per_hour_critical_hit_dps+"</strong> EXP per Hour (by Critical Hit DPS)</label>";
}

function process_all()
{
	process_estimation_exp_per_zombie();
	process_estimation_exp_per_zombie_per_hour_by_base_dps();
	process_estimation_exp_per_zombie_per_hour_by_critical_hit_dps();
}

function numberWithCommas(value_param) {
    return value_param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function download_excel_formula()
{
   window.open("df_estimated_grinding_performace_tool.xlsx");
}