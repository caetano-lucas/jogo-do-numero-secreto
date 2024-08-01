let listaDeNumerosJaSorteados = [];
let tamanhoLimiteLista =3;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function exibirTextoTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(tentativas);
    if (chute == numeroSecreto){
        exibirTextoTela('h1', 'acertou');
        let tentativaPluralOuNao = tentativas >1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `voce acertou com ${tentativas} ${tentativaPluralOuNao}`;
        exibirTextoTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
        
        exibirTextoTela('p','chute maior que o numero');
        } else{
        exibirTextoTela('p','chute menor que o numero');
        }
        tentativas++;
        limparTela();
    }
    
}

function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() *tamanhoLimiteLista + 1);
   let quantidadeNumerosJaEscolhidos = listaDeNumerosJaSorteados.length;
   if (quantidadeNumerosJaEscolhidos == tamanhoLimiteLista){
    listaDeNumerosJaSorteados = [];
   }
   if (listaDeNumerosJaSorteados.includes(numeroEscolhido)){
     return gerarNumeroAleatorio();
    } else {
    listaDeNumerosJaSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosJaSorteados);
    return numeroEscolhido;
    }
}
function limparTela(){
    chute = document.querySelector('input');
    chute.value = '';
   

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}


