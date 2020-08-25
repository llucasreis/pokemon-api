# Requirements
Seu papel será construir a API para uma pequena interface que possibilitará que usuários visualizem uma lista com todos os Pokémon existentes, faça filtros por nome e tipo. Depois de selecionar 6 Pokémon, ele poderá criar um time.

Você recebeu em anexo um arquivo JSON com um banco de dados de Pokémon e todos os dados que você precisa para montar esta API. Você deve pensar a melhor estratégia para consumir os dados deste arquivo e retorná-los para o cliente que irá consumir a sua API.

Além dos Pokémon, você deverá criar uma estrutura para armazenar o time criado pelo usuário. Um time pode ter até 6 Pokémon e o nome de seu treinador.

### A API que você deve construir para a interface deve garantir as seguintes ações:

- Listar todos os Pokémon. Esta rota deve permitir filtros por nome e tipo;
- Gravação do time montado pelo usuário.

### Validações de dados;
- Um time tem no máximo 6 Pokémon;
- O nome do time deve ter pelo menos 5 caracteres.

### São requisitos da API:
- Sua API deve retornar os dados no formato JSON;
- Sua solução deve ser desenvolvida em Python ou Javascript;
- Ela deve estar documentada da maneira como preferir. A qualidade da documentação também será avaliada;
- Sua solução deve considerar que será enviada para produção, então legibilidade e qualidade geral da solução será avaliada;
- É sua escolha como e onde os dados fornecidos serão armazenados e retornados.

## Como deve ser a entrega?
- A sua implementação deve ser facilmente instalável em sistemas baseados em Unix (MacOS ou Linux). É encorajado utilizar ferramentas que facilitem este trabalho como Docker;
- Você tem até 7 dias para que sua implementação seja entregue em um repositório git hospedado no GitHub e compartilhado com os usuários @fghso , @bruno-s-campos e @loide
- No seu repositório, o arquivo README.md deve ter as instruções completas para instalação da API. Parte da avaliação vem de leitura do código mas parte vem do sistema rodando, por isso, seja muito minucioso neste arquivo;
O arquivo README.md deve ter uma seção justificando suas escolhas de ferramentas  e tecnologias e seu raciocínio por trás de decisões.

## Como iremos avaliar sua entrega?
- Atingimento dos requisitos descritos anteriormente;
- A maneira como utiliza ferramentas open source;
 Qualidade da solução em geral: o código é legível e fácil de manter? Tem testes automatizados?
- Tratamento de erros;
- Facilidade de instalação em outros computadores.

## Dicas
- Anote o máximo possível de informações nos comentários (de código ou README). Não conseguimos saber o que você estava pensando ao montar sua API, então é importante nos passar seus pensamentos;
- Não tente reinventar a roda. Faz parte da solução utilizar ferramentas (frameworks, bibliotecas) que estejam ao seu dispor para construir a API;
- Dedique tempo em um lugar que se sinta produtivo e sem interrupções
