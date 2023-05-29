/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   //DIFERENTES MANERAS DE RESOLVER MISMO EJERCICIO
 return nombre[0].toUpperCase() + nombre.slice(1);

  // 2) var array = nombre.split("");
 // array[0] = array[0].toUpperCase();
 // return array.join("");


}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb (num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = 0;
   for (var i = 0; i < arrayOfNumbers.length; i++){
   suma += arrayOfNumbers[i];
   }
cb (suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   //ITERATIVA
  // for (var i = 0; i < array.length; i++){
  // cb(array[i]);

  //METODO
  array.forEach((elemento)=> cb(elemento));
  }



function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   /*ITERATIVA
   var nuevoarray =[];
   for (var i = 0; i < array.length; i++){
nuevoarray.push(cb(array[i]));
   }
   return nuevoarray;*/

   //METODO
   return array.map((elemento)=> cb(elemento));
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   /*ITERATIVO
   var nuevoArray = [];
   for (var i = 0; i < arrayOfStrings.length; i++){
      if (arrayOfStrings[i][0] === "a"){
      nuevoArray.push (arrayOfStrings[i]);
   }
}
return nuevoArray;*/

//METODOS
return arrayOfStrings.filter((elemento)=> elemento[0] === "a");
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
