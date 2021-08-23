function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // Bom dia!
        img.scr = 'https://picsum.photos/250/250'
        document.body.style.background = '#5d96f0'
    }
    else if( hora >= 12 && hora < 18){
        // Boa tarde!
        img.scr = 'https://picsum.photos/250/251'
        document.body.style.background = '#f5a13b'
    }
    else{
        // Boa noite!
        img.scr = 'https://picsum.photos/250/252'
        document.body.style.background = '#4d4646'
    }
}
