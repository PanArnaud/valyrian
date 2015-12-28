var firstNameSyllables = [];

//Main function
function generateNames(time, sylMin, sylMax){
	init();

	var names = [];
	var time = time || 10;
	var sylMin = sylMin || 2;
	var sylMax = sylMax || 3;

	for(var i=0; i < time; i++){	
		names.push(createNewName(sylMin, sylMax));
	}
	return (names);
}


function init(){
	firstNameSyllables = new Array();
	firstNameSyllables.push("kha", "da", "vos", "vys", "gen", "dry", "cres", "sen", "vic", 
		"rion", "lo", "my", "bran", "i", "lyn", "ty", "win", "rick", "way", "mar", "jo", 
		"jen", "don", "ja", "mie", "yo", "ren", "lor", "as", "hal", "ne", "sam", "well", 
		"rob", "ert", "edd", "py", "cell", "qy", "burn", "ren", "ly", "ae", "gon", "rion", 
		"ri", "bar", "dy", "ris", "tan", "ke", "van", "tu", "a", "e", "u", "dae", "rys", "ry", 
		"rie", "tar", "mis", "dei", "san", "eo", "eos");
}

function createNewName(sylMin, sylMax){
	var firstName = "";
	var numberOfSyllablesInFirstName = random(sylMin, sylMax + 1);

	for(var i = 0; i < numberOfSyllablesInFirstName; i++){
		firstName += firstNameSyllables[random(0, firstNameSyllables.length)];
	}

	var firstNameLetter = "";
	firstNameLetter = firstName.substring(0, 1);
	firstName = firstName.substr(1);
	firstNameLetter = firstNameLetter.toUpperCase();
	firstName = firstNameLetter + firstName;
	return firstName;
}

//Utils
function random(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}