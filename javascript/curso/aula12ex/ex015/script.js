function verificar(){
    var data = new  Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    res.innerHTML = "Preencha os campos acima para visualizar o resultado!"

    if (fano.value.length ==0 || fano.value > ano){
        alert('[ERRO]preencha corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
                if(idade<=10){
                    //criança
                    img.setAttribute('src','foto-bebe-m.jpg')
                }else if(idade<21){
                    //jovem
                    img.setAttribute('src','foto-jovem-m.jpg')
                }else if(idade<50){
                    //adulto
                    img.setAttribute('src','foto-adulto-m.jpg')
                }else if(idade>50){
                    //idoso
                    img.setAttribute('src','foto-idoso-m.jpg')
                }
                //-------------------------
        }else{
            genero = 'Mulher'
                if(idade<=10){
                    //criança
                    img.setAttribute('src','foto-bebe-f.jpg')
                }else if(idade<21){
                    //jovem
                    img.setAttribute('src','foto-jovem-f.jpg')
                }else if(idade<50){
                    //adulto
                    img.setAttribute('src','foto-adulto-f.jpg')
                }else if(idade>50){
                    //idoso
                    img.setAttribute('src','foto-idosa-f.jpg')
                }
        }
        res.innerHTML=`Detectamos um(a) ${genero} com ${idade} anos de idade`
        res.appendChild(img)
      
    }


}