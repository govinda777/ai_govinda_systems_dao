Aqui está o relatório de projeção para um investimento inicial de 10 SOL, assumindo uma valorização esperada de 10% ao mês e aplicando as alíquotas de saída correspondentes:

# Recriar a tabela de projeção de valorização baseada nos dados fornecidos
# Vamos assumir um investimento inicial de 10 SOL e uma valorização de 10% ao mês.

# Valor inicial investido em SOL
investimento_inicial_SOL = 10

# Cálculo da projeção após 3 meses com valorização de 10% ao mês
valor_projetado_apos_3_meses = investimento_inicial_SOL * ((1 + 0.10) ** 3)

# Alíquotas de saída
aliquotas_saida = {
    '0 a 10 dias': 0.80,
    '11 a 20 dias': 0.60,
    '21 a 30 dias': 0.40,
    '31 a 40 dias': 0.20,
    '41 a 50 dias': 0.10,
    '51 a 90 dias': 0.05,
    '91 dias ou mais': 0.00
}

# Construção da tabela de projeção
periodos = list(aliquotas_saida.keys())
valor_liquido_estimado_SOL = [
    round(valor_projetado_apos_3_meses * (1 - aliquota), 2) for aliquota in aliquotas_saida.values()
]

# Criação de um DataFrame para armazenar a tabela
tabela_valorizacao = pd.DataFrame({
    'Período': periodos,
    'Valor Líquido Estimado (SOL)': valor_liquido_estimado_SOL
})

tabela_valorizacao

### Tabela de Projeção de Valorização

| Período            | Valor Líquido Estimado (SOL) |
|--------------------|------------------------------|
| 0 a 10 dias        | 2.66 SOL                     |
| 11 a 20 dias       | 5.32 SOL                     |
| 21 a 30 dias       | 7.99 SOL                     |
| 31 a 40 dias       | 10.65 SOL                    |
| 41 a 50 dias       | 11.98 SOL                    |
| 51 a 90 dias       | 12.64 SOL                    |
| 91 dias ou mais    | 13.31 SOL                    |

Este relatório mostra que após 3 meses de investimento com uma valorização de 10% ao mês, o valor líquido estimado que o investidor pode resgatar varia de acordo com o período em que decidem sair do investimento. Se o investidor mantiver o investimento por mais de 91 dias, poderá resgatar aproximadamente 13.31 SOL, considerando que a alíquota de saída não será mais aplicada.

Essas estimativas são baseadas nos parâmetros definidos e estão sujeitas às condições reais do mercado. É fundamental que os investidores estejam cientes dos riscos e das políticas de saída ao fazer um investimento dessa natureza.

---

Projeção de Investimento em Tokens de Governança

import pandas as pd
import numpy as np

# Parâmetros iniciais
investimento_inicial = 10  # 10 SOL
valorizacao_mensal = 0.10  # 10%
devalorizacao_mensal = -0.10  # -10%
aliquotas = {
    '0 a 10 dias': 0.80,
    '11 a 20 dias': 0.60,
    '21 a 30 dias': 0.40,
    '31 a 40 dias': 0.20,
    '41 a 50 dias': 0.10,
    '51 a 90 dias': 0.05,
    '91 dias ou mais': 0.00
}

# Taxas médias
taxa_transacao_rede = 0.015  # 1.5%
taxa_conversao_gov_sol = 0.03  # 3%
taxa_conversao_sol_usdt = 0.03  # 3%
taxa_protocolo_dao = 0.05  # 5%

# Cálculo da projeção com valorização
projecao_valorizacao = investimento_inicial * (1 + valorizacao_mensal)**3  # Valorização após 3 meses
projecao_devalorizacao = investimento_inicial * (1 + devalorizacao_mensal)**3  # Devalorização após 3 meses

# Valor líquido estimado após 91 dias sem taxa de saída
valor_liquido_valorizacao = projecao_valorizacao * (1 - taxa_conversao_gov_sol - taxa_conversao_sol_usdt - taxa_protocolo_dao)
valor_liquido_devalorizacao = projecao_devalorizacao * (1 - taxa_conversao_gov_sol - taxa_conversao_sol_usdt - taxa_protocolo_dao)

# Construir tabelas
linhas_aliquota = list(aliquotas.keys())
colunas = ['Quantidade Investida (SOL)', 'Valorização Estimada (%)', 'Valor Líquido Estimado (SOL)']
colunas_devalorizacao = ['Quantidade Investida (SOL)', 'Devalorização Estimada (%)', 'Valor Líquido Estimado (SOL)']

tabela_valorizacao = pd.DataFrame(columns=colunas)
tabela_devalorizacao = pd.DataFrame(columns=colunas_devalorizacao)

for periodo, aliquota in aliquotas.items():
    # Ajustar o valor líquido pela alíquota de saída
    valor_liquido_ajustado_valorizacao = valor_liquido_valorizacao * (1 - aliquota)
    valor_liquido_ajustado_devalorizacao = valor_liquido_devalorizacao * (1 - aliquota)
    # Adicionar linha na tabela de valorização
    tabela_valorizacao = tabela_valorizacao.append({
        'Quantidade Investida (SOL)': investimento_inicial,
        'Valorização Estimada (%)': f'{valorizacao_mensal * 100}%',
        'Valor Líquido Estimado (SOL)': valor_liquido_ajustado_valorizacao
    }, ignore_index=True)
    
    # Adicionar linha na tabela de devalorização
    tabela_devalorizacao = tabela_devalorizacao.append({
        'Quantidade Investida (SOL)': investimento_inicial,
        'Devalorização Estimada (%)': f'{devalorizacao_mensal * 100}%',
        'Valor Líquido Estimado (SOL)': valor_liquido_ajustado_devalorizacao
    }, ignore_index=True)

# Definir o índice como os períodos de alíquota
tabela_valorizacao.index = linhas_aliquota
tabela_devalorizacao.index = linhas_aliquota

tabela_valorizacao, tabela_devalorizacao

Com base nas informações fornecidas e nos cálculos realizados, aqui estão as tabelas de projeção para a valorização e desvalorização de um investimento em tokens de governança, levando em conta a alíquota de saída e as taxas:

### Tabela de Projeção de Valorização

Assumindo um investimento inicial de 10 SOL, com uma valorização esperada de 10% ao mês, as estimativas seriam:

| Período           | Valor Líquido Estimado (SOL) |
|-------------------|------------------------------|
| 0 a 10 dias       | 2.37 SOL                     |
| 11 a 20 dias      | 4.74 SOL                     |
| 21 a 30 dias      | 7.11 SOL                     |
| 31 a 40 dias      | 9.48 SOL                     |
| 41 a 50 dias      | 10.66 SOL                    |
| 51 a 90 dias      | 11.25 SOL                    |
| 91 dias ou mais   | 11.85 SOL                    |

Essa tabela mostra que, se o token valorizar 10% ao mês, o investidor pode esperar um retorno proporcionalmente reduzido, dependendo do momento da saída, devido às taxas de transação da rede e às alíquotas de saída.

### Tabela de Projeção de Desvalorização

Se o token desvalorizar 10% ao mês, as estimativas de perda seriam:

| Período           | Valor Líquido Estimado (SOL) |
|-------------------|------------------------------|
| 0 a 10 dias       | 1.30 SOL                     |
| 11 a 20 dias      | 2.60 SOL                     |
| 21 a 30 dias      | 3.89 SOL                     |
| 31 a 40 dias      | 5.19 SOL                     |
| 41 a 50 dias      | 5.84 SOL                     |
| 51 a 90 dias      | 6.16 SOL                     |
| 91 dias ou mais   | 6.49 SOL                     |

Esta tabela indica que, em caso de desvalorização, o investidor sofreria uma perda significativa, que seria ainda mais acentuada se decidisse sair do investimento nos primeiros 90 dias, devido às alíquotas de saída.

Essas projeções são estimativas e servem para fornecer ao investidor uma compreensão clara do potencial de crescimento e dos riscos associados ao investimento em tokens de governança. É importante notar que o valor real que o investidor pode receber depende das condições de mercado e do desempenho do token ao longo do tempo.

---

# Layout da tabela

Layout da tabela:

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