function contar(){
    var res = document.querySelector("div#res")
    res.innerHTML=""
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passos = Number(document.getElementById('txtpasso').value)
    var total = ""
        if(inicio==""||fim==""){
            alert('preencha TODOS OS CAMPOS')
        }else{
            if(passos==0){
                alert('passo nao pode ser zero ser substituido por 1')
                passos=1
                        }
                total=inicio
                while(total<=fim){
                    res.innerHTML=res.innerHTML+"<span>&#128073;&#127995;</span>" +String(total)
                    total=total+passos
                }
            res.innerHTML=res.innerHTML+'<span>&#129304;&#127995;</span>'

            
            //res.innerHTML=`é nois inicio ${inicio} fim ${fim}  passos  ${passos} eee ${total}`
        }    
}