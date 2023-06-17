from random import randint
import random

def gerar_vetor():
    tamanho = int(input('Tamanho do vetor: '))
    vetor = [0] * tamanho
    return vetor

def gerar_vetor_aleatorio(tamanho):
    vetor = [obter_numero_aleatorio() for _ in range(tamanho)]
    return vetor

def obter_numero_aleatorio(limite=100):
    return random.randint(0, limite)

def tchau():
    tchaus = [
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
        "Não desanima com a derrota de hoje, amanhã tem mais!"
        "Com calma e paciência de repente tudo dará errado!"
        "Se ainda não deu errado é por que não acabou!"
        "A derrota de hoje é a semente para a derrota de amanhã!"
    ]
    index = random.randint(0, len(tchaus) - 1)
    print(tchaus[index])

def preencher_vetor_manualmente(colecao):
    for i in range(len(colecao)):
        item = input(f"Digite o valor para a posição {i}: ")
        colecao[i] = item

def limpar_tela():
    input("<Enter>....")
    print("\033c", end="")

def opcoes_menu():
    menu = "------------------MENU---------------------\n"
    menu += "1 - Gerar vetor N posições\n"
    menu += "2 - Preencher vetor manualmente item a item\n"
    menu += "3 - Preencher vetor automaticamente\n"
    menu += "4 - Mostrar vetor\n"
    menu += "5 - Tranformar vetor: elevar a potência N\n"
    menu += "6 - Contar: positivos, negativos e zeros\n"
    menu += "7 - Somatório: de todos, dos negativos e dos positivos\n"
    menu += "8 - Exibir média e mediana: de todos, dos positivos e dos negativos\n"
    menu += "9 - Exibir maior e menor número\n"
    menu += "10 - Sortear dois números: um positivo e um negativo\n"
    menu += "11 - Gerar N grupos de T tamanhos. Não repetir valores\n"
    menu += "12 - Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)\n"
    menu += "13 - Top N maiores números\n"
    menu += "14 - Top N menores números\n"
    menu += "15 - Listar valor médio e listar números maior que a média e menores que a média\n"
    menu += "16 - Somatório da média dos números positivos multiplicados por dois com o produto acumulado dos números negativos pares reduzidos pela metade\n"
    menu += "17 - Ordenar os números em ordem crescente\n"
    menu += "18 - Ordenar os números em ordem decrescente\n"
    menu += "19 - Eliminar números múltiplos de N e M (simultaneamente)\n"
    menu += "0 - SAIR\n"
    menu += "---------------------------------------------\n"
    return menu

def preencher_vetor_automaticamente(colecao):
    valor_maximo = int(input('Limite máximo? '))
    valor_minimo = int(input('Limite mínimo? '))
    if valor_minimo > valor_maximo:
        print("O valor mínimo é maior que o valor máximo.")
        return

    for i in range(len(colecao)):
        colecao[i] = randint(valor_minimo, valor_maximo)

def mapear_produtos(colecao, funcao):
    resultado = []
    for item in colecao:
        resultado.append(funcao(item))
    return resultado

def contar_positivos_negativos_zeros(colecao):
    positivos = sum(1 for item in colecao if item > 0)
    negativos = sum(1 for item in colecao if item < 0)
    zeros = sum(1 for item in colecao if item == 0)
    return 'Positivos:', positivos, 'Negativos:', negativos, 'Zeros:', zeros

def ordem_crescente(colecao, opcao):
    return sorted(colecao, key=opcao)

def ordem_decrescente(colecao, opcao):
    return sorted(colecao, key=opcao, reverse=True)

def ordenar_numeros(colecao, opcao, N=None):
    if opcao == 'todos':
        colecao.sort()
        print(colecao)
    elif opcao == 'pares':
        vetor_pares = [num for num in colecao if num % 2 == 0]
        vetor_pares.sort()
        for i, num in enumerate(colecao):
            if num % 2 == 0:
                colecao[i] = vetor_pares.pop(0)
        print(colecao)
    elif opcao == 'impares':
        vetor_impares = [num for num in colecao if num % 2 != 0]
        vetor_impares.sort()
        for i, num in enumerate(colecao):
            if num % 2 != 0:
                colecao[i] = vetor_impares.pop(0)
        print(colecao)
    elif opcao == 'positivos':
        vetor_positivos = [num for num in colecao if num > 0]
        vetor_positivos.sort()
        for i, num in enumerate(colecao):
            if num > 0:
                colecao[i] = vetor_positivos.pop(0)
        print(colecao)
    elif opcao == 'negativos':
        vetor_negativos = [num for num in colecao if num < 0]
        vetor_negativos.sort()
        for i, num in enumerate(colecao):
            if num < 0:
                colecao[i] = vetor_negativos.pop(0)
        print(colecao)
    elif opcao == 'multiplos_positivos':
        N = int(input("valor de n?" ))
        vetor_multiplos_positivos = [num for num in colecao if num > 0 and num % N == 0]
        vetor_multiplos_positivos.sort()
        for i, num in enumerate(colecao):
            if num > 0 and num % N == 0:
                colecao[i] = vetor_multiplos_positivos.pop(0)
        print(colecao)
    elif opcao == 'multiplos_negativos':
        N = int(input("valor de n?" ))
        vetor_multiplos_negativos = [num for num in colecao if num < 0 and num % N == 0]
        vetor_multiplos_negativos.sort()
        for i, num in enumerate(colecao):
            if num < 0 and num % N == 0:
                colecao[i] = vetor_multiplos_negativos.pop(0)
        print(colecao)
    else:
        print("Opção inválida!")
        
def ordenar_numeros_decrescente(colecao, opcao, N=None):
    if opcao == 'todos':
        colecao.sort(reverse=True)
        print(colecao)
    elif opcao == 'pares':
        vetor_pares = [num for num in colecao if num % 2 == 0]
        vetor_pares.sort(reverse=True)
        for i, num in enumerate(colecao):
            if num % 2 == 0:
                colecao[i] = vetor_pares.pop(0)
        print(colecao)
    elif opcao == 'impares':
        vetor_impares = [num for num in colecao if num % 2 != 0]
        vetor_impares.sort(reverse=True)
        for i, num in enumerate(colecao):
            if num % 2 != 0:
                colecao[i] = vetor_impares.pop(0)
        print(colecao)
    elif opcao == 'positivos':
        vetor_positivos = [num for num in colecao if num > 0]
        vetor_positivos.sort(reverse=True)
        for i, num in enumerate(colecao):
            if num > 0:
                colecao[i] = vetor_positivos.pop(0)
        print(colecao)
    elif opcao == 'negativos':
        vetor_negativos = [num for num in colecao if num < 0]
        vetor_negativos.sort(reverse=True)
        for i, num in enumerate(colecao):
            if num < 0:
                colecao[i] = vetor_negativos.pop(0)
        print(colecao)
    elif opcao == 'multiplos_positivos': # não funciona
        N = int(input("valor de n? "))
        vetor_multiplos_positivos = [num for num in colecao if num > 0 and num % N == 0]
        vetor_multiplos_positivos.sort(reverse=True)
        for i, num in enumerate(colecao):
            if num > 0 and num % N == 0:
                colecao[i] = vetor_multiplos_positivos.pop(0)
        print(colecao)
    elif opcao == 'multiplos_negativos':
        N = int(input("valor de n? "))
        vetor_multiplos_negativos = [num for num in colecao if num < 0 and num % N == 0]
        vetor_multiplos_negativos.sort(reverse=True)
        for i, num in enumerate(colecao):
            if num < 0 and num % N == 0:
                colecao[i] = vetor_multiplos_negativos.pop(0)
        print(colecao)
    else:
        print("Opção inválida!")

def maiores_elementos(colecao):
    return sorted(colecao, reverse=True) [:3]

def menores_elementos(colecao):
    return sorted(colecao)[:3]

def encontrar_maior_menor(colecao):
    return max(colecao), min(colecao)

def somar_elementos(colecao):
    return sum(colecao)

def somatorio_negativos(colecao):
    return sum(item for item in colecao if item < 0)

def somatorio_positivos(colecao):
    return sum(item for item in colecao if item > 0)

def somatorio_todos_positivos_negativos(colecao):
    soma_total = sum(colecao)
    soma_positivos = somatorio_positivos(colecao)
    soma_negativos = somatorio_negativos(colecao)
    return 'Todos:', soma_total, 'Positivos:', soma_positivos, 'Negativos:', soma_negativos

def calcular_media_mediana(colecao):
    vetor_ordenado = sorted(colecao)
    tamanho = len(vetor_ordenado)

    media = sum(vetor_ordenado) / tamanho

    if tamanho % 2 == 0:
        indice1 = tamanho // 2
        indice2 = indice1 - 1
        mediana = (vetor_ordenado[indice1] + vetor_ordenado[indice2]) / 2
    else:
        indice = tamanho // 2
        mediana = vetor_ordenado[indice]

    return 'Média:', media, 'Mediana:', mediana

def calcular_media_mediana_positivos_negativos(colecao):
    positivos = []
    negativos = []
    
    for valor in colecao:
        if valor > 0:
            positivos.append(valor)
        elif valor < 0:
            negativos.append(valor)
    
    return 'Positivos', calcular_media_mediana(positivos), 'Negativos', calcular_media_mediana(negativos)

def novo_vetor_igual(colecao):
        novo_vetor = gerar_vetor()
        preencher_vetor_automaticamente(novo_vetor)

        if all(item in colecao for item in novo_vetor):
            print('Novo vetor: ', novo_vetor)
            print("O novo vetor está 100% presente nos números do sistema e na mesma ordem.")
        else:
            print('Novo vetor: ', novo_vetor)
            print("O novo vetor não está 100% presente nos números do sistema e/ou não está na mesma ordem.")
            
def gerar_grupos(colecao):
    n = int(input("Digite o número de grupos: "))
    t = int(input("Digite o tamanho dos grupos: "))

    if n * t > len(colecao):
        print("Impossível gerar os grupos. O tamanho total é menor do que a quantidade de grupos * tamanho dos grupos.")
    else:
        random.shuffle(colecao)
        grupos = [colecao[i:i + t] for i in range(0, len(colecao), t)]
        print("Grupos gerados:")
        for i, grupo in enumerate(grupos):
            print(f"Grupo {i + 1}: {grupo}")

def sortear_positivo_negativo(colecao):
    positivos = [item for item in colecao if item > 0]
    negativos = [item for item in colecao if item < 0]

    if positivos and negativos:
        positivo = random.choice(positivos)
        negativo = random.choice(negativos)
        print(f"Número positivo sorteado: {positivo}")
        print(f"Número negativo sorteado: {negativo}")
    else:
        print("Não há números positivos ou negativos no vetor.")
      
def listar_maiores_menores_media(colecao):
    media = sum(colecao) / len(colecao)
    maiores = []
    menores = []
    
    for valor in colecao:
        if valor > media:
            maiores.append(valor)
        elif valor < media:
            menores.append(valor)
    
    print("Valor médio:", media)
    print("Números maiores que a média:", maiores)
    print("Números menores que a média:", menores)
  
def somar_media_positivos_produto_negativos(colecao):
    soma_media_positivos = 0
    produto_negativos = 1
    
    count_positivos = 0
    count_negativos = 0
    
    for valor in colecao:
        if valor > 0 and valor % 2 == 0:
            soma_media_positivos += valor
            count_positivos += 1
        elif valor < 0 and valor % 2 == 0:
            produto_negativos *= valor / 2
            count_negativos += 1
    
    if count_positivos > 0:
        media_positivos = soma_media_positivos / count_positivos
    else:
        media_positivos = 0
    
    resultado = media_positivos + produto_negativos
    return resultado

def eliminar_multiplos(colecao, n, m):
    vetor_resultado = []
    
    for valor in colecao:
        if valor % n != 0 or valor % m != 0:
            vetor_resultado.append(valor)
    
    return vetor_resultado
