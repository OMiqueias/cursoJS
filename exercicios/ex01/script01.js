function carregar() {
    let msg = window.document.getElementById('msg');
    let body = document.body;
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia
        body.style.backgroundImage = "url('manha.jpg')";
        body.style.color = "black"; // Ajuste de cor para melhor contraste
        msg.innerHTML = `São ${hora}:${min}, Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        body.style.backgroundImage = "url('tarde.jpg')";
        body.style.color = "black"; // Ajuste de cor para melhor contraste
        msg.innerHTML = `São ${hora}:${min}, Boa tarde!`
    } else {
        // Boa noite
        body.style.backgroundImage = "url('noite.jpg')";
        body.style.color = "white"; // Ajuste de cor para melhor contraste
        msg.innerHTML = `São ${hora}:${min}, Boa noite!`
    }

    // Ajustes de estilo para garantir que a imagem de fundo ocupe toda a tela
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
}