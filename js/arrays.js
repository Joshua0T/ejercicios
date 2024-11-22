// length Devuelve el número de elementos presentes en el array.
let caracteres = ['a', 'b', 'c',"D"]
console.log(caracteres.length)

// toString Convierte un array en una cadena de texto (string). No modifica el array
let frutas = ['apple', 'banana', 'cherry'];
let frutasTexto = frutas.toString(); // frutasTexto es "apple,banana,cherry"
console.log(frutasTexto)

// at() Es una forma de acceder a los elementos de un array utilizando índices positivos o negativos.
let array = [1, 2, 3, 4, 5];
let element1 = array.at(2);    // element1 es 3 (índice positivo)
let element2 = array.at(-1);   // element2 es 5 (último elemento, índice negativo)
console.log(element1, element2)

// join(separador) Une todos los elementos de un array en una cadena, separados por el separador especificado. (Crea un nuevo array, sin modificar el existente)
let array2 = ['a', 'b', 'c'];
let str = array2.join('-'); // str es "a-b-c"
console.log(str)

// push(element) Añade uno o más elementos al final del array.
let array3 = [1, 2, 3];
array3.push(4); // array3 es ahora [1, 2, 3, 4]
console.log(array3)

// pop() Elimina el último elemento del array y lo devuelve.
let array4 = [1, 2, 3];
array4.pop(); // array4 es ahora [1, 2]
console.log(array4)

// shift() Elimina el primer elemento del array y lo devuelve.
let array5 = [1, 2, 3];
array5.shift(); 
console.log(array5)

// unshift(element) Añade uno o más elementos al inicio del array.
let array6 = [1, 2, 3];
array6.unshift(10); // array6 es ahora [0, 1, 2, 3]
console.log(array6)

// delete elimina el elemento en el índice especificado, pero no ajusta la longitud del array ni reordena los elementos. Esto puede dejar un "hueco" o undefined en el array.
let array7 = [1, 2, 3, 4, 5];
delete array7[2]; // array7 es ahora [1, 2, undefined, 4, 5]
console.log(array7)

// concat(array2) Devuelve un nuevo array que es la concatenación del array original con otro array o valores. (Crea un nuevo array)
let array8 = [1, 2];
let array9 = [3, 4];
let newArr2 = array8.concat(array9); // newArr2 es [1, 2, 3, 4]
console.log(newArr2)

// copyWithin() Copia una parte del array a otra ubicación dentro del mismo array, sin cambiar su tamaño.

// .copyWithin(target, start, end)
// target: El índice en el que se empezará a copiar la secuencia.
// start: El índice desde donde empieza la secuencia a copiar (inclusivo).
// end: El índice donde termina la secuencia a copiar (exclusivo). Si se omite, se copiará hasta el final del array.
let letras = ['a', 'b', 'c', 'd', 'e'];
letras.copyWithin(1, 3, 5); // Copia elementos desde el índice 3 hasta el 5 (exclusivo) y los coloca en el índice 1
console.log(letras); // ['a', 'd', 'e', 'd', 'e']

// flat(depth) Crea un nuevo array con todos los elementos de sub-array concatenados hasta la profundidad especificada. (Crea un nuevo array sin modificar el existente)
let array10 = [1, [2, [3]]];
let flatArr = array10.flat(1); // flatArr es [1, 2, 3]
console.log(flatArr)

// slice(start, end) Devuelve una copia de una parte del array dentro de un nuevo array desde el índice start hasta end (sin incluir end). (Crea un nuevo array, sin modificar el existente)
let array11 = [1, 2, 3, 4];
let newArr3 = array11.slice(1, 3); // newArr3 es [2, 3]
console.log(newArr3,array11)

// splice(start, deleteCount, item1, item2, ...) Cambia el contenido de un array eliminando, reemplazando o añadiendo nuevos elementos.
let array12 = [1, 2, 3, 4];
array12.splice(1, 2, 'a', 'b'); // array12 es ahora [1, 'a', 'b', 4]
console.log(array12)

// toSpliced() Crea una copia del array con algunos elementos eliminados y/o agregados sin modificar el array original.
let array13 = [1, 2, 3, 4, 5];
let newArr4 = array13.toSpliced(2, 0, 'a', 'b'); // No elimina nada, agrega 'a' y 'b' en el índice 2
console.log(newArr4); // [1, 2, 'a', 'b', 3, 4, 5]
console.log(array13); // [1, 2, 3, 4, 5] (array13 original no se modifica)



let header = document.querySelector("encabezado")
let h1 =document.querySelector("titulo")
header.appendChild(h1);