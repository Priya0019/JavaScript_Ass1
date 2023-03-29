console.log("Q1 START==============")

// Question 1:

//  Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var str1 = "Today is";
var str2 = "     a beautiful day     ";
var str3 = "  In Hawaii.         ";
var Result = "Todya is a beautiful day in Hawaii.";

var statement = str1 +" "+ str2.trim() +" "+ str3.trim()
console.log(statement)

console.log("Q1 Ended====================")

console.log("Q2 START====================")

// Question 2:

// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
​
zz
var enteredAlphabet =  'd'


switch(enteredAlphabet)
{
    case enteredAlphabet = "b":

    case enteredAlphabet = "c":

    case enteredAlphabet = "d":

    case enteredAlphabet = "f":

    case enteredAlphabet = "g":

    case enteredAlphabet = "h":

    case enteredAlphabet = "j":

    case enteredAlphabet = "k":


        console.log("it is Consonent")
        break;

        default:
            console.log("it is Vowels")
    
}
var enteredAlphabet = "A"

switch(enteredAlphabet)
{
    case enteredAlphabet = "A":

    case enteredAlphabet = "E":

    case enteredAlphabet = "I":

    case enteredAlphabet = "O":

    case enteredAlphabet = "U":

        console.log("it is Vowel")
        break;

        default:
            console.log("it is consonent")
}

console.log("Q2 Ended====================")

console.log("Q3 START====================")

// Question 3:

// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

/*var val1 = Number(prompt('Enter first value'))
var val2 = Number(prompt('Enter second value'))
var operator = prompt('Enter the operator (+, -, *, /)')

switch(operator)
{
    case '+' : console.log(val1 + val2);
    break;
    case '-' : console.log(val1 - val2);
    break;
    case '*' : console.log(val1 * val2);
    break;
    case '/' : console.log(val1 / val2);
    break;
    default :
    console.log('Invalid Operator')

}

console.log("Q3 Ended====================")

console.log("Q4 START====================")

// Question 4:

// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.

// Properties of triangle:

// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.

// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.

// A triangle is said Scalene Triangle, if none of its sides are equal.

var x = "10";
var y = "10";
var z = "10";

    if(x==y&&y==z)
    {
        console.log("Equilateral Triangle");
    }
    else if(x==y||y==z||z==x)
    {
        console.log("Isosceles Triangle");
    }
    else
    {
        console.log("Scalene Triangle");
    }


var x = "8";
var y = "7";
var z = "9";
     
    if(x==y&&y==z)
    {
        console.log("Equilateral Triangle");
    }
    else if(x==y||y==z||z==x)
    {
        console.log("Isosceles Triangle");
    }
    else
    {
        console.log("Scalene Triangle");
    }
          
var x = "7";
var y = "7";
var z = "9";

    if(x==y&&y==z)
    {
        console.log("Equilateral Triangle");
    }
    else if(x==y||y==z||z==x)
    {
        console.log("Isosceles Triangle");
    }
    else
    {
        console.log("Scalene Triangle");
    }*/

    console.log("Q4 Ended====================")

    console.log("Q5 START====================")
 
// Question 5:

// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
​
// For first 50 units Rs. 0.50/unit
​
// For next 100 units Rs. 0.75/unit
​
// For next 100 units Rs. 1.20/unit
​
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
​
// For example, input: 20 units then bill is Rs10
​
// Total Units: 300
​
// 50 * 0.5 = 25
​
// 100 * 0.75 = 75
​
// 100 * 1.2 = 120
​
// 50 * 1.5 = 75
​
// Total = 295 + 20% surcharge on 295
​
// Result = INR 354

    var electricCityUnits = 300;

    if(electricCityUnits<=50){
       
        console.log(" Total Electricity bill for " +electricCityUnits+ "Units is: INR" +(electricCityUnits*0.50));

    }
    else if(electricCityUnits>50 && electricCityUnits<=150){

        var balanceUnits1 = electricCityUnits - 50;

        console.log("Total Electricity bill for" +electricCityUnits+ "Units is : INR" +(balanceUnits1*0.75+25));
    }
    else if(electricCityUnits>150 && electricCityUnits<=250){

        var balanceUnits2 = electricCityUnits - 150;

        console.log("Total electricity bill for" +electricCityUnits+ "Units is : INR" +(balanceUnits2*1.20+100));
    }

    else{
        var balanceUnits3 = electricCityUnits-250;

        var bill1 = (balanceUnits3*1.50+220);

        var bill2 = bill1*0.20;

        var finalBill = bill1+bill2;

        console.log("Total Electricity bill for"+electricCityUnits+"Units is : INR"+finalBill);
    }

console.log("Q5 Ended====================")