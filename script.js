let numeroAleatorio = Math.floor(Math.random() * 11);
let resultado = document.getElementById("resultado");
let botaoAdivinhar = document.getElementById("botaoAdivinhar");
let tentativas = 3;
function adivinhar() {

    let numeroUsuario = Number(document.getElementById("numerousuario").value);

    if (tentativas > 0) {
        if (numeroUsuario === numeroAleatorio) {
            switch (tentativas) {
                case 3:
                    resultado.textContent = `Você acertou! Sua pontuação é 300`;
                    botaoAdivinhar.disabled = true
                    break;

                case 2:
                    resultado.textContent = `Você acertou! Sua pontuação é 200`;
                    botaoAdivinhar.disabled = true
                    break;

                case 1:
                    resultado.textContent = `Você acertou! Sua pontuação é 100`;
                    botaoAdivinhar.disabled = true
                    break;

            }
        } else {
            switch (tentativas) {
                case 3:
                    --tentativas
                    document.getElementById("numerousuario").value = '';
                    resultado.textContent = `Restam ${tentativas} chances`;
                    break;
                case 2:
                    --tentativas
                    document.getElementById("numerousuario").value = '';
                    resultado.textContent = `Restou ${tentativas} chance`;
                    break;

                case 1:
                    --tentativas
                    resultado.style.color = 'red'
                    resultado.textContent = `game over!`
                    botaoAdivinhar.disabled = true
                    break;
            }
        }
    }
}