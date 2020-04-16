//variables with i_ = int
//variables with s_ = string
//variables with b_ = bool
//Don't need to put a return in the html for an onclick if it's not a button as it's not submitting anything

//Need to import the $ function from jquery so I can use it in this file. This is due to webpack compiler and ES6.
import $ from "jquery";

//Declaring these variables in the global scope so they can be accessed by any function (e.g. we're gonna need these when the user presses the equals operator)
var s_operation = "";
var i_number_one = null;
var i_number_two = null;
//Finding out whether the user has pressed the equals key. Setting the default to false because the user initally hasn't pressed the key
var b_has_pressed_equals = false;

//function to get each number whenever the user clicks a number button
window.appendNumber = function(i_number) {
    // If the input box is equal to 0 then we went to set it to nothing to make sure the 0 isn't being appended
    if ($('#sum').val() === '0') {
        $('#sum').val('');
    }
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
        //This was originally a parseInt but because I'm using decimals, it needed to be changed to parseFloat. 
        i_number_one = parseFloat($('#sum').val());
    }
    //If there is then set the value of the sum HTML element to number_two
    else {
        i_number_two = parseFloat($('#sum').val());
    }
};

window.setOperation = function(s_operator) {
    //Store the current number into a variable that the user has inputted 
    //Using the function above
    window.setNumberFromDisplay();

    //Store operation into a variable so we can use it later when the user presses the equals button
    //Getting the param from the HTML
    s_operation = s_operator;
    //Need to set the bool back to false. This is because it will go into the appendNumber() if statement and set the operator as empty. 
    b_has_pressed_equals = false;

    //Clear the input field ready for the user to tell us the second number
    $('#sum').val('');
};

window.result = function() {
    //Setting the variable of whether the user has pressed the equals key to true because result is called when the user presses the equals key
    b_has_pressed_equals = true;
    //Store the second number into a variable, getting the value from the element
    //Using the function above
    window.setNumberFromDisplay();
    //Sanity checking. Checking whether the user has entered both numbers before they can do the same. If they're not it will return false and won't do the rest of the function. Checking whether number_one or number_two has a type of number. Or its checking whether number_one or number_two is actually a number. And it's making sure the operation isn't squared, as we are setting number_two variables later in this switch statement so we need to ignore this operation. 
    if ((typeof i_number_one !== 'number' || typeof i_number_two !== 'number' || isNaN(i_number_one) || isNaN(i_number_two)) && s_operation !== "squared") {
        return false;
    }
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
            //If what we've passed through in the function is "squared" then we will use this calculation
        case "squared":
            //Math.pow(base, exponent) So it would be i_number_one^2
            result = Math.pow(i_number_one, 2);
            //Setting number_two to be the same number and number_one because we're squaring it by itself and it needs to be stored in the history. outputResult needs a number_two variable for it to execute. 
            i_number_two = i_number_one;
            operator_html = $('#multiply').text();
            break;
            //If we don't choose an operation it will come into this default case and return false which means it won't execute the rest of the function
        default:
            return false;
    }

    $('#sum').val(result);
    //Putting the sum into the html element that we have created in this function
    window.outputResult(i_number_one + operator_html + i_number_two + '=' + result);
    //Setting the number one variable to the result of the last sum so we can carry on with the next sum
    i_number_one = result;
    //Refocuses on the document instead of any button that we've used onkeydown on
    $('document').focus();
};

window.outputResult = function(s_sum) {
    //Creating the html element string to put in a history of the sums. s_sum is from param given from the previous function
    var html = '<div class="row"><div class="col-12 history_style">' + s_sum + '</div></div>';
    //Putting the html element string into the div id we created. We are prepending it so that the html element string is going above the existing content of that div
    $('#calculation-history').prepend(html);
};

window.toggleHistory = function() {
    //Toggling whether we want to show the calculation history or not. Toggle handles show and hide for us
    $('.calculation-history').toggle();

    //If the calculation history is not visisble then we want to move the calculator back into the middle by offsetting it and changing the text of the toggle history button to say show
    if (!$('.calculation-history').is(':visible')) {
        $('.calculator').parent().addClass('offset-md-3');
        $('.toggle-history-btn').text("Show history");
    } else {
        //Do the opposite
        $('.calculator').parent().removeClass('offset-md-3');
        $('.toggle-history-btn').text("Hide history");
    }
};

window.clearAllInput = function() {
    //This is for the C button and it will clear everything that has been set and make sure the input is back to 0
    s_operation = "";
    i_number_one = null;
    i_number_two = null;
    $('#sum').val('0');
};

window.deleteNumbers = function() {
    //Giving the input a variable name
    var inputDisplay = $('#sum').val();
    //We are then giving the new string in the input a variable name. We want to take a number off the end of the number_one or number_two everytime the button gets pressed
    var newInputDisplay = inputDisplay.substring(0, inputDisplay.length - 1);
    //Then putting this back in the input
    $('#sum').val(newInputDisplay);

    //If there is no value then we want to show a number 0 in the input
    if (!$('#sum').val()) {
        $('#sum').val('0');
    }
};

//We need a new function which calls the document and not the window for us to use onkeydown
document.onkeydown = function() {
    //We are doing this based off of the keyCode that is pressed on the keyboard
    //And calling the function we need and passing in the param that we want if there's one needed
    switch (window.event.keyCode) {
        case 8:
            window.deleteNumbers();
            break;
        case 48:
        case 96:
            window.appendNumber(0);
            break;
        case 49:
        case 97:
            window.appendNumber(1);
            break;
        case 50:
        case 98:
            window.appendNumber(2);
            break;
        case 51:
        case 99:
            window.appendNumber(3);
            break;
        case 52:
        case 100:
            window.appendNumber(4);
            break;
        case 53:
        case 101:
            window.appendNumber(5);
            break;
        case 54:
        case 102:
            window.appendNumber(6);
            break;
        case 55:
        case 103:
            window.appendNumber(7);
            break;
        case 56:
        case 104:
            window.appendNumber(8);
            break;
        case 57:
        case 105:
            window.appendNumber(9);
            break;
        case 13:
            window.result();
            break;
        case 107:
            window.setOperation('add');
            break;
        case 109:
            window.setOperation('subtract');
            break;
        case 111:
            window.setOperation('divide');
            break;
        case 106:
            window.setOperation('multiply');
            break;
    }
    //Returning false so we break out of this function to stop it doing it again and again
    return false;
};