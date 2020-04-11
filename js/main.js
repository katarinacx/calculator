//variables with i_ = int
//variables with s_ = string

//Need to import the $ function from jquery so I can use it in this file. This is due to webpack compiler and ES6.
import $ from "jquery";

//Declaring these variables in the global scope so they can be accessed by any function (e.g. we're gonna need these when the user presses the equals operator)
var s_operation;
var i_number_one;
var i_number_two;
//Finding out whether the user has pressed the equals key. Setting the default to false because the user initally hasn't pressed the key
var b_has_pressed_equals = false;

//function to get each number whenever the user clicks a number button
window.appendNumber = function(i_number) {
    //If the user has pressed the equals key then set the input sum (from the HTML) to nothing
    if (b_has_pressed_equals) {
        //Emptying the html element because if we don't, the number that is displayed (the result) will have the new number appended to it
        $('#sum').val('');
        //Setting whether the user has pressed the equals key back to false because if we don't, it will always assume it as true until we've defaulted it back to false
        b_has_pressed_equals = false;
        //Setting the string operation back to nothing because if we don't, it will always remember the number_one variable to be the very first number we've pressed as we are setting the number_one variable in the setNumberFromDisplay() function.
        s_operation = "";
    }
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
    //Setting the variable of whether the user has pressed the equals key to true because result is called when the user presses the equals key
    b_has_pressed_equals = true;
    //Store the second number into a variable, getting the value from the element
    //Using the function above
    window.setNumberFromDisplay();
    //Declare a variable to hold the outcome of the equation
    var result;
    var operator_html;

    switch (s_operation) {
        //If what we've passed through in the function is "add" then we will use this calculation
        case "add":
            result = i_number_one + i_number_two;
            operator_html = $('#add').text();
            break;
            //If what we've passed through in the function is "subtract" then we will use this calculation
        case "subtract":
            result = i_number_one - i_number_two;
            operator_html = $('#subtract').text();
            break;
            //If what we've passed through in the function is "multiply" then we will use this calculation
        case "multiply":
            result = i_number_one * i_number_two;
            operator_html = $('#multiply').text();
            break;
            //If what we've passed through in the function is "divide" then we will use this calculation
        case "divide":
            result = i_number_one / i_number_two;
            operator_html = String.fromCharCode(247);
            break;
    }

    $('#sum').val(result);
    //Putting the sum into the html element that we have created in this function
    window.outputResult(i_number_one + operator_html + i_number_two + '=' + result);
};

window.outputResult = function(s_sum) {
    //Creating the html element string to put in a history of the sums. s_sum is from param given from the previous function
    var html = '<div class="row"><div class="col-12">' + s_sum + '</div></div>';
    //Putting the html element string into the div id we created. We are prepending it so that the html element string is going above the existing content of that div
    $('#calculation-history').prepend(html);
};