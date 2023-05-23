function carregar() {
    var mensagem = document.querySelector('div#mensagem') // Objeto
    var foto = document.querySelector('img#imagem') // 
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        imagem.src = 'fotomanha.png' // antes desse ".src" eu preciso colocar o id que foi dado la no meu html para as imagens (no <img>)
        document.body.style.background = '#f2be9b'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        imagem.src = 'fototarde.png'
        document.body.style.background = '#fe8301'
    } else {
        // BOA NOITE
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#131329'
    }
}

