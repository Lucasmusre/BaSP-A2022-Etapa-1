//2. Strings
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var textUppercase = 'this text will be converted to uppercase';
console.log ('Exercise 2.a):', textUppercase.toUpperCase());
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var radium = 'programming';
console.log('Exercise 2.b):', radium.substring(0,5));
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var radiumC ='programming';
console.log('Exercise 2.c):', radium.substring(8,11));
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var radiumD , finish ;
radiumD ='programming'
finish = radiumD.substring(0,1).toLocaleUpperCase()+radium.substring(1,11).toLocaleLowerCase();
console.log ('Exercise 2.d):',finish);
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var radiumE , stars;
radiumE = 'Radium Rocket';
stars = radiumE.indexOf(' ');
console.log('Exercise 2.e): ', stars);
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var radiumF , finishF
radiumF= 'hello Argentina'
finishF= radiumF.substring(0,1).toUpperCase() + radiumF.substring(1, radiumF.indexOf(' ')).toLowerCase()
+ ' ' + radiumF.substring(radiumF.indexOf(' ')+ 1, radiumF.indexOf(' ')+2).toUpperCase() +
radiumF.substring(radiumF.indexOf(' ') + 2).toLowerCase();
console.log('Exercise 2.f): ', finishF);
