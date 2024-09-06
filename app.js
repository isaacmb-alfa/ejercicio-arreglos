let arrayUser = [];
let arr2 = [];

arrayUser.push(1,2,3,4,5,6,7,8,9,10);

console.log(arrayUser);

const stringUser = prompt('Ingresa 5 palabras a lazar en el siguiente campo separadas por ","');
// Creamos el array
let arr = stringUser.split(',');
// recorremos cada elemento y eliminamos los espacios por si existen
arr.forEach(fruta => {
    arr2.push(fruta.trim());
})

console.log(arr2);

const arrDes = [10,40,30,20,15,5];

function comparar (a, b){
    return a - b;
}

console.log(arrDes.sort(comparar), 'Array ordenado de menor a mayor');

// mostrar el valor mayor y menor con reduce
 const numMayor = arrDes.reduce((previo, actual, indice) =>{
     return actual > previo ?  actual : previo;
 });
console.log(numMayor, 'Imprime el numero mayor con reduce()');
const numMenor = arrDes.reduce((previo, actual, indice) =>{
     return actual < previo ?  actual : previo;
 });
console.log(numMenor, 'Imprime el numero menor con reduce()');