import $ from "jquery";

var number_one;
var number_two;

// function which gets the two numbers from the input boxes and stores them in variables
function getNumbers() {
    //     Store the value of number one in a variable
    number_one = parseInt($("#number_one").val());
    //     Store the value of number two in a variable
    number_two = parseInt($("#number_two").val());
}

// function which outputs the calculated number on the screen
//     Accept parameter of the number to display on screen
//     Put the number in the answers input box

// function which clears the two input boxes
function clearNumbers() {
    //     Set the number one input to empty
    number_one = $("#number_one").val('');
    //     Set the number two input to empty
    number_two = $("#number_two").val('');
}

// function which is called when the user clicks the add button
window.addNumbers = function() {
    //     Call the function which gets the two numbers from the input boxes
    getNumbers();
    var result = number_one + number_two;
    console.log(result);
    //     Store in a variable the two numbers added together
    //     Call the function which output the caculated number on the screen, providing the number to output
    //     Call function which clears input boxes
    //     return false to stop the page being submitted
}

// function which is called when the user clicks the subtract button
function subtractNumbers() {
    //     Call the function which gets the two numbers from the input boxes
    //     Store in a variable the two numbers subtracted
    //     Call the function which output the caculated number on the screen, providing the number to output
    //     Call function which clears input boxes
    //     return false to stop the page being submitted
}

// function which is called when the user clicks the multiply button
function multiplyNumbers() {
    //     Call the function which gets the two numbers from the input boxes
    //     Store in a variable the two numbers multiply together
    //     Call the function which output the caculated number on the screen, providing the number to output
    //     Call function which clears input boxes
    //     return false to stop the page being submitted
}

// function which is called when the user clicks the divide button
function divideNumbers() {
    //     Call the function which gets the two numbers from the input boxes
    //     Store in a variable the two numbers divided
    //     Call the function which output the caculated number on the screen, providing the number to output
    //     Call function which clears input boxes
    //     return false to stop the page being submitted
}