let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo  = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(testo, 'Brazilian Portuguese female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute==numeroSecreto){
        exibirTexto('h1', 'acertou.');

        let palavraTentativa = tentativas>1?'tentativas': 'tentativa';
        let mensagemTentativas= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute>numeroSecreto){
            exibirTexto('p','O número secreto é menor');
        }
        else{
            exibirTexto('p','O número secreto é maior');
        }
        tentativas++;
        function limparCampo(){
            chute = document.querySelector('input');
            chute.value = ' ';
        }
    }
}

function gerarNumero(){
   let numeroEscolhido = parseInt(Math.random()* 3+1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista==3){
    listaDeNumerosSorteados=[];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumero();
   }
   else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}


function reiniciarJogo(){
    numeroSecreto =gerarNumero();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}