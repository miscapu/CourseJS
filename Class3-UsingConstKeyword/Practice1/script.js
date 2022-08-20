/*
* =================================
* Using const for declared variables
* =================================
* */

// declare variable
const name  =   "Miguel";

// Example 1: Can't be redeclared
// const name = "July";#Uncaught SyntaxError: redeclaration of const name

//Example 2: Can't be reassigned
// name    =   'Jorge'; #Uncaught TypeError: invalid assignment to const 'name'

//Example 3: Only can be call from into of block scope
{
    const name = 3;
    document.getElementById( "demo" ).innerHTML = "My Name is: "+name;
}

