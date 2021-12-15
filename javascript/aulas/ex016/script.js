//alert('Olá!')
function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('Passo')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] faltam dados!')
        res.innerHTML ='Impossivel começar!'
    } else {
        res.innerHTML = 'contando: <br>'
        var i = Number(ini.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        if(passo <= 0) {
            alert('Passo invalido! Considerando passo 1')
            passo = 1

        }

        if (i < fim) {
            for(var c = i; c <= fim; c += passo) {
                res.innerHTML += ` ${c} \u{1f449}`
    
            }            
        }else {
            for(var c = i; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        
        
        
    }
}