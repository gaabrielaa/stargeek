const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");


function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        let validar = dados.find(elemento => elemento.emailcliente==email);
        if (validar){
            msg.innerHTML="E-mail já existe!";
            evento.preventDefault();
        } else {
            criarUsuario(evento);
        }  
    }  
}

formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu nome";
        return null;
        nome.focus();
    }

    if (email.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu email";
        return null;
        email.focus();
    } 

    if (senha.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite sua senha";
        return null;
        senha.focus();
    }

    if (senha2.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Confirme sua senha";
        return null;
        senha2.focus();
    }

    verificarEmail(email.value, evento);

}

function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];

dados.push(
    {
        nomecliente : nome.value,
        emailcliente : email.value,
        senhacliente : senha.value,
    }
)

localStorage.setItem("bd", JSON.stringify(dados));
msg.innerHTML ="Usuário Cadastrado com sucesso"
evento.preventDefault();
setTimeout(()=>{window.location.assign("login.html")},2000);
}