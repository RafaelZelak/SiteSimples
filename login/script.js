//Mostrar senha

function mostrarSenha(){
    var senha=document.getElementById("senha");
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password"
    }
}

function validarSenha(){
    const nome = document.getElementById("nome").value;
    const errorMsgNome = document.getElementById("erro-msg-nome");

    const email = document.getElementById("email").value;
    const errorMsgEmail = document.getElementById("erro-msg-email");

    const password = document.getElementById("senha").value;
	const errorMsg = document.getElementById("erro-msg");
    
    const loginCorreto = document.getElementById("correto");
    var contador = 0;

    if(nome.length < 3){
        errorMsgNome.innerText = "O nome deve conter pelo menos 3 letras";
        contador = 0;
    }else if(!/[a-zA-Z]/.test(nome)){
        errorMsgNome.innerText = "O nome deve conter apenas letras";
        contador = 0;
    }else if(/\d/.test(nome)){
        errorMsgNome.innerText = "O nome deve conter apenas letras";
        contador = 0;
    }else{
        errorMsgNome.innerText = "";
        contador++;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMsgEmail.innerText = "Email inválido";
        contador = 0;
    }else{
        errorMsgEmail.innerText = "";
        contador++;
    }

    if(password.length < 8){
        errorMsg.innerText = "A senha deve ter pelo menos 8 caracteres";
        contador = 0;
    }else if (!/\d/.test(password)) {
        errorMsg.innerText = "A senha deve conter pelo menos um número";
        contador = 0;
    } else if (!/[a-zA-Z]/.test(password)) {
        errorMsg.innerText = "A senha deve conter pelo menos uma letra";
        contador = 0;
    }else {
		errorMsg.innerText = "";
        contador++;
	}
    if(contador == 3){
        window.location.href = "verificacao.html";
        contador = 0;
    }else if(contador == 0){
        loginCorreto.innerText = "";
    }
}
