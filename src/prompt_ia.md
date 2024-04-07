# IA Export and compress files

Como todos sabem o Chat GPT tem um grande problema para ler fontes de dados externas.

Pelo que entendi a melhor maneira de compartilhar informaçoes com ele é através de arquivos de texto.

Em uma pesquisa, verifiquei que eu posso comprimir o texto em base64 e enviar para o Chat GPT, e ele conseguirá ler.

Sobre essas ipoteses, eu criei um script em python que faz isso.

Com uma interface cli rica endetalhes.

E no final ele gera um dashboard na cli mostrando os dados pertinentes da execução do script e dos dados que pode colher.

## Arquitetura do script

Ao executar ./export.sh o arquivo sh chamará
instalar as dependencias do python (pipenv)

cadastrar as variaveis de ambiente

files_black_list = [".git", ".vscode", "node_modules", "dist", "build"]
estention_black_list = [".git", ".vscode", "node_modules", "dist", "build"]

executar o arquivo python ./export.py

## Estutura do arquivo python

É uma classe bem enxuta e objetiva. (porem muito clara com o objetivo dos metodos)

Mas antes de executar o script temos que atualizar as dependencias do python.



