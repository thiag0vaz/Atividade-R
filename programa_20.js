import { gerar_vetor, preencher_vetor_manualmente, limpar_tela, tchau, 
    opcoes_menu, preencher_vetor_automaticamente, mapear_produtos, 
    contar_positivos_negativos_zeros, ordem_decrescente, ordem_crescente,
    maiores_elementos, menores_elementos, encontrar_maior_menor, 
    somatorio_todos_positivos_negativos, media_todos_positivos_negativos,
    sortear_positivo_negativo, gerar_grupos, gerar_vetor_aleatorio, gerar_novo_vetor, 
} from "./utils_vetores.js"

import {obter_numero, mostrar_texto, obter_texto} from "./utils_strings.js"

function main(){
    const menu = opcoes_menu()  // Tinha colocado const interface mas decobri que é uma palavra reservada em JS
    let produtos = []
    let casos = obter_numero(menu)

    while (casos != 0) {
        if (casos === 1) {
            
            produtos = gerar_vetor()

        } else if(casos === 2 ) {
            
            const vm = preencher_vetor_manualmente(produtos)

        } else if(casos === 3 ) {
            
            const va = preencher_vetor_automaticamente(produtos)

        } else if(casos === 4 ) {

            mostrar_texto(produtos)
            
        } else if(casos === 5 ) {
            
            mostrar_texto('Antes: ')
            mostrar_texto(produtos)
            const expoente = obter_numero('Digite o expoente: ')
            produtos = mapear_produtos(produtos, i => i ** expoente)
            mostrar_texto('Depois: ')
            mostrar_texto(produtos)

        } else if(casos === 6 ) {

            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = contar_positivos_negativos_zeros(produtos)
            mostrar_texto(produtos)
        
        } else if(casos === 7 ) {
            
            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = somatorio_todos_positivos_negativos(produtos)
            mostrar_texto(produtos)
          
        } else if(casos === 8) {

            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = media_todos_positivos_negativos(produtos)
            mostrar_texto(produtos)

        } else if(casos === 9 ) {
            
            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = encontrar_maior_menor(produtos)
            mostrar_texto(produtos)

        } else if(casos === 10 ) {

            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = sortear_positivo_negativo(produtos)
            mostrar_texto(produtos)
        
        } else if(casos === 11 ) {
            
            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            const quantidade = obter_numero('Quantidade de grupos: ')
            const tamanho = obter_numero('Tamanho de cada grupo: ')
            produtos = gerar_grupos(produtos, quantidade, tamanho)
            mostrar_texto(produtos)
        
        } else if(casos === 12 ) {

            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            const novo = gerar_vetor_aleatorio()
            produtos = gerar_novo_vetor(produtos, novo)
            mostrar_texto(produtos)
        
        } else if(casos === 13 ) {
            
            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = maiores_elementos(produtos)
            mostrar_texto('Maiores')
            mostrar_texto(produtos)
        
        } else if(casos === 14 ) {
            
            mostrar_texto('Coleção: ')
            mostrar_texto(produtos)
            produtos = menores_elementos(produtos)
            mostrar_texto('Menores')
            mostrar_texto(produtos)

        } else if(casos === 15 ) {  //Travei em JS

        
        } else if(casos === 16 ) {

        
        } else if(casos === 17 ) {
           
            mostrar_texto('Antes: ')
            mostrar_texto(produtos)
            const opcao = obter_texto('Escolha uma opção (todos, pares, impares, positivos, negativos, multiplos_positivos, multiplos_negativos):')
            let multi
            if (opcao === "multiplos_positivos" || opcao === "multiplos_negativos") {
                multi = obter_numero('Multiplos de quem?')
            }
            produtos = ordem_crescente(produtos, opcao, multi)
            mostrar_texto('Depois: ')
            mostrar_texto(produtos)

        
        } else if(casos === 18 ) {
            
            mostrar_texto('Antes: ')
            mostrar_texto(produtos)
            const opcao = obter_texto('Escolha uma opção (todos, pares, impares, positivos, negativos, multiplos_positivos, multiplos_negativos):')
            let multi
            if (opcao === "multiplos_positivos" || opcao === "multiplos_negativos") {
                multi = obter_numero('Multiplos de quem?')
            }
            produtos = ordem_decrescente(produtos, opcao, multi)
            mostrar_texto('Depois: ')
            mostrar_texto(produtos)

        } else if(casos === 19 ) {

        }
        limpar_tela()
        casos = obter_numero(menu)
    }
    tchau()
}



main()