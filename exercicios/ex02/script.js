function verificar() {
    let dataBruta = new Date()
    let dataAtual = dataBruta.getFullYear()
    let fAno = window.document.querySelector('input#txtAno').value
    let anoConv = Number(fAno)
    let res = window.document.getElementById('res')


    if (anoConv <= 0 || anoConv.value > dataAtual) {
        window.alert('ERRO - Tente novamente ou verifique se os dados informados são validos!')
    } else{
        let fSex = window.document.getElementsByName('radSex')
        let idade = dataAtual - anoConv
        let genero = ''
        let img = document.createAttribute('img')
        img.setAttribute('id','foto')

        if(fSex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','criancaMenino.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade}.`
    }


}