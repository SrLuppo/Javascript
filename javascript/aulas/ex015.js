let num = [5, 8, 2, 9, 3]
num.push(1) //acrescenta mais um elemento no array mas tem que tomar cuidado onde coloca, antes ou depois do sort= antes do sort ele fica na ordem crescente se colocar depois ele fica sendo o ultimo número.
num.sort() //arruma por ordem crecente
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
