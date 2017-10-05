README FORMULA DE CIFRADO CESAR Y ASCII PARA DESCRIPTAR Y DESENCRIPTAR STRINGS (Ejercicio incompleto ya que no pude 
hacerlo... Dejaré los pasos que establecí en el app.js)

PASO 1: Primeramente, se debe colocar un var e invocar un prompt para que la persona coloque un string (texto) en el input.

PASO 2: Se deben crear dos funciones para poder encriptar y desencriptar un texto. Nuestra primera función va a encriptar la palabra que coloque en el prompt. Luego debemos generar dos variables. Una debe estar vacía, y la otra debe tener el contenido (en este caso el abecedario).

PASO 3: Posteriormente, se debe invocar la palabra str (string) que sea igual a la str con minusculas (toLowerCase).

PASO 4: Ahora, debemos generar un for para que me recorra todos los elementos del array. Esto se hace por medio de la propiedad length.

PASO 5: Luego, debemos generar un if donde llamamos a nuestra variable alphabet (el array), más el método test
(este método ejecuta la búsqueda de una ocurrencia (idea repentina) entre una expresión regular y una cadena especificada), donde dentro del parentesis invoque el str.charAt(i), del cual, en la linea de abajo se coloque nuestra variable answer y que sume o sea igual a nuestro str.charAt(i).

PASO 6: Ahora, se debe colocar un else donde mi variable answer sume o iguale al método String.fromCharCode (este método devuelve una cadena según la secuencia de valores que estoy utilizando), donde dentro del parentesis se coloca el desplazamiento, más el método str.charCodeAt (este método devuelve un valor indicado dentro del index establecido). donde se coloque la llave (key). Después de eso, se cierra el parentesis, y se debe colocar el porcentaje (%) del alfabeto (en este caso, son 26 letras).

PASO 7: Por último, se debe colocar un return donde llamo a mi variable vacía (answer).
____________________________________________________________________________________________________________________
PASOS QUE NO LOGRÉ EJECUTAR EN EL CÓDIGO, PERO QUE TENÍA UNA IDEA ANOTADA SOBRE QUÉ SE PODÍA HACER

Luego de tener establecido el cipher, se debe generar una segunda función que se llame decipher donde se siguen los 
mismos pasos que en el cipher, pero dentro del else, se debe calcular los 33 espacios que se recorren dentro del array alphabet (aplicando el cifrado Cesar), más los del cifrado ACSII (El cual, la A está ubicado en la posición 65 del index), y que el resultado de ambos sean residuo (%) de 26 que es la cantidad de letras del abecedario, y esto retorne una respuesta desencriptada.

También se pudo haber generado dos prompt en el cual, el usuario decidiera si deseaba encriptar o desencriptar una palabra, y en el siguiente prompt, el usuario agregara la palabra correspondiente para que retornara la respuesta deseada. El problema radica en que no puedo agregar los prompt dentro de la function para que me retorne la respuesta deseada.

Sin embargo, dentro de la function se puede agregar un bucle do while que me permitiera enlazar funciones para que retorne los resultados, pero la duda radica en cómo poder colocar prompt dentro de aquella función sin que se genere un bucle infinito.
____________________________________________________________________________________________________________________ 
OTRAS CONSIDERACIONES

A) Se me ocurrió otra formula de ejecución del código, sin tener muchos resultados (adjuntaré el código en este apartado)

Otra formula:
var element = prompt("Coloque su texto aquí");
function cipher(str) {
var strArray = str.split;
var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var array = alphabet.split("");
var finalArray = [];
for (var i = 0; i < strArray.length; i++){
if (array .indexOf(strArray[i]) !== -1) {
var indexOfChar = array.indexOf(strArray[i]) + 33;
finalArray.push(alphaArray[indexOfChar]);
} else {
finalArray.push(strArray[i]);
}
}
var finalString = finalArray.join("");
return finalString;
}

b) Al igual que en los pasos que sugerí en el problema de las tarjetas de crédito, me da un problema con el prompt, puesto que no se puede invocar dentro de la función, por lo tanto, no me entrega los alert correspondientes al if y al else. Se debe enseñar cómo llamar un prompt dentro de la función para que retorne las alertas, puesto que se ejecuta, pero no llega a nada.