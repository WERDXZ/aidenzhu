const holidayGreetings = [
	//New Year
	["Wish You A Happy New Year Aiden Zhu", "祝朱济周新年快乐", "宝哥新年快乐", "Frohes Neues Jahr Aiden"],
	//Three Kings Day
	["Happy Three Kings Day Aiden Zhu", "祝朱济周三王节快乐", "宝哥三王节快乐", "Frohe Dreikönigstag Aiden"],
	//Karneval
	["Happy Karneval Aiden Zhu", "祝朱济周卡尔内瓦尔快乐", "宝哥卡尔内瓦尔快乐", "Frohe Karneval Aiden"],
	
];

const holidayList = [
	//new year
	function(){return new Date().getMonth() == 0 && new Date().getDate() == 1 ? holidayGreetings[0] : null},

	]

const ChineseCalendaJan1For2023 = new Date(2023, 0, 22);
const ChineseCalendaJan1For2024 = new Date(2024, 1, 10);
const ChineseCalendaJan1For2025 = new Date(2025, 0, 29);
const ChineseCalendaJan1For2026 = new Date(2026, 1, 17);
const ChineseCalendaJan1For2027 = new Date(2027, 1, 6);

function getCurrentChineseYear(){
	var cur = new Date();
	if(cur<ChineseCalendaJan1For2023){
		return null;
	}
	else if(cur<ChineseCalendaJan1For2024){
		return ChineseCalendaJan1For2023;
	}
	else if(cur<ChineseCalendaJan1For2025){
		return ChineseCalendaJan1For2024;
	}
	else if(cur<ChineseCalendaJan1For2026){
		return ChineseCalendaJan1For2025;
	}
	else if(cur<ChineseCalendaJan1For2027){
		return ChineseCalendaJan1For2026;
	}
	else{
		return ChineseCalendaJan1For2027;
	}
};
