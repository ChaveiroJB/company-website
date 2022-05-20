    window.onload = function () { //define foco para o campo de nome
    document.getElementById("nome").focus();
    }

    // nome 
    function validaNome(){
    let nome = document.getElementById("nome");
    if(nome != ""){
        return true;
    }
    console.log(validaNome());
    return false;
    }

    // email
    function validaEmail(){
    let email = document.getElementById("email");
    if(email != ""){
        return true;
    }
    console.log(validaNome());
    return false;
    }

    // telefone
    function validaTelefone(){
        let telefone = document.getElementById("phone");
        if(telefone != ""){
            return true;
        }
        console.log(validaNome());
        return false;
    }

    // Assunto
    function validaAssunto(){
        let assunto = document.getElementById("assunto");
        if(assunto != ""){
            return true;
        }
        console.log(validaNome());
        return false;
    }

    // mensagem
    function validaMensagem(){
        let mensagem = document.getElementById("mensagem");
        if(mensagem != ""){
            return true;
        }
        console.log(validaNome());
        return false;
    }

    function validaForm() {
    let button = document.getElementById("btn");

    if (validaTelefone() === true) {
        if(validaAssunto() === true) {
            if (validaMensagem() === true){
                button.disabled = false
                    return;
            }
        }
    }
    button.disabled = true
    return;
}
