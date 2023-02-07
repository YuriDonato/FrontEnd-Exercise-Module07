const form = document.getElementById("form-comparativo");
const numA = document.getElementById('input-A');
const numB = document.getElementById('input-B');

const containerMensagemSucesso = document.getElementById('p-result');
const showResult = containerMensagemSucesso.style.display = "block";

let formEValido = false; //?
let numerosIguais = false;

function validaNumeros(numA,numB){
    if(numA<numB){
        return true
    }else{
        return false
    }
}

function igualdadeNumeros(numA,numB){
    if(numA==numB){
        return true
    }else{
        return false
    }
}

setInterval(numerosListener, 1)

numA.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumeros(e.target.value);
})

numB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumeros(e.target.value);
})

function numerosListener(){
    formEValido = validaNumeros(numA.value,numB.value);
    numerosIguais = igualdadeNumeros(numA.value,numB.value);
    if(numA.value == "" || numB.value == ""){
        containerMensagemSucesso.innerHTML = `Insira numeros.`;
    }else if(numerosIguais){ 
        containerMensagemSucesso.innerHTML = `Os numeros sao iguais.`;
        showResult;
    }else if(formEValido){
        containerMensagemSucesso.innerHTML = `O primeiro numero (${numA.value}) é menor que o segundo numero (${numB.value}).`;
        showResult;
    }else{
        containerMensagemSucesso.innerHTML = `O primeiro numero (${numA.value}) é maior que o segundo numero (${numB.value}).`;
        showResult;
    }
}
