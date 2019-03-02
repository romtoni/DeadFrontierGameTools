function check_grinding_zone(grinding_zone_param)
{
	var zombie_type_name_1;
	var zombie_type_hp_1;
	var zombie_type_exp_1;
	var zombie_type_spawn_rate_1;
	
	var zombie_type_name_2;
	var zombie_type_hp_2;
	var zombie_type_exp_2;
	var zombie_type_spawn_rate_2;
	
	var zombie_type_name_3;
	var zombie_type_hp_3;
	var zombie_type_exp_3;
	var zombie_type_spawn_rate_3;
	
	var zombie_type_name_4;
	var zombie_type_hp_4;
	var zombie_type_exp_4;
	var zombie_type_spawn_rate_4;
	
	var zombie_type_name_5;
	var zombie_type_hp_5;
	var zombie_type_exp_5;
	var zombie_type_spawn_rate_5;
	
	var zombie_type_name_6;
	var zombie_type_hp_6;
	var zombie_type_exp_6;
	var zombie_type_spawn_rate_6;
	
	var zombie_type_name_7;
	var zombie_type_hp_7;
	var zombie_type_exp_7;
	var zombie_type_spawn_rate_7;
	
	var zombie_type_name_8;
	var zombie_type_hp_8;
	var zombie_type_exp_8;
	var zombie_type_spawn_rate_8;
	
	var zombie_type_name_9;
	var zombie_type_hp_9;
	var zombie_type_exp_9;
	var zombie_type_spawn_rate_9;
	
	var zombie_type_name_10;
	var zombie_type_hp_10;
	var zombie_type_exp_10;
	var zombie_type_spawn_rate_10;
	
	var zombie_type_name_11;
	var zombie_type_hp_111;
	var zombie_type_exp_11;
	var zombie_type_spawn_rate_11;
	
	var max_zombie_estimation;
	var max_spawn_rate ;
	
	var grinding_zone = grinding_zone_param;
	
	switch(grinding_zone)
	{
			case "blue_zone" : 	max_zombie_estimation = 200;
								max_spawn_rate = 100;
								
								zombie_type_name_1 = "Dog";
								zombie_type_hp_1 = 20;
								zombie_type_exp_1 = 20;
								zombie_type_spawn_rate_1 = 5;
								
								zombie_type_name_2 = "Female Zombie";
								zombie_type_hp_2 = 21;
								zombie_type_exp_2 = 20;
								zombie_type_spawn_rate_2 = 5;
								
								zombie_type_name_3 = "Male Zombie";
								zombie_type_hp_3 = 25;
								zombie_type_exp_3 = 20;
								zombie_type_spawn_rate_3 = 5;
								
								zombie_type_name_4 = "Fat Female Zombie";
								zombie_type_hp_4 = 30;
								zombie_type_exp_4 = 28;
								zombie_type_spawn_rate_4 = 5;
								
								zombie_type_name_5 = "Fat Male Zombie";
								zombie_type_hp_5 = 34;
								zombie_type_exp_5 = 30;
								zombie_type_spawn_rate_5 = 5;
								
								zombie_type_name_6 = "-";
								zombie_type_hp_6 = 0;
								zombie_type_exp_6 = 0;
								zombie_type_spawn_rate_6 = 0;
								
								zombie_type_name_7 = "-";
								zombie_type_hp_7 = 0;
								zombie_type_exp_7 = 0;
								zombie_type_spawn_rate_7 = 0;
								
								zombie_type_name_8 = "-";
								zombie_type_hp_8 = 0;
								zombie_type_exp_8 = 0;
								zombie_type_spawn_rate_8 = 0;
								
								zombie_type_name_9 = "-";
								zombie_type_hp_9 = 0;
								zombie_type_exp_9 = 0;
								zombie_type_spawn_rate_9 = 0;
								
								zombie_type_name_10 = "-";
								zombie_type_hp_10 = 0;
								zombie_type_exp_10 = 0;
								zombie_type_spawn_rate_10 = 0;
								
								zombie_type_name_11 = "-";
								zombie_type_hp_11= 0;
								zombie_type_exp_11 = 0;
								zombie_type_spawn_rate_11 = 0;
								
								break;
								
			case "green_zone" : 	max_zombie_estimation = 400;
								max_spawn_rate = 100;
								
								zombie_type_name_1 = "Dog";
								zombie_type_hp_1 = 20;
								zombie_type_exp_1 = 20;
								zombie_type_spawn_rate_1 = 15;
								
								zombie_type_name_2 = "Female Zombie";
								zombie_type_hp_2 = 21;
								zombie_type_exp_2 = 20;
								zombie_type_spawn_rate_2 = 15;
								
								zombie_type_name_3 = "Male Zombie";
								zombie_type_hp_3 = 25;
								zombie_type_exp_3 = 20;
								zombie_type_spawn_rate_3 = 5;
								
								zombie_type_name_4 = "Fat Female Zombie";
								zombie_type_hp_4 = 30;
								zombie_type_exp_4 = 28;
								zombie_type_spawn_rate_4 = 5;
								
								zombie_type_name_5 = "Fat Male Zombie";
								zombie_type_hp_5 = 34;
								zombie_type_exp_5 = 30;
								zombie_type_spawn_rate_5 = 5;
								
								zombie_type_name_6 = "-";
								zombie_type_hp_6 = 0;
								zombie_type_exp_6 = 0;
								zombie_type_spawn_rate_6 = 0;
								
								zombie_type_name_7 = "-";
								zombie_type_hp_7 = 0;
								zombie_type_exp_7 = 0;
								zombie_type_spawn_rate_7 = 0;
								
								zombie_type_name_8 = "-";
								zombie_type_hp_8 = 0;
								zombie_type_exp_8 = 0;
								zombie_type_spawn_rate_8 = 0;
								
								zombie_type_name_9 = "-";
								zombie_type_hp_9 = 0;
								zombie_type_exp_9 = 0;
								zombie_type_spawn_rate_9 = 0;
								
								zombie_type_name_10 = "-";
								zombie_type_hp_10 = 0;
								zombie_type_exp_10 = 0;
								zombie_type_spawn_rate_10 = 0;
								
								zombie_type_name_11 = "-";
								zombie_type_hp_11= 0;
								zombie_type_exp_11 = 0;
								zombie_type_spawn_rate_11 = 0;
								
								break;					
								
			
			case "yellow_zone" : max_zombie_estimation = 400;
								max_spawn_rate = 100;
								
								zombie_type_name_1 = "Blood Dog";
								zombie_type_hp_1 = 100;
								zombie_type_exp_1 = 200;
								zombie_type_spawn_rate_1 = 5;
								
								zombie_type_name_2 = "Female Zombie";
								zombie_type_hp_2 = 21;
								zombie_type_exp_2 = 20;
								zombie_type_spawn_rate_2 = 5;
								
								zombie_type_name_3 = "Male Zombie";
								zombie_type_hp_3 = 25;
								zombie_type_exp_3 = 20;
								zombie_type_spawn_rate_3 = 5;
								
								zombie_type_name_4 = "Fat Female Zombie";
								zombie_type_hp_4 = 30;
								zombie_type_exp_4 = 28;
								zombie_type_spawn_rate_4 = 5;
								
								zombie_type_name_5 = "Fat Male Zombie";
								zombie_type_hp_5 = 34;
								zombie_type_exp_5 = 30;
								zombie_type_spawn_rate_5 = 5;
								
								zombie_type_name_6 = "Burned Female";
								zombie_type_hp_6 = 70;
								zombie_type_exp_6 = 100;
								zombie_type_spawn_rate_6 = 5;
								
								zombie_type_name_7 = "Bone";
								zombie_type_hp_7 = 250;
								zombie_type_exp_7 = 350;
								zombie_type_spawn_rate_7 = 5;
								
								zombie_type_name_8 = "Burned Male";
								zombie_type_hp_8 = 80;
								zombie_type_exp_8 = 110;
								zombie_type_spawn_rate_8 = 5;
								
								zombie_type_name_9 = "Small Bloat";
								zombie_type_hp_9 = 100;
								zombie_type_exp_9 = 135;
								zombie_type_spawn_rate_9 = 15;
								
								zombie_type_name_10 = "Reaper";
								zombie_type_hp_10 = 200;
								zombie_type_exp_10 = 300;
								zombie_type_spawn_rate_10 = 15;
								
								zombie_type_name_11 = "Siren";
								zombie_type_hp_11= 70;
								zombie_type_exp_11 = 200;
								zombie_type_spawn_rate_11 = 5;
								
								break;
								
			case "orange_zone" : max_zombie_estimation = 600;
								max_spawn_rate = 100;
								
								zombie_type_name_1 = "Blood Dog";
								zombie_type_hp_1 = 100;
								zombie_type_exp_1 = 200;
								zombie_type_spawn_rate_1 = 5;
								
								zombie_type_name_2 = "Spider";
								zombie_type_hp_2 = 300;
								zombie_type_exp_2 = 450;
								zombie_type_spawn_rate_2 = 5;
								
								zombie_type_name_3 = "Tendril";
								zombie_type_hp_3 = 235;
								zombie_type_exp_3 = 400;
								zombie_type_spawn_rate_3 = 5;
								
								zombie_type_name_4 = "Fat Female Zombie";
								zombie_type_hp_4 = 30;
								zombie_type_exp_4 = 28;
								zombie_type_spawn_rate_4 = 5;
								
								zombie_type_name_5 = "Fat Male Zombie";
								zombie_type_hp_5 = 34;
								zombie_type_exp_5 = 30;
								zombie_type_spawn_rate_5 = 5;
								
								zombie_type_name_6 = "Burned Female";
								zombie_type_hp_6 = 70;
								zombie_type_exp_6 = 100;
								zombie_type_spawn_rate_6 = 15;
								
								zombie_type_name_7 = "Brute";
								zombie_type_hp_7 = 400;
								zombie_type_exp_7 = 650;
								zombie_type_spawn_rate_7 = 5;
								
								zombie_type_name_8 = "Burned Male";
								zombie_type_hp_8 = 80;
								zombie_type_exp_8 = 110;
								zombie_type_spawn_rate_8 = 15;
								
								zombie_type_name_9 = "Bloat";
								zombie_type_hp_9 = 200;
								zombie_type_exp_9 = 400;
								zombie_type_spawn_rate_9 = 15;
								
								zombie_type_name_10 = "Leaper";
								zombie_type_hp_10 = 400;
								zombie_type_exp_10 = 650;
								zombie_type_spawn_rate_10 = 15;
								
								zombie_type_name_11 = "Siren";
								zombie_type_hp_11= 70;
								zombie_type_exp_11 = 200;
								zombie_type_spawn_rate_11 = 5;
								
								break;					
			
			case "red_zone" : max_zombie_estimation = 800;
								max_spawn_rate = 100;
								
								zombie_type_name_1 = "Blood Dog";
								zombie_type_hp_1 = 100;
								zombie_type_exp_1 = 200;
								zombie_type_spawn_rate_1 = 5;
								
								zombie_type_name_2 = "Spider";
								zombie_type_hp_2 = 300;
								zombie_type_exp_2 = 450;
								zombie_type_spawn_rate_2 = 5;
								
								zombie_type_name_3 = "Tendril";
								zombie_type_hp_3 = 235;
								zombie_type_exp_3 = 400;
								zombie_type_spawn_rate_3 = 10;
								
								zombie_type_name_4 = "Long Arm";
								zombie_type_hp_4 = 140;
								zombie_type_exp_4 = 250;
								zombie_type_spawn_rate_4 = 15;
								
								zombie_type_name_5 = "Rumbler";
								zombie_type_hp_5 = 170;
								zombie_type_exp_5 = 280;
								zombie_type_spawn_rate_5 = 15;
								
								zombie_type_name_6 = "Burned Female";
								zombie_type_hp_6 = 70;
								zombie_type_exp_6 = 100;
								zombie_type_spawn_rate_6 = 5;
								
								zombie_type_name_7 = "Brute";
								zombie_type_hp_7 = 400;
								zombie_type_exp_7 = 650;
								zombie_type_spawn_rate_7 = 5;
								
								zombie_type_name_8 = "Burned Male";
								zombie_type_hp_8 = 80;
								zombie_type_exp_8 = 110;
								zombie_type_spawn_rate_8 = 5;
								
								zombie_type_name_9 = "Bloat";
								zombie_type_hp_9 = 200;
								zombie_type_exp_9 = 400;
								zombie_type_spawn_rate_9 = 15;
								
								zombie_type_name_10 = "Leaper";
								zombie_type_hp_10 = 400;
								zombie_type_exp_10 = 650;
								zombie_type_spawn_rate_10 = 15;
								
								zombie_type_name_11 = "Siren";
								zombie_type_hp_11= 70;
								zombie_type_exp_11 = 200;
								zombie_type_spawn_rate_11 = 5;
								
								break;
			
			case "black_zone" : max_zombie_estimation = 1000;
								max_spawn_rate = 100;
								
								zombie_type_name_1 = "Flesh Hound";
								zombie_type_hp_1 = 200;
								zombie_type_exp_1 = 400;
								zombie_type_spawn_rate_1 = 15;
								
								zombie_type_name_2 = "Spider";
								zombie_type_hp_2 = 300;
								zombie_type_exp_2 = 450;
								zombie_type_spawn_rate_2 = 5;
								
								zombie_type_name_3 = "Tendril";
								zombie_type_hp_3 = 235;
								zombie_type_exp_3 = 400;
								zombie_type_spawn_rate_3 = 10;
								
								zombie_type_name_4 = "Long Arm";
								zombie_type_hp_4 = 140;
								zombie_type_exp_4 = 250;
								zombie_type_spawn_rate_4 = 15;
								
								zombie_type_name_5 = "Rumbler";
								zombie_type_hp_5 = 170;
								zombie_type_exp_5 = 280;
								zombie_type_spawn_rate_5 = 15;
								
								zombie_type_name_6 = "Black Long Arm";
								zombie_type_hp_6 = 200;
								zombie_type_exp_6 = 360;
								zombie_type_spawn_rate_6 = 10;
								
								zombie_type_name_7 = "Brute";
								zombie_type_hp_7 = 400;
								zombie_type_exp_7 = 650;
								zombie_type_spawn_rate_7 = 5;
								
								zombie_type_name_8 = "Black Rumbler";
								zombie_type_hp_8 = 250;
								zombie_type_exp_8 = 380;
								zombie_type_spawn_rate_8 = 10;
								
								zombie_type_name_9 = "Bloat";
								zombie_type_hp_9 = 200;
								zombie_type_exp_9 = 400;
								zombie_type_spawn_rate_9 = 5;
								
								zombie_type_name_10 = "Leaper";
								zombie_type_hp_10 = 400;
								zombie_type_exp_10 = 650;
								zombie_type_spawn_rate_10 = 5;
								
								zombie_type_name_11 = "Siren";
								zombie_type_hp_11= 70;
								zombie_type_exp_11 = 200;
								zombie_type_spawn_rate_11 = 5;
								
								break;		
								
		
			case "white_zone" : 	max_zombie_estimation = 1000;
									max_spawn_rate = 100;
									
									zombie_type_name_1 = "Black Rumbler";
									zombie_type_hp_1 = 250;
									zombie_type_exp_1 = 380;
									zombie_type_spawn_rate_1 = 15;
									
									zombie_type_name_2 = "Irradiated Rumbler";
									zombie_type_hp_2 = 250;
									zombie_type_exp_2 = 380;
									zombie_type_spawn_rate_2 = 15;
									
									zombie_type_name_3 = "Black Long Arm";
									zombie_type_hp_3 = 200;
									zombie_type_exp_3 = 360;
									zombie_type_spawn_rate_3 = 10;
									
									zombie_type_name_4 = "Irradiated Long Arm";
									zombie_type_hp_4 = 200;
									zombie_type_exp_4 = 360;
									zombie_type_spawn_rate_4 = 10;
									
									zombie_type_name_5 = "Siren";
									zombie_type_hp_5 = 70;
									zombie_type_exp_5 = 200;
									zombie_type_spawn_rate_5 = 5;
									
									zombie_type_name_6 = "Flesh Hound";
									zombie_type_hp_6 = 200;
									zombie_type_exp_6 = 400;
									zombie_type_spawn_rate_6 = 10;
									
									zombie_type_name_7 = "Leaper";
									zombie_type_hp_7 = 400;
									zombie_type_exp_7 = 650;
									zombie_type_spawn_rate_7 = 5;
									
									zombie_type_name_8 = "Bloat";
									zombie_type_hp_8 = 100;
									zombie_type_exp_8 = 135;
									zombie_type_spawn_rate_8 = 5;
									
									zombie_type_name_9 = "Tendril";
									zombie_type_hp_9 = 235;
									zombie_type_exp_9 = 400;
									zombie_type_spawn_rate_9 = 10;
									
									zombie_type_name_10 = "Spider";
									zombie_type_hp_10 = 300;
									zombie_type_exp_10 = 450;
									zombie_type_spawn_rate_10 = 10;
									
									zombie_type_name_11 = "Brute";
									zombie_type_hp_11= 400;
									zombie_type_exp_11 = 650;
									zombie_type_spawn_rate_11 = 5;
											
									break;
		
			case "wasteland" : 		max_zombie_estimation = 2000;
									max_spawn_rate = 100;
									
									zombie_type_name_1 = "Black Tendril";
									zombie_type_hp_1 = 300;
									zombie_type_exp_1 = 750;
									zombie_type_spawn_rate_1 = 20;
									
									zombie_type_name_2 = "Hell Hound";
									zombie_type_hp_2 = 600;
									zombie_type_exp_2 = 1250;
									zombie_type_spawn_rate_2 = 20;
									
									zombie_type_name_3 = "Black Bone";
									zombie_type_hp_3 = 600;
									zombie_type_exp_3 = 1500;
									zombie_type_spawn_rate_3 = 20;
									
									zombie_type_name_4 = "Mother (Wasteland)";
									zombie_type_hp_4 = 3250;
									zombie_type_exp_4 = 7500;
									zombie_type_spawn_rate_4 = 5;
									
									zombie_type_name_5 = "Siren";
									zombie_type_hp_5 = 70;
									zombie_type_exp_5 = 200;
									zombie_type_spawn_rate_5 = 5;
									
									zombie_type_name_6 = "Titan (Wasteland)";
									zombie_type_hp_6 = 3250;
									zombie_type_exp_6 = 7500;
									zombie_type_spawn_rate_6 = 5;
									
									zombie_type_name_7 = "Leaper";
									zombie_type_hp_7 = 400;
									zombie_type_exp_7 = 650;
									zombie_type_spawn_rate_7 = 5;
									
									zombie_type_name_8 = "Bloat";
									zombie_type_hp_8 = 100;
									zombie_type_exp_8 = 135;
									zombie_type_spawn_rate_8 = 5;
									
									zombie_type_name_9 = "Burned Male";
									zombie_type_hp_9 = 80;
									zombie_type_exp_9 = 100;
									zombie_type_spawn_rate_9 = 5;
									
									zombie_type_name_10 = "Spider";
									zombie_type_hp_10 = 300;
									zombie_type_exp_10 = 450;
									zombie_type_spawn_rate_10 = 5;
									zombie_type_name_11 = "Brute";
									zombie_type_hp_11= 400;
									zombie_type_exp_11 = 650;
									zombie_type_spawn_rate_11 = 5;
											
									break;
		
		
		default : 	max_zombie_estimation = 0;
					max_spawn_rate = 0;
					
					zombie_type_name_1 = "-";
					zombie_type_hp_1 = 0;
					zombie_type_exp_1 = 0;
					zombie_type_spawn_rate_1 = 0;
										
					zombie_type_name_2 = "-";
					zombie_type_hp_2 = 0;
					zombie_type_exp_2 = 0;
					zombie_type_spawn_rate_2 = 0;
										
					zombie_type_name_3 = "-";
					zombie_type_hp_3 = 0;
					zombie_type_exp_3 = 0;
					zombie_type_spawn_rate_3 = 0;
										
					zombie_type_name_4 = "-";
					zombie_type_hp_4 = 0;
					zombie_type_exp_4 = 0;
					zombie_type_spawn_rate_4 = 0;
										
					zombie_type_name_5 = "-";
					zombie_type_hp_5 = 0;
					zombie_type_exp_5 = 0;
					zombie_type_spawn_rate_5 = 0;
										
					zombie_type_name_6 = "-";
					zombie_type_hp_6 = 0;
					zombie_type_exp_6 = 0;
					zombie_type_spawn_rate_6 = 0;
										
					zombie_type_name_7 = "-";
					zombie_type_hp_7 = 0;
					zombie_type_exp_7 = 0;
					zombie_type_spawn_rate_7 = 0;
										
					zombie_type_name_8 = "-";
					zombie_type_hp_8 = 0;
					zombie_type_exp_8 = 0;
					zombie_type_spawn_rate_8 = 0;
										
					zombie_type_name_9 = "-";
					zombie_type_hp_9 = 0;
					zombie_type_exp_9 = 0;
					zombie_type_spawn_rate_9 = 0;
					
					zombie_type_name_10 = "-";
					zombie_type_hp_10 = 0;
					zombie_type_exp_10 = 0;
					zombie_type_spawn_rate_10 = 0;
					
					zombie_type_name_11 = "-";
					zombie_type_hp_11= 0;
					zombie_type_exp_11 = 0;
					zombie_type_spawn_rate_11 = 0;

					
					break;
	
	}
	
	zombie_type_spawn_1 = max_zombie_estimation * zombie_type_spawn_rate_1/100;
	zombie_type_total_hp_1 = zombie_type_spawn_1 * zombie_type_hp_1;
	zombie_type_total_exp_1 = zombie_type_spawn_1 * zombie_type_exp_1;
	
	zombie_type_spawn_2 = max_zombie_estimation * zombie_type_spawn_rate_2/100;
	zombie_type_total_hp_2 = zombie_type_spawn_2 * zombie_type_hp_2;
	zombie_type_total_exp_2 = zombie_type_spawn_2 * zombie_type_exp_2;
	
	zombie_type_spawn_3 = max_zombie_estimation * zombie_type_spawn_rate_3/100;
	zombie_type_total_hp_3 = zombie_type_spawn_3 * zombie_type_hp_3;
	zombie_type_total_exp_3 = zombie_type_spawn_3 * zombie_type_exp_3;
	
	zombie_type_spawn_4 = max_zombie_estimation * zombie_type_spawn_rate_4/100;
	zombie_type_total_hp_4 = zombie_type_spawn_4 * zombie_type_hp_4;
	zombie_type_total_exp_4 = zombie_type_spawn_4 * zombie_type_exp_4;
	
	zombie_type_spawn_5 = max_zombie_estimation * zombie_type_spawn_rate_5/100;
	zombie_type_total_hp_5 = zombie_type_spawn_5 * zombie_type_hp_5;
	zombie_type_total_exp_5 = zombie_type_spawn_5 * zombie_type_exp_5;
	
	zombie_type_spawn_6 = max_zombie_estimation * zombie_type_spawn_rate_6/100;
	zombie_type_total_hp_6 = zombie_type_spawn_6 * zombie_type_hp_6;
	zombie_type_total_exp_6 = zombie_type_spawn_6 * zombie_type_exp_6;
	
	zombie_type_spawn_7 = max_zombie_estimation * zombie_type_spawn_rate_7/100;
	zombie_type_total_hp_7 = zombie_type_spawn_7 * zombie_type_hp_7;
	zombie_type_total_exp_7 = zombie_type_spawn_7 * zombie_type_exp_7;
	
	zombie_type_spawn_8 = max_zombie_estimation * zombie_type_spawn_rate_8/100;
	zombie_type_total_hp_8 = zombie_type_spawn_8 * zombie_type_hp_8;
	zombie_type_total_exp_8 = zombie_type_spawn_8 * zombie_type_exp_8;
	
	zombie_type_spawn_9 = max_zombie_estimation * zombie_type_spawn_rate_9/100;
	zombie_type_total_hp_9 = zombie_type_spawn_9 * zombie_type_hp_9;
	zombie_type_total_exp_9 = zombie_type_spawn_9 * zombie_type_exp_9;
	
	zombie_type_spawn_10 = max_zombie_estimation * zombie_type_spawn_rate_10/100;
	zombie_type_total_hp_10 = zombie_type_spawn_10 * zombie_type_hp_10;
	zombie_type_total_exp_10 = zombie_type_spawn_10 * zombie_type_exp_10;
	
	zombie_type_spawn_11 = max_zombie_estimation * zombie_type_spawn_rate_11/100;
	zombie_type_total_hp_11 = zombie_type_spawn_11 * zombie_type_hp_11;
	zombie_type_total_exp_11 = zombie_type_spawn_11 * zombie_type_exp_11;
	
	
	var total_spawn_rate = eval(zombie_type_spawn_rate_1) +  eval(zombie_type_spawn_rate_2) +  eval(zombie_type_spawn_rate_3) +  eval(zombie_type_spawn_rate_4) +  eval(zombie_type_spawn_rate_5) +  eval(zombie_type_spawn_rate_6) +  eval(zombie_type_spawn_rate_7) +  eval(zombie_type_spawn_rate_8) +  eval(zombie_type_spawn_rate_9) +  eval(zombie_type_spawn_rate_10) +  eval(zombie_type_spawn_rate_11);
	var total_zombie_spawn= eval(zombie_type_spawn_1) +  eval(zombie_type_spawn_2) +  eval(zombie_type_spawn_3) +  eval(zombie_type_spawn_4) +  eval(zombie_type_spawn_5) +  eval(zombie_type_spawn_6) +  eval(zombie_type_spawn_7) +  eval(zombie_type_spawn_8) +  eval(zombie_type_spawn_9) +  eval(zombie_type_spawn_10) +  eval(zombie_type_spawn_11);
	var total_zombie_spawn_hp =  eval(zombie_type_hp_1) +  eval(zombie_type_hp_2) +  eval(zombie_type_hp_3) +  eval(zombie_type_hp_4) +  eval(zombie_type_hp_5) +  eval(zombie_type_hp_6) +  eval(zombie_type_hp_7) +  eval(zombie_type_hp_8) +  eval(zombie_type_hp_9) +  eval(zombie_type_hp_10) +  eval(zombie_type_hp_11);
	var total_zombie_spawn_exp =  eval(zombie_type_exp_1) +  eval(zombie_type_exp_2) +  eval(zombie_type_exp_3) +  eval(zombie_type_exp_4) +  eval(zombie_type_exp_5) +  eval(zombie_type_exp_6) +  eval(zombie_type_exp_7) +  eval(zombie_type_exp_8) +  eval(zombie_type_exp_9) +  eval(zombie_type_exp_10) +  eval(zombie_type_exp_11);
	
	document.getElementById("max_zombie_estimation").value = max_zombie_estimation;
	document.getElementById("max_spawn_rate").value = max_spawn_rate;
	
	document.getElementById("total_spawn_rate").value = total_spawn_rate;
	document.getElementById("total_zombie_spawn").value = total_zombie_spawn;
	document.getElementById("total_zombie_spawn_hp").value = total_zombie_spawn_hp;
	document.getElementById("total_zombie_spawn_exp").value = total_zombie_spawn_exp;
	
	document.getElementById("total_spawn_rate_old").value = total_spawn_rate;
	document.getElementById("total_zombie_spawn_old").value = total_zombie_spawn;
	document.getElementById("total_zombie_spawn_hp_old").value = total_zombie_spawn_hp;
	document.getElementById("total_zombie_spawn_exp_old").value = total_zombie_spawn_exp;
	
	document.getElementById("zombie_hp").value = total_zombie_spawn_hp;
	document.getElementById("zombie_exp").value = total_zombie_spawn_exp;
	
	document.getElementById("zombie_type_spawn_1").value = zombie_type_spawn_1;
	document.getElementById("zombie_type_spawn_2").value = zombie_type_spawn_2;
	document.getElementById("zombie_type_spawn_3").value = zombie_type_spawn_3;
	document.getElementById("zombie_type_spawn_4").value = zombie_type_spawn_4;
	document.getElementById("zombie_type_spawn_5").value = zombie_type_spawn_5;
	document.getElementById("zombie_type_spawn_6").value = zombie_type_spawn_6;
	document.getElementById("zombie_type_spawn_7").value = zombie_type_spawn_7;
	document.getElementById("zombie_type_spawn_8").value = zombie_type_spawn_8;
	document.getElementById("zombie_type_spawn_9").value = zombie_type_spawn_9;
	document.getElementById("zombie_type_spawn_10").value = zombie_type_spawn_10;
	document.getElementById("zombie_type_spawn_11").value = zombie_type_spawn_11;
	
	document.getElementById("zombie_type_name_1").value = zombie_type_name_1;
	document.getElementById("zombie_type_name_2").value = zombie_type_name_2;
	document.getElementById("zombie_type_name_3").value = zombie_type_name_3;
	document.getElementById("zombie_type_name_4").value = zombie_type_name_4;
	document.getElementById("zombie_type_name_5").value = zombie_type_name_5;
	document.getElementById("zombie_type_name_6").value = zombie_type_name_6;
	document.getElementById("zombie_type_name_7").value = zombie_type_name_7;
	document.getElementById("zombie_type_name_8").value = zombie_type_name_8;
	document.getElementById("zombie_type_name_9").value = zombie_type_name_9;
	document.getElementById("zombie_type_name_10").value = zombie_type_name_10;
	document.getElementById("zombie_type_name_11").value = zombie_type_name_11;
	
	document.getElementById("zombie_type_spawn_rate_1").value = zombie_type_spawn_rate_1;
	document.getElementById("zombie_type_spawn_rate_2").value = zombie_type_spawn_rate_2;
	document.getElementById("zombie_type_spawn_rate_3").value = zombie_type_spawn_rate_3;
	document.getElementById("zombie_type_spawn_rate_4").value = zombie_type_spawn_rate_4;
	document.getElementById("zombie_type_spawn_rate_5").value = zombie_type_spawn_rate_5;
	document.getElementById("zombie_type_spawn_rate_6").value = zombie_type_spawn_rate_6;
	document.getElementById("zombie_type_spawn_rate_7").value = zombie_type_spawn_rate_7;
	document.getElementById("zombie_type_spawn_rate_8").value = zombie_type_spawn_rate_8;
	document.getElementById("zombie_type_spawn_rate_9").value = zombie_type_spawn_rate_9;
	document.getElementById("zombie_type_spawn_rate_10").value = zombie_type_spawn_rate_10;
	document.getElementById("zombie_type_spawn_rate_11").value = zombie_type_spawn_rate_11;
	
	document.getElementById("zombie_type_hp_1").value = zombie_type_hp_1;
	document.getElementById("zombie_type_hp_2").value = zombie_type_hp_2;
	document.getElementById("zombie_type_hp_3").value = zombie_type_hp_3;
	document.getElementById("zombie_type_hp_4").value = zombie_type_hp_4;
	document.getElementById("zombie_type_hp_5").value = zombie_type_hp_5;
	document.getElementById("zombie_type_hp_6").value = zombie_type_hp_6;
	document.getElementById("zombie_type_hp_7").value = zombie_type_hp_7;
	document.getElementById("zombie_type_hp_8").value = zombie_type_hp_8;
	document.getElementById("zombie_type_hp_9").value = zombie_type_hp_9;
	document.getElementById("zombie_type_hp_10").value = zombie_type_hp_10;
	document.getElementById("zombie_type_hp_11").value = zombie_type_hp_11;
	
	document.getElementById("zombie_type_total_hp_1").value = zombie_type_total_hp_1;
	document.getElementById("zombie_type_total_hp_2").value = zombie_type_total_hp_2;
	document.getElementById("zombie_type_total_hp_3").value = zombie_type_total_hp_3;
	document.getElementById("zombie_type_total_hp_4").value = zombie_type_total_hp_4;
	document.getElementById("zombie_type_total_hp_5").value = zombie_type_total_hp_5;
	document.getElementById("zombie_type_total_hp_6").value = zombie_type_total_hp_6;
	document.getElementById("zombie_type_total_hp_7").value = zombie_type_total_hp_7;
	document.getElementById("zombie_type_total_hp_8").value = zombie_type_total_hp_8;
	document.getElementById("zombie_type_total_hp_9").value = zombie_type_total_hp_9;
	document.getElementById("zombie_type_total_hp_10").value = zombie_type_total_hp_10;
	document.getElementById("zombie_type_total_hp_11").value = zombie_type_total_hp_11;
	
	document.getElementById("zombie_type_exp_1").value = zombie_type_exp_1;
	document.getElementById("zombie_type_exp_2").value = zombie_type_exp_2;
	document.getElementById("zombie_type_exp_3").value = zombie_type_exp_3;
	document.getElementById("zombie_type_exp_4").value = zombie_type_exp_4;
	document.getElementById("zombie_type_exp_5").value = zombie_type_exp_5;
	document.getElementById("zombie_type_exp_6").value = zombie_type_exp_6;
	document.getElementById("zombie_type_exp_7").value = zombie_type_exp_7;
	document.getElementById("zombie_type_exp_8").value = zombie_type_exp_8;
	document.getElementById("zombie_type_exp_9").value = zombie_type_exp_9;
	document.getElementById("zombie_type_exp_10").value = zombie_type_exp_10;
	document.getElementById("zombie_type_exp_11").value = zombie_type_exp_11;
	
	document.getElementById("zombie_type_total_exp_1").value = zombie_type_total_exp_1;
	document.getElementById("zombie_type_total_exp_2").value = zombie_type_total_exp_2;
	document.getElementById("zombie_type_total_exp_3").value = zombie_type_total_exp_3;
	document.getElementById("zombie_type_total_exp_4").value = zombie_type_total_exp_4;
	document.getElementById("zombie_type_total_exp_5").value = zombie_type_total_exp_5;
	document.getElementById("zombie_type_total_exp_6").value = zombie_type_total_exp_6;
	document.getElementById("zombie_type_total_exp_7").value = zombie_type_total_exp_7;
	document.getElementById("zombie_type_total_exp_8").value = zombie_type_total_exp_8;

	document.getElementById("zombie_type_total_exp_9").value = zombie_type_total_exp_9;
	document.getElementById("zombie_type_total_exp_10").value = zombie_type_total_exp_10;
	document.getElementById("zombie_type_total_exp_11").value = zombie_type_total_exp_11;
	
	
	
	
	document.getElementById("zombie_type_spawn_1_old").value = zombie_type_spawn_1;
	document.getElementById("zombie_type_spawn_2_old").value = zombie_type_spawn_2;
	document.getElementById("zombie_type_spawn_3_old").value = zombie_type_spawn_3;
	document.getElementById("zombie_type_spawn_4_old").value = zombie_type_spawn_4;
	document.getElementById("zombie_type_spawn_5_old").value = zombie_type_spawn_5;
	document.getElementById("zombie_type_spawn_6_old").value = zombie_type_spawn_6;
	document.getElementById("zombie_type_spawn_7_old").value = zombie_type_spawn_7;
	document.getElementById("zombie_type_spawn_8_old").value = zombie_type_spawn_8;
	document.getElementById("zombie_type_spawn_9_old").value = zombie_type_spawn_9;
	document.getElementById("zombie_type_spawn_10_old").value = zombie_type_spawn_10;
	document.getElementById("zombie_type_spawn_11_old").value = zombie_type_spawn_11;
	
	document.getElementById("zombie_type_spawn_rate_1_old").value = zombie_type_spawn_rate_1;
	document.getElementById("zombie_type_spawn_rate_2_old").value = zombie_type_spawn_rate_2;
	document.getElementById("zombie_type_spawn_rate_3_old").value = zombie_type_spawn_rate_3;
	document.getElementById("zombie_type_spawn_rate_4_old").value = zombie_type_spawn_rate_4;
	document.getElementById("zombie_type_spawn_rate_5_old").value = zombie_type_spawn_rate_5;
	document.getElementById("zombie_type_spawn_rate_6_old").value = zombie_type_spawn_rate_6;
	document.getElementById("zombie_type_spawn_rate_7_old").value = zombie_type_spawn_rate_7;
	document.getElementById("zombie_type_spawn_rate_8_old").value = zombie_type_spawn_rate_8;
	document.getElementById("zombie_type_spawn_rate_9_old").value = zombie_type_spawn_rate_9;
	document.getElementById("zombie_type_spawn_rate_10_old").value = zombie_type_spawn_rate_10;
	document.getElementById("zombie_type_spawn_rate_11_old").value = zombie_type_spawn_rate_11;
	
	document.getElementById("zombie_type_total_hp_1_old").value = zombie_type_total_hp_1;
	document.getElementById("zombie_type_total_hp_2_old").value = zombie_type_total_hp_2;
	document.getElementById("zombie_type_total_hp_3_old").value = zombie_type_total_hp_3;
	document.getElementById("zombie_type_total_hp_4_old").value = zombie_type_total_hp_4;
	document.getElementById("zombie_type_total_hp_5_old").value = zombie_type_total_hp_5;
	document.getElementById("zombie_type_total_hp_6_old").value = zombie_type_total_hp_6;
	document.getElementById("zombie_type_total_hp_7_old").value = zombie_type_total_hp_7;
	document.getElementById("zombie_type_total_hp_8_old").value = zombie_type_total_hp_8;
	document.getElementById("zombie_type_total_hp_9_old").value = zombie_type_total_hp_9;
	document.getElementById("zombie_type_total_hp_10_old").value = zombie_type_total_hp_10;
	document.getElementById("zombie_type_total_hp_11_old").value = zombie_type_total_hp_11;
	
	document.getElementById("zombie_type_total_exp_1_old").value = zombie_type_total_exp_1;
	document.getElementById("zombie_type_total_exp_2_old").value = zombie_type_total_exp_2;
	document.getElementById("zombie_type_total_exp_3_old").value = zombie_type_total_exp_3;
	document.getElementById("zombie_type_total_exp_4_old").value = zombie_type_total_exp_4;
	document.getElementById("zombie_type_total_exp_5_old").value = zombie_type_total_exp_5;
	document.getElementById("zombie_type_total_exp_6_old").value = zombie_type_total_exp_6;
	document.getElementById("zombie_type_total_exp_7_old").value = zombie_type_total_exp_7;
	document.getElementById("zombie_type_total_exp_8_old").value = zombie_type_total_exp_8;
	document.getElementById("zombie_type_total_exp_9_old").value = zombie_type_total_exp_9;
	document.getElementById("zombie_type_total_exp_10_old").value = zombie_type_total_exp_10;
	document.getElementById("zombie_type_total_exp_11_old").value = zombie_type_total_exp_11;
	
	document.getElementById("zombie_boss_hp").value = 0;
	document.getElementById("zombie_boss_exp").value = 0;
	document.getElementById("zombie_boss_spawn").value = 0;
	document.getElementById("zombie_boss_total_hp").value = 0;
	document.getElementById("zombie_boss_total_exp").value = 0;
		
	check_boss_zone(grinding_zone_param);
}

function check_boss_zone(grinding_zone_param)
{
	var grinding_zone = grinding_zone_param;
	
	var zombie_boss_name;
	
	switch (grinding_zone)
	{
		case "blue_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='flamingzombie'>Flaming Zombie</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option></select>";
												break;
		case "green_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='flamingzombie'>Flaming Zombie</option><option value='mother'>Mother</option><option value='titan'>Titan</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option></select>";
												break;
		case "yellow_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='flamingzombie'>Flaming Zombie</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option><option value='slenderman'>Slenderman</option></select>";
												break;										
		case "orange_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option><option value='slenderman'>Slenderman</option></select>";
												break;											
		case "red_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option><option value='slenderman'>Slenderman</option></select>";
												break;	
		case "black_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='mother'>Mother</option><option value='giantspider'>Giant Spider</option><option value='titan'>Titan</option><option value='wraith'>Wraith</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option><option value='slenderman'>Slenderman</option></select>";
												break;	
		case "white_zone" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='flaminglongarm'>Flaming Long Arm</option><option value='flamingrumbler'>Flaming Rumbler</option><option value='flamingfleshhound'>Flaming Flesh Hound</option><option value='flamingmother'>Flaming Mother</option><option value='flamingtitan'>Flaming Titan</option><option value='flamingwraith'>Flaming Wraith</option><option value='flaminggiantspider'>Flaming Giant Spider</option><option value='blacktitan'>Black Titan</option><option value='flamingblacktitan'>Flaming Black Titan</option><option value='elf'>Elf</option><option value='pumpkinhead'>Pumpkin Head</option><option value='egghead'>Egg Had</option><option value='santa'>Santa</option><option value='reindeer'>Reindeer</option><option value='slenderman'>Slenderman</option></select>";
												break;
		case "wasteland" : zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value, 'zonebased', '')'><option value=''>--No Boss--</option><option value='devilhound'>Devil Hound</option></select>";
												break;										
												
		default : 	zombie_boss_name = "<select name='zombie_boss_name' id='zombie_boss_name' onchange='get_zombie_stat(this.value,'zonebased', '')'><option value=''>--No Boss--</option></select>";
										break;	
	}
	document.getElementById("zombie_boss_name").innerHTML = zombie_boss_name;
	document.getElementById("zombie_boss_hp").innerHTML = zombie_boss_hp;
	document.getElementById("zombie_boss_exp").innerHTML = zombie_boss_exp;

}

function sum_boss_stat(boss_spawn_param, boss_hp_param, boss_exp_param)
{
	var boss_spawn = boss_spawn_param;
	var boss_hp = boss_hp_param;
	var boss_exp = boss_exp_param;
		
	var zombie_boss_total_hp = eval(boss_spawn_param) * eval(boss_hp_param);
	var zombie_boss_total_exp = eval(boss_spawn_param) * eval(boss_exp_param);
	
	document.getElementById("zombie_boss_total_hp").value = zombie_boss_total_hp;
	document.getElementById("zombie_boss_total_exp").value = zombie_boss_total_exp;
	
	var total_zombie_spawn = document.getElementById("total_zombie_spawn_old").value;
	var total_zombie_spawn_plus_boss = eval(total_zombie_spawn) + eval(boss_spawn);
	document.getElementById("total_zombie_spawn").value = total_zombie_spawn_plus_boss;

	var total_zombie_spawn_hp = document.getElementById("total_zombie_spawn_hp_old").value;
	var total_zombie_spawn_plus_boss_hp = eval(total_zombie_spawn_hp) + eval(zombie_boss_total_hp);
	document.getElementById("total_zombie_spawn_hp").value = total_zombie_spawn_plus_boss_hp;
	
	var total_zombie_spawn_exp = document.getElementById("total_zombie_spawn_exp_old").value;
	var total_zombie_spawn_plus_boss_exp = eval(total_zombie_spawn_exp) + eval(zombie_boss_total_exp);
	document.getElementById("total_zombie_spawn_exp").value = total_zombie_spawn_plus_boss_exp;
	
	document.getElementById("zombie_hp").value = total_zombie_spawn_plus_boss_hp;
	document.getElementById("zombie_exp").value = total_zombie_spawn_plus_boss_exp;
}

function sum_spawn_zombie(spawn_rate_param, zombie_order_no_param, zombie_hp_param, zombie_exp_param, max_zombie_estimation_param)
{
	var max_zombie_estimation = max_zombie_estimation_param;
	var zombie_order_no = zombie_order_no_param;
	var spawn_rate = spawn_rate_param;
	var zombie_hp = zombie_hp_param;
	var zombie_exp = zombie_exp_param;
	
	var new_zombie_spawn_1;
	var new_zombie_spawn_2;
	var new_zombie_spawn_3;
	var new_zombie_spawn_4;
	var new_zombie_spawn_5;
	var new_zombie_spawn_6;
	var new_zombie_spawn_7;
	var new_zombie_spawn_8;
	var new_zombie_spawn_9;
	var new_zombie_spawn_10;
	var new_zombie_spawn_11;
	
	var new_zombie_total_exp_1;
	var new_zombie_total_exp_2;
	var new_zombie_total_exp_3;
	var new_zombie_total_exp_4;
	var new_zombie_total_exp_5;
	var new_zombie_total_exp_6;
	var new_zombie_total_exp_7;
	var new_zombie_total_exp_8;
	var new_zombie_total_exp_9;
	var new_zombie_total_exp_10;
	var new_zombie_total_exp_11;
	
	var new_zombie_total_hp_1;
	var new_zombie_total_hp_2;
	var new_zombie_total_hp_3;
	var new_zombie_total_hp_4;
	var new_zombie_total_hp_5;
	var new_zombie_total_hp_6;
	var new_zombie_total_hp_7;
	var new_zombie_total_hp_8;
	var new_zombie_total_hp_9;
	var new_zombie_total_hp_10;
	var new_zombie_total_hp_11;
	
	

	
	
	switch(zombie_order_no_param)
	{
		case 1 : 	new_zombie_spawn_1 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_1 = eval(new_zombie_spawn_1) * eval(zombie_hp);
					 new_zombie_total_exp_1 = eval(new_zombie_spawn_1) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_1").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_1").value = new_zombie_spawn_1;
					 document.getElementById("zombie_type_total_hp_1").value = new_zombie_total_hp_1;
					 document.getElementById("zombie_type_total_exp_1").value = new_zombie_total_exp_1;
					
					 break;
				 
		case 2 : new_zombie_spawn_2 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_2 = eval(new_zombie_spawn_2) * eval(zombie_hp);
					 new_zombie_total_exp_2 = eval(new_zombie_spawn_2) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_2").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_2").value = new_zombie_spawn_2;
					 document.getElementById("zombie_type_total_hp_2").value = new_zombie_total_hp_2;
					 document.getElementById("zombie_type_total_exp_2").value = new_zombie_total_exp_2;
					 
					 break;	
					 
		case 3 : new_zombie_spawn_3 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_3 = eval(new_zombie_spawn_3) * eval(zombie_hp);
					 new_zombie_total_exp_3 = eval(new_zombie_spawn_3) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_3").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_3").value = new_zombie_spawn_3;
					 document.getElementById("zombie_type_total_hp_3").value = new_zombie_total_hp_3;
					 document.getElementById("zombie_type_total_exp_3").value = new_zombie_total_exp_3;

					break;	
					 
		case 4 : new_zombie_spawn_4 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_4 = eval(new_zombie_spawn_4) * eval(zombie_hp);
					 new_zombie_total_exp_4 = eval(new_zombie_spawn_4) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_4").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_4").value = new_zombie_spawn_4;
					 document.getElementById("zombie_type_total_hp_4").value = new_zombie_total_hp_4;
					 document.getElementById("zombie_type_total_exp_4").value = new_zombie_total_exp_4;
					 
					 break;	
					 
		case 5 : new_zombie_spawn_5 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_5 = eval(new_zombie_spawn_5) * eval(zombie_hp);
					 new_zombie_total_exp_5 = eval(new_zombie_spawn_5) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_5").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_5").value = new_zombie_spawn_5;
					 document.getElementById("zombie_type_total_hp_5").value = new_zombie_total_hp_5;
					 document.getElementById("zombie_type_total_exp_5").value = new_zombie_total_exp_5;
					 
					 break;	
					 
		case 6 : new_zombie_spawn_6 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_6 = eval(new_zombie_spawn_6) * eval(zombie_hp);
					 new_zombie_total_exp_6 = eval(new_zombie_spawn_6) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_6").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_6").value = new_zombie_spawn_6;
					 document.getElementById("zombie_type_total_hp_6").value = new_zombie_total_hp_6;
					 document.getElementById("zombie_type_total_exp_6").value = new_zombie_total_exp_6;
					 
					 break;	
		
		case 7 : new_zombie_spawn_7 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_7 = eval(new_zombie_spawn_7) * eval(zombie_hp);
					 new_zombie_total_exp_7 = eval(new_zombie_spawn_7) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_7").value = new_zombie_spawn_7;
					 document.getElementById("zombie_type_total_hp_7").value = new_zombie_total_hp_7;
					 document.getElementById("zombie_type_total_exp_7").value = new_zombie_total_exp_7;
					 
					 break;	
		
		case 8 : new_zombie_spawn_8 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_8 = eval(new_zombie_spawn_8) * eval(zombie_hp);
					 new_zombie_total_exp_8 = eval(new_zombie_spawn_8) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_8").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_8").value = new_zombie_spawn_8;
					 document.getElementById("zombie_type_total_hp_8").value = new_zombie_total_hp_8;
					 document.getElementById("zombie_type_total_exp_8").value = new_zombie_total_exp_8;
					 
					 break;	
		
		case 9 : new_zombie_spawn_9 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_9 = eval(new_zombie_spawn_9) * eval(zombie_hp);
					 new_zombie_total_exp_9 = eval(new_zombie_spawn_9) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_9").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_9").value = new_zombie_spawn_9;
					 document.getElementById("zombie_type_total_hp_9").value = new_zombie_total_hp_9;
					 document.getElementById("zombie_type_total_exp_9").value = new_zombie_total_exp_9;
					 
					 break;	
		
		case 10 : new_zombie_spawn_10 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_10 = eval(new_zombie_spawn_10) * eval(zombie_hp);
					 new_zombie_total_exp_10 = eval(new_zombie_spawn_10) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_10").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_10").value = new_zombie_spawn_10;
					 document.getElementById("zombie_type_total_hp_10").value = new_zombie_total_hp_10;
					 document.getElementById("zombie_type_total_exp_10").value = new_zombie_total_exp_10;
					 
					 break;	
		
		case 11 : new_zombie_spawn_11 = eval(spawn_rate)/100 * eval(max_zombie_estimation);
					 new_zombie_total_hp_11 = eval(new_zombie_spawn_11) * eval(zombie_hp);
					 new_zombie_total_exp_11 = eval(new_zombie_spawn_11) * eval(zombie_exp);
					 
					 document.getElementById("zombie_type_spawn_rate_11").value = spawn_rate;
					 document.getElementById("zombie_type_spawn_11").value = new_zombie_spawn_11;
					 document.getElementById("zombie_type_total_hp_11").value = new_zombie_total_hp_11;
					 document.getElementById("zombie_type_total_exp_11").value = new_zombie_total_exp_11;
					 
					 break;	
		
		default : break;
	}
	
	sum_new_total_zombie_stat();
	
	var total_spawn_rate_old = document.getElementById("total_spawn_rate_old").value;
	var total_spawn_rate = document.getElementById("total_spawn_rate").value;
	var max_spawn_rate = document.getElementById("max_spawn_rate").value;

						
	var flag_overlimit_max_spawn = compare_max_spawn_rate(max_spawn_rate, total_spawn_rate, total_spawn_rate_old);
					
	if (flag_overlimit_max_spawn == true)	put_back_old_value_spawn_rate();
	else store_new_spawn_rate_value();
	
}

function sum_new_total_zombie_stat()
{
	var new_zombie_spawn_rate_1 =  document.getElementById("zombie_type_spawn_rate_1").value;
	var new_zombie_spawn_rate_2 =  document.getElementById("zombie_type_spawn_rate_2").value;
	var new_zombie_spawn_rate_3 =  document.getElementById("zombie_type_spawn_rate_3").value;
	var new_zombie_spawn_rate_4 =  document.getElementById("zombie_type_spawn_rate_4").value;
	var new_zombie_spawn_rate_5 =  document.getElementById("zombie_type_spawn_rate_5").value;
	var new_zombie_spawn_rate_6 =  document.getElementById("zombie_type_spawn_rate_6").value;
	var new_zombie_spawn_rate_7 =  document.getElementById("zombie_type_spawn_rate_7").value;
	var new_zombie_spawn_rate_8 =  document.getElementById("zombie_type_spawn_rate_8").value;
	var new_zombie_spawn_rate_9 =  document.getElementById("zombie_type_spawn_rate_9").value;
	var new_zombie_spawn_rate_10 =  document.getElementById("zombie_type_spawn_rate_10").value;
	var new_zombie_spawn_rate_11 =  document.getElementById("zombie_type_spawn_rate_11").value;

	var new_zombie_spawn_1 =  document.getElementById("zombie_type_spawn_1").value;
	var new_zombie_spawn_2 =  document.getElementById("zombie_type_spawn_2").value;
	var new_zombie_spawn_3 =  document.getElementById("zombie_type_spawn_3").value;
	var new_zombie_spawn_4 =  document.getElementById("zombie_type_spawn_4").value;
	var new_zombie_spawn_5 =  document.getElementById("zombie_type_spawn_5").value;
	var new_zombie_spawn_6 =  document.getElementById("zombie_type_spawn_6").value;
	var new_zombie_spawn_7 =  document.getElementById("zombie_type_spawn_7").value;
	var new_zombie_spawn_8 =  document.getElementById("zombie_type_spawn_8").value;
	var new_zombie_spawn_9 =  document.getElementById("zombie_type_spawn_9").value;
	var new_zombie_spawn_10 =  document.getElementById("zombie_type_spawn_10").value;
	var new_zombie_spawn_11 =  document.getElementById("zombie_type_spawn_11").value;
	
	var new_zombie_total_hp_1 =  document.getElementById("zombie_type_total_hp_1").value;
	var new_zombie_total_hp_2 =  document.getElementById("zombie_type_total_hp_2").value;
	var new_zombie_total_hp_3 =  document.getElementById("zombie_type_total_hp_3").value;
	var new_zombie_total_hp_4 =  document.getElementById("zombie_type_total_hp_4").value;
	var new_zombie_total_hp_5 =  document.getElementById("zombie_type_total_hp_5").value;
	var new_zombie_total_hp_6 =  document.getElementById("zombie_type_total_hp_6").value;
	var new_zombie_total_hp_7 =  document.getElementById("zombie_type_total_hp_7").value;
	var new_zombie_total_hp_8 =  document.getElementById("zombie_type_total_hp_8").value;
	var new_zombie_total_hp_9 =  document.getElementById("zombie_type_total_hp_9").value;
	var new_zombie_total_hp_10 =  document.getElementById("zombie_type_total_hp_10").value;
	var new_zombie_total_hp_11 =  document.getElementById("zombie_type_total_hp_11").value;
	
	var new_zombie_total_exp_1 =  document.getElementById("zombie_type_total_exp_1").value;
	var new_zombie_total_exp_2 =  document.getElementById("zombie_type_total_exp_2").value;
	var new_zombie_total_exp_3 =  document.getElementById("zombie_type_total_exp_3").value;
	var new_zombie_total_exp_4 =  document.getElementById("zombie_type_total_exp_4").value;
	var new_zombie_total_exp_5 =  document.getElementById("zombie_type_total_exp_5").value;
	var new_zombie_total_exp_6 =  document.getElementById("zombie_type_total_exp_6").value;
	var new_zombie_total_exp_7 =  document.getElementById("zombie_type_total_exp_7").value;
	var new_zombie_total_exp_8 =  document.getElementById("zombie_type_total_exp_8").value;
	var new_zombie_total_exp_9 =  document.getElementById("zombie_type_total_exp_9").value;
	var new_zombie_total_exp_10 =  document.getElementById("zombie_type_total_exp_10").value;
	var new_zombie_total_exp_11 =  document.getElementById("zombie_type_total_exp_11").value;

	var total_spawn_rate = eval(new_zombie_spawn_rate_1) +  eval(new_zombie_spawn_rate_2) +  eval(new_zombie_spawn_rate_3) +  eval(new_zombie_spawn_rate_4) +  eval(new_zombie_spawn_rate_5) +  eval(new_zombie_spawn_rate_6) +  eval(new_zombie_spawn_rate_7) +  eval(new_zombie_spawn_rate_8) +  eval(new_zombie_spawn_rate_9) +  eval(new_zombie_spawn_rate_10) +  eval(new_zombie_spawn_rate_11);
	var total_zombie_spawn = eval(new_zombie_spawn_1) +  eval(new_zombie_spawn_2) +  eval(new_zombie_spawn_3) +  eval(new_zombie_spawn_4) +  eval(new_zombie_spawn_5) +  eval(new_zombie_spawn_6) +  eval(new_zombie_spawn_7) +  eval(new_zombie_spawn_8) +  eval(new_zombie_spawn_9) +  eval(new_zombie_spawn_10) +  eval(new_zombie_spawn_11);
	var total_zombie_spawn_hp =  eval(new_zombie_total_hp_1) +  eval(new_zombie_total_hp_2) +  eval(new_zombie_total_hp_3) +  eval(new_zombie_total_hp_4) +  eval(new_zombie_total_hp_5) +  eval(new_zombie_total_hp_6) +  eval(new_zombie_total_hp_7) +  eval(new_zombie_total_hp_8) +  eval(new_zombie_total_hp_9) +  eval(new_zombie_total_hp_10) +  eval(new_zombie_total_hp_11);
	var total_zombie_spawn_exp =  eval(new_zombie_total_exp_1) +  eval(new_zombie_total_exp_2) +  eval(new_zombie_total_exp_3) +  eval(new_zombie_total_exp_4) +  eval(new_zombie_total_exp_5) +  eval(new_zombie_total_exp_6) +  eval(new_zombie_total_exp_7) +  eval(new_zombie_total_exp_8) +  eval(new_zombie_total_exp_9) +  eval(new_zombie_total_exp_10) +  eval(new_zombie_total_exp_11);
	
	
	document.getElementById("total_spawn_rate").value = total_spawn_rate;
	document.getElementById("total_zombie_spawn").value = total_zombie_spawn;
	document.getElementById("total_zombie_spawn_hp").value = total_zombie_spawn_hp;
	document.getElementById("total_zombie_spawn_exp").value = total_zombie_spawn_exp;
		
	var total_spawn_rate_old = document.getElementById("total_spawn_rate_old").value;
	var total_spawn_rate = document.getElementById("total_spawn_rate").value;
	var max_spawn_rate = document.getElementById("max_spawn_rate").value;
						
	var flag_overlimit_max_spawn = compare_max_spawn_rate(max_spawn_rate, total_spawn_rate, total_spawn_rate_old);
					
	if (flag_overlimit_max_spawn == true)	put_back_old_value_spawn_rate();
	else store_new_spawn_rate_value();

}


function sum_new_zombie_spawn_spread(max_zombie_estimation_param)
{
	var max_zombie_estimation = max_zombie_estimation_param;

	var zombie_type_spawn;
	var zombie_type_hp;
	var zombie_type_exp;
	var i;
	
	
	for (i=1;i<=11;i++)
	{
		zombie_type_spawn_rate =  document.getElementById("zombie_type_spawn_rate_"+i).value;
		zombie_type_hp = document.getElementById("zombie_type_hp_"+i).value;
		zombie_type_exp = document.getElementById("zombie_type_exp_"+i).value;
		
		sum_spawn_zombie(zombie_type_spawn_rate, i, zombie_type_hp, zombie_type_exp, max_zombie_estimation);
		
	}

	var zombie_boss_spawn = document.getElementById("zombie_boss_spawn").value;
	var zombie_boss_hp = document.getElementById("zombie_boss_hp").value;
	var zombie_boss_exp = document.getElementById("zombie_boss_exp").value;
	

	sum_new_total_zombie_stat();
	sum_boss_stat(zombie_boss_spawn, zombie_boss_hp, zombie_boss_exp);

}

function compare_max_spawn_rate(max_spawn_rate_param, total_spawn_rate_param, total_spawn_rate_old_param)
{
	var max_spawn_rate = max_spawn_rate_param;
	var total_spawn_rate = total_spawn_rate_param;
	var total_spawn_rate_old = total_spawn_rate_old_param;
	var flag_overlimit_max_spawn;
	
	if (eval(total_spawn_rate) > eval(max_spawn_rate)) flag_overlimit_max_spawn = true;
	else flag_overlimit_max_spawn = false;
	
	return flag_overlimit_max_spawn;
}


function put_back_old_value_spawn_rate()
{
	alert("Spawn rate is overlimit");
	
	document.getElementById("zombie_type_spawn_rate_1").value = document.getElementById("zombie_type_spawn_rate_1_old").value;
	document.getElementById("zombie_type_spawn_1").value = document.getElementById("zombie_type_spawn_1_old").value
	document.getElementById("zombie_type_total_hp_1").value = document.getElementById("zombie_type_total_hp_1_old").value
	document.getElementById("zombie_type_total_exp_1").value = document.getElementById("zombie_type_total_exp_1_old").value;
	
	document.getElementById("zombie_type_spawn_rate_2").value = document.getElementById("zombie_type_spawn_rate_2_old").value;
	document.getElementById("zombie_type_spawn_2").value = document.getElementById("zombie_type_spawn_2_old").value
	document.getElementById("zombie_type_total_hp_2").value = document.getElementById("zombie_type_total_hp_2_old").value
	document.getElementById("zombie_type_total_exp_2").value = document.getElementById("zombie_type_total_exp_2_old").value;
	
	document.getElementById("zombie_type_spawn_rate_3").value = document.getElementById("zombie_type_spawn_rate_3_old").value;
	document.getElementById("zombie_type_spawn_3").value = document.getElementById("zombie_type_spawn_3_old").value
	document.getElementById("zombie_type_total_hp_3").value = document.getElementById("zombie_type_total_hp_3_old").value
	document.getElementById("zombie_type_total_exp_3").value = document.getElementById("zombie_type_total_exp_3_old").value;
	
	document.getElementById("zombie_type_spawn_rate_4").value = document.getElementById("zombie_type_spawn_rate_4_old").value;
	document.getElementById("zombie_type_spawn_4").value = document.getElementById("zombie_type_spawn_4_old").value
	document.getElementById("zombie_type_total_hp_4").value = document.getElementById("zombie_type_total_hp_4_old").value
	document.getElementById("zombie_type_total_exp_4").value = document.getElementById("zombie_type_total_exp_4_old").value;
	
	document.getElementById("zombie_type_spawn_rate_5").value = document.getElementById("zombie_type_spawn_rate_5_old").value;
	document.getElementById("zombie_type_spawn_5").value = document.getElementById("zombie_type_spawn_5_old").value
	document.getElementById("zombie_type_total_hp_5").value = document.getElementById("zombie_type_total_hp_5_old").value
	document.getElementById("zombie_type_total_exp_5").value = document.getElementById("zombie_type_total_exp_5_old").value;
	
	document.getElementById("zombie_type_spawn_rate_6").value = document.getElementById("zombie_type_spawn_rate_6_old").value;
	document.getElementById("zombie_type_spawn_6").value = document.getElementById("zombie_type_spawn_6_old").value
	document.getElementById("zombie_type_total_hp_6").value = document.getElementById("zombie_type_total_hp_6_old").value
	document.getElementById("zombie_type_total_exp_6").value = document.getElementById("zombie_type_total_exp_6_old").value;
	
	document.getElementById("zombie_type_spawn_rate_7").value = document.getElementById("zombie_type_spawn_rate_7_old").value;
	document.getElementById("zombie_type_spawn_7").value = document.getElementById("zombie_type_spawn_7_old").value
	document.getElementById("zombie_type_total_hp_7").value = document.getElementById("zombie_type_total_hp_7_old").value
	document.getElementById("zombie_type_total_exp_7").value = document.getElementById("zombie_type_total_exp_7_old").value;
	
	document.getElementById("zombie_type_spawn_rate_8").value = document.getElementById("zombie_type_spawn_rate_8_old").value;
	document.getElementById("zombie_type_spawn_8").value = document.getElementById("zombie_type_spawn_8_old").value
	document.getElementById("zombie_type_total_hp_8").value = document.getElementById("zombie_type_total_hp_8_old").value
	document.getElementById("zombie_type_total_exp_8").value = document.getElementById("zombie_type_total_exp_8_old").value;
	
	document.getElementById("zombie_type_spawn_rate_9").value = document.getElementById("zombie_type_spawn_rate_9_old").value;
	document.getElementById("zombie_type_spawn_9").value = document.getElementById("zombie_type_spawn_9_old").value
	document.getElementById("zombie_type_total_hp_9").value = document.getElementById("zombie_type_total_hp_9_old").value
	document.getElementById("zombie_type_total_exp_9").value = document.getElementById("zombie_type_total_exp_9_old").value;
	
	document.getElementById("zombie_type_spawn_rate_10").value = document.getElementById("zombie_type_spawn_rate_10_old").value;
	document.getElementById("zombie_type_spawn_10").value = document.getElementById("zombie_type_spawn_10_old").value
	document.getElementById("zombie_type_total_hp_10").value = document.getElementById("zombie_type_total_hp_10_old").value
	document.getElementById("zombie_type_total_exp_10").value = document.getElementById("zombie_type_total_exp_10_old").value;
	
	document.getElementById("zombie_type_spawn_rate_11").value = document.getElementById("zombie_type_spawn_rate_11_old").value;
	document.getElementById("zombie_type_spawn_11").value = document.getElementById("zombie_type_spawn_11_old").value
	document.getElementById("zombie_type_total_hp_11").value = document.getElementById("zombie_type_total_hp_11_old").value
	document.getElementById("zombie_type_total_exp_11").value = document.getElementById("zombie_type_total_exp_11_old").value;
	
	document.getElementById("total_spawn_rate").value = document.getElementById("total_spawn_rate_old").value;
	document.getElementById("total_zombie_spawn").value = document.getElementById("total_zombie_spawn_old").value;
	document.getElementById("total_zombie_spawn_hp").value = document.getElementById("total_zombie_spawn_hp_old").value;
	document.getElementById("total_zombie_spawn_exp").value = document.getElementById("total_zombie_spawn_exp_old").value;
}

function store_new_spawn_rate_value()
{
	document.getElementById("zombie_type_spawn_rate_1_old").value = document.getElementById("zombie_type_spawn_rate_1").value;
	document.getElementById("zombie_type_spawn_1_old").value = document.getElementById("zombie_type_spawn_1").value
	document.getElementById("zombie_type_total_hp_1_old").value = document.getElementById("zombie_type_total_hp_1").value
	document.getElementById("zombie_type_total_exp_1_old").value = document.getElementById("zombie_type_total_exp_1").value;
	
	document.getElementById("zombie_type_spawn_rate_2_old").value = document.getElementById("zombie_type_spawn_rate_2").value;
	document.getElementById("zombie_type_spawn_2_old").value = document.getElementById("zombie_type_spawn_2").value
	document.getElementById("zombie_type_total_hp_2_old").value = document.getElementById("zombie_type_total_hp_2").value
	document.getElementById("zombie_type_total_exp_2_old").value = document.getElementById("zombie_type_total_exp_2").value;
	
	document.getElementById("zombie_type_spawn_rate_3_old").value = document.getElementById("zombie_type_spawn_rate_3").value;
	document.getElementById("zombie_type_spawn_3_old").value = document.getElementById("zombie_type_spawn_3").value
	document.getElementById("zombie_type_total_hp_3_old").value = document.getElementById("zombie_type_total_hp_3").value
	document.getElementById("zombie_type_total_exp_3_old").value = document.getElementById("zombie_type_total_exp_3").value;
	
	document.getElementById("zombie_type_spawn_rate_4_old").value = document.getElementById("zombie_type_spawn_rate_4").value;
	document.getElementById("zombie_type_spawn_4_old").value = document.getElementById("zombie_type_spawn_4").value
	document.getElementById("zombie_type_total_hp_4_old").value = document.getElementById("zombie_type_total_hp_4").value
	document.getElementById("zombie_type_total_exp_4_old").value = document.getElementById("zombie_type_total_exp_4").value;
	
	document.getElementById("zombie_type_spawn_rate_5_old").value = document.getElementById("zombie_type_spawn_rate_5").value;
	document.getElementById("zombie_type_spawn_5_old").value = document.getElementById("zombie_type_spawn_5").value
	document.getElementById("zombie_type_total_hp_5_old").value = document.getElementById("zombie_type_total_hp_5").value
	document.getElementById("zombie_type_total_exp_5_old").value = document.getElementById("zombie_type_total_exp_5").value;
	
	document.getElementById("zombie_type_spawn_rate_6_old").value = document.getElementById("zombie_type_spawn_rate_6").value;
	document.getElementById("zombie_type_spawn_6_old").value = document.getElementById("zombie_type_spawn_6").value
	document.getElementById("zombie_type_total_hp_6_old").value = document.getElementById("zombie_type_total_hp_6").value
	document.getElementById("zombie_type_total_exp_6_old").value = document.getElementById("zombie_type_total_exp_6").value;
	
	document.getElementById("zombie_type_spawn_rate_7_old").value = document.getElementById("zombie_type_spawn_rate_7").value;
	document.getElementById("zombie_type_spawn_7_old").value = document.getElementById("zombie_type_spawn_7").value
	document.getElementById("zombie_type_total_hp_7_old").value = document.getElementById("zombie_type_total_hp_7").value
	document.getElementById("zombie_type_total_exp_7_old").value = document.getElementById("zombie_type_total_exp_7").value;
	
	document.getElementById("zombie_type_spawn_rate_8_old").value = document.getElementById("zombie_type_spawn_rate_8").value;
	document.getElementById("zombie_type_spawn_8_old").value = document.getElementById("zombie_type_spawn_8").value
	document.getElementById("zombie_type_total_hp_8_old").value = document.getElementById("zombie_type_total_hp_8").value
	document.getElementById("zombie_type_total_exp_8_old").value = document.getElementById("zombie_type_total_exp_8").value;
	
	document.getElementById("zombie_type_spawn_rate_9_old").value = document.getElementById("zombie_type_spawn_rate_9").value;
	document.getElementById("zombie_type_spawn_9_old").value = document.getElementById("zombie_type_spawn_9").value
	document.getElementById("zombie_type_total_hp_9_old").value = document.getElementById("zombie_type_total_hp_9").value
	document.getElementById("zombie_type_total_exp_9_old").value = document.getElementById("zombie_type_total_exp_9").value;
	
	document.getElementById("zombie_type_spawn_rate_10_old").value = document.getElementById("zombie_type_spawn_rate_10").value;
	document.getElementById("zombie_type_spawn_10_old").value = document.getElementById("zombie_type_spawn_10").value
	document.getElementById("zombie_type_total_hp_10_old").value = document.getElementById("zombie_type_total_hp_10").value
	document.getElementById("zombie_type_total_exp_10_old").value = document.getElementById("zombie_type_total_exp_10").value;
	
	document.getElementById("zombie_type_spawn_rate_11_old").value = document.getElementById("zombie_type_spawn_rate_11").value;
	document.getElementById("zombie_type_spawn_11_old").value = document.getElementById("zombie_type_spawn_11").value
	document.getElementById("zombie_type_total_hp_11_old").value = document.getElementById("zombie_type_total_hp_11").value
	document.getElementById("zombie_type_total_exp_11_old").value = document.getElementById("zombie_type_total_exp_11").value;
	
	document.getElementById("total_spawn_rate_old").value = document.getElementById("total_spawn_rate").value;
	document.getElementById("total_zombie_spawn_old").value = document.getElementById("total_zombie_spawn").value;
	document.getElementById("total_zombie_spawn_hp_old").value = document.getElementById("total_zombie_spawn_hp").value;
	document.getElementById("total_zombie_spawn_exp_old").value = document.getElementById("total_zombie_spawn_exp").value;
}