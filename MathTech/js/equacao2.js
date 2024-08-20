'use script';

let button = document.getElementById('calcular'); //Faz o funcionamento do botão

button.addEventListener('click',calculo); //Da ação ao botão, ou seja, faz com que quando ele for clicado faça a ação desejada


function calculo(e){
    e.preventDefault(); //impede que a página renicie e perca as informações
    let num1a = parseFloat(document.getElementById('num1a').value);
    let num2b = parseFloat(document.getElementById('num2b').value);
    let num3c = parseFloat(document.getElementById('num3c').value);

    
    

    let delta = Math.pow(num2b,2)- 4*num1a*num3c; /*Aqui é forma de baskara, usei a função Math.pow para levar o num2b ao quadarado. 
    Math.pow(n2b,2) dentro desse parenteses inserimos primeiro a nossa variavel, que no caso é num2b e depois quanto queremos elevar esse número.*/
   
    if(delta > 0){ //Se o delta foi maior que 0 a equação possui duas raizes reais e distintas
        let raiz1 = ( (-num2b + Math.sqrt(delta))/(2*num1a) );//Math.sqrt() é um método do objeto Math usado para calcular a raiz quadrada de um número.
        let raiz2 = ( (-num2b - Math.sqrt(delta))/(2*num1a) );
        document.getElementById('resultado').innerHTML = `Raiz 1= ${raiz1.toFixed(2)} Raiz 2= ${raiz2.toFixed(2)}`;

    }else if(delta === 0){ //A equação possui duas raizes reais e iguais
        let raizunica = ( (-num2b + Math.sqrt(delta))/(2*num1a) );
        document.getElementById('resultado').innerHTML = `Raiz única=${raizunica}`;

    }else if(delta < 0){// a equação não possui raizes reais
        document.getElementById('resultado').innerHTML='Delta < 0, não existem raizes de conjunto dos número reais';
    }

    if(num2b<0){ //verifica se o numero é menor que 0, e se for verdadeiro exibe o numero entre parenteses
        
        num2b = `(${num2b})`;
         
    }if(num1a<0){ //verifica se o numero é menor que 0, e se for verdadeiro exibe o numero entre parenteses
        
        num1a = `(${num1a})`;
         
    }if(num3c<0){ //verifica se o numero é menor que 0, e se for verdadeiro exibe o numero entre parenteses
        
        num3c = `(${num3c})`;
         
    }
    if(delta<0){ //verifica se o numero é menor que 0, e se for verdadeiro exibe o numero entre parenteses
        
        delta = `(${delta})`;
        
    }
    if(num1a===0){
        document.getElementById('resultado').innerHTML = 'Função incompleta, o coeficeinte A não pode ser igual a zero!'; 
    }
    
    document.getElementById('numerador').textContent = num2b;
    document.getElementById('baskA').textContent = num1a;
    document.getElementById('baskC').textContent = num3c;
    document.getElementById('delta').textContent = delta;
    
    
    document.getElementById('bAltera1').textContent = num2b;
    document.getElementById('bAltera2').textContent = delta;
    document.getElementById('denominator').textContent = num1a;
       
}

