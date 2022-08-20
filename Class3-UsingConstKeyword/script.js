/*
* ====================================
* Using const for declared variables
* ====================================
* */

// Example 1: don't can be redeclared
// const x =   3;
// const x = 5; #redeclaration of const x

// Example 2: can't be reassigned
// const x =   4;
// const y =   9;
// x = 3;
// const x =   x + y;

//Example 3: have block scope
{
    const x = 4;
    document.getElementById("demo").innerHTML="The value of x is: " + x;
}

