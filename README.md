# ai_govinda_systems_dao

Uma IA que te ajuda a:

# Criar uma Organização Web3 DAO

# Definir o propósito da sua DAO

# Te mostrar como Conseguir um Investidor

# Criar e organizar Tokens de Governança

--Para que server um Token de Governança?
--Como distribuir or Tokens?
--Distribuição de tokens por Grupos (Sócios Fundadores / Investidores / Caixa DAO) / Pontos que vc tem que levar em conta ao especificar seus Grupos de custos, atenção com o Caixa da DAO

## Tesouraria
--Como gerenciar o tesouro de uma DAO
--Como é aprovado um pagamento no tesouro da DAO?

## Governança

-Votação -> Proposal
--Ferramenta Web3 para votação? (Uma plataforma que valida a quantidade de tokens que o usuário tem para considerar o seu voto)
- Pagamento de funcionários (ex moedas: Bitcoin, Solana)
- ONG Web3 100% compativel com o protocolo The Artivist 
- 

## Grupo Distribuição dos Tokens [Sócios Fundadores, Investidores, Caixa da DAO]

- **100 Tokens para a Comunidade e Sócios Fundadores:** Estes tokens são alocados para os membros fundadores e participantes ativos da comunidade, reconhecendo seu papel e contribuição para a DAO.
- **100 Tokens para Investidores:** Destinados a atrair investimentos externos, esses tokens são cruciais para a capitalização e crescimento da DAO.
- **100 Tokens para o Caixa da DAO:** Esses tokens são retidos pela DAO para financiar futuras iniciativas, projetos e operações.

---

# Input

Interface de Comando

Essa IA funciona como uma URA, ao digitar alguma opção do meu abaixo, a IA irá fazer algumas interações com o usuário para entender melhor a DAO e Coletar informaçoes de acordo com as respostas.

Menu :

* Como criar uma organização Web3?
* Como criar uma ONG Web3?
* Como conseguir investidores para a sua organização?
* Definir meio de pagamento Web3 padrão para a sua ONG
* Como pagar os funcionários da DAO em cripto?
* Quais certificações a minha DAO precisa?
* Como organizar as finanças da minha DAO?
* Como os impostos da minha DAO serão recolhidos?


---

# Output

Um relatório com as informações coletadas e um passo a passo necessário de acordo com a opção escolhida.

---

# command : create_report

Após a IA coletar as informações ela será capaz de criar um README.md apresentando a DAO, o objetivo dela, como os tokens são divididos e o tipo de investivor que a DAO procura.

---

# command : create_report --investment_analysis

Cria um relatório recebendo a taxa média de retorno do investimento (taxa média de valorização do token: ultimos 3 meses)

Valor total desejado para investimento: [exemplo 10 SOL]

Resultado esperado: Uma analise completa do token, por grupo [Sócios Fundadores, Investidores, Caixa da DAO].

## Layout da tabela

Eixo Y:

Alíquota de taxa de saída.

* 0 a 10 dia : 80%
* 11 a 20 dia : 60%
* 21 a 30 dia : 40%
* 31 a 40 dia : 20%
* 41 a 50 dia : 10%
* 51 a 90 dia : 5%
* 91 dia ou mais : 0%

Eixo X:

* Quantidade investimento: [Exemplo: 10 SOL / XX UDST]
* Taxa valorização do Pool: Média 10% mês
* Media taxa transação rede Solana: Média 1,5% por tansação
* Média (mês) taxa conversão Token Gov para SOL (Uniswap) : 3%
* Média (mês) taxa conversão Token SOL para USDT (Uniswap) : Média 3%
* Taxa Protocolo DAO : 5%
* Valor liquido em USDT : (Valor de resgate estimado atual) , (ou seja: VALOR INVESTIDO + ( (Taxa média de valorização do token [exemplo: 10% ao mês]) - (taxa conversão Token Gov para SOL) - ( taxa conversão Token SOL para USDT) - (Taxa Protocolo DAO))
* Total liquides Grupo Criadores Participantes 
* Total liquides Investidores
* Total liquides Caixa Protocolo DAO

## Explicação da tabela

A tabela abaixo está com valores de exemplo, mas ela visa mostrar o valor que o investidor irá fazer (exemplo: 10 SOL), com a taxa de valorização do token, a taxa de conversão do token para SOL e SOL para USDT, a taxa do protocolo DAO e o valor liquido em SOL e USDT será ?


| Período de Saída  | Alíquota de Saída | Quantidade Investida (SOL) | Valor Líquido Estimado (SOL) | Valor Líquido Estimado (USDT) | Total Liquidez Criadores (SOL) | Total Liquidez Criadores (USDT) | Total Liquidez Investidores (SOL) | Total Liquidez Investidores (USDT) | Total Liquidez Caixa (SOL) | Total Liquidez Caixa (USDT) |
|-------------------|-------------------|-----------------------------|------------------------------|-------------------------------|--------------------------------|---------------------------------|----------------------------------|------------------------------------|-----------------------------|-----------------------------|
| 0 a 10 dias       | 80.0%             | 10                         | 233.92                       | 23392.0                       | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |
| 11 a 20 dias      | 60.0%             | 10                         | 467.85                       | 46785.0                       | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |
| 21 a 30 dias      | 40.0%             | 10                         | 701.77                       | 70177.0                       | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |
| 31 a 40 dias      | 20.0%             | 10                         | 935.69                       | 93569.0                       | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |
| 41 a 50 dias      | 10.0%             | 10                         | 1052.65                      | 105265.0                      | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |
| 51 a 90 dias      | 5.0%              | 10                         | 1111.14                      | 111114.0                      | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |
| 91 dias ou mais   | 0.0%              | 10                         | 1169.62                      | 116962.0                      | 3.95                           | 394.86                          | 3.95                             | 394.86                             | 3.95                         | 394.86                        |

A coluna "Quantidade Investida (SOL)" indica o investimento inicial, enquanto as colunas "Valor Líquido Estimado (SOL)" e "Valor Líquido Estimado (USDT)" mostram o retorno estimado após aplicação das alíquotas de saída e conversão para USDT. As colunas adicionais representam a distribuição da liquidez entre os criadores, investidores e caixa da DAO em SOL e USDT.

---

