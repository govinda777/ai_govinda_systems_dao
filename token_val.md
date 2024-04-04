# Calculando o Valor do Token e Uso na Uniswap

Este documento fornece um guia detalhado sobre como o valor do nosso token DAO é calculado, como você pode utilizá-lo na Uniswap para compra, e como trocar o token por Solana (SOL). Nosso objetivo é atrair investidores que compartilhem da nossa visão a longo prazo, e não especuladores. Por isso, implementamos uma alíquota de saída para vendas dentro de 90 dias.

## Distribuição dos Tokens

### Tokens da Comunidade
- **100 Tokens** são alocados para a comunidade e sócios fundadores. Isso garante envolvimento ativo e governança participativa.

### Tokens dos Investidores
- **100 Tokens** são destinados a investidores que buscam apoiar e crescer junto com a nossa DAO.

### Tokens no Caixa da DAO
- **100 Tokens** ficam retidos como caixa da DAO, utilizados para financiar projetos, iniciativas de crescimento e para manter uma reserva estratégica.

## Aliquiota de Saída

aliquotas_saida = {
    '0 a 10 dias': 0.80,
    '11 a 20 dias': 0.60,
    '21 a 30 dias': 0.40,
    '31 a 40 dias': 0.20,
    '41 a 50 dias': 0.10,
    '51 a 90 dias': 0.05,
    '91 dias ou mais': 0.00
}

## Valor do Token

### Lastro em Solana (SOL)
Suponha que inicialmente temos **100 SOL** como lastro na nossa pool da Uniswap. Com **300 Tokens DAO** em circulação, o cálculo inicial do valor do token é:

`1 Token DAO = Total de SOL no pool / Total de Tokens DAO = 100 SOL / 300 Tokens = 0.3333 SOL por Token DAO`

### Compra de Tokens na Uniswap
Para comprar tokens DAO usando Uniswap:
1. Conecte sua carteira (que contenha SOL) à Uniswap.
2. Selecione SOL como sua moeda de entrada e nosso token DAO como a moeda de saída.
3. Escolha a quantidade de SOL que deseja trocar e confirme a transação.

### Troca de Tokens DAO por SOL
Para trocar de volta para SOL, o processo é o inverso. Lembre-se, porém, da alíquota de saída se a venda ocorrer dentro de 90 dias.

## Liquidez na Uniswap

Nossa liquidez é gerida para garantir estabilidade e crescimento sustentável. A quantidade de SOL e tokens DAO na pool da Uniswap determina a liquidez e o valor de troca do nosso token.

## Tabela de Progressão de Valor

Suponha um aumento de 10% em SOL na pool a cada mês. Aqui está uma tabela exemplificando o potencial de crescimento de um investimento, considerando o aumento da liquidez e a alíquota de saída.

| Mês | Valor Investido (SOL) | Total no Pool (SOL) | Valor SOL (USDT) | Alíquota de Saída | Valor Final em SOL (com saída) |
|-----|-----------------------|---------------------|------------------|-------------------|---------------------------------|
| 1   | X                     | 110                 | Y                | Z%                | A (X - Z%)                      |
| 2   | X                     | 121                 | Y                | Z%                | B (X - Z%)                      |
| ... | ...                   | ...                 | ...              | ...               | ...                             |

- **X** representa o valor investido em SOL.
- **Y** é o valor atual da SOL em USDT.
- **Z%** é a taxa de saída aplicável, variando com o tempo de retenção.
- **A**, **B**, ... são os valores finais, ajustados pela taxa de saída.

Este modelo mostra como o valor do investimento pode evoluir, considerando o crescimento da pool e a alíquota de saída. 

**Nota Importante:** Este documento é apenas um exemplo e deve ser adaptado conforme as necessidades específicas e reais da sua DAO. Os valores e porcentagens são hipotéticos e devem ser calculados com base na situação real do mercado e da pool da Uniswap.
