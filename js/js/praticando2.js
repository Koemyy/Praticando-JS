function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifica os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','img')
        if (fsex[0].checked){
            gênero = 'macho'
            if(idade>= 0 && idade<4){
                //filhote
                img.setAttribute('src','../img/machofilhote.jpg')
            }
            else if(idade >5 && idade<=7){
                //jovem
                img.setAttribute('src','../img/machomeiaidade.jpg')
            }
            else if (idade >8 && idade<=9){
                //adulto
                img.setAttribute('src','../img/machomeiaidade.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','../img/machoidoso.jpg')
            }      
        } 

        else{
            gênero = 'fêmea'
            if(idade>= 0 && idade<4){
                //filhote
                img.setAttribute('src','../img/femeafilhote.jpg')
            }
            else if(idade >5 && idade<=7){
                //jovem
                img.setAttribute('src','../img/femeademeiaidade.jpg')
            }
            else if (idade >8 && idade<=9){
                //adulto
                img.setAttribute('src','../img/femeademeiaidade.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','../img/femeaidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu chachorro é ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}