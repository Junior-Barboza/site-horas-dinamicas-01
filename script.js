function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = 21 //data.getHours()

    msg.innerHTML = `agora são ${hora} horas.    `
    if (hora >= 0 && hora<12) {
        img.src ='manhaoficial01.png'
     msg.innerHTML += `Bom dia`  
     document.body.style.background = '#e3cc34'
    
    
    }else if (hora >=12 && hora <18) {
        msg.innerHTML = `agora são ${hora} horas.    `
        img.src = 'tardeoficial.png'
        msg.innerHTML += `Boa tarde`
        document.body.style.background = '#ff7e54'
     
     
    }else   {
        msg.innerHTML = `agora são ${hora} horas.    `
        img.src = 'noiteoficial.webp'
        msg.innerHTML += `Boa noite`
        document.body.style.background = '#00141f'
    }


}

