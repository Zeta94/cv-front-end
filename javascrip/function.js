
//Definimos la funcion hola mundo
function holamundo() {
    console.log("Hola mundo!");
}

//Invocamos la funcion hola mundo
holamundo();

function sumar(a,b) {
    var resultado = a+b;

    return resultado; //metodo largo
}

suma = sumar(3,4)
console.log(suma);


function sumar(a,b) {
    return a+b; // metodo corto
}

suma = sumar(8,3)
console.log(suma);