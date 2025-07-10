document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meu-formulario');
    const campos = document.querySelectorAll('.formulario');
    const mensagensErro = document.querySelectorAll('.mensagem-erro');
    const btnEnviar = document.querySelector('.btn');

    campos.forEach((campo, index) => {
        campo.addEventListener('input', function() {
            validarCampo(campo, index);
        });
        
        campo.addEventListener('blur', function() {
            validarCampo(campo, index);
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let formValido = true;
        
        campos.forEach((campo, index) => {
            if (!validarCampo(campo, index)) {
                formValido = false;
            }
        });

        if (formValido) {
            form.submit();
            alert('Formulário enviado com sucesso!');
        }
    });

    function validarCampo(campo, index) {
        const valor = campo.value.trim();
        const mensagemErro = mensagensErro[index];
        
        if (valor === '') {
            campo.classList.remove('preenchido');
            campo.classList.add('vazio');
            mensagemErro.textContent = 'campo obrigatório';
            mensagemErro.style.visibility = 'visible';
            return false;

             } else {
            campo.classList.remove('vazio');
            campo.classList.add('preenchido');
            mensagemErro.style.visibility = 'hidden';
            
            if (campo.id === 'email' && !validarEmail(valor)) {
                mensagemErro.textContent = 'email inválido';
                mensagemErro.style.visibility = 'visible';
                return false;
            }

              if (campo.id === 'telefone' && !validarTelefone(valor)) {
                mensagemErro.textContent = 'telefone inválido';
                mensagemErro.style.visibility = 'visible';
                return false;
            }
            
            return true;
        }
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validarTelefone(telefone) {
        const re = /^[0-9]{10,13}$/;
        return re.test(telefone);
    }

    })
