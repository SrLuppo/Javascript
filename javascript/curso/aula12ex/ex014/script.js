function carregar(){
    var msg= window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if(hora<12){
        img.src='manha.png'
        document.body.style.background='#8b572c'
    }else if(hora<18){
        img.src='tarde.png'
        document.body.style.background='#5171ad'
    }else{
        img.src='noite.png'
        document.body.style.background='#241e13'
    }


}
