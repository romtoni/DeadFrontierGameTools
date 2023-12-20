function check_tools(tool_param) {
	var tool = tool_param;

	if (tool == 'estimate_grinding_tool') location.href = "index.html";
	else if (tool == 'estimate_dying_tool') location.href = "df_estimate_dying_calculator.html";
	else if (tool == 'estimate_travelling_time') location.href = "df_estimate_travelling_time.html";
	else if (tool == 'stat_calculator') location.href = "df_stat_calculator.html";
	else if (tool == 'loot_simulator') location.href = "df_looting_simulator.html";
	else if (tool == 'dye_enhance_junkies') location.href = "df_dye_enhance_junkies.html";
}