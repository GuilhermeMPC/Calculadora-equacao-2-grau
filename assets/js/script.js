const btn = document.querySelector('#send');
const resultado = document.getElementById("resultado")

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const a = document.querySelector('#aNumber');
    const b = document.querySelector('#bNumber');
    const c = document.querySelector('#cNumber');

    const aValue = aNumber.value;
    const bValue = bNumber.value;
    const cValue = cNumber.value;

    let delta = (((bValue**2) - 4*aValue*cValue)**0.5);
    let res;
    let sol1;
    let sol2;

    
    if (aValue === '' || bValue === '' || cValue === '') {
        res = "Por favor, insira valores válidos."
        resultado.innerText = `${res}`
    }
    else if (delta  > 0) {
        res = "Existem duas soluções reais."
        sol1 = ((-1*bValue) + delta) / (2*aValue)
        sol2 = ((-1*bValue) - delta) / (2*aValue)
        resultado.innerText = `${res} \n \n O valor de x1 é: ${sol1.toFixed(2)} \n O valor de x2 é: ${sol2.toFixed(2)}`
    } else if(delta === 0) {
        res = "Existe apenas uma solução real."
        sol1 = (-1*bValue + (delta ** 0.5)) / (2*aValue)
        console.log(sol1)
        if(aValue == 0 && bValue == 0 && cValue == 0) {
            resultado.innerText = 'Não é possível realizar esta operação, tente novamente.'
        }       
        else {
            resultado.innerText = `${res} \n O valor de x é: ${sol1.toFixed(2)}`
        }    
    }
    else {
        res = "Não existe raíz real."
        resultado.innerText = `${res}`
    }
});
