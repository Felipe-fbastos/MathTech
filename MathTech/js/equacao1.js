'use script'

let button = document.getElementById('calcular'); //Faz o funcionamento do botão

button.addEventListener('click',calculo);//Da ação ao botão, ou seja, faz com que quando ele for clicado faça a ação desejada

function calculo(_e){
    _e.preventDefault(); //impede que a página renicie e perca as informações
    let num1a = parseFloat(document.getElementById('num1a').value);
    let num2b = parseFloat(document.getElementById('num2b').value);
    let num3c = parseFloat(document.getElementById('num3c').value)

    if (num1a === 0){ //Verifica se A é igual a zero, se for exibe o texto "Sem solução (equação impossível)""
        if (num2b === num3c) {//Verifica se A é igual a zero, e se B e C recebem os mesmos numeros, se for verdadeiro aparece os seguinte texto "Infinitas soluções (equação identidade)""
            document.getElementById('resultado').innerHTML= 'Infinitas soluções (equação identidade)';
        } else {
            document.getElementById('resultado').innerHTML='Sem solução (equação impossível)';
        }
    }else{
        var solucao = (num3c - num2b) / num1a;
        document.getElementById('resultado').innerHTML= `A solução da equação é x = ${+ solucao.toFixed(2 )}` ;
    }if(num1a < 0){
        num1a = (`(${num1a})`)

    }
    if(num2b< 0){
        num2b = (`(${num2b})`)

    }
    if(num3c< 0){
        num3c = (`(${num3c})`)

    }
        
    document.getElementById('coeficienteA').textContent = num1a;
    document.getElementById('coeficienteB').textContent = num2b;
    document.getElementById('coeficienteC').textContent = num3c;
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}