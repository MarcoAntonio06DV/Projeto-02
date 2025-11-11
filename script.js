document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("meuFormulario");
    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoMensagem = document.getElementById("mensagem");
    
    const camposAssunto = document.querySelectorAll('input[name="assunto"]');

    formulario.addEventListener("submit", function(evento) {
        
        evento.preventDefault();

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const mensagem = campoMensagem.value.trim();
        

        let assuntoSelecionado = "";
        for (const radio of camposAssunto) {
            if (radio.checked) {
                assuntoSelecionado = radio.value;
                break;
            }
        }

        if (nome === "") {
            alert("Por favor, preencha o campo Nome.");
            campoNome.focus();
            return;
        }

        if (email === "") {
            alert("Por favor, preencha o campo Email.");
            campoEmail.focus();
            return;
        }

        if (!email.includes("@")) {
            alert("Por favor, insira um Email válido (deve conter '@').");
            campoEmail.focus();
            return;
        }

        if (assuntoSelecionado === "") {
            alert("Por favor, selecione um Assunto de Interesse.");
            camposAssunto[0].focus(); 
            return;
        }
        
        if (mensagem === "") {
            alert("Por favor, preencha o campo Mensagem.");
            campoMensagem.focus();
            return;
        }
        
        alert("Formulário enviado com sucesso!");
        
    });

});