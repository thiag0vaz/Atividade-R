import { question } from "readline-sync"

export function numero_por_extenso(numero) {
    const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const especiais = {
      10: 'dez',
      11: 'onze',
      12: 'doze',
      13: 'treze',
      14: 'quatorze',
      15: 'quinze',
      16: 'dezesseis',
      17: 'dezessete',
      18: 'dezoito',
      19: 'dezenove'
    };
    
    let numero_extenso = ''
    
    if (numero === 0) {
      return 'zero'
    }
    
    if (numero >= 1000) {
      numero_extenso += numero_por_extenso(Math.floor(numero / 1000)) + ' mil '
      numero = numero % 1000
    }
    
    if (numero >= 100) {
      numero_extenso += unidades[Math.floor(numero / 100)] + 'cento '
      numero = numero % 100
    }
    
    if (numero >= 20) {
      numero_extenso += dezenas[Math.floor(numero / 10)] + ' '
      numero = numero % 10;
    } else if (especiais[numero]) {
      numero_extenso += especiais[numero] + ' '
      numero = 0;
    }
    
    if (numero > 0) {
      numero_extenso += unidades[numero]
    }
    
    return numero_extenso.trim()
}

export function obter_numero(label='Digite um numero: '){
    let numero = obter_texto(label)

    while (isNaN(Number(numero)) || numero === ''){
        mostrar_texto('Valor inválido!')
        numero = question(label)
    }

    return Number(numero)
}

export function obter_numero_minimo(label = 'Digite um número: ', minimo = undefined){
    let numero = obter_numero(label)

    while (minimo != undefined && numero < minimo){
        mostrar_texto(`Favor digite um número no mínimo (${minimo}) !`)
        numero = obter_numero(label)
    }

    return numero
}

export function obter_numero_positivo(label = 'Digite um número positivo: '){
    let numero = obter_numero(label)

    while (numero <= 0){
        mostrar_texto('Favor digite um número positivo!')
        numero = obter_numero(label)
    }

    return numero
}


export function obter_texto(label = 'Digite um texto:'){
    const texto = question(label)

    return texto
}

export function mostrar_texto(texto = 'Hello'){
    console.log(texto)
}

export function enter_limpar_tela(){
    obter_texto('<Enter>....')
    console.clear()
}

export function maximo_entre_tres_diferentes(valor1, valor2, valor3){
    if (valor1 > valor2 && valor1 > valor3){
        return valor1
    }else if (valor2 > valor1 && valor2 > valor3){
        return valor2
    }else if (valor3 > valor1 && valor3 > valor2){
        return valor3
    }else if (valor1 === valor2 && valor1 > valor3){
        return valor1
    }else if (valor1 === valor3 && valor1 > valor2){
        return valor1
    }else if (valor2 === valor3 && valor2 > valor1){
        return valor2
    }
}

export function mostrar_texto_inline(texto){
    process.stdout.write(texto)
}

export function splitar_frase(frase = 'Digite a frase: '){
    const texto = question(frase)
    return texto.split(' ')
}

export function substituir_letras(entrada) {
    const trocado = new RegExp(alvo);
    return entrada.replace(trocado, substituto);
}
  

export function inverter_ordem_frase(frase) {
    return frase.split(' ').reverse().join()
}

export function contar_caracteres(entrada) {
    return entrada.length
}

export function caixa_alta(frase){
    return frase.toUpperCase()
}

export function caixa_baixa(frase){
    return frase.toLowerCase()
}

export function ordem_decrescente(colecao, opcao) {
    let referencia_pivot = Math.floor(colecao.length / 2);
    let pivot = colecao[referencia_pivot];
  
    let menores = [];
    let iguais = [];
    let maiores = [];
  
    if (colecao.length < 2) {
      return colecao;
    }
  
    if (opcao === "multiplos_negativos") {
      let n = obter_numero('Digite o valor de N: ');
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (n && colecao[i] < 0 && colecao[i] % n === 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "multiplos_positivos") {
      let n = obter_numero('Digite o valor de N: ');
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (n && colecao[i] > 0 && colecao[i] % n === 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "todos") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          maiores = [...maiores, colecao[i]];
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
      return [...ordem_decrescente(maiores), ...iguais, ...ordem_decrescente(menores)];
    }
  
    if (opcao === "pares") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] % 2 === 0) {
          maiores = [...maiores, colecao[i]];
        } else {
          menores = [...menores, colecao[i]];
        }
      }
      return [...ordem_decrescente(menores), ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "impares") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] % 2 === 1) {
          maiores = [...maiores, colecao[i]];
        } else {
          menores = [...menores, colecao[i]];
        }
      }
      return [...ordem_decrescente(menores), ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "positivos") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (colecao[i] > 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "negativos") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (colecao[i] < 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  }
  