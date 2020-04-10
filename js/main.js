//variables with i_ = int
//variables with s_ = string

//Need to import the $ function from jquery so I can use it in this file. This is due to webpack compiler and ES6.
import $ from "jquery";

//Declaring these variables in the global scope so they can be accessed by any function (e.g. we're gonna need these when the user presses the equals operator)
var s_operation;
var i_number_one;
var i_number_two;

//function to get each number whenever the user clicks a number button
window.appendNumber = function(i_number) {
    //This is putting the value of the HTML element into its own variable.
    var s_current_display = $('#sum').val();

    //Strings take precedence over ints. So, even though we're passing through an int parameter, it will change to a string because the current_display is a string
    //We are appending the number into the current_display (Don't forget these are now both strings)
    var s_new_display = s_current_display + i_number;

    //Putting the new_display variable into the HTML element so it shows in the input field (as a value).
    $('#sum').val(s_new_display);
};

window.setNumberFromDisplay = function() {
    //If there's no operator stored then set the value of the sum HTML element to number_one
    if (!s_operation) {
        i_number_one = parseInt($('#sum').val());
    }
    //If there is then set the value of the sum HTML element to number_two
    else {
        i_number_two = parseInt($('#sum').val());
    }
};

window.setOperation = function(s_operator) {

    //Store the current number into a variable that the user has inputted 
    //Using the function above
    window.setNumberFromDisplay();

    //Store operation into a variable so we can use it later when the user presses the equals button
    //Getting the param from the HTML
    s_operation = s_operator;

    //Clear the input field ready for the user to tell us the second number
    $('#sum').val('');
};

window.result = function() {
    //Store the second number into a variable, getting the value from the element
    //Using the function above
    window.setNumberFromDisplay();
    //Declare a variable to hold the outcome of the equation
    var result;

    switch (s_operation) {
        //If what we've passed through in the function is "add" then we will use this calculation
        case "add":
            result = i_number_one + i_number_two;
            break;
            //If what we've passed through in the function is "subtract" then we will use this calculation
        case "subtract":
            result = i_number_one - i_number_two;
            break;
            //If what we've passed through in the function is "multiply" then we will use this calculation
        case "multiply":
            result = i_number_one * i_number_two;
            break;
            //If what we've passed through in the function is "divide" then we will use this calculation
        case "divide":
            result = i_number_one / i_number_two;
            break;
    }

    $('#sum').val(result);
};