// MODULO (%)
// Retorna a sobra da divisão

6 / 2 // resultado 3
6 % 2 // resultado 0

// Ex: numeros pares
num = 0
while(num <= 20){
    num % 2 === 0 ? console.log(num) : ''
    num++
}

//PUSH EM ARRAYS
var arr = [1, 2, 3, 4, 5, 6]
console.log(arr.length)
arr.push(8)
console.log(arr.length)

//for(init, condition, final-expression){}
for (let index = 0; index < 20; index++) {
    console.log(index)
}