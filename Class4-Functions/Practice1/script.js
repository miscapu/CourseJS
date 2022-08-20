/**
 * ============================
 * Using Functions in JavaScript
 * ============================
 */
function calculateAreaCircle( ratio )
{
    return 3.1415 * ratio ** 2;
}

document.getElementById( 'demo' ).innerHTML = "The Area of circle with ratio 2 is: " + calculateAreaCircle( 2 );