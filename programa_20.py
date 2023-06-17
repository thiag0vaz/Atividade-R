from utils_vetores import (
    gerar_vetor, preencher_vetor_manualmente, limpar_tela, tchau,
    preencher_vetor_automaticamente, mapear_produtos,
    contar_positivos_negativos_zeros, ordem_decrescente, ordem_crescente,
    maiores_elementos, menores_elementos, encontrar_maior_menor,
    somatorio_todos_positivos_negativos, sortear_positivo_negativo, gerar_grupos,
    opcoes_menu, calcular_media_mediana, calcular_media_mediana_positivos_negativos,
    novo_vetor_igual, listar_maiores_menores_media, somar_media_positivos_produto_negativos,
    eliminar_multiplos, ordenar_numeros, ordenar_numeros_decrescente
)


def main():
    menu = opcoes_menu()
    produtos = []
    casos = int(input(menu))

    while casos != 0:
        if casos == 1:
            produtos = gerar_vetor()
        elif casos == 2:
            preencher_vetor_manualmente(produtos)
        elif casos == 3:
            preencher_vetor_automaticamente(produtos)
        elif casos == 4:
            print(produtos)
        elif casos == 5:
            print('Antes: ')
            print(produtos)
            expoente = int(input('Digite o expoente: '))
            produtos = mapear_produtos(produtos, lambda i: i ** expoente)
            print('Depois: ')
            print(produtos)
        elif casos == 6:
            print('Coleção: ')
            print(produtos)
            print(contar_positivos_negativos_zeros(produtos))
        elif casos == 7:
            print('Coleção: ')
            print(produtos)
            print(somatorio_todos_positivos_negativos(produtos))
        elif casos == 8:
            print('Coleção: ')
            print(produtos)
            print(calcular_media_mediana(produtos))
            print(calcular_media_mediana_positivos_negativos(produtos))
        elif casos == 9:
            print('Coleção: ')
            print(produtos)
            print(encontrar_maior_menor(produtos))
        elif casos == 10:
            print('Coleção: ')
            print(produtos)
            print(sortear_positivo_negativo(produtos))
        elif casos == 11:
            print('Coleção: ')
            print(produtos)
            produtos = gerar_grupos(produtos)
            print(produtos)
        elif casos == 12:
            print('Coleção: ')
            print(produtos)
            print(novo_vetor_igual(produtos))
            print(produtos)
        elif casos == 13:
            print('Coleção: ')
            print(produtos)
            print('Maiores: ')
            print(maiores_elementos(produtos))
        elif casos == 14:
            print('Coleção: ')
            print(produtos)
            print('Menores: ')
            print(menores_elementos(produtos))
        elif casos == 15:
            print('Coleção: ')
            print(produtos)
            print(listar_maiores_menores_media(produtos))
        elif casos == 16:
            print('Coleção: ')
            print(produtos)
            print(somar_media_positivos_produto_negativos(produtos))
        elif casos == 17:
            print('Antes: ')
            print(produtos)
            opcao = input('Escolha uma opção (todos, pares, impares, positivos, negativos, multiplos_positivos, multiplos_negativos):')
            print('Depois: ')
            print(ordenar_numeros(produtos, opcao))
        elif casos == 18:
            print('Antes: ')
            print(produtos)
            opcao = input('Escolha uma opção (todos, pares, impares, positivos, negativos, multiplos_positivos, multiplos_negativos):')
            print('Depois:')
            print(ordenar_numeros_decrescente(produtos, opcao))
        elif casos == 19:
            print('Coleção: ')
            print(produtos)
            n = int(input('Digite o valor de N: '))
            m = int(input('Digite o valor de M: '))
            produtos = eliminar_multiplos(produtos, n, m)
            print(produtos)

        limpar_tela()
        casos = int(input(menu))
    
    tchau()


if __name__ == "__main__":
    main()
