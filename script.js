// Seleciona o campo de exibição
const display = document.getElementById('result');

// Função para adicionar números e operadores ao visor
function digit(value) {
    // Substitui o 'x' visual pelo '*' matemático para o cálculo
    if (value === 'x') {
        display.value += '*';
    } else {
        display.value += value;
    }
}

// Função para limpar tudo
function clearAll() {
    display.value = '';
}

// Função para adicionar o ponto decimal (evita múltiplos pontos no mesmo número)
function addFloat() {
    const currentVal = display.value;
    const lastPart = currentVal.split(/[\+\-\*\/]/).pop(); // Pega o último número digitado

    if (!lastPart.includes('.')) {
        display.value += '.';
    }
}

// Função para calcular o resultado
function equals() {
    try {
        // eval() processa a string como uma conta matemática
        // Se o visor estiver vazio, não faz nada
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        // Caso a conta esteja errada (ex: "5++5") mostra erro
        display.value = "Erro";
        setTimeout(clearAll, 1500); // Limpa após 1.5s
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Números de 0-9 e operadores básicos
    if (/[0-9]/.test(key)) {
        digit(key);
    } else if (key === '+') {
        digit('+');
    } else if (key === '-') {
        digit('-');
    } else if (key === '*' || key.toLowerCase() === 'x') {
        digit('x');
    } else if (key === '/') {
        digit('/');
    } else if (key === '.' || key === ',') {
        addFloat();
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Evita comportamento padrão do navegador
        equals();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearAll();
    } else if (key === 'Backspace') {
        // Apaga o último caractere (extra para usabilidade)
        display.value = display.value.slice(0, -1);
    }
});