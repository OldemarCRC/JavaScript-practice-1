# Exercise-3
Exercise 3 repository is a homework of the vocational school Vantaan Ammattiopisto Varia
includes HTML, JavaScript and CSS files.

I am doing this change just to see how this works.
This is another change to use git pull from my local repository.
This line is to change my local repository and push the changes into my GitHub repository, using git push.

Added a new line for testing.

CSS Responsive Styles
This repository contains changes made to the CSS file to make it responsive on various screen sizes. The following styles were applied for different screen sizes and orientations:

General Styles
Screen size greater than 1440px
Screen size between 1025px and 1440px
Screen size between 768px and 1024px in portrait orientation
Screen size between 768px and 1024px in landscape orientation
Screen size less than 414px in portrait orientation
Screen height less than 414px in landscape orientation
Screen height less than 414px and width greater than 896px in landscape orientation
These styles will ensure that the website looks good and functions well across various devices and screen sizes.

*******************************************************************************************************************************
#Function to get the input from the user, will break the loop when the user enter a valid input.
def inputIncome():
    while True:
        try:
            income = float(input("Enter the estimated annual income: "))
            return income
        except ValueError:
            print("Error: Please enter a valid numerical value.")

#This will be applied for earnings up to $5000
def lowIncome(income): 
    tax_amount = "${:.2f}".format(0) #This is format the string to show the dolar symbol $ and two decimals
    return tax_amount

#The following three functions are used to calculate the taxes according the estimated earnings.
#This will be applied for earnings between $5000 and $14000
def middleIncome(income): 
    tax_amount="${:.2f}".format(tax_rate_1*(income-5000)) #This is format the string to show the dolar symbol $ and two decimals
    return tax_amount

#This will be applied for earnings exceeding $14000
#The tax amount for earnings between $5000 and $14000 is always $1350 when the earnings is higher than $14000
def highIncome(income): 
    tax_amount="${:.2f}".format(tax_rate_2*(income-14000)+1350) #This is format the string to show the dolar symbol $ and two decimals
    return tax_amount

#Function to check the total earnings to decide which function to use to calculate the taxes amount.
def taxCalculation(income):
    if income<=5000:
        return lowIncome(income)
    elif income<=14000:
        return middleIncome(income)
    elif income>14000:
        return highIncome(income)
    
def remainingIncome(income, tax):
    remaining = income - float(tax[1:])  # Convert tax string to float for calculation
    return "${:.2f}".format(remaining)
    

if __name__ == "__main__":
    tax_rate_1=0.15 #Tax rate applied for earnings between $5000 and $14000
    tax_rate_2=0.40 #Tax rate applied for earnings exceeding $14000

    while True:
            income=inputIncome()
            if income is not None:
                result=taxCalculation(income)
                print("Amount of taxes:",result)
                remaining = remainingIncome(income, result)
                print("Remaining income:", remaining)
                break
            else:
                print("Please enter a valid income.")

*************************************************************************************************************

'use strict';

/**************************TASK 1**************************************/
var task1Div = document.getElementById('countries');

var nordicCountries=["Finland", "Sweden", "Denmark", "Iceland", "Norway"];
for (var country of nordicCountries) {
    var paragraph1 = document.createElement('p');
    paragraph1.textContent = country;
    task1Div.appendChild(paragraph1);
}

/**************************TASK 2**************************************/
var task2Div = document.getElementById('equal');
var result = 5+3*2;
var paragraph2 = document.createElement('p');
if (result === 11){
    paragraph2.textContent = "Equal";
}
else{
    paragraph2.textContent = "Not equal";
    }

task2Div.appendChild(paragraph2);

/**************************TASK 3**************************************/

var task3Div = document.getElementById('games');

var games = ["Angry Birds","Fortnite","League of Legends","Minecraft","Call of Duty"];
games.push("Clash of Clans");
//games.pop(); deletes the last element, which will be the last included. (Clash of Clans)
games.splice(-2, 1); //deletes the last one before the last included. (Call of Duty)
for (var game of games){
    var paragraph3 = document.createElement('p');
    paragraph3.textContent = game;
    task3Div.appendChild(paragraph3);
}


/**************************TASK 4**************************************/

var task4Div = document.getElementById('temperature');
var temperature = 26;
var paragraph4 = document.createElement('p');
if (temperature>=25){
    paragraph4.textContent = "It's a warm day!";
}else{
    paragraph4.textContent = "It's a cool day!";
}
task4Div.appendChild(paragraph4);

/**************************TASK 5**************************************/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 3000);
  });
  
  myPromise.then((result) => {
    console.log(result);
 }); 


**************************************************************************************************************

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oldemar Chaves-JavaScript koe</title>
</head>
<body>
    <h1>Javascript's test</h1>
    <div id="task1">
        <h2>Nordic Countries</h2>
        <div id="countries"></div>
    </div>
    <div id="task2">
        <h2>It is 5+3*2 equal to 11?</h2>
        <div id="equal"></div>
    </div>
    <div id="task3">
        <h2>List of Games</h2>
        <div id="games"></div>
    </div>
    <div id="task4">
        <h2>Day's temperature</h2>
        <div id="temperature"></div>
    </div>


    <script src="scripts.js"></script>
</body>
</html>
