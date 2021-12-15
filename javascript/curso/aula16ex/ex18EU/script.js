let listanum =[]


function adicionar(){
    let num = document.getElementById('txtnum')
    let lista = document.getElementById('numlist')
    if(num.value<1 || num.value>100 || num.value.length==0|| listanum.indexOf(num.value)!=-1){
        alert('valor tem que ser um valor válido ou ja encontrado na lista!')
    }else{
        let item = document.createElement('option')        
        listanum.push(num.value)
        //alert("total é " +listanum+" adicionado "+num.value)
        item.text = `adicionado valor é ${num.value}`
        lista.appendChild(item)
        res.innerHTML=""

    //else
    num.value=''
    }

  //função
}
function soma(n){
    var mais = 0
    for(var c=n;c<listanum.length;c++){
        mais = Number(mais)+ Number(listanum[c])
        
    }
    return mais
}
function media(n){
    var mais = 0
    for(var c=n;c<listanum.length;c++){
        mais = Number(mais)+ Number(listanum[c])
        
    }
    return mais/listanum.length
}

function finalizar(){
    if(listanum.length==0){
        alert('esta vazio nao tem como finalizar!')
    }else{
    listanum.sort()
    let res = document.getElementById('res')
    res.innerHTML=`ao todo temos ${listanum.length} cadastrados! <br> O maior numero é ${listanum[listanum.length-1]}`
    res.innerHTML+= `<br>o menor valor informado foi ${listanum[0]}`
    res.innerHTML +=`<br> a soma dos valores é ${soma(0)}`
    res.innerHTML += `<br>A média dos valores é ${media(0)}`
    }
}






/*
         [0] [1] [2] [3] [4] [5] [6]
length    1   2   3   4   5   6   7


 */