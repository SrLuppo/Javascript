let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // faz ficar em ordem crecente

/*console.log(valores) Maneira que funciona da forma padrão

console.log(valores[0])   Maneira que funciona mas fica muito codigo
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

// Abaixo Usando a estrutura de repetição 'For' que é muito melhor 

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}


