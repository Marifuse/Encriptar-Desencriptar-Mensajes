README FORMULA DE CIFRADO CESAR Y ASCII PARA DESCRIPTAR Y DESENCRIPTAR STRINGS (Ejercicio incompleto ya que no pude 
hacerlo... Dejar� los pasos que establec� en el app.js)

PASO 1: Primeramente, se debe colocar un var e invocar un prompt para que la persona coloque un string (texto) en el input.

PASO 2: Se deben crear dos funciones para poder encriptar y desencriptar un texto. Nuestra primera funci�n va a encriptar la palabra que coloque en el prompt. Luego debemos generar dos variables. Una debe estar vac�a, y la otra debe tener el contenido (en este caso el abecedario).

PASO 3: Posteriormente, se debe invocar la palabra str (string) que sea igual a la str con minusculas (toLowerCase).

PASO 4: Ahora, debemos generar un for para que me recorra todos los elementos del array. Esto se hace por medio de la propiedad length.

PASO 5: Luego, debemos generar un if donde llamamos a nuestra variable alphabet (el array), m�s el m�todo test
(este m�todo ejecuta la b�squeda de una ocurrencia (idea repentina) entre una expresi�n regular y una cadena especificada), donde dentro del parentesis invoque el str.charAt(i), del cual, en la linea de abajo se coloque nuestra variable answer y que sume o sea igual a nuestro str.charAt(i).

PASO 6: Ahora, se debe colocar un else donde mi variable answer sume o iguale al m�todo String.fromCharCode (este m�todo devuelve una cadena seg�n la secuencia de valores que estoy utilizando), donde dentro del parentesis se coloca el desplazamiento, m�s el m�todo str.charCodeAt (este m�todo devuelve un valor indicado dentro del index establecido). donde se coloque la llave (key). Despu�s de eso, se cierra el parentesis, y se debe colocar el porcentaje (%) del alfabeto (en este caso, son 26 letras).

PASO 7: Por �ltimo, se debe colocar un return donde llamo a mi variable vac�a (answer).
____________________________________________________________________________________________________________________
PASOS QUE NO LOGR� EJECUTAR EN EL C�DIGO, PERO QUE TEN�A UNA IDEA ANOTADA SOBRE QU� SE POD�A HACER

Luego de tener establecido el cipher, se debe generar una segunda funci�n que se llame decipher donde se siguen los 
mismos pasos que en el cipher, pero dentro del else, se debe calcular los 33 espacios que se recorren dentro del array alphabet (aplicando el cifrado Cesar), m�s los del cifrado ACSII (El cual, la A est� ubicado en la posici�n 65 del index), y que el resultado de ambos sean residuo (%) de 26 que es la cantidad de letras del abecedario, y esto retorne una respuesta desencriptada.

Tambi�n se pudo haber generado dos prompt en el cual, el usuario decidiera si deseaba encriptar o desencriptar una palabra, y en el siguiente prompt, el usuario agregara la palabra correspondiente para que retornara la respuesta deseada. El problema radica en que no puedo agregar los prompt dentro de la function para que me retorne la respuesta deseada.

Sin embargo, dentro de la function se puede agregar un bucle do while que me permitiera enlazar funciones para que retorne los resultados, pero la duda radica en c�mo poder colocar prompt dentro de aquella funci�n sin que se genere un bucle infinito.
____________________________________________________________________________________________________________________ 
OTRAS CONSIDERACIONES

A) Se me ocurri� otra formula de ejecuci�n del c�digo, sin tener muchos resultados (adjuntar� el c�digo en este apartado)

Otra formula:
var element = prompt("Coloque su texto aqu�");
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

b) Al igual que en los pasos que suger� en el problema de las tarjetas de cr�dito, me da un problema con el prompt, puesto que no se puede invocar dentro de la funci�n, por lo tanto, no me entrega los alert correspondientes al if y al else. Se debe ense�ar c�mo llamar un prompt dentro de la funci�n para que retorne las alertas, puesto que se ejecuta, pero no llega a nada.