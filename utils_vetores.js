import { question } from "readline-sync"
import { obter_numero, obter_numero_positivo, obter_texto } from "./utils_strings.js"
import { mostrar_texto } from "./utils_strings.js"

export function gerar_vetor() {
  const tamanho = obter_numero_positivo('Tamanho do vetor: ')
  const vetor = Array(tamanho)
  
  return vetor
}

export function gerar_vetor_aleatorio(tamanho) {
  const vetor = Array(tamanho)

  for (let i = 0; i < tamanho; i++) {
    vetor[i] = obter_numero_aleatorio()
  }

  return vetor
}

export function obter_numero_aleatorio(limite = 100) {
  return Math.floor(Math.random() * limite)
}

export function tchau() {
  const tchaus = [
    "Tchau coração!",
    "Até mais BB!",
    "Fica bem nenem!",
    "Já estou com saudades!",
    "Volte sempre!",
    "A - D - E - U - S | Ande direito enquanto usa sandalha",
    "Até logo!",
    "Ande pela sombra!",
    "Tenha um ótimo dia!",
    "Vá correr!",
    "Vá dormir!",
    "Aproveite seu fim se semana!",
    "Não deixe para amanhã o que você pode errar hoje, bye!",
    "As coisas vão melhorar para pior, até mais!",
    "Todo fracasso começa com a decisão de tentar, aproveite o seu dia!"
  ]

  const index = Math.floor(Math.random() * tchaus.length)

  mostrar_texto(tchaus[index])
}

export function preencher_vetor_manualmente(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    const item = obter_texto(`Digite o valor para a posição ${i}:`)
    vetor[i] = item
  }
}
  

export function limpar_tela() {
  obter_texto("<Enter>....")
  console.clear()
}
  
export function opcoes_menu() {
  let menu = '------------------MENU---------------------'
  menu += '\n1 - Gerar vetor N posições'
  menu += '\n2 - Preencher vetor manualmente item a item'
  menu += '\n3 - Preencher vetor automaticamente'
  menu += '\n4 - Mostrar vetor'
  menu += '\n5 - Tranformar vetor: elevar a potência N'
  menu += '\n6 - Contar: positivos, negativos e zeros'
  menu += '\n7 - Somatório: de todos, dos negativos e dos positivos'
  menu += '\n8 - Exibir média e mediana: de todos, dos positivos e dos negativos'
  menu += '\n9 - Exibir maior e menor número'
  menu += '\n10 - Sortear dois números: um positivo e um negativo'
  menu += '\n11 - Gerar N grupos de T tamanhos. Não repetir valores'
  menu += '\n12 - Pedir um novo vetor e verificar se está 100 % presente nos números do sistema (e na mesma ordem)'
  menu += '\n13 - Top N maiores números'
  menu += '\n14 - Top N menores números'
  menu += '\n15 - Listar valor médio e listar números maior que a média e menores que a média'
  menu += '\n16 - Somatório da média dos números positivos multiplos dois com o produto acumulado dos números negativos pares reduzidos pela metade'
  menu += '\n17 - Ordenar os números em ordem crescente'
  menu += '\n18 - Ordenar os números em ordem decrescente'
  menu += '\n19 - Eliminar números múltiplos de N e M'
  menu += '\n0 - Sair' 
  menu += '\n>>  '

  return menu
}

export function preencher_vetor_automaticamente(vetor) {
  const valor_maximo = obter_numero('Limite máximo? ')
  const valor_minimo = obter_numero('Limite mínimo? ')
  if (valor_minimo > valor_maximo) {
    mostrar_texto("O valor mínimo é maior que o valor máximo.")
    return        // Para parar a funcão, é uma boa opcão?
  }

  for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * ((valor_maximo - valor_minimo )) + valor_minimo) // O limite máximo não será atingido
  }
}
  
export function mapear_produtos(vetor, funcao) {
  const vetor_mapeado = colecaoay(vetor.length)

  for (let i in vetor) {
      vetor_mapeado[i] = funcao(vetor[i])
  }

  return vetor_mapeado
}

export function contar_positivos_negativos_zeros(colecao) {
  let positivos = 0
  let negativos = 0
  let zeros = 0

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero > 0) {
      positivos++
    } else if (numero < 0) {
      negativos++
    } else {
      zeros++
    }
  }

  mostrar_texto(`positivos: ${positivos}, negativos: ${negativos}, zeros: ${zeros}`)
  
}

export function ordem_crescente(colecao, opcao, n = null) {
  function eh_multiplo(num) {
    return n && num % n === 0
  }

  let resultado = []
  let indice = 0

  if (opcao === "todos") {
    for (let i = 0; i < colecao.length; i++) {
      resultado[indice] = colecao[i]
      indice++
    }
  } else if (opcao === "pares") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] % 2 === 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "impares") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] % 2 !== 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "positivos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] > 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "negativos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "multiplos_positivos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] > 0 && eh_multiplo(colecao[i])) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "multiplos_negativos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0 && eh_multiplo(colecao[i])) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  }

  return quicksort(resultado)
}

export function ordem_decrescente(colecao, opcao, n = null) {
  function eh_multiplo(num) {
    return n && num % n === 0
  }

  let resultado = []
  let indice = 0

  if (opcao === "todos") {
    for (let i = 0; i < colecao.length; i++) {
      resultado[indice] = colecao[i]
      indice++
    }
  } else if (opcao === "pares") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] % 2 === 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "impares") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] % 2 !== 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "positivos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] > 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "negativos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "multiplos_positivos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] > 0 && eh_multiplo(colecao[i])) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  } else if (opcao === "multiplos_negativos") {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0 && eh_multiplo(colecao[i])) {
        resultado[indice] = colecao[i]
        indice++
      }
    }
  }

  return quicksort_decrescente(resultado)
}

function quicksort(colecao) {
  if (colecao.length <= 1) {
    return colecao;
  } else {
    const pivot = colecao[0]
    const menores = []
    const maiores = []

    for (let i = 1; i < colecao.length; i++) {
      if (colecao[i] <= pivot) {
        menores[menores.length] = colecao[i]
      } else {
        maiores[maiores.length] = colecao[i]
      }
    }

    return quicksort(menores).concat(pivot, quicksort(maiores))
  }
}


function quicksort_decrescente(colecao) {
  if (colecao.length <= 1) {
    return colecao;
  } else {
    const pivot = colecao[0]
    const menores = []
    const maiores = []

    for (let i = 1; i < colecao.length; i++) {
      if (colecao[i] <= pivot) {
        menores[menores.length] = colecao[i]
      } else {
        maiores[maiores.length] = colecao[i]
      }
    }

    return quicksort(maiores).concat(pivot, quicksort(menores))
  }
}

export function maiores_elementos(colecao){
  if (colecao.length <= 1) {
    return colecao
  }
  
  let referencia_pivot = Math.floor(colecao.length / 2)
  let pivot = colecao[referencia_pivot]
  
  let menores = []
  let iguais = []
  let maiores = []
  
  for (let i = 0; i < colecao.length; i++) {
    if (colecao[i] < pivot) {
      menores[menores.length] = colecao[i]
    } else if (colecao[i] > pivot) {
      maiores[maiores.length] = colecao[i]
    } else {
      iguais[iguais.length] = colecao[i]
    }
  }
  
  return maiores
}

export function menores_elementos(colecao){
  if (colecao.length <= 1) {
    return colecao
  }
  
  let referencia_pivot = Math.floor(colecao.length / 2)
  let pivot = colecao[referencia_pivot]
  
  let menores = []
  let iguais = []
  let maiores = []
  
  for (let i = 0; i < colecao.length; i++) {
    if (colecao[i] < pivot) {
      menores[menores.length] = colecao[i]
    } else if (colecao[i] > pivot) {
      maiores[maiores.length] = colecao[i]
    } else {
      iguais[iguais.length] = colecao[i]
    }
  }
  
  return menores
}


export function encontrar_maior_menor(colecao) {
  if (colecao.length === 0) {
    return undefined
  }
  
  let maior = colecao[0]
  let menor = colecao[0]
  
  for (let i = 1; i < colecao.length; i++) {
    if (colecao[i] > maior) {
      maior = colecao[i]
    }
    
    if (colecao[i] < menor) {
      menor = colecao[i]
    }
  }
  
  return `Maior: ${maior} \nMenor: ${menor}`
}

export function somar_elementos(colecao) {
  let resultado = 0
 
  for (let i = 0; i < colecao.length; i++) {
    resultado += colecao[i]
  }

  return `Somatório de todos: ${resultado}`
}

export function somatorio_negativos(colecao) {
  let resultado = 0
  for (let i = 0; i < colecao.length; i++){
    let numero = colecao[i]
    if (numero < 0) {
      resultado += colecao[i]
    }
  }
  return `Somatório negativos: ${resultado}`
  
}

export function somatorio_positivos(colecao){
  let resultado = 0
  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero > 0) {
      resultado += colecao[i]
    }
  }
  return `Somatótio positivos: ${resultado}`
}

export function somatorio_todos_positivos_negativos(colecao) {
  let resultado_geral = 0
  let resultado_positivo = 0
  let resultado_negativo = 0
  for (let i = 0; i < colecao.length; i++) {
    resultado_geral += colecao[i]
  }  

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero >= 0) {
      resultado_positivo += colecao[i]
    }
  }

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero < 0) {
      resultado_negativo += colecao[i]
    }
  }  

  return {
    Geral: resultado_geral, 
    Positivos: resultado_positivo,
    Negativos: resultado_negativo
  }
}

export function mediana(colecao) {
  const colecaoOrdenada = colecao.sort(function(a, b) {
    return a - b
  })

  const tamanho = colecaoOrdenada.length

  if (tamanho % 2 === 1) {
    return colecaoOrdenada[Math.floor(tamanho / 2)]
  } else {
    const meioSuperior = colecaoOrdenada[tamanho / 2]
    const meioInferior = colecaoOrdenada[tamanho / 2 - 1]
    return (meioSuperior + meioInferior) / 2
  }
}

export function media_todos_positivos_negativos(colecao) {
  let positivos = 0
  let negativos = 0
  let resultado_geral = 0
  let resultado_positivo = 0
  let resultado_negativo = 0
  let geral = colecao.length

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero >= 0) {
      positivos++
    } else if (numero < 0) {
      negativos++
    }
  }

  for (let i = 0; i < colecao.length; i++) {
    resultado_geral += colecao[i]
  }  

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero >= 0) {
      resultado_positivo += colecao[i]
    }
  }

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero < 0) {
      resultado_negativo += colecao[i]
    }
  }  

  return {
    Geral: `Média: ${(resultado_geral / geral).toFixed(2)}. Mediana: ${quicksort(geral) / 2}`, 
    Positivos: `Média ${(resultado_positivo / positivos)}.toFixed(2). Mediana: ${quicksort(positivos)}`,
    Negativos: `Média ${(resultado_negativo / negativos)}.toFixed(2). Mediana: ${quicksort(negativos)}`
  }
}

export function sortear_positivo_negativo(colecao) {
  let positivos = []
  let negativos = []

  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]
    if (numero > 0) {
      positivos[positivos.length] = colecao[i]
    } else if (numero < 0) {
      negativos[negativos.length] = colecao[i]
    }
  }
  let sorteado_positivo = positivos[Math.floor(Math.random() * positivos.length)]
  let sorteado_negativo = negativos[Math.floor(Math.random() * negativos.length)]
  return {
    Positivo: sorteado_positivo,
    Negativo: sorteado_negativo
  }
}

export function gerar_grupos(colecao, N, T) {
  if (colecao.length < N * T) {
    mostrar_texto('Os grupos não podem ser formados')
    return []
  }
  let grupos = []
  let indice = 0

  for (let i = 0; i < N; i++) {
    let grupo = []
    let valores = {}
    while (grupo.length < T) {
      let valor = colecao[indice]
      if (!valores[valor]) {
        grupo[grupo.length] = valor
        valores[valor] = true
      }
      indice++
      if (indice >= colecao.length) {
        indice = 0
      }
    }
    grupos[grupos.length] = grupo
  }

  return grupos
}

export function gerar_novo_vetor(atual, novo) {
  
  if (atual.length !== novo.length) {
    return `Os vetores são diferentes`
  }

  for (let i = 0; i < atual.length; i++) {
    if (atual[i] !== novo[i]) {
      return `Os vetores são diferentes`
    }
  }

  return `Os vetores são iguais`
}

