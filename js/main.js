var testOne = "What kind of variable am I?";
//String

var testTwo = 256;
//Number

var testThree = false;
//Booleans

var testFour = "true";
//String

var testFive = "128";
//String 

var testSix = "";
//String

var testOne = "hello" + "there";
//String "hellothere"

var testTwo = '100' + 28;
//String "10028"

var testThree = true + 3;
//number 4

var testFour = 'false' + 5;
//String "false5"

var testFive = '128' - 3;
//String 125

var testSix = "" * 9;
//Number 0

var testSeven = 'zero' - 1;
//Null Nan

var testEight = 'five'.length;
//Number 4

var testNine = 'five'[0] + 'ever';
//String "fever"

var testTen = 'a' > 'b';
//boolean false

var testEleven = 'number'.length < 7;
//boolean false

var testTwelve = '12' == 12;
//boolean true

var testThirteen = 'twelve' == 12;
//boolean false

var testFourteen = '14' === 14;
//boolean false

var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 
'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6];
//String "Hello!"

var string1 = "Hello, ";
//"Hello, "

var  string2 = "my name is ";
//"my name is "

var string3 = "Kingsley Pappaagiorgio.";
//"Kingsley Pappaagiorgio."

var combinedStrings = string1 + string2 + string3;
//"Hello, my name is "Kingsley Pappaagiorgio."

console.log(combinedStrings);
//42

var num1 = 8;
//8

var num2 = 52;
//52

var num3 = 60;
//60

var combinedNumbers = num1 + num2 + num3;
//120

console.log(combinedNumbers);
//120

var mixedNum1 = 10;
//10

var mixedString1 = "ten";
//"ten"

var mixedNum2 = "10";
//"10"
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
//"1010ten"
console.log(mixedConcatenation);
//7

var num4 = 5;
//5

var num5 = 0;
//0

if(num4 > 1) {

	console.log("Num4 is greater than 1");

} else { 

	console.log("Num4 is NOT greater than 1");

}
//Num4 is greater than 1

var num4 = 5;

var num5 = 0;

if(num4 < num5 || num4 === num5) {

	console.log("If statement ran!");

} else if (num5 === "0" || true) {

	console.log("Else if statement ran");

} else {

	console.log("Else statement ran");

}
//Else if statement ran

var num4 = 5;

var num5 = 0;

if(num4 > num5 && num4 === num5) {

	console.log("Else if statement ran");

} else {

	console.log("Else statement ran");
}
//Else statement ran

var string1 = "this is a string";

for(var i = 0; i < string1.length; i = i + 1) {

	console.log(i, string1[i])

}

0 "t"
1 "h"
2 "i"
3 "s"
4 " "
5 "i"
6 "s"
7 " "
8 "a"
9 " "
10 "s"
11 "t"
12 "r"
13 "i"
14 "n"
15 "g"

var string2 = "coding";

var total = 0;

for(var i = 0, i < string2.length; i++) {

	total = total + 1;

}

console.log(total);
Infinity

var string3 = "onomatopoeia";

for(var 1 = 0; i < string3.length; i++) {
	if(string3[i] == "o") {

		console.log(i, string3[i]);

	}

}	
//Undefined
	
var string4 = "You're gonna need a bigger boat.";

for(var i = 0; i < string4.length; i++) {

	if(string4[i] == "a" || string4[i] == "e" ||
		string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {

		console.log(string4[i]);

};

};
VM229:6 o
VM229:6 u
VM229:6 e
VM229:6 o
VM229:6 a
2VM229:6 e
VM229:6 a
VM229:6 i
VM229:6 e
VM229:6 o
VM229:6 a

function testStuff(a, b) {

	if(a > 25 && b < 100) {

		console.log(a + " is greater than 25 and " + b + " is less than 100");

	};

};

testStuff(10, 101);
//Undefined
testStuff(26, 99);
//Undefined
testStuff(100, 25);
//Undefined

function testStuff2(c, d) {

	if(c == 25) {

		return c + " is equal to 25";

	} else if (d <=100) {

		return d + "is less than or equal to 100";

	} else {

		return "Neither if nor else if statement ran";

	};

};

testStuff2(26, 101);
//"Neither if nor else if statement ran"

testStuff2(25, 99);
//"25 is equal to 25"

testStuff2(102, 24);
//"24is less than or equal to 100"
	
function countVowels(someString) {

	var vowels = 0;

	for (var i = 0; i < someString.length; i++)  {

		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {

			vowels++:
		};
	};
return vowels;

};

countVowels("I am the very model of a modern major general");
(3)a, (5)e, i, (3)o
countVowels("Exuent pursued by a bear");
(2)a, (4)e, (3)u
countVowels("o1234567891o");
(2)o