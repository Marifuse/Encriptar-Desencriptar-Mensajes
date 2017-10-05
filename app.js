//Primeramente, se debe colocar un var e invocar un prompt para que la persona coloque un string (texto) en el input.
var element = prompt("Coloque su texto aquí");
//Se deben crear dos funciones para poder encriptar y desencriptar un texto.
//Nuestra primera función va a encriptar la palabra que coloque en el prompt.
//Luego debemos generar dos variables. Una debe estar vacía, y la otra debe tener el contenido (en este caso el abecedario).
function cipher(str, key) {
  var answer = "";
  var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
//Posteriormente, se debe invocar la palabra str (string) que sea igual a la str con minusculas (toLowerCase).
  str = str.toLowerCase();
//Ahora, debemos generar un for para que me recorra todos los elementos del array. Esto se hace por medio de la propiedad length.
  for (var i = 0; i < str.length; i++) {
/*Luego, debemos generar un if donde llamamos a nuestra variable alphabet (el array), más el método test
(este método ejecuta la búsqueda de una ocurrencia (idea repentina) entre una expresión regular y una cadena especificada),
donde dentro del parentesis invoque el str.charAt(i), del cual, en la linea de abajo se coloque nuestra variable answer
y que sume o sea igual a nuestro str.charAt(i)*/
    if(alphabet.test(str.charAt(i))) {
    answer += str.charAt(i);
/*Ahora, se debe colocar un else donde mi variable answer sume o iguale al método String.fromCharCode (este método devuelve
una cadena según la secuencia de valores que estoy utilizando), donde dentro del parentesis se coloca el desplazamiento, más
el método str.charCodeAt (este método devuelve un valor indicado dentro del index establecido). donde se coloque la llave (key).
Después de eso, se cierra el parentesis, y se debe colocar el porcentaje (%) del alfabeto (en este caso, son 26 letras).*/
  } else {
    answer += String.fromCharCode(str.charCodeAt(i) + key) % 26;
  }
 }
 //Por último, se debe colocar un return donde llamo a mi variable vacía (answer).
 return answer;
}
console.log(cipher());

//se sume por la cantidad de letras que debe saltar (33), más
