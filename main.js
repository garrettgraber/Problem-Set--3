

var palindrome = function(inString) {

	inString = inString.replace(/\s+/g, '');
	var stringArray = inString.split('');
	var stringArrayLength = stringArray.length;
	for(var i=0; i < stringArrayLength; i++) {

		var endValue = stringArrayLength - (1 + i);
		if (stringArray[i] !== stringArray[ endValue ]) {
			return false;
		}
	}
	return true;
};

var stringPalindrome = "racecar";
console.log("Is " + stringPalindrome + " a palindrome: " + palindrome(stringPalindrome));

var dashInsert = function(inString) {

	var stringArray = inString.split('');
	var outputString = '';

	for(var i=0; i < stringArray.length; i++) {

		var currentValue = stringArray[ i ];

		if (i + 1 < stringArray.length) {

			var nextValue = stringArray[  i + 1 ];

			if ( (currentValue % 2 === 1) && (nextValue % 2 === 1) ) {
				outputString += currentValue + '-';
			}
			else {
				outputString += currentValue;
			}


		}

		else {
			outputString += currentValue;
		}

	}

	return outputString;
};

var numberString = '454793';
console.log("Original number: " + numberString + " | New number: " + dashInsert(numberString));


var caesarCipher = function(inString, cipherValue) {

	var stringArray = inString.split('');
	var alphaString = 'abcdefghijklmnopqrstuvwxyz';

	var alphaStringCap = alphaString.toUpperCase();

	var outputString = '';

	for (var i=0; i < stringArray.length; i++) {

		var currentValue = stringArray[i];
		var currentValueCap = currentValue.toUpperCase();

		if (alphaString.indexOf(currentValue) > -1 || alphaStringCap.indexOf(currentValue) > -1) {

			if (currentValue === currentValueCap) {
				var currentIndexPoint = alphaStringCap.indexOf(currentValue);
				var newIndexPoint = stringCycle(currentIndexPoint, cipherValue)
				var newStringValue = alphaStringCap[ newIndexPoint ];
				
			}
			else {
				var currentIndexPoint = alphaString.indexOf(currentValue);
				var newIndexPoint = stringCycle(currentIndexPoint, cipherValue);
				var newStringValue = alphaString[ newIndexPoint ];
			}

		}
		else {
			var newStringValue = currentValue;
		}

		outputString += newStringValue;

	}
	return outputString;
};

var stringCycle = function(inValue, cipherValue) {
	if (inValue + cipherValue > 25) {
		var outValue = (inValue + cipherValue) - 26;
	}
	else {
		var outValue = inValue + cipherValue;
	}
	return outValue;
};

var cyberString = "Caesar Cipher!";
console.log("Original text: " + cyberString + ' | Encrypted String: ' + caesarCipher(cyberString, 2));



// var Athlete = function(fatigue, height, weight) {

// 	this.fatigue = fatigue;
// 	this.height = height;
// 	this.weight = weight;

// 	this.WarmUp = function() {
// 		alert('Warm up fired');
// 	};

// };

// var RollerBlader = function(fatigue, height, weight, isWearingHelmet, skateType) {
// 	this.isWearingHelmet = isWearingHelmet;
// 	this.skateType = skateType;

// 	Athlete.call(this, fatigue, height, weight);
// };

// var Swimmer = function(fatigue, height, weight, breath) {
// 	this.breath = breath;

// 	Athlete.call(this, fatigue, height, weight);

// 	this.WarmUp = function() {
// 		alert('Swimmer warming up');
// 	}
// };

// var Person = function(name, age) {
// 	this.name = name;
// 	this.age = age;
// };

// Athlete.prototype = new Person();
// Athlete.prototype.constructor = Athlete;

// var bitch = new Athlete(5, 10, 15);

// Swimmer.prototype = new Athlete();
// Swimmer.prototype.constructor = Swimmer;

// RollerBlader.prototype = new Athlete();
// RollerBlader.prototype.constructor = RollerBlader;

// var athleteArray = [new Swimmer(5, 10, 15, 20), new Swimmer(3, 6, 9, 15), new Swimmer(2, 4, 6, 20), new RollerBlader(4, 6, 8, true, 'sucky')];

// for(var i=0; i < athleteArray.length; i++) {

// 	var athleteObject = athleteArray[ i ];

// 	if(athleteObject instanceof Swimmer) {
// 		console.log('Swimmer name: ' + athleteObject.height +  ' | Breath durration: ' + athleteObject.breath);
// 	}
// 	else {
// 		console.log('Not a swimmer: ' + athleteObject.height);
// 	}
// }


