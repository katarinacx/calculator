//Need to import the $ function from jquery so I can use it in this file. This is due to webpack compiler and ES6.
import $ from "jquery";

var number_one;
var number_two;

// function which gets the two numbers from the input boxes and stores them in variables
function getNumbers() {
    //     Store the value of number one in a variable
    number_one = parseInt($("#number_one").val());
    //     Store the value of number two in a variable
    number_two = parseInt($("#number_two").val());

    // Need to check whether there's a valid input in the input boxes, if number one is not a number then we will add a class of error and change the variable to false, this will then skip the else statement afterwards. The second if statement is the same, if it's true for example it will remove any error classes and return isValid, but because one of the numbers hasn't been inputted the isValid will be set to false and will not run the code.
    var isValid = true;
    if (Number.isNaN(number_one)) {
        $('#number_one').addClass('error');
        isValid = false;
    } else {
        $('#number_one').removeClass('error');
    }

    if (Number.isNaN(number_two)) {
        $('#number_two').addClass('error');
        isValid = false;
    } else {
        $('#number_two').removeClass('error');
    }

    return isValid;
}

// function which outputs the calculated number on the screen
//      Accept parameter of the number and operator to display on screen
function outputResult(result, operator) {
    //     Put the number in the answers input box
    getNumbers();
    // Gets the ID of the input box sum and appends this into the input box. 
    $('#sum').val(number_one + operator + number_two + '=' + result);
}


// function which clears the two input boxes
function clearNumbers() {
    //     Set the number one input to empty
    number_one = $("#number_one").val('');
    //     Set the number two input to empty
    number_two = $("#number_two").val('');
}

// function which is called when the user clicks the add button - need to put window. due to using webpack compiler and ES6. (Only if we wanted to use in the HTML).
window.addNumbers = function() {
    //     Call the function which gets the two numbers from the input boxes
    if (!getNumbers()) {
        return false;
    }
    //     Store in a variable the two numbers added together
    var result = number_one + number_two;
    //Store the operator in a variable
    var operator = $('#add').text();
    //     Call the function which output the caculated number on the screen, providing the number to output
    // These two params do not need to be the same name they can simply be outputResult(number_one + number_two, $('add').text());
    outputResult(result, operator);
    //     Call function which clears input boxes
    clearNumbers();
    //     return false to stop the page being submitted
    return false;
};

// function which is called when the user clicks the subtract button- need to put window. due to using webpack compiler and ES6. (Only if we wanted to use in the HTML).
window.subtractNumbers = function() {
    //     Call the function which gets the two numbers from the input boxes
    if (!getNumbers()) {
        return false;
    }
    //     Store in a variable the two numbers subtracted
    var result = number_one - number_two;
    //Store the operator in a variable
    var operator = $('#subtract').text();
    //     Call the function which output the caculated number on the screen, providing the number to output
    outputResult(result, operator);
    //     Call function which clears input boxes
    clearNumbers();
    //     return false to stop the page being submitted
    return false;
};

// function which is called when the user clicks the multiply button- need to put window. due to using webpack compiler and ES6. (Only if we wanted to use in the HTML).
window.multiplyNumbers = function() {
    //     Call the function which gets the two numbers from the input boxes
    if (!getNumbers()) {
        return false;
    }
    //     Store in a variable the two numbers multiply together
    var result = number_one * number_two;
    //Store the operator in a variable
    var operator = $('#multiply').text();
    //     Call the function which output the caculated number on the screen, providing the number to output
    outputResult(result, operator);
    //     Call function which clears input boxes
    clearNumbers();
    //     return false to stop the page being submitted
    return false;
};

// function which is called when the user clicks the divide button- need to put window. due to using webpack compiler and ES6. (Only if we wanted to use in the HTML).
window.divideNumbers = function() {
    //     Call the function which gets the two numbers from the input boxes
    if (!getNumbers()) {
        return false;
    }
    //     Store in a variable the two numbers divided
    var result = number_one / number_two;
    //Store the operator in a variable
    var operator = String.fromCharCode(247);
    //     Call the function which output the caculated number on the screen, providing the number to output
    outputResult(result, operator);
    //     Call function which clears input boxes
    clearNumbers();
    //     return false to stop the page being submitted
    return false;
};