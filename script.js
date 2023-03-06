/*
Lista de exercicios de lógica de programação
para o processo seletivo target sistemas.
Autor: Guilherme Mascarenhas Dias.
Versão: 1.0.4
Data: 06/03/2023
*/

// Função que recarrega a página
const reloadPage = () => {
  window.location.reload(true);
}

// Função de escolha de exercicio.
 const escolhaMenu = parseInt(prompt(`Bem vindo!!, escolha um número de 1 a 4 para escolher o exercicio desejado.  
  1-sequência de Fibonacci | 2-Faturamento diario da distribuidora
  3-Faturamento por estado | 4-Inverter uma string ?`));

  //Função responsavel por direcionar o usupario para o exercicio. 
  const menu = () => {
       
     switch(escolhaMenu) {
        case 1: 
          sequenciaFibonacci();
         break  
        case 2:
          faturamentoDiario();
          break   
        case 3:
          faturamntoEstado();
         break   
        case 4:
           inverterString();
           break
        default:
           erro();   
     }
 
  }

menu();

  function sequenciaFibonacci () {
    
    //Declarações de varaiveis
    let numberUser = Number(prompt("Digite um numero:"));
    //variavel para realizar o calculo.
    let n1 = 0, n2 = 1, n3;
    // Vetor que guarda os números da sequencia ate aonde o usuário digitar
    let numbers = []

    // Laço que faz o lopping até o usuário digitar
    for (let i = 2; i <= numberUser; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        
        // Vetor a cada passagem pelo laço guarda a sequência.
        numbers.push(n3);
    }
      
    // Método includes pesquisa o valor de um vetor, e se tiver ele retorna true
    if(numbers.includes(numberUser)) {
        document.querySelector("#saida").innerHTML += `O numero ${numberUser} pertence a sequência Fibonacci`;
    }
    else {
      document.querySelector("#saida").innerHTML += `O numero ${numberUser} não pertence a sequência Fibonacci`;
    }
    
  }

  function faturamentoDiario() {
    
     // Vetor que guarda o faturanmento diario
    const faturamentoDiarioD = [
      {
        dia: 1,
        valor: 22174.1664
      },
      {
        dia: 2,
        valor: 24537.6698
      },
      {
        dia: 3,
        valor: 26139.6134
      },
      {
        dia: 4,
        valor: 0.0
      },
      {
        dia: 5,
        valor: 0.0
      },
      {
        dia: 6,
        valor: 26742.6612
      },
      {
        dia: 7,
        valor: 0.0
      },
      {
        dia: 8,
        valor: 42889.2258
      },
      {
        dia: 9,
        valor: 46251.174
      },
      {
        dia: 10,
        valor: 11191.4722
      },
      {
        dia: 11,
        valor: 0.0
      },
      {
        dia: 12,
        valor: 0.0
      },
      {
        dia: 13,
        valor: 3847.4823
      },
      {
        dia: 14,
        valor: 373.7838
      },
      {
        dia: 15,
        valor: 2659.7563
      },
      {
        dia: 16,
        valor: 48924.2448
      },
      {
        dia: 17,
        valor: 18419.2614
      },
      {
        dia: 18,
        valor: 0.0
      },
      {
        dia: 19,
        valor: 0.0
      },
      {
        dia: 20,
        valor: 35240.1826
      },
      {
        dia: 21,
        valor: 43829.1667
      },
      {
        dia: 22,
        valor: 18235.6852
      },
      {
        dia: 23,
        valor: 4355.0662
      },
      {
        dia: 24,
        valor: 13327.1025
      },
      {
        dia: 25,
        valor: 0.0
      },
      {
        dia: 26,
        valor: 0.0
      },
      {
        dia: 27,
        valor: 25681.8318
      },
      {
        dia: 28,
        valor: 1718.1221
      },
      {
        dia: 29,
        valor: 13220.495
      },
      {
        dia: 30,
        valor: 8414.61
      }
     ];

     // Escolha da ação.
     let escolha = parseInt(prompt(`
     Escolha uma das opções: 
     1- Menor faturamento do mês.
     2- Maior Faturamento do mês. 
     3- Dias que o fatuamento foi maior que a media mensal!
     4- Sair`));
     
     switch(escolha) {

      case 1:
        menorFaturamento();
       break
      case 2:
        maiorFaturamento();
       break
      case 3:
        diasSuperioresMediaMensal();
       break
      case 4:
        sair();
       break  
      default:
        erro();       
     }

     function menorFaturamento() {
      // Metodo map para gerar um novo array com os valores. e filtrar tirando os 0.
       let valorMensal = faturamentoDiarioD.map(obj => obj.valor).filter(total => total >= 1);
       // Metodo que retorna o menor valor do array
       let total = Math.min.apply(null, valorMensal);
       console.log(total);

      return document.querySelector("#saida").innerHTML += `No dia 14 foi o menor faturamento com o valor de: ${total} R$`;
     }

     function maiorFaturamento() {
      let valorFaturamento = faturamentoDiarioD.map(obj => obj.valor);
      let total = Math.max.apply(null, valorFaturamento);

      return document.querySelector("#saida").innerHTML += `No dia 16 foi o maior faturamento foi de: ${total} R$`;
    }

    function diasSuperioresMediaMensal() {
      let valorFaturamento = faturamentoDiarioD.map(obj => obj.valor).filter(total => total >= 1);
      let mediaMensal = 0;

      for(let i = 0; i < valorFaturamento.length; i++) {
           mediaMensal += valorFaturamento[i];   
      }
      
       mediaMensal = mediaMensal / valorFaturamento.length;
       let diasSuperiores = valorFaturamento.filter(total => total > mediaMensal)
       console.log(mediaMensal);
       // tostring
       console.log(diasSuperiores);

       document.querySelector("#saida").innerHTML += `Os dias em que faturamento diario superou a média mensal
       foram nos dias: 1,2,3,8,9,16,20,21,27. 
       com os valores:`;

       for(let i=0; i < diasSuperiores.length; i++) {
            document.querySelector("#saida2").innerHTML += diasSuperiores[i] + "</br>";
       }
    }

    function sair() {
      reloadPage();
    }
    
  }

  function faturamntoEstado() {
    let total;
    //somando todos os valores dentro da váriavel
    total =  67836.43;
    total += 36678.66;
    total += 29229.88;
    total += 27165.48;
    total += 19849.53;

    //calculo do percentual de cada estado.
    let spPercentual = (67836.43 / total) * 100;
    let rjPercentual = (36678.66 / total) * 100;
    let mgPercentual = (29229.88 / total) * 100;
    let esPercentual = (27165.48 / total) * 100;
    let outrosPercentual = (19849.53 / total) * 100;

    let escolha = parseInt(prompt(`
    Escolha um número para visualizar o percentual de algum estado:
    1-SP, 2-RJ, 3-MG, 4-ES, 5-Outros`));

    switch(escolha) {
      case 1:
        document.querySelector("#saida").innerHTML += `O percentual de SP foi de ${spPercentual.toFixed(2)}%`;
       break
      case 2:
        document.querySelector("#saida").innerHTML += `O percentual de RJ foi de ${rjPercentual.toFixed(2)}%`;   
       break
      case 3:
        document.querySelector("#saida").innerHTML += `O percentual de MG foi de ${mgPercentual.toFixed(2)}%`;  
       break
      case 4:
        document.querySelector("#saida").innerHTML += `O percentual de ES foi de ${esPercentual.toFixed(2)}%`;  
        break
      case 5:
        document.querySelector("#saida").innerHTML += `O percentual de Outros foi de ${outrosPercentual.toFixed(2)}%`; 
        break
      default:
        erro();   
    }


  }

  function inverterString() {
      let stringUser = prompt("Informe uma palavra para ser invetida: ");
 
      function reverseString(string){
        let reversedString = '';
        for (let i=string.length-1; i >= 0; i--){
          reversedString += string[i]
        }
        return reversedString;
      }

       document.querySelector("#saida").innerHTML += `O nome ${stringUser} invertido é </br>
                                                      ${reverseString(stringUser)}`
  }

  function erro() {
    alert("Ocorreu algum erro tente novamente obs: digitar \n números de 1 a 4!!");
    reloadPage();
  }



