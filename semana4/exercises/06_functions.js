//Funciones
//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
var sumaTotal;
function suma(a, b){
    return a + b}
    sumaTotal = suma(3,5)
console.log('Exercise 6.a: ' + sumaTotal)
//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
sumaTotal = sumaB(3,5)
function suma(a,b) {
    if (isNaN(a) || isNaN(b)){
        alert('Exercise 6.b): ' + 'Parameter Error\nIts not a number');
        return NaN;
    }
    return a + b;
}

//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(i){
    if (Number.isInteger(i)){
        return true;
    }
    return false;
    }
i = validateInteger(8)
//A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).
//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
