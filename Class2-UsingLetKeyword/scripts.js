/**
 * ==========================
 *  Use let keyword
 * ==========================
 */
//declare variable
// let x   =   2;
// let x   =   4; Uncaught SyntaxError: redeclaration of let x

// Second example
//let x   =   4;
{
 // let x   =   6; Uncaught ReferenceError: x is not defined -> if only is declared here
    // for dont error use var
    // var x   =   9;
}

// Third example: variables declared with let keyword, only can be access from into scop
let x   =   10;
{
    let x = 4;
    document.getElementById("demo").innerHTML="The value to x is: "+x;
}

