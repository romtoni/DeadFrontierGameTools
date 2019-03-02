function display_none_dying()
{
	document.getElementById("tr_hr_enemy_player").style.display = "none";
	document.getElementById("table_enemy_player").style.display = "none";
		
	document.getElementById("tr_hr_enemy_zombie").style.display = "block";
	document.getElementById("table_enemy_zombie").style.display = "block";
	
	document.getElementById("hr_zombie_player").style.display = "none";
	document.getElementById("table_zombie_player").style.display = "none";
	
	document.getElementById("hr_normal_player").style.display = "block";
	document.getElementById("table_normal_player").style.display = "block";
	
}

function check_player_role(player_role_param)
{
	var player_role = player_role_param;
	
	if (player_role == 'zombie_player')
	{
		document.getElementById("hr_zombie_player").style.display = "block";
		document.getElementById("table_zombie_player").style.display = "block";
		
		document.getElementById("hr_normal_player").style.display = "none";
		document.getElementById("table_normal_player").style.display = "none";
		
		
		document.getElementById("player_role").value = "zombie_player";
		
	}
	else if (player_role == 'normal_player')
	{
		document.getElementById("hr_zombie_player").style.display = "none";
		document.getElementById("table_zombie_player").style.display = "none";
		
		document.getElementById("hr_normal_player").style.display = "block";
		document.getElementById("table_normal_player").style.display = "block";
		
		document.getElementById("player_role").value = "normal_player";
	}
	
	
	document.getElementById("zombie_player").value = "";
	document.getElementById("zombie_player_endurance_point").value = 0;
	
	document.getElementById("player_level").value = 0;
	document.getElementById("player_implant_maxslot").value = 0;
	document.getElementById("player_implant_remainingslot").value = 0;
	
	document.getElementById("player_endurance_point").value = 25;
	document.getElementById("player_max_endurance_point").value = 0;
	document.getElementById("player_remaining_endurance_point").value = 0;
	
	document.getElementById("player_armor_type").value = "";
	document.getElementById("player_armor_durability").value = 0;
	document.getElementById("player_armor_damage_absorption").value = 0;
	
	document.getElementById("player_rage_implant").checked = false;
	document.getElementById("player_rage_implant_slot").value= 0;
	document.getElementById("player_rage_implant_slot").disabled = true;
	
	document.getElementById("player_experience_implant").checked = false;
	document.getElementById("player_experience_implant_slot").value= 0;
	document.getElementById("player_experience_implant_slot").disabled = true;
	
	document.getElementById("player_agility_implant").checked = false;
	document.getElementById("player_agility_implant_slot").value= 0;
	document.getElementById("player_agility_implant_slot").disabled = true;
	
	document.getElementById("player_survival_implant").checked = false;
	document.getElementById("player_survival_implant_slot").value= 0;
	document.getElementById("player_survival_implant_slot").disabled = true;
	
	document.getElementById("player_notoriety_implant").checked = false;
	document.getElementById("player_notoriety_implant_slot").value= 0;
	document.getElementById("player_notoriety_implant_slot").disabled = true;
	
	document.getElementById("player_hunter_implant").checked = false;
	document.getElementById("player_hunter_implant_slot").value= 0;
	document.getElementById("player_hunter_implant_slot").disabled = true;
	
	document.getElementById("player_scavenger_implant").checked = false;
	document.getElementById("player_scavenger_implant_slot").value= 0;
	document.getElementById("player_scavenger_implant_slot").disabled = true;
	
	document.getElementById("player_ingenuity_implant").checked = false;
	document.getElementById("player_ingenuity_implant_slot").value= 0;
	document.getElementById("player_ingenuity_implant_slot").disabled = true;
	
	document.getElementById("player_wealth_implant").checked = false;
	document.getElementById("player_wealth_implant_slot").value= 0;
	document.getElementById("player_wealth_implant_slot").disabled = true;
	
	document.getElementById("player_violence_implant").checked = false;
	document.getElementById("player_violence_implant_slot").value= 0;
	document.getElementById("player_violence_implant_slot").disabled = true;
	
	document.getElementById("player_perception_implant").checked = false;
	document.getElementById("player_perception_implant_slot").value= 0;
	document.getElementById("player_perception_implant_slot").disabled = true;
	
	document.getElementById("player_hyper_implant").checked = false;
	document.getElementById("player_hyper_implant_slot").value= 0;
	document.getElementById("player_hyper_implant_slot").disabled = true;
	
	document.getElementById("player_ironskin_implant").checked = false;
	document.getElementById("player_ironskin_implant_slot").value= 0;
	document.getElementById("player_ironskin_implant_slot").disabled = true;
	
	document.getElementById("player_salvage_implant").checked = false;
	document.getElementById("player_salvage_implant_slot").value= 0;
	document.getElementById("player_salvage_implant_slot").disabled = true;
	
	document.getElementById("player_motl_implant").checked = false;
	document.getElementById("player_motl_implant_slot").value= 0;
	document.getElementById("player_motl_implant_slot").disabled = true;
	
	document.getElementById("player_destruction_implant").checked = false;
	document.getElementById("player_destruction_implant_slot").value= 0;
	document.getElementById("player_destruction_implant_slot").disabled = true;
	
	document.getElementById("player_jackofall_implant").checked = false;
	document.getElementById("player_jackofall_implant_slot").value= 0;
	document.getElementById("player_jackofall_implant_slot").disabled = true;
	
	document.getElementById("player_genius_implant").checked = false;
	document.getElementById("player_genius_implant_slot").value= 0;
	document.getElementById("player_genius_implant_slot").disabled = true;
	
	document.getElementById("player_haste_implant").checked = false;
	document.getElementById("player_haste_implant_slot").value= 0;
	document.getElementById("player_haste_implant_slot").disabled = true;
	
	document.getElementById("player_looter_implant").checked = false;
	document.getElementById("player_looter_implant_slot").value= 0;
	document.getElementById("player_looter_implant_slot").disabled = true;
	
	document.getElementById("player_damage_boost").checked = false;
	
	document.getElementById("player_char_class").value = "";
	
	document.getElementById("player_hunger_state").value = "";
	
	document.getElementById("player_weekend_event_damage_reduction").value = "";
	document.getElementById("player_bonus_weekend_event_damage_reduction").value= 0;
	document.getElementById("player_bonus_weekend_event_damage_reduction").disabled = true;
	
	document.getElementById("player_gm_state").value = "";
	
}

function check_dying_calculation_method(dying_value_param)
{
	var dying_value = dying_value_param;
	
	if (dying_value == "enemy_player")
	{
		document.getElementById("tr_hr_enemy_player").style.display = "block";
		document.getElementById("table_enemy_player").style.display = "block";
		
		document.getElementById("tr_hr_enemy_zombie").style.display = "none";
		document.getElementById("table_enemy_zombie").style.display = "none";
	}
	else if (dying_value == "enemy_zombie")
	{
		document.getElementById("tr_hr_enemy_player").style.display = "none";
		document.getElementById("table_enemy_player").style.display = "none";
		
		document.getElementById("tr_hr_enemy_zombie").style.display = "block";
		document.getElementById("table_enemy_zombie").style.display = "block";
	}
	else
	{
		document.getElementById("tr_hr_enemy_player").style.display = "none";
		document.getElementById("table_enemy_player").style.display = "none";
		
		document.getElementById("tr_hr_enemy_zombie").style.display = "none";
		document.getElementById("table_enemy_zombie").style.display = "none";
	}
	
	document.getElementById("enemy_player_level").value = 0;
	document.getElementById("enemy_player_implant_maxslot").value = 0;
	document.getElementById("enemy_player_implant_remainingslot").value = 0;
	document.getElementById("enemy_player_weapon").value = "";
	document.getElementById("enemy_player_weapon_base_dph").value = 0;
	document.getElementById("enemy_player_weapon_critical_hit_dph").value = 0;
	document.getElementById("enemy_player_rage_implant").checked = false;
	document.getElementById("enemy_player_rage_implant_slot").value = 0;
	document.getElementById("enemy_player_bonus_damage_rage_implant").value = 0;
	document.getElementById("enemy_player_violence_implant").checked = false;
	document.getElementById("enemy_player_violence_implant_slot").value = 0;
	document.getElementById("enemy_player_bonus_damage_violence_implant").value = 0;
	document.getElementById("enemy_player_motl_implant").checked = false;
	document.getElementById("enemy_player_motl_implant_slot").value = 0;
	document.getElementById("enemy_player_bonus_damage_motl_implant").value = 0;
	document.getElementById("enemy_player_destruction_implant").checked = false;
	document.getElementById("enemy_player_destruction_implant_slot").value = 0;
	document.getElementById("enemy_player_bonus_damage_destruction_implant").value = 0;
	
	document.getElementById("enemy_player_jackofall_implant").checked = false;
	document.getElementById("enemy_player_jackofall_implant_slot").value = 0;
	document.getElementById("enemy_player_bonus_damage_jackofall_implant").value = 0;
	
	
	document.getElementById("enemy_player_damage_boost").checked = false;
	document.getElementById("enemy_player_bonus_damage_boost").value = 0;
	document.getElementById("enemy_player_clan_damage_boost").checked = false;
	document.getElementById("enemy_player_bonus_clan_damage_boost").value = 0;
	document.getElementById("enemy_player_weekend_event_damage").checked = false;
	document.getElementById("enemy_player_bonus_weekend_event_damage").value = 0;		
		
	document.getElementById("enemy_zombie").value = "";
	document.getElementById("enemy_zombie_base_dph").value = 0;
		
	document.getElementById("total_added_enemy_base_dph").value = 0;
	document.getElementById("total_added_enemy_critical_hit_dph").value = 0;
}

function check_character_implant(implant_name_param, player_code_param)
{
	var player_code = player_code_param;
	var implant_name = implant_name_param;
	var implant_name_extension = player_code+'_'+implant_name;
	
	if (document.getElementById(implant_name_extension).checked == true) 
	{
		document.getElementById(implant_name_extension+'_slot').disabled = false;
		if (document.getElementById(player_code+'_bonus_damage_'+implant_name) != null) document.getElementById(player_code+'_bonus_damage_'+implant_name).disabled = false;
		if (document.getElementById(player_code+'_bonus_damage_destruction_'+implant_name) != null) document.getElementById(player_code+'_bonus_damage_reduction_'+implant_name).disabled = false;
	}
	else
	{
		document.getElementById(player_code+'_'+implant_name+'_slot').value = 0;
		document.getElementById(player_code+'_'+implant_name+'_slot').disabled = true;
		if (document.getElementById(player_code+'_bonus_damage_'+implant_name) != null) 
        {
            document.getElementById(player_code+'_bonus_damage_'+implant_name).disabled = true;
		    document.getElementById(player_code+'_bonus_damage_'+implant_name).value = 0;
        }
        if (document.getElementById(player_code+'_bonus_damage_reduction_'+implant_name) != null) 
        {
            document.getElementById(player_code+'_bonus_damage_reduction_'+implant_name).disabled = true;	
            document.getElementById(player_code+'_bonus_damage_reduction_'+implant_name).value = 0;
        }
	}
	count_damage_modified(player_code);
}

function check_character_weekend_event_damage(weekend_event_damage_param, player_code_param)
{
	var player_code = player_code_param;
	var weekend_event_damage = weekend_event_damage_param;
	
	if (weekend_event_damage == "" || weekend_event_damage == "N")
	{
		if (document.getElementById(player_code+'_bonus_weekend_event_damage') != null) 
		{
			document.getElementById(player_code+'_bonus_weekend_event_damage').value = 0;
			document.getElementById(player_code+'_bonus_weekend_event_damage').disabled = true;
		}
		if (document.getElementById(player_code+'_bonus_weekend_event_damage_reduction') != null) 
		{
			document.getElementById(player_code+'_bonus_weekend_event_damage_reduction').value = 0;
			document.getElementById(player_code+'_bonus_weekend_event_damage_reduction').disabled = true;
		}
	}
	else if (weekend_event_damage == "Y")
	{
		if (document.getElementById(player_code+'_bonus_weekend_event_damage') != null) 
		{
			document.getElementById(player_code+'_bonus_weekend_event_damage').value = 100;
			document.getElementById(player_code+'_bonus_weekend_event_damage').disabled = false;
		}
		if (document.getElementById(player_code+'_bonus_weekend_event_damage_reduction') != null) 
		{
			document.getElementById(player_code+'_bonus_weekend_event_damage_reduction').value = 50;
			document.getElementById(player_code+'_bonus_weekend_event_damage_reduction').disabled = false;
		}
	}
	count_damage_modified(player_code);
}

function check_endurance_point(endurance_point_param, player_code_param)
{
	var player_code = player_code_param;
	var endurance_point = endurance_point_param;
	var max_endurance_point = 124;
	var remaining_endurance_point;
	
	if (eval(endurance_point) > eval(max_endurance_point)) 
	{
		alert('Endurance Point is overlimit');
		endurance_point = 25;
		remaining_endurance_point = 124;
	}
	else if (eval(endurance_point) < 25) 
	{
		endurance_point = 25;
		remaining_endurance_point = 124;
	}
	else
	{
		remaining_endurance_point = eval(max_endurance_point) - eval(endurance_point);
	}
	
	document.getElementById('player_max_endurance_point').value = max_endurance_point; 
	document.getElementById('player_endurance_point').value = endurance_point; 
	document.getElementById('player_remaining_endurance_point').value = remaining_endurance_point; 
	
	
}


function check_character_level(level_param, player_code_param)
{
	var level = level_param;
	var player_code = player_code_param;
	var implant_maxslot;
	var implant_remainingslot;
	
	if (level == "") level = 0;
	
	if (level == 0)
	{ 
		implant_maxslot = 0;
		implant_remainingslot = 0;
	}
	else if (level >= 1 && level < 51) 
	{ 
		implant_maxslot = 0;
		implant_remainingslot = 0;
	}
	else if (level >= 51 && level < 120) 
	{ 
		implant_maxslot = 4;
		implant_remainingslot = 4;
	}
	else if (level >= 120 && level < 220) 
	{ 
		implant_maxslot = 8;
		implant_remainingslot = 8;
	}
	else if (level >= 220 && level < 325) 
	{ 
		implant_maxslot = 12;
		implant_remainingslot = 12;
	}
	else if (level >= 325)
	{ 
		implant_maxslot = 16;
		implant_remainingslot = 16;
	}
	
	if (player_code == "enemy_player")
	{
		document.getElementById("enemy_player_level").value = level;
		document.getElementById("enemy_player_implant_maxslot").value = implant_maxslot;
		document.getElementById("enemy_player_implant_remainingslot").value = implant_remainingslot;
		
		document.getElementById("enemy_player_weapon").value = "";
		document.getElementById("enemy_player_weapon_base_dph").value = 0;
		document.getElementById("enemy_player_weapon_critical_hit_dph").value = 0;
		
		document.getElementById("enemy_player_rage_implant").checked = false;
		document.getElementById("enemy_player_rage_implant_slot").value = 0;
		document.getElementById("enemy_player_rage_implant_slot").disabled = true;
	
		document.getElementById("enemy_player_violence_implant").checked = false;
		document.getElementById("enemy_player_violence_implant_slot").value = 0;
		document.getElementById("enemy_player_violence_implant_slot").disabled = true;
		
		document.getElementById("enemy_player_motl_implant").checked = false;
		document.getElementById("enemy_player_motl_implant_slot").value = 0;
		document.getElementById("enemy_player_motl_implant_slot").disabled = true;
		
		document.getElementById("enemy_player_destruction_implant").checked = false;
		document.getElementById("enemy_player_destruction_implant_slot").value = 0;
		document.getElementById("enemy_player_destruction_implant_slot").disabled = true;
		
		document.getElementById("enemy_player_jackofall_implant").checked = false;
		document.getElementById("enemy_player_jackofall_implant_slot").value = 0;
		document.getElementById("enemy_player_jackofall_implant_slot").disabled = true;
	
		document.getElementById("enemy_player_damage_boost").checked = false;
		document.getElementById("enemy_player_clan_damage_boost").checked = false;
		
		document.getElementById("enemy_player_weekend_event_damage").checked = "";
		document.getElementById("enemy_player_bonus_weekend_event_damage").value = 0;
		document.getElementById("enemy_player_bonus_weekend_event_damage").disabled = true;
	}
	else if (player_code == "player")
	{
		document.getElementById("player_level").value = level;
		document.getElementById("player_implant_maxslot").value = implant_maxslot;
		document.getElementById("player_implant_remainingslot").value = implant_remainingslot;
		
		document.getElementById("player_endurance_point").value = 25;
		document.getElementById("player_max_endurance_point").value = 0;
		document.getElementById("player_remaining_endurance_point").value = 0;
		
		document.getElementById("player_armor_type").value = "";
		document.getElementById("player_armor_durability").value = 0;
		document.getElementById("player_armor_damage_absorption").value = 0;
		
		document.getElementById("player_rage_implant").checked = false;
		document.getElementById("player_rage_implant_slot").value= 0;
		document.getElementById("player_rage_implant_slot").disabled = true;
		
		document.getElementById("player_experience_implant").checked = false;
		document.getElementById("player_experience_implant_slot").value= 0;
		document.getElementById("player_experience_implant_slot").disabled = true;
		
		document.getElementById("player_agility_implant").checked = false;
		document.getElementById("player_agility_implant_slot").value= 0;
		document.getElementById("player_agility_implant_slot").disabled = true;
		
		document.getElementById("player_survival_implant").checked = false;
		document.getElementById("player_survival_implant_slot").value= 0;
		document.getElementById("player_survival_implant_slot").disabled = true;
		
		document.getElementById("player_notoriety_implant").checked = false;
		document.getElementById("player_notoriety_implant_slot").value= 0;
		document.getElementById("player_notoriety_implant_slot").disabled = true;
		
		document.getElementById("player_hunter_implant").checked = false;
		document.getElementById("player_hunter_implant_slot").value= 0;
		document.getElementById("player_hunter_implant_slot").disabled = true;
		
		document.getElementById("player_scavenger_implant").checked = false;
		document.getElementById("player_scavenger_implant_slot").value= 0;
		document.getElementById("player_scavenger_implant_slot").disabled = true;
		
		document.getElementById("player_ingenuity_implant").checked = false;
		document.getElementById("player_ingenuity_implant_slot").value= 0;
		document.getElementById("player_ingenuity_implant_slot").disabled = true;
		
		document.getElementById("player_wealth_implant").checked = false;
		document.getElementById("player_wealth_implant_slot").value= 0;
		document.getElementById("player_wealth_implant_slot").disabled = true;
		
		document.getElementById("player_violence_implant").checked = false;
		document.getElementById("player_violence_implant_slot").value= 0;
		document.getElementById("player_violence_implant_slot").disabled = true;
		
		document.getElementById("player_perception_implant").checked = false;
		document.getElementById("player_perception_implant_slot").value= 0;
		document.getElementById("player_perception_implant_slot").disabled = true;
		
		document.getElementById("player_hyper_implant").checked = false;
		document.getElementById("player_hyper_implant_slot").value= 0;
		document.getElementById("player_hyper_implant_slot").disabled = true;
		
		document.getElementById("player_ironskin_implant").checked = false;
		document.getElementById("player_ironskin_implant_slot").value= 0;
		document.getElementById("player_ironskin_implant_slot").disabled = true;
		
		document.getElementById("player_salvage_implant").checked = false;
		document.getElementById("player_salvage_implant_slot").value= 0;
		document.getElementById("player_salvage_implant_slot").disabled = true;
		
		document.getElementById("player_motl_implant").checked = false;
		document.getElementById("player_motl_implant_slot").value= 0;
		document.getElementById("player_motl_implant_slot").disabled = true;
		
		document.getElementById("player_destruction_implant").checked = false;
		document.getElementById("player_destruction_implant_slot").value= 0;
		document.getElementById("player_destruction_implant_slot").disabled = true;
		
		document.getElementById("player_jackofall_implant").checked = false;
		document.getElementById("player_jackofall_implant_slot").value= 0;
		document.getElementById("player_jackofall_implant_slot").disabled = true;
		
		document.getElementById("player_genius_implant").checked = false;
		document.getElementById("player_genius_implant_slot").value= 0;
		document.getElementById("player_genius_implant_slot").disabled = true;
		
		document.getElementById("player_haste_implant").checked = false;
		document.getElementById("player_haste_implant_slot").value= 0;
		document.getElementById("player_haste_implant_slot").disabled = true;
		
		document.getElementById("player_looter_implant").checked = false;
		document.getElementById("player_looter_implant_slot").value= 0;
		document.getElementById("player_looter_implant_slot").disabled = true;
		
		document.getElementById("player_damage_boost").checked = false;
		
		document.getElementById("player_char_class").value = "";

		document.getElementById("player_hunger_state").value = "";
	
		document.getElementById("player_weekend_event_damage_reduction").value = "";
		document.getElementById("player_bonus_weekend_event_damage_reduction").value= 0;
		document.getElementById("player_bonus_weekend_event_damage_reduction").disabled = true;
		
		document.getElementById("player_gm_state").value = "";
	}
}

function check_character_boost(boost_name_param, player_code_param)
{
	var player_code = player_code_param;
	var boost_name = boost_name_param;
	var boost_name_extension = player_code+'_'+boost_name;
	
	if (document.getElementById(boost_name_extension).checked == true) 
	{
		if (boost_name == "damage_boost") 
		{
			if (document.getElementById(player_code+'_bonus_damage_boost') != null ) 
			{
				document.getElementById(player_code+'_bonus_damage_boost').value = 35;
				document.getElementById(player_code+'_bonus_damage_boost').disabled = false;
			}
		}
		if (boost_name == "clan_damage_boost") 
		{
			if (document.getElementById(player_code+'_bonus_clan_damage_boost') != null)
			{
				//document.getElementById(player_code+'_bonus_clan_damage_boost').value = 0;
				document.getElementById(player_code+'_bonus_clan_damage_boost').disabled = false;
			}
		}
	}
	else
	{
		if (boost_name == "damage_boost") 
		{
			if (document.getElementById(player_code+'_bonus_damage_boost') != null ) 
			{
				document.getElementById(player_code+'_bonus_damage_boost').value = 0;
				document.getElementById(player_code+'_bonus_damage_boost').disabled = false;
			}
		}
		if (boost_name == "clan_damage_boost") 
		{
			if (document.getElementById(player_code+'_bonus_clan_damage_boost') != null)
			{
				document.getElementById(player_code+'_bonus_clan_damage_boost').value = 0;
				document.getElementById(player_code+'_bonus_clan_damage_boost').disabled = false;
			}
		}
	}
	count_damage_modified(player_code);
}



function sum_all_slot(player_code_param)
{
	var player_code = player_code_param;
	
	if 	(player_code == 'enemy_player')
	{
		var enemy_player_rage_implant_slot = document.getElementById('enemy_player_rage_implant_slot').value;
		var enemy_player_violence_implant_slot = document.getElementById('enemy_player_violence_implant_slot').value;
		var enemy_player_motl_implant_slot = document.getElementById('enemy_player_motl_implant_slot').value;
		var enemy_player_destruction_implant_slot = document.getElementById('enemy_player_destruction_implant_slot').value;
		var enemy_player_jackofall_implant_slot = document.getElementById('enemy_player_jackofall_implant_slot').value;
		
		var total_used_slot = eval(enemy_player_rage_implant_slot) + eval(enemy_player_violence_implant_slot) + eval(enemy_player_motl_implant_slot) + eval(enemy_player_destruction_implant_slot) + eval(enemy_player_jackofall_implant_slot);
	}
	else if (player_code == 'player')
	{
		var player_rage_implant_slot = document.getElementById('player_rage_implant_slot').value;
		var player_experience_implant_slot = document.getElementById('player_experience_implant_slot').value;
		var player_agility_implant_slot = document.getElementById('player_agility_implant_slot').value;
		var player_survival_implant_slot = document.getElementById('player_survival_implant_slot').value;
		var player_notoriety_implant_slot = document.getElementById('player_notoriety_implant_slot').value;
		var player_hunter_implant_slot = document.getElementById('player_hunter_implant_slot').value;
		var player_scavenger_implant_slot = document.getElementById('player_scavenger_implant_slot').value;
		var player_ingenuity_implant_slot = document.getElementById('player_ingenuity_implant_slot').value;
		var player_wealth_implant_slot = document.getElementById('player_wealth_implant_slot').value;
		
		var player_violence_implant_slot = document.getElementById('player_violence_implant_slot').value;
		var player_perception_implant_slot = document.getElementById('player_perception_implant_slot').value;
		var player_hyper_implant_slot = document.getElementById('player_hyper_implant_slot').value;
		var player_ironskin_implant_slot = document.getElementById('player_ironskin_implant_slot').value;
		var player_salvage_implant_slot = document.getElementById('player_salvage_implant_slot').value;
		
		var player_motl_implant_slot = document.getElementById('player_motl_implant_slot').value;
		var player_destruction_implant_slot = document.getElementById('player_destruction_implant_slot').value;
		var player_genius_implant_slot = document.getElementById('player_genius_implant_slot').value;
		var player_haste_implant_slot = document.getElementById('player_haste_implant_slot').value;
		var player_looter_implant_slot = document.getElementById('player_looter_implant_slot').value;
		var player_jackofall_implant_slot = document.getElementById('player_jackofall_implant_slot').value;
		
		var total_used_slot = eval(player_rage_implant_slot) + eval(player_experience_implant_slot) + eval(player_agility_implant_slot) + eval(player_survival_implant_slot) + eval(player_notoriety_implant_slot) + eval(player_hunter_implant_slot) + eval(player_scavenger_implant_slot) + eval(player_ingenuity_implant_slot) + eval(player_wealth_implant_slot) + eval(player_violence_implant_slot) + eval(player_perception_implant_slot) + eval(player_hyper_implant_slot) + eval(player_ironskin_implant_slot) + eval(player_salvage_implant_slot) + eval(player_motl_implant_slot) + eval(player_destruction_implant_slot) + eval(player_genius_implant_slot) + eval(player_haste_implant_slot) + eval(player_looter_implant_slot)  + eval(player_jackofall_implant_slot);
	}
	
	return total_used_slot;
}

function count_character_implant_slot(max_implant_slot_param, implant_name_param, add_slot_param, player_code_param)
{
	var player_code = player_code_param;
	var implant_name = implant_name_param;
	var add_slot = add_slot_param;
    if (add_slot == "" || add_slot == "undefined") add_slot = 0;

	var max_implant_slot = eval(max_implant_slot_param);
	var total_used_slot = sum_all_slot(player_code);
	var remaining_implant_slot = eval(max_implant_slot) - eval(total_used_slot);

	if (remaining_implant_slot < 0 )
	{
		alert('Implant slot is overlimit');
		document.getElementById(player_code+'_implant_remainingslot').value = eval(max_implant_slot) - eval(total_used_slot) + eval(add_slot);
		count_character_implant_bonus(implant_name, 0, player_code);
	}
	else
	{
		document.getElementById(player_code+'_implant_remainingslot').value = remaining_implant_slot;
		count_character_implant_bonus(implant_name, add_slot, player_code);
	}
}

function count_character_implant_bonus(implant_name_param, implant_slot_param, player_code_param)
{
	var implant_name = implant_name_param;
	var implant_slot = implant_slot_param;
	var bonus_implant_damage_reduction = 0 ;
	var bonus_implant_damage = 0 ;
	
	if (implant_name == 'rage_implant') bonus_implant_damage = eval(implant_slot) * eval(1);
	else if (implant_name == 'violence_implant') bonus_implant_damage = eval(implant_slot) * eval(2);
	else if (implant_name == 'destruction_implant') bonus_implant_damage = eval(implant_slot) * eval(10);
	else if (implant_name == 'jackofall_implant') bonus_implant_damage = eval(implant_slot) * eval(3.5);
	else if (implant_name == 'motl_implant') bonus_implant_damage = eval(implant_slot) * eval(5);
	else if (implant_name == 'survival_implant') bonus_implant_damage_reduction = eval(implant_slot) * eval(1);
	else if (implant_name == 'ironskin_implant') bonus_implant_damage_reduction = eval(implant_slot) * eval(2);
	
	var player_code = player_code_param;

	if (document.getElementById(player_code+'_bonus_damage_'+implant_name) != null) document.getElementById(player_code+'_bonus_damage_'+implant_name).value = bonus_implant_damage;
	if (document.getElementById(player_code+'_bonus_damage_reduction_'+implant_name) != null) document.getElementById(player_code+'_bonus_damage_reduction_'+implant_name).value = bonus_implant_damage_reduction;
    
	document.getElementById(player_code+'_'+implant_name+'_slot').value = implant_slot;
	
	count_damage_modified(player_code);
}

function count_damage_modified(player_code_param)
{
	var player_code = player_code_param;
	
	if ( player_code == "enemy_player" )
	{
		var enemy_player_weapon_base_dph = document.getElementById("enemy_player_weapon_base_dph").value;
		var enemy_player_weapon_critical_hit_dph = document.getElementById("enemy_player_weapon_critical_hit_dph").value;

		var enemy_player_bonus_damage_rage_implant = document.getElementById("enemy_player_bonus_damage_rage_implant").value;
		var enemy_player_bonus_damage_violence_implant = document.getElementById("enemy_player_bonus_damage_violence_implant").value;
		var enemy_player_bonus_damage_motl_implant = document.getElementById("enemy_player_bonus_damage_motl_implant").value;
		var enemy_player_bonus_damage_destruction_implant = document.getElementById("enemy_player_bonus_damage_destruction_implant").value;
		var enemy_player_bonus_damage_jackofall_implant = document.getElementById("enemy_player_bonus_damage_jackofall_implant").value;
		
		var enemy_player_bonus_damage_boost = document.getElementById("enemy_player_bonus_damage_boost").value;
		var enemy_player_bonus_clan_damage_boost = document.getElementById("enemy_player_bonus_clan_damage_boost").value;
		
		var enemy_player_bonus_weekend_event_damage = document.getElementById("enemy_player_bonus_weekend_event_damage").value;

		var enemy_player_bonus_total_damage_added = eval(enemy_player_bonus_damage_rage_implant) + eval(enemy_player_bonus_damage_violence_implant) + eval(enemy_player_bonus_damage_motl_implant) + eval(enemy_player_bonus_damage_destruction_implant) + eval(enemy_player_bonus_damage_jackofall_implant) + eval(enemy_player_bonus_damage_boost) + eval(enemy_player_bonus_clan_damage_boost) + eval(enemy_player_bonus_weekend_event_damage);

		var modified_base_dph = eval(enemy_player_weapon_base_dph) + ( eval(enemy_player_weapon_base_dph) * eval(enemy_player_bonus_total_damage_added) / eval(100) );
		var modified_critical_hit_dph = eval(enemy_player_weapon_critical_hit_dph) + ( eval(enemy_player_weapon_critical_hit_dph) * eval(enemy_player_bonus_total_damage_added) / eval(100) );
	
		document.getElementById("total_added_enemy_base_dph").value = modified_base_dph;
		document.getElementById("total_added_enemy_critical_hit_dph").value = modified_critical_hit_dph;
	}
	
}


function get_damage_reduction_factor(armor_damage_absorption_param)
{
	var armor_damage_absorption = armor_damage_absorption_param;
	var damage_reduction_factor;
	
	if (eval(armor_damage_absorption) > 0)	damage_reduction_factor = eval(1) / ( eval(1) - ( eval(1) * eval(armor_damage_absorption)/eval(100) ) ) / eval(100);
	else damage_reduction_factor = 0;
	
	return damage_reduction_factor;
}

function get_total_health(armor_durability_param, endurance_point_param)
{
	var armor_durability = armor_durability_param;
	var endurance_point = endurance_point_param;
	var default_health = 2;
	
	var total_health = ( eval(default_health) * eval(endurance_point) ) + eval(armor_durability);
	
	return total_health;
}

function get_equivalent_health (damage_reduction_factor_param, total_health_param)
{
	var damage_reduction_factor = damage_reduction_factor_param;
	var total_health = total_health_param;
	
	var equivalent_health = ( eval(total_health) * eval(damage_reduction_factor) ) + eval(total_health);
	
	return equivalent_health;
}

function process_sum_modified_damage(dying_calculation_method_param)
{
	var dying_calculation_method = dying_calculation_method_param;
	if (dying_calculation_method == "enemy_player")
	{
		//PVP
		var enemy_player_weapon_base_dph = document.getElementById("enemy_player_weapon_base_dph").value;
		var enemy_player_weapon_critical_hit_dph = document.getElementById("enemy_player_weapon_critical_hit_dph").value;
		
		var total_added_enemy_base_dph = document.getElementById("total_added_enemy_base_dph").value;
		var total_added_enemy_critical_hit_dph = document.getElementById("total_added_enemy_critical_hit_dph").value;
		
		var player_bonus_damage_reduction_survival_implant = document.getElementById("player_bonus_damage_reduction_survival_implant").value;
		var player_bonus_damage_reduction_ironskin_implant = document.getElementById("player_bonus_damage_reduction_ironskin_implant").value;
		var player_bonus_weekend_event_damage_reduction = document.getElementById("player_bonus_weekend_event_damage_reduction").value;
		
		var total_bonus_damage_reduction = eval(player_bonus_damage_reduction_survival_implant) + eval(player_bonus_damage_reduction_ironskin_implant) + eval(player_bonus_weekend_event_damage_reduction);
		
		var total_reduced_enemy_base_dph = eval(enemy_player_weapon_base_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_base_dph = eval(total_added_enemy_base_dph) - eval(total_reduced_enemy_base_dph);
		
		var total_reduced_enemy_critical_hit_dph = eval(enemy_player_weapon_critical_hit_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_critical_hit_dph = eval(total_added_enemy_critical_hit_dph) - eval(total_reduced_enemy_critical_hit_dph);
	}
	else if (dying_calculation_method == "enemy_zombie")
	{
		//PVZ
		var enemy_zombie_base_dph = document.getElementById("enemy_zombie_base_dph").value;
		var enemy_zombie_critical_hit_dph = document.getElementById("enemy_zombie_critical_hit_dph").value;
		
		var total_added_enemy_base_dph = document.getElementById("total_added_enemy_base_dph").value;
		var total_added_enemy_critical_hit_dph = document.getElementById("total_added_enemy_critical_hit_dph").value;
		
		var player_bonus_damage_reduction_survival_implant = document.getElementById("player_bonus_damage_reduction_survival_implant").value;
		var player_bonus_damage_reduction_ironskin_implant = document.getElementById("player_bonus_damage_reduction_ironskin_implant").value;
		var player_bonus_weekend_event_damage_reduction = document.getElementById("player_bonus_weekend_event_damage_reduction").value;
		
		var total_bonus_damage_reduction = eval(player_bonus_damage_reduction_survival_implant) + eval(player_bonus_damage_reduction_ironskin_implant) + eval(player_bonus_weekend_event_damage_reduction);
		
		var total_reduced_enemy_base_dph = eval(enemy_zombie_base_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_base_dph = eval(total_added_enemy_base_dph) - eval(total_reduced_enemy_base_dph);
		
		var total_reduced_enemy_critical_hit_dph = eval(enemy_zombie_critical_hit_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_critical_hit_dph = eval(total_added_enemy_critical_hit_dph) - eval(total_reduced_enemy_critical_hit_dph);
	}
	
	document.getElementById("lbl_estimated_modified_damage_output_by_base_dph").innerHTML = "<label id='lbl_estimated_modified_damage_output_by_base_dph'>"+total_added_enemy_base_dph+" - "+total_reduced_enemy_base_dph+" = "+estimated_modified_damage_output_by_base_dph+" DPH</label>";
	document.getElementById("lbl_estimated_modified_damage_output_by_critical_hit_dph").innerHTML = "<label id='lbl_estimated_modified_damage_output_by_critical_hit_dph'>"+total_added_enemy_critical_hit_dph+" - "+total_reduced_enemy_critical_hit_dph+" = "+estimated_modified_damage_output_by_critical_hit_dph+" DPH</label>";
	
	
	
}

function process_dying_estimation(dying_calculation_method_param)
{
	
	var dying_calculation_method = dying_calculation_method_param;
	if (dying_calculation_method == "enemy_player")
	{
		//PVP
		var enemy_player_weapon_base_dph = document.getElementById("enemy_player_weapon_base_dph").value;
		var enemy_player_weapon_critical_hit_dph = document.getElementById("enemy_player_weapon_critical_hit_dph").value;
		
		var total_added_enemy_base_dph = document.getElementById("total_added_enemy_base_dph").value;
		var total_added_enemy_critical_hit_dph = document.getElementById("total_added_enemy_critical_hit_dph").value;
		
		var player_bonus_damage_reduction_survival_implant = document.getElementById("player_bonus_damage_reduction_survival_implant").value;
		var player_bonus_damage_reduction_ironskin_implant = document.getElementById("player_bonus_damage_reduction_ironskin_implant").value;
		var player_bonus_weekend_event_damage_reduction = document.getElementById("player_bonus_weekend_event_damage_reduction").value;
		
		var total_bonus_damage_reduction = eval(player_bonus_damage_reduction_survival_implant) + eval(player_bonus_damage_reduction_ironskin_implant) + eval(player_bonus_weekend_event_damage_reduction);
		
		var total_reduced_enemy_base_dph = eval(enemy_player_weapon_base_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_base_dph = eval(total_added_enemy_base_dph) - eval(total_reduced_enemy_base_dph);
		
		var total_reduced_enemy_critical_hit_dph = eval(enemy_player_weapon_critical_hit_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_critical_hit_dph = eval(total_added_enemy_critical_hit_dph) - eval(total_reduced_enemy_critical_hit_dph);
	}
	else if (dying_calculation_method == "enemy_zombie")
	{
		//PVZ
		var enemy_zombie_base_dph = document.getElementById("enemy_zombie_base_dph").value;
		var enemy_zombie_critical_hit_dph = document.getElementById("enemy_zombie_critical_hit_dph").value;
		
		var total_added_enemy_base_dph = document.getElementById("total_added_enemy_base_dph").value;
		var total_added_enemy_critical_hit_dph = document.getElementById("total_added_enemy_critical_hit_dph").value;
		
		var player_bonus_damage_reduction_survival_implant = document.getElementById("player_bonus_damage_reduction_survival_implant").value;
		var player_bonus_damage_reduction_ironskin_implant = document.getElementById("player_bonus_damage_reduction_ironskin_implant").value;
		var player_bonus_weekend_event_damage_reduction = document.getElementById("player_bonus_weekend_event_damage_reduction").value;
		
		var total_bonus_damage_reduction = eval(player_bonus_damage_reduction_survival_implant) + eval(player_bonus_damage_reduction_ironskin_implant) + eval(player_bonus_weekend_event_damage_reduction);
		
		var total_reduced_enemy_base_dph = eval(enemy_zombie_base_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_base_dph = eval(total_added_enemy_base_dph) - eval(total_reduced_enemy_base_dph);
		
		var total_reduced_enemy_critical_hit_dph = eval(enemy_zombie_critical_hit_dph) * eval(total_bonus_damage_reduction) / eval(100);
		var estimated_modified_damage_output_by_critical_hit_dph = eval(total_added_enemy_critical_hit_dph) - eval(total_reduced_enemy_critical_hit_dph);
	}
	
	var player_armor_damage_absorption = document.getElementById("player_armor_damage_absorption").value;
	var player_armor_durability = document.getElementById("player_armor_durability").value;
	var player_role = document.getElementById("player_role").value;
	
	if (player_role == 'zombie_player')  
	{
		var player_endurance_point = document.getElementById("zombie_player_endurance_point").value;
		var player_equivalent_health = player_endurance_point;
	}
	else if (player_role == 'normal_player')	
	{
		var player_endurance_point = document.getElementById("player_endurance_point").value;

		var player_damage_reduction_factor = get_damage_reduction_factor(player_armor_damage_absorption);
		var player_total_health = get_total_health(player_armor_durability, player_endurance_point);
		var player_equivalent_health = get_equivalent_health(player_damage_reduction_factor, player_total_health);
	}
	
	var max_hit_before_die_by_base_dph;
	var max_hit_before_die_by_critical_hit_dph;
	
	if (total_added_enemy_base_dph == 0) max_hit_before_die_by_base_dph = 'Never Die';
	else max_hit_before_die_by_base_dph = Math.ceil(eval (player_equivalent_health) / eval (estimated_modified_damage_output_by_base_dph));
	
		
	document.getElementById("lbl_estimated_max_hit_before_die_by_base_dph").innerHTML = "<label id = 'lbl_estimated_max_hit_before_die_by_base_dph'>"+player_equivalent_health+" / "+estimated_modified_damage_output_by_base_dph+" = <strong>"+max_hit_before_die_by_base_dph+"</strong>  Hits.";
	
	if (total_added_enemy_critical_hit_dph == 0) max_hit_before_die_by_critical_hit_dph = 'Never Die';
	else max_hit_before_die_by_critical_hit_dph = Math.ceil(eval (player_equivalent_health) / eval (estimated_modified_damage_output_by_critical_hit_dph));
	
	document.getElementById("lbl_estimated_max_hit_before_die_by_critical_hit_dph").innerHTML = "<label id = 'lbl_estimated_max_hit_before_die_by_critical_hit_dph'>"+player_equivalent_health+" / "+estimated_modified_damage_output_by_critical_hit_dph+" = <strong>"+max_hit_before_die_by_critical_hit_dph+"</strong> Hits.";
}

function process_all_dying()
{
	var dying_calculation_method = document.getElementById("dying_calculation_method").value; 
	
	process_sum_modified_damage(dying_calculation_method);
	process_dying_estimation(dying_calculation_method);
}

function download_excel_dying_formula()
{
   window.open("df_estimation_dying_tool.xlsx");
}
