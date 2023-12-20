// JavaScript Document
function get_dye_cost(item_dye_param) {
	
	var colorArray = [
						'Grey',
						'Black',
						'White',
						'Green',
						'Brown',
						'Blue',
						'Yellow',
						'Red',
						'Purple'
					];
	var randomNumber = Math.floor(Math.random()*colorArray.length);
	document.getElementById("random_color").value=colorArray[randomNumber];
	
	var item_dye = item_dye_param;
	var dye_cost;
	var dye_item_name;
	switch (item_dye) {
		case "shirt": dye_cost = 15000;  dye_item_name="Shirt"; break;
		case "t-shirt": dye_cost = 15000;  dye_item_name="T-Shirt"; break;
		case "vest": dye_cost = 15000;  dye_item_name="Vest"; break;
		case "trousers": dye_cost = 15000;  dye_item_name="Trousers"; break;
		case "jeans": dye_cost = 15000;  dye_item_name="Jeans"; break;
		case "cargopants": dye_cost = 15000;  dye_item_name="Cargo Pants"; break;
		case "leatherpants": dye_cost = 15000;  dye_item_name="Leather Pants"; break;
		case "combats": dye_cost = 15000;  dye_item_name="Combats"; break;
		case "jacket": dye_cost = 15000;  dye_item_name="Jacket"; break;
		case "bomberjacket": dye_cost = 15000;  dye_item_name="Bomber Jacket"; break;
		case "furrcoat": dye_cost = 15000;  dye_item_name="Furr Coat"; break;
		case "leatherjacket": dye_cost = 15000;  dye_item_name="Leather Jacket"; break;
		case "wintercoat": dye_cost = 15000;  dye_item_name="Winter Coat"; break;
		case "motorcyclejacket": dye_cost = 15000;  dye_item_name="Motorcycle Jacket"; break;
		case "trenchcoat": dye_cost = 15000;  dye_item_name="Trench Coat"; break;
		case "cloak": dye_cost = 15000;  dye_item_name="Cloak"; break;
		case "bobblehat": dye_cost = 15000;  dye_item_name="Bobble Hat"; break;
		case "winterhat": dye_cost = 15000;  dye_item_name="Winter Hat"; break;
		case "militaryhelmet": dye_cost = 15000;  dye_item_name="Military Helmet"; break;
		case "beret": dye_cost = 15000;  dye_item_name="Beret"; break;
		case "tinhelmet": dye_cost = 15000;  dye_item_name="Tin Helmet"; break;
		case "crashhelmet": dye_cost = 15000;  dye_item_name="Crash Helmet"; break;
		case "bandana": dye_cost = 15000;  dye_item_name="Bandana"; break;
		case "cowboyhat": dye_cost = 15000;  dye_item_name="Cowboy Hat"; break;
		case "christmashat": dye_cost = 15000;  dye_item_name="Christmas Hat"; break;
		case "constructionhelmet": dye_cost = 15000;  dye_item_name="Construction Helmet"; break;
		case "firemanhelmet": dye_cost = 15000;  dye_item_name="Fireman Helmet"; break;
		case "flyingcap": dye_cost = 15000;  dye_item_name="Flying Helmet"; break;
		case "hazmathelmet": dye_cost = 15000;  dye_item_name="Hazmat Helmet"; break;
		case "potatosack": dye_cost = 15000;  dye_item_name="Potato Sack"; break;
		case "riothelmet": dye_cost = 15000;  dye_item_name="Riot Helmet"; break;
		case "officercap": dye_cost = 15000;  dye_item_name="Officer Cap"; break;
		case "surgicalhat": dye_cost = 15000;  dye_item_name="Surgical Hat"; break;
		case "tophat": dye_cost = 15000;  dye_item_name="Top Hat"; break;
		case "turban": dye_cost = 15000;  dye_item_name="Turban"; break;
		case "biohelmet": dye_cost = 15000;  dye_item_name="Bio Helmet"; break;
		case "steelcasehelmet": dye_cost = 15000;  dye_item_name="Steelcase Helmet"; break;
		case "baseballhelmet": dye_cost = 15000;  dye_item_name="Baseball Helmet"; break;
		case "clownmask": dye_cost = 15000;  dye_item_name="Clown Mask"; break;
		case "eyepatch": dye_cost = 15000;  dye_item_name="Eye Patch"; break;
		case "facebandana": dye_cost = 15000;  dye_item_name="Face Bandana"; break;
		case "tacticalgoogles": dye_cost = 15000;  dye_item_name="Tactical Googles"; break;
		case "gimpmask": dye_cost = 15000;  dye_item_name="Gimp Mask"; break;
		case "rebreather": dye_cost = 15000;  dye_item_name="Rebreather"; break;
		case "samuraimask": dye_cost = 15000;  dye_item_name="Samurai Mask"; break;
		case "skimask": dye_cost = 15000;  dye_item_name="Ski Mask"; break;
		case "sunglasses": dye_cost = 15000;  dye_item_name="Sunglasses"; break;
		case "surgicalmask": dye_cost = 15000;  dye_item_name="Surgical Mask"; break;
		case "scavengermask": dye_cost = 15000;  dye_item_name="Scavenger Mask"; break;
		case "nomadhelmet": dye_cost = 15000;  dye_item_name="Nomad Helmet"; break;
		case "vengeancemask": dye_cost = 15000;  dye_item_name="Vengeance Mask"; break;
		case "shemagh": dye_cost = 15000;  dye_item_name="Shemagh"; break;
		case "weldingmask": dye_cost = 15000;  dye_item_name="Welding Mask"; break;
		case "anonymousmask": dye_cost = 15000;  dye_item_name="Anonymous Mask"; break;
		case "exterminatorhelmet": dye_cost = 15000;  dye_item_name="Exterminator Helmet"; break;
		case "hockeymask": dye_cost = 15000;  dye_item_name="Hockey Mask"; break;
		case "insanitymask": dye_cost = 15000;  dye_item_name="Insanity Mask"; break;
		case "gasmask": dye_cost = 15000;  dye_item_name="Gas Mask"; break;
		case "duskhelmet": dye_cost = 15000;  dye_item_name="Dusk Helmet"; break;
		case "x-duskhelmet": dye_cost = 15000;  dye_item_name="X Dusk Helmet"; break;
		case "pumpkinhead": dye_cost = 15000;  dye_item_name="Pumpkin Head"; break;
		case "corpsemask": dye_cost = 15000;  dye_item_name="Corpse Mask"; break;
		case "sportsarmour": dye_cost = 15000;  dye_item_name="Sports Armour"; break;
		case "zylonvest": dye_cost = 15000;  dye_item_name="Zylon Vest"; break;
		case "kevlarvest": dye_cost = 15000;  dye_item_name="Kevlar Vest"; break;
		case "meshslx": dye_cost = 15000;  dye_item_name="Mesh SLX"; break;
		case "meshrx2": dye_cost = 15000;  dye_item_name="Mesh RX2"; break;
		case "exterminatormesh": dye_cost = 15000;  dye_item_name="Exterminator Mesh"; break;
		case "exterminatormeshgt": dye_cost = 15000;  dye_item_name="Exterminator Mesh GT"; break;
		case "nomadmesh": dye_cost = 15000;  dye_item_name="Nomad Mesh"; break;
		case "duskmesh": dye_cost = 15000;  dye_item_name="Dusk Mesh"; break;
		case "scavengermesh": dye_cost = 15000;  dye_item_name="Scavenger Mesh"; break;
		case "shinobumesh": dye_cost = 15000;  dye_item_name="Shinobu Mesh"; break;
		case "xduskmesh": dye_cost = 15000;  dye_item_name="X Dusk Mesh"; break;
		case "hazardmesh": dye_cost = 15000;  dye_item_name="Hazard Mesh"; break;
		case "flakjacket": dye_cost = 15000;  dye_item_name="Flak Jacket"; break;
		case "sn42": dye_cost = 15000;  dye_item_name="SN-42"; break;
		case "corpsecarapace": dye_cost = 15000;  dye_item_name="Corpse Carapace"; break;
		case "reactiveslx": dye_cost = 15000;  dye_item_name="Reactive SLX"; break;
		case "reactivext800": dye_cost = 15000;  dye_item_name="Reactive XT800"; break;
		case "exterminatorreactive": dye_cost = 15000;  dye_item_name="Exterminator Reactive"; break;
		case "exterminatorreactivext": dye_cost = 15000;  dye_item_name="Exterminator Reactive XT"; break;
		case "bioreactive": dye_cost = 15000;  dye_item_name="Bio Reactive"; break;
		case "duskreactive": dye_cost = 15000;  dye_item_name="Dusk Reactive"; break;
		case "steelcasereactive": dye_cost = 15000;  dye_item_name="Steelcase Reactive"; break;
		case "tatakaureactive": dye_cost = 15000;  dye_item_name="Tatakau Reactive"; break;
		case "xduskreactive": dye_cost = 15000;  dye_item_name="X Dusk Reactive"; break;
		case "scarabreactive": dye_cost = 15000;  dye_item_name="Scarab Reactive"; break;
		case "vengeanceguard": dye_cost = 15000;  dye_item_name="Vengeance Guard"; break;
		default : dye_cost = 0;  dye_item_name=""; break;
	}
	document.getElementById("dye_item_name").value=dye_item_name;
	document.getElementById("dye_cost").value=dye_cost;

}

function get_enhance_cost(item_enhance_param) {
	var item_enhance = item_enhance_param;
	var enhance_cost;
	var enhance_item_type;
	var enhance_item_name;
	switch (item_enhance) {
		case "firepoker":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Fire Poker";
			break;
		case "baseballbat":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Baseball Bat";
			break;
		case "penknife":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Pen Knife";
			break;
		case "huntingknife":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Hunting Knife";
			break;
		case "chefknife":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Chef Knife";
			break;
		case "amputator":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Amputator";
			break;
		case "titaniumblades":
			enhance_cost = 1000;
			enhance_item_type = "weapon";
			enhance_item_name = "Titanium Blades";
			break;
		case "betatomcat":
			enhance_cost = 6000;
			enhance_item_type = "weapon";
			enhance_item_name = "Beta Tomcat";
			break;
		case "williamsppk":
			enhance_cost = 6000;
			enhance_item_type = "weapon";
			enhance_item_name = "William PPK";
			break;
		case "gerringhp":
			enhance_cost = 6000;
			enhance_item_type = "weapon";
			enhance_item_name = "Gerring HP";
			break;
		case "cricketbat":
			enhance_cost = 11000;
			enhance_item_type = "weapon";
			enhance_item_name = "Cricket Bat";
			break;
		case "golfclub":
			enhance_cost = 11000;
			enhance_item_type = "weapon";
			enhance_item_name = "Golf Club";
			break;
		case "fiftyseven":
			enhance_cost = 11000;
			enhance_item_type = "weapon";
			enhance_item_name = "Fifty Seven";
			break;
		case "betarx4":
			enhance_cost = 11000;
			enhance_item_type = "weapon";
			enhance_item_name = "Beta RX-4";
			break;
		case "mancinim1":
			enhance_cost = 11000;
			enhance_item_type = "weapon";
			enhance_item_name = "Mancini M1";
			break;
		case "skorpion":
			enhance_cost = 16000;
			enhance_item_type = "weapon";
			enhance_item_name = "Skorpion";
			break;
		case "uzi":
			enhance_cost = 16000;
			enhance_item_type = "weapon";
			enhance_item_name = "UZI";
			break;
		case "fireaxe":
			enhance_cost = 16000;
			enhance_item_type = "weapon";
			enhance_item_name = "Fire Axe";
			break;
		case "combatknife":
			enhance_cost = 16000;
			enhance_item_type = "weapon";
			enhance_item_name = "Combat Knife";
			break;
		case "mini41":
			enhance_cost = 16000;
			enhance_item_type = "weapon";
			enhance_item_name = "Mini 41";
			break;
		case "m79":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "M79";
			break;
		case "fmp90":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "FMP90";
			break;
		case "bowieknife":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "Bowie Knife";
			break;
		case "ironpipe":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "Iron Pipe";
			break;
		case "lock19":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "Lock 19";
			break;
		case "koltpython":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "Kolt Python";
			break;
		case "sl8":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "SL8";
			break;
		case "highlander":
			enhance_cost = 21000;
			enhance_item_type = "weapon";
			enhance_item_name = "Highlander";
			break;
		case "mp5":
			enhance_cost = 26000;
			enhance_item_type = "weapon";
			enhance_item_name = "MP5";
			break;
		case "nailbat":
			enhance_cost = 26000;
			enhance_item_type = "weapon";
			enhance_item_name = "Nail Bat";
			break;
		case "beta8000":
			enhance_cost = 26000;
			enhance_item_type = "weapon";
			enhance_item_name = "Beta 800";
			break;
		case "razor":
			enhance_cost = 31000;
			enhance_item_type = "weapon";
			enhance_item_name = "Razor";
			break;
		case "ck75":
			enhance_cost = 31000;
			enhance_item_type = "weapon";
			enhance_item_name = "CK 75";
			break;
		case "m24":
			enhance_cost = 31000;
			enhance_item_type = "weapon";
			enhance_item_name = "M24";
			break;
		case "washington870":
			enhance_cost = 31000;
			enhance_item_type = "weapon";
			enhance_item_name = "Washington 870";
			break;
		case "pp90":
			enhance_cost = 36000;
			enhance_item_type = "weapon";
			enhance_item_name = "PP90";
			break;
		case "crowbar":
			enhance_cost = 36000;
			enhance_item_type = "weapon";
			enhance_item_name = "Crowbar";
			break;
		case "luger":
			enhance_cost = 36000;
			enhance_item_type = "weapon";
			enhance_item_name = "Luger";
			break;
		case "chester1300":
			enhance_cost = 36000;
			enhance_item_type = "weapon";
			enhance_item_name = "Chester 1300";
			break;
		case "hk69":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "HK69";
			break;
		case "grammm11":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Gramm M11";
			break;
		case "m16":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "M16";
			break;
		case "fmfnc":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "FM FNC";
			break;
		case "sa80":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "SA80";
			break;
		case "mesaacr":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Mesa ACR";
			break;
		case "scalpel":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Scalpel";
			break;
		case "lock17":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Lock 17";
			break;
		case "lock25":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Lock 25";
			break;
		case "webster1942":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Webster 1942";
			break;
		case "m1garand":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "M1 Garand";
			break;
		case "rebellion":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Rebellion";
			break;
		case "washington1100":
			enhance_cost = 41000;
			enhance_item_type = "weapon";
			enhance_item_name = "Washington 1100";
			break;
		case "stellaug":
			enhance_cost = 46000;
			enhance_item_type = "weapon";
			enhance_item_name = "Stell AUG";
			break;
		case "ck99":
			enhance_cost = 46000;
			enhance_item_type = "weapon";
			enhance_item_name = "CK 99";
			break;
		case "wall500":
			enhance_cost = 46000;
			enhance_item_type = "weapon";
			enhance_item_name = "Wall 500";
			break;
		case "sega20":
			enhance_cost = 46000;
			enhance_item_type = "weapon";
			enhance_item_name = "Sega 20";
			break;
		case "dilmarps":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dilmar PS";
			break;
		case "ump":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "UMP";
			break;
		case "kris":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "Kris";
			break;
		case "shovel":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "Shovel";
			break;
		case "duskkris":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Kris";
			break;
		case "sicapollo":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "SIC Apollo";
			break;
		case "chesterfield":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "Chesterfield";
			break;
		case "m21":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "M21";
			break;
		case "glacialwarfare":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "Glacial Warfare";
			break;
		case "spsa12":
			enhance_cost = 51000;
			enhance_item_type = "weapon";
			enhance_item_name = "SPSA 12";
			break;
		case "usp":
			enhance_cost = 56000;
			enhance_item_type = "weapon";
			enhance_item_name = "USP";
			break;
		case "ronanpro":
			enhance_cost = 61000;
			enhance_item_type = "weapon";
			enhance_item_name = "Ronan Pro";
			break;
		case "gm94":
			enhance_cost = 61000;
			enhance_item_type = "weapon";
			enhance_item_name = "GM94";
			break;
		case "trenchknife":
			enhance_cost = 61000;
			enhance_item_type = "weapon";
			enhance_item_name = "Trench Knife";
			break;
		case "koltanaconda":
			enhance_cost = 61000;
			enhance_item_type = "weapon";
			enhance_item_name = "Kolt Anaconda";
			break;
		case "msg9":
			enhance_cost = 61000;
			enhance_item_type = "weapon";
			enhance_item_name = "MSG-9";
			break;
		case "mannberg500":
			enhance_cost = 61000;
			enhance_item_type = "weapon";
			enhance_item_name = "Mannberg 500";
			break;
		case "chicagotypewriter":
			enhance_cost = 71000;
			enhance_item_type = "weapon";
			enhance_item_name = "Chicago Typewriter";
			break;
		case "xm8":
			enhance_cost = 71000;
			enhance_item_type = "weapon";
			enhance_item_name = "XM8";
			break;
		case "fmfal":
			enhance_cost = 71000;
			enhance_item_type = "weapon";
			enhance_item_name = "FM FAL";
			break;
		case "woodaxe":
			enhance_cost = 71000;
			enhance_item_type = "weapon";
			enhance_item_name = "Wood Axe";
			break;
		case "machete":
			enhance_cost = 71000;
			enhance_item_type = "weapon";
			enhance_item_name = "Machete";
			break;
		case "ck97b":
			enhance_cost = 76000;
			enhance_item_type = "weapon";
			enhance_item_name = "CK 97B";
			break;
		case "sic550":
			enhance_cost = 76000;
			enhance_item_type = "weapon";
			enhance_item_name = "SIC 550";
			break;
		case "steelms800":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "Steel MS800";
			break;
		case "rg6":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "RG6";
			break;
		case "ak47":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "AK 47";
			break;
		case "kukri":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "Kukri";
			break;
		case "sabre":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "Sabre";
			break;
		case "hawkop96":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "Hawk OP96";
			break;
		case "sweeper":
			enhance_cost = 81000;
			enhance_item_type = "weapon";
			enhance_item_name = "Sweeper";
			break;
		case "falconmm1":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "Falcon MM1";
			break;
		case "k50m":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "K-50M";
			break;
		case "fmmitrail":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "FM Mitrail";
			break;
		case "sledgehammer":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "Sledge Hammer";
			break;
		case "desertfox":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "Desert Fox";
			break;
		case "m82a2":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "M82A2";
			break;
		case "dragonsvd":
			enhance_cost = 91000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dragon SVD";
			break;
		case "sw500":
			enhance_cost = 96000;
			enhance_item_type = "weapon";
			enhance_item_name = "SW 500";
			break;
		case "grinder":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Grinder";
			break;
		case "xm25":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "XM25";
			break;
		case "m4":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "M4";
			break;
		case "fmmag":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "FM MAG";
			break;
		case "m60":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "M60";
			break;
		case "gau19":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "GAU-19";
			break;
		case "battleaxe":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Battle Axe";
			break;
		case "katana":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Katana";
			break;
		case "doomcane":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Doom Cane";
			break;
		case "duskrazor":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Razor";
			break;
		case "alphabull":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Alpha Bull";
			break;
		case "duskenforcer":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Enforcer";
			break;
		case "vssvintorez":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "VSS Vintorez";
			break;
		case "usan12":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "USAN-12";
			break;
		case "corpseblaster":
			enhance_cost = 101000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Blaster";
			break;
		case "crissvictor":
			enhance_cost = 106000;
			enhance_item_type = "weapon";
			enhance_item_name = "Criss Victor";
			break;
		case "corpseripper":
			enhance_cost = 106000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Ripper";
			break;
		case "wakizashi":
			enhance_cost = 106000;
			enhance_item_type = "weapon";
			enhance_item_name = "Wakizashi";
			break;
		case "steel090":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Steel 090";
			break;
		case "corpsegrinder":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Grinder";
			break;
		case "dusksaw":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Saw";
			break;
		case "paw20":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "PAW 20";
			break;
		case "corpseerruptor":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Erruptor";
			break;
		case "dusklauncher":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Launcher";
			break;
		case "vulcan":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Vulcan";
			break;
		case "dusksmg":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk SMG";
			break;
		case "corpsedestroyer":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Destroyer";
			break;
		case "duskmag":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk MAG";
			break;
		case "nodachi":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Nodachi";
			break;
		case "corpsecrusher":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Crusher";
			break;
		case "475magnum":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "475 Magnum";
			break;
		case "corpseshooter":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Shooter";
			break;
		case "577rex":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "577 Rex";
			break;
		case "corpsepiercer":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Corpse Piercer";
			break;
		case "duskcarbine":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Carbine";
			break;
		case "aa12 ":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "AA-12";
			break;
		case "duskstriker":
			enhance_cost = 111000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dusk Striker";
			break;
		case "ripsawg12":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Ripsaw";
			break;
		case "goretooth44g":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Goretooth 44G";
			break;
		case "buzzbladern8":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Buzzbalde RN8";
			break;
		case "xdusksaw":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Saw";
			break;
		case "grinderx3":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Grinder X3";
			break;
		case "immolator":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Immolatorr";
			break;
		case "junker6":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Junker 6";
			break;
		case "bishopce9":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Bishop CE9";
			break;
		case "xdusklauncher":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Launcher";
			break;
		case "boomerpx":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Boomer PX";
			break;
		case "streetdog99":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Street Dog 99";
			break;
		case "uziel14mm":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Uziel 14mm";
			break;
		case "hammerhead47":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Hammerhead 47";
			break;
		case "scar9000":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "SCAR 9000";
			break;
		case "handshocka8":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Handshock A8";
			break;
		case "xdusksmg":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk SMG";
			break;
		case "ninecutterx":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Nine Cutter-X";
			break;
		case "xlgunner8":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "XLGunner 8";
			break;
		case "xduskmag":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk MAG";
			break;
		case "wraithcannon":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Wraith Cannon";
			break;
		case "spiker":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Spiker";
			break;
		case "dualblade":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Dual Blade";
			break;
		case "sharktail":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Sharktail";
			break;
		case "xduskkris":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Kris";
			break;
		case "xduskrazor":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Razor";
			break;
		case "gutsplitter":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Gut Splitter";
			break;
		case "greyhawk55":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Greyhawk 55";
			break;
		case "doubleshotaax":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Doubleshot AAX";
			break;
		case "vlockxd11":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Vlock XD1";
			break;
		case "xduskenforcer":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Enforcer";
			break;
		case "desertrat":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Desert Rat";
			break;
		case "ironsight33f":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Ironsight 33f";
			break;
		case "worgcarbine":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Worg Carbine";
			break;
		case "marksmang8":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Marksman G8";
			break;
		case "xduskcarbine":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Carbine";
			break;
		case "longshotpp10":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Longshot PP10";
			break;
		case "painshot10":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Painshot 10";
			break;
		case "acebarrelgz3":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Ace Barrle GZ3";
			break;
		case "biforcec7":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Biforce C7";
			break;
		case "xduskstriker":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "X-Dusk Striker";
			break;
		case "buckblast99a":
			enhance_cost = 121000;
			enhance_item_type = "weapon";
			enhance_item_name = "Buckblast 99A";
			break;
		case "sportsarmour":
			enhance_cost = 22000;
			enhance_item_type = "armor";
			enhance_item_name = "Sports Armour";
			break;
		case "zylonvest":
			enhance_cost = 42000;
			enhance_item_type = "armor";
			enhance_item_name = "Zylon Vest";
			break;
		case "kevlarvest":
			enhance_cost = 56000;
			enhance_item_type = "armor";
			enhance_item_name = "Kevlar Vest";
			break;
		case "meshslx":
			enhance_cost = 108000;
			enhance_item_type = "armor";
			enhance_item_name = "Mesh SLX";
			break;
		case "meshrx2":
			enhance_cost = 129000;
			enhance_item_type = "armor";
			enhance_item_name = "Mesh RX-2";
			break;
		case "exterminatormesh":
			enhance_cost = 148000;
			enhance_item_type = "armor";
			enhance_item_name = "Exterminator Mesh";
			break;
		case "exterminatormeshgt":
			enhance_cost = 158001;
			enhance_item_type = "armor";
			enhance_item_name = "Exterminator Mesh GT";
			break;
		case "nomadmesh":
			enhance_cost = 178000;
			enhance_item_type = "armor";
			enhance_item_name = "Nomad Mesh";
			break;
		case "duskmesh":
			enhance_cost = 102000;
			enhance_item_type = "armor";
			enhance_item_name = "Dusk Mesh";
			break;
		case "scavengermesh":
			enhance_cost = 132000;
			enhance_item_type = "armor";
			enhance_item_name = "Scavenger Mesh";
			break;
		case "shinobumesh":
			enhance_cost = 200000;
			enhance_item_type = "armor";
			enhance_item_name = "Shinobu Mesh Armour";
			break;
		case "xdushmesh":
			enhance_cost = 220000;
			enhance_item_type = "armor";
			enhance_item_name = "X-Dusk Mesh";
			break;
		case "hazardmesh":
			enhance_cost = 132000;
			enhance_item_type = "armor";
			enhance_item_name = "Hazarad Mesh";
			break;
		case "flakjacket":
			enhance_cost = 72000;
			enhance_item_type = "armor";
			enhance_item_name = "Flak Jacket";
			break;
		case "sn42	":
			enhance_cost = 92000;
			enhance_item_type = "armor";
			enhance_item_name = "SN-42";
			break;
		case "corpsecarapace":
			enhance_cost = 102000;
			enhance_item_type = "armor";
			enhance_item_name = "Corpse Carapace";
			break;
		case "reactiveslx":
			enhance_cost = 112000;
			enhance_item_type = "armor";
			enhance_item_name = "Reactive SLX";
			break;
		case "reactivext800":
			enhance_cost = 132000;
			enhance_item_type = "armor";
			enhance_item_name = "Reactive XT800";
			break;
		case "exterminatorreactive":
			enhance_cost = 152000;
			enhance_item_type = "armor";
			enhance_item_name = "Exterminator Reactive";
			break;
		case "exterminatorreactivext":
			enhance_cost = 152001;
			enhance_item_type = "armor";
			enhance_item_name = "Exterminator Reactive XT";
			break;
		case "bioreactive":
			enhance_cost = 180000;
			enhance_item_type = "armor";
			enhance_item_name = "Bio Reactive";
			break;
		case "duskreactive":
			enhance_cost = 102000;
			enhance_item_type = "armor";
			enhance_item_name = "Dusk Reactive";
			break;
		case "steelcasereactive":
			enhance_cost = 180000;
			enhance_item_type = "armor";
			enhance_item_name = "Steelcase Reactive";
			break;
		case "tatakaureactive":
			enhance_cost = 200000;
			enhance_item_type = "armor";
			enhance_item_name = "Tatakau Reactive";
			break;
		case "xduskreactive":
			enhance_cost = 220000;
			enhance_item_type = "armor";
			enhance_item_name = "X-Dusk Reactive";
			break;
		case "scarabreactive":
			enhance_cost = 200000;
			enhance_item_type = "armor";
			enhance_item_name = "Scarab Reactive";
			break;
		case "vengeanceguard":
			enhance_cost = 220000;
			enhance_item_type = "armor";
			enhance_item_name = "Vengeance Guard";
			break;
		default:
			enhance_cost = 0;
			enhance_item_type = "weapon";
			break;
	}

	document.getElementById("enhance_cost").value = enhance_cost;
	document.getElementById("enhance_item_type").value = enhance_item_type;
	document.getElementById("enhance_item_name").value = enhance_item_name;

	if (enhance_item_type == "armor") {
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

		document.getElementById("armor_item_target").value = enhance_item_name;
		document.getElementById("armor_item_target").disabled = false;
		document.getElementById("armor_agility_mc").disabled = false;
		document.getElementById("armor_endurance_mc").disabled = false;
		document.getElementById("armor_agility_mc").className = "inputnumber_editable";
		document.getElementById("armor_endurance_mc").className = "inputnumber_editable";
		document.getElementById("armor_agility_mc").value = 24;
		document.getElementById("armor_endurance_mc").value = 24;
		
		document.getElementById('lbl_result_weapon').style.display = 'none';
		document.getElementById('lbl_result_armor').style.display = 'block';

	} else if (enhance_item_type == "weapon") {
		document.getElementById("weapon_item_target").value = enhance_item_name;
		document.getElementById("weapon_item_target").disabled = false;
		document.getElementById("weapon_accuracy_mc").disabled = false;
		document.getElementById("weapon_reloading_mc").disabled = false;
		document.getElementById("weapon_criticalhit_mc").disabled = false;
		document.getElementById("weapon_accuracy_mc").className = "inputnumber_editable";
		document.getElementById("weapon_reloading_mc").className = "inputnumber_editable";
		document.getElementById("weapon_criticalhit_mc").className = "inputnumber_editable";
		document.getElementById("weapon_accuracy_mc").value = 8;
		document.getElementById("weapon_reloading_mc").value = 8;
		document.getElementById("weapon_criticalhit_mc").value = 8;

		document.getElementById("armor_item_target").value = "";
		document.getElementById("armor_item_target").disabled = true;
		document.getElementById("armor_agility_mc").disabled = true;
		document.getElementById("armor_endurance_mc").disabled = true;
		document.getElementById("armor_agility_mc").className = "inputnumber";
		document.getElementById("armor_endurance_mc").className = "inputnumber";
		document.getElementById("armor_agility_mc").value = "";
		document.getElementById("armor_endurance_mc").value = "";
		
		document.getElementById('lbl_result_weapon').style.display = 'block';
		document.getElementById('lbl_result_armor').style.display = 'none';
	}
}

function process_all()
{
	var mode_choices = document.getElementById("mode_choices").value;
	var bank = document.getElementById("bank").value;
	var total_cost = document.getElementById("total_cost_used").value;
	
	if (mode_choices == "dye")
	{
		var dye_item_name = document.getElementById("dye_item_name").value;
		document.getElementById("result_item_dye").value=dye_item_name;
		
		var item_target_dye = document.getElementById("item_target_dye");
		var item_target_dye_value = item_target_dye.value;
		var item_target_dye_text = item_target_dye.options[item_target_dye.selectedIndex].text;
		
		var dye_cost = document.getElementById("dye_cost").value;
		total_cost = eval(total_cost) + eval(dye_cost);
		bank = eval(bank) - eval(total_cost);
		
		if (bank > 0)
		{
			var colorArray = [
									'Grey',
									'Black',
									'White',
									'Green',
									'Brown',
									'Blue',
									'Yellow',
									'Red',
									'Purple'
								];
			var randomNumber = Math.floor(Math.random()*colorArray.length);
			var result_item_color = colorArray[randomNumber];	
			document.getElementById("result_item_color").value =result_item_color;

			if (result_item_color == item_target_dye_text) alert("Congratulations!! You got your target dye color (" + result_item_color +")!!");
		}		
	}

	if (mode_choices == "enhance")
	{
		var result_item_weapon_desc = "";
		var result_item_armor_desc = "";
		
		var enhance_item_name = document.getElementById("enhance_item_name").value;
		
		var result_item_criticalhit=0;
		var result_item_reloading=0;
		var result_item_accuracy=0;
		var result_item_agility=0;
		var result_item_endurance=0;

		var min_weapon_stat = 1;
		var max_weapon_stat = 9;
		var min_armor_stat = 1;
		var max_armor_stat = 25;

		var weapon_accuracy_mc = document.getElementById("weapon_accuracy_mc").value;
		var weapon_reloading_mc = document.getElementById("weapon_reloading_mc").value;
		var weapon_criticalhit_mc = document.getElementById("weapon_criticalhit_mc").value;

		var armor_agility_mc = document.getElementById("armor_agility_mc").value;
		var armor_endurance_mc = document.getElementById("armor_endurance_mc").value;

		var enhance_item_type = document.getElementById("enhance_item_type").value;

		var enhance_cost = document.getElementById("enhance_cost").value;
		total_cost = eval(total_cost) + eval(enhance_cost);
		bank = eval(bank) - eval(total_cost);
		
		if (bank > 0 || 
				((
					enhance_item_type == "weapon" && 
					(
						weapon_criticalhit_mc != result_item_accuracy && 
						weapon_reloading_mc != result_item_reloading && 
						weapon_criticalhit_mc != result_item_criticalhit
					)
				) 
				||
				(
					enhance_item_type == "armor" && 
					(
						armor_agility_mc != result_item_agility && 
						armor_endurance_mc != result_item_endurance
					)
				))
			)
		{
			if (enhance_item_type == "weapon")
			{
				class_result_item_criticalhit = document.getElementById("result_item_criticalhit");
				class_result_item_reloading = document.getElementById("result_item_reloading");
				class_result_item_accuracy = document.getElementById("result_item_accuracy");
				
				result_item_criticalhit = Math.floor(Math.random() * (eval(max_weapon_stat) - eval(min_weapon_stat)) + eval(min_weapon_stat));
				result_item_reloading = Math.floor(Math.random() * (eval(max_weapon_stat) - eval(min_weapon_stat)) + eval(min_weapon_stat));
				result_item_accuracy = Math.floor(Math.random() * (eval(max_weapon_stat) - eval(min_weapon_stat)) + eval(min_weapon_stat));
					
				if (result_item_criticalhit == 8) {
					class_result_item_criticalhit.classList.add('gc_stat');
				} 
				else{
					class_result_item_criticalhit.classList.remove('gc_stat');
				}
				
				if (result_item_reloading == 8) {
					class_result_item_reloading.classList.add('gc_stat');
				} 
				else{
					class_result_item_reloading.classList.remove('gc_stat');
				}
				
				if (result_item_accuracy == 8) {
					class_result_item_accuracy.classList.add('gc_stat');
				} 
				else{
					class_result_item_accuracy.classList.remove('gc_stat');
				}
				
				if (result_item_reloading == 8 && result_item_accuracy == 8 && result_item_criticalhit == 8) {
					class_result_item_accuracy.classList.remove('gc_stat');
					class_result_item_reloading.classList.remove('gc_stat');
					class_result_item_criticalhit.classList.remove('gc_stat');
					
					class_result_item_reloading.classList.add('full_gc_stat');
					class_result_item_accuracy.classList.add('full_gc_stat');
					class_result_item_criticalhit.classList.add('full_gc_stat');
					result_item_weapon_desc = "GC";
					alert("Congratulation!! You got GodCrafted!!");
				} 
				else if (result_item_reloading == 7 && result_item_accuracy == 7 && result_item_criticalhit == 7) {
					result_item_weapon_desc = "AC";
					alert("Congratulation!! You got AngelCrafted!!");
				}
				else if (result_item_reloading == 6 && result_item_accuracy == 6 && result_item_criticalhit == 6) {
					result_item_weapon_desc = "HC";
					alert("Congratulation!! You got HellCrafted!!");
				}
				else if ((result_item_reloading == 8 && result_item_accuracy == 8 && result_item_criticalhit == 7)
						|| (result_item_reloading == 7 && result_item_accuracy == 8 && result_item_criticalhit == 8)
						|| (result_item_reloading == 8 && result_item_accuracy == 7 && result_item_criticalhit == 8))
				{
					result_item_weapon_desc = "NGC";
					alert("Congratulation!! You got Near GodCrafted!!");
				}
				else {
					result_item_weapon_desc = "MC";
				}

				document.getElementById("result_item_criticalhit").value = result_item_criticalhit;
				document.getElementById("result_item_reloading").value = result_item_reloading;
				document.getElementById("result_item_accuracy").value = result_item_accuracy;
				document.getElementById("result_item_weapon").value=enhance_item_name;
				document.getElementById("result_item_weapon_desc").value=result_item_weapon_desc;

			}
			
			if (enhance_item_type == "armor")
			{
				class_result_item_endurance = document.getElementById("result_item_endurance");
				class_result_item_agility = document.getElementById("result_item_agility");
				
				result_item_agility = Math.floor(Math.random() * (eval(max_armor_stat) - eval(min_armor_stat)) + eval(min_armor_stat));
				result_item_endurance = Math.floor(Math.random() * (eval(max_armor_stat) - eval(min_armor_stat)) + eval(min_armor_stat));

				if (result_item_endurance == 24) {
					class_result_item_endurance.classList.add('gc_stat');
				} 
				else{
					class_result_item_endurance.classList.remove('gc_stat');
				}
				
				if (result_item_agility == 24) {
					class_result_item_agility.classList.add('gc_stat');
				} 
				else{
					class_result_item_agility.classList.remove('gc_stat');
				}

				if (result_item_agility == 24 && result_item_endurance == 24) {
					class_result_item_agility.classList.remove('gc_stat');
					class_result_item_endurance.classList.remove('gc_stat');
					
					class_result_item_agility.classList.add('full_gc_stat');
					class_result_item_endurance.classList.add('full_gc_stat');
					result_item_armor_desc = "GC";

					alert("Congratulation!! You got GodCrafted!!");
				} 
				else if ((result_item_agility == 23 && result_item_endurance == 23) 
						|| (result_item_agility == 24 && result_item_endurance == 23)
						|| (result_item_agility == 23 && result_item_endurance == 24))
				{
					result_item_armor_desc = "NGC";
					alert("Congratulation!! You got Near GodCrafted!!");
				} 
				else result_item_armor_desc = "MC";

				document.getElementById("result_item_agility").value = result_item_agility;
				document.getElementById("result_item_endurance").value = result_item_endurance;
				document.getElementById("result_item_armor").value=enhance_item_name;
				document.getElementById("result_item_armor_desc").value=result_item_armor_desc;
			}
		}
	}
	
	document.getElementById("total_cost_used").value = total_cost;
	document.getElementById("bank").value = bank;
}