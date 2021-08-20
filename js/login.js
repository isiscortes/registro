var attempt = 3; // Cuenta el numero de intentos.
// La funcion se ejecuta con el click del boton.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "../html/agenda.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Baja un intento.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}