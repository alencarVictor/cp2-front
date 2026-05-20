const painel = document.getElementById('result');

function digit(value) {
    if (value === 'x') {
        painel.value += '*';
    } else {
        painel.value += value;
    }
}

function equals() {
    try {    
        if (painel.value !== "") {
            painel.value = eval(painel.value);
        }
    } catch (error) {
        painel.value = "Erro";
    }
}

function clearAll() {
    painel.value = '';
}

function addFloat() {
    const valorAtual = painel.value;
    const ultimoNum = valorAtual.split(/[\+\-\*\/]/).pop();

    if (!ultimoNum.includes('.')) {
        painel.value += '.';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        digit(key);
    } else if (key === '+') {
        digit('+');
    } else if (key === '-') {
        digit('-');
    } else if (key === '*' ||key === 'x') {
        digit('x');
    } else if (key === '/') {
        digit('/');
    } else if (key === '.'|| key === ',') {
        addFloat();
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        equals();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        painel.value = painel.value.slice(0, -1);
    }
});