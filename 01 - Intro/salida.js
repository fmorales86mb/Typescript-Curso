console.log("hola");
// ---------- Tipado ----------
var myString = "pepe"; // en js
var myStringTs; // lo defino en ts
myStringTs = "pepe en ts"; // asigno un valor.
document.getElementById("myStr").innerText = myString;
var myNull = undefined;
//myNull = null;
var myVoid = undefined;
myVoid = null;
document.getElementById("myNull").innerText = typeof (myNull);
document.getElementById("myVoid").innerText = typeof (myVoid);
// ---------- Arrays ----------
var arrayNum = [1, 4, 6];
// tuple 
var myTuple;
myTuple = ["hola", 3]; // si agrego más parámetros no los toma, sólo toma los primieros dos cuando coincidan con el tipo.
// let es como var pero cambia el alcance.. ver
// ---------- Tipado en funciones ----------
//function Sumador (num1, num2) // Sin tipado, se le puede pasar un str y lo concatena.
//function Sumador (num1: number, num2: number) // Con tipado, sólo permite nros.
function Sumador(num1, num2) {
    return num1 + num2;
}
// let Sumador = function(num1 : number, num2: number) : number // Es otra manera de definir la función
var GetFullName = function (firstName, lastName) {
    //return firstName + " " + lastName; // forma clásica de concatenar
    var retorno;
    if (!lastName) // si no valido me devuleve un undefined en la parte de apellido.
     {
        retorno = firstName;
    }
    else {
        retorno = firstName + " " + lastName; // se usan los tildes y el símbolo dólar.
    }
    return retorno;
};
document.getElementById("sumador").innerText = Sumador(2, 4).toString();
// document.getElementById("fullName").innerText = GetFullName("Federico", "Morales");
document.getElementById("fullName").innerText = GetFullName("Federico"); // apellido es opcional
