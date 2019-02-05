var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Creo una función que recibe un objeto de Persona? o de IPersona? falta definir la clase..
function MostrarPersona(pers) {
    document.getElementById("persona").innerText = "Nombre: " + pers.nombre + " - Edad: " + pers.edad.toString();
}
// Creo variable del tipo Persona
var personaObj = { edad: 23, nombre: "Abelardo" };
// Ejecuto el método pasando el objeto creado como parámetro.
MostrarPersona(personaObj);
// ---------- Clases ----------
// Utilizo la interface ya creada IPersona y declaro una nueva clase
var Alumno = /** @class */ (function () {
    function Alumno(legajo, nombre, apellido, edad) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Alumno.prototype.NombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
    return Alumno;
}());
var AlumnoUtn = /** @class */ (function (_super) {
    __extends(AlumnoUtn, _super);
    function AlumnoUtn(carrera, legajo, nombre, apellido, edad) {
        var _this = _super.call(this, legajo, nombre, apellido, edad) || this;
        _this.carrera = carrera; // Va después del super.
        return _this;
    }
    return AlumnoUtn;
}(Alumno));
// Creo un objeto
var alumnoUtnObj = new AlumnoUtn("Sistemas", 25234, "Juan Sebastián", "Bach", 52);
document.getElementById("alumno").innerText = alumnoUtnObj.NombreCompleto();
// ---------- Uso de Let ----------
var list = document.getElementById("list");
var _loop_1 = function () {
    item = document.createElement("LI");
    item.appendChild(document.createTextNode("Item " + i));
    //  las cinco instancias de la función (anónima) interna hacen referencia a cinco diferentes instancias de la variable j
    var j = i;
    // funcón anónima.
    item.onclick = function (ev) {
        console.log("Item " + j + " is clicked.");
    };
    list.appendChild(item);
};
var item;
for (var i = 1; i <= 5; i++) {
    _loop_1();
}
/*
    esto no funcionaría como se espera si reemplazamos let con var
    o si removemos la variable j y simplemente usamos la variable i dentro de la función interna.

    Variables declaradas por let tienen por alcance el bloque en el que se han definido, así mismo,
    como en cualquier bloque interno. De esta manera, let trabaja muy parecido a var.
    La más notable diferencia es que el alcance de una variable var es la función contenedora:
*/
function varTest() {
    var x = 31;
    if (true) {
        var x = 71; // ¡misma variable!
        console.log(x); // 71
    }
    console.log(x); // 71
}
function letTest() {
    var x = 31;
    if (true) {
        var x_1 = 71; // variable diferente
        console.log(x_1); // 71
    }
    console.log(x); // 31
}
// llamamos a las funciones
varTest();
letTest();
