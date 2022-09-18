//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.a): ', months[4] +' '+'y'+' ' + months[10]);
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var orderedMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
orderedMonths.sort();
console.log ('Exercise 3.b: ', orderedMonths);
//Agregar un elemento al principio y al final del array (utilizar unshift y push).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift('First');
months.push('Last');
console.log('Exercise 3.c): ', months);
//Quitar un elemento del principio y del final del array (utilizar shift y pop).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.shift();
months.pop();
console.log('Exercise 3.d): ', months);
//Invertir el orden del array (utilizar reverse).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.reverse();
console.log('Exercise 3.e): ', months);
//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.f): ', months.join('_'));
//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.g): ', months.slice(4,11));

