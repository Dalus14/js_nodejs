var numbers = new Array(3);
console.log(numbers)
numbers[0]=1;
numbers[1]=2;
numbers[2]=3;
console.log(numbers);

var arreglo = [-1, 50, -34, "Daniel" , 'S' , .59, true, false];
console.log(arreglo);
console.log(arreglo[5]);
console.log(arreglo.pop());
console.log(arreglo);
arreglo.push(null);
console.log(arreglo);
console.log(arreglo.at(5));
console.log(arreglo.length);
arreglo.length = 5;
console.log(arreglo[8]);

console.log("antes del for")
for(var i=0; i<arreglo.length;i++)
{
    console.log(arreglo[i]);
}
console.log("despues del for");

console.log("antes del for-in");
for(index in arreglo)
{
    console.log(arreglo[index]);
}
console.log("despues del for-in");

var fecha = "14/04/2004";
var arregloFecha = fecha.split("/"); 
console.log(arregloFecha);
console.log(arregloFecha.join("/"));

var letras = ['a', 'b', 'c'];
if(Array.isArray(letras))
{
    console.log("si es un arreglo");
}
else{
    console.log("no es un arreglo");
}

console.log(letras.includes("c"));
console.log(letras.indexOf("c"));