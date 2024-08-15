var sign = ""; // Declare sign outside the functions, making it global

function add() {
    sign = "+";
}

function sub() {
    sign = "-";
}
function mult() {
    sign = "*";
}

function divi() {
    sign = "/";
}

function outcome() {
    // Retrieve the values of the input fields and convert them to numbers
    var num1 = parseFloat(document.getElementById("Num1").value);
    var num2 = parseFloat(document.getElementById("Num2").value);
    
    if (sign == "+"){
        var result = num1 + num2;
        document.getElementById("Result").innerHTML = "Result: " + result;
        sign = ""; // Reset sign after calculation
    }
    else if (sign == "-"){
        var result = num1 - num2;
        document.getElementById("Result").innerHTML = "Result: " + result;
        sign = ""; // Reset sign after calculation
    }
    else if (sign == "*"){
        var result = num1 * num2;
        document.getElementById("Result").innerHTML = "Result: " + result;
        sign = ""; // Reset sign after calculation
    }else if (sign == "/"){
        var result = num1 / num2;
        document.getElementById("Result").innerHTML = "Result: " + result;
        sign = ""; // Reset sign after calculation
    }
    else{
        document.getElementById("Result").innerHTML = "Result: Error";
    }
    
}