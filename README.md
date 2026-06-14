<div align="center">
  <img width="220" alt="Logo Carbon Defuse" src="https://github.com/user-attachments/assets/804996da-c484-4b34-9fb4-d134da2c132d">
</div>
# Carbon Defuse

Calculadora de impacto ambiental integrada à Taggy.

Projeto desenvolvido pelo Grupo 5 do curso de Sistemas de Informação da CESAR School, período 2026.1.

</div>

## Links do projeto

* Site institucional: [Google Sites](https://sites.google.com/cesar.school/grupo-5-si-2026-1?usp=sharing)
* Protótipo: [Figma](https://www.figma.com/files/team/1616514991350928449/project/574924099?fuid=1617004462867806530)
* Organização das tarefas: [Trello](https://trello.com/b/9rcdpxLn/carbon-defuse)
* Repositório principal: [GitHub do Carbon Defuse](https://github.com/gabriellucasknp/Carbon-Defuse)
* Repositório do back-end: [Car Route Management System](https://github.com/FelipeUCAA/Car-Route-Management-System/tree/back-end)
* Issues do projeto: [GitHub Issues](https://github.com/gabriellucasknp/Carbon-Defuse/issues)

## Sobre o projeto

A ideia do Carbon Defuse veio de uma situação que já acontece na prática. Quando o motorista passa pelo pedágio sem precisar parar, ele perde menos tempo em fila, gasta menos combustível e reduz a emissão de CO₂ durante o trajeto. Em estacionamentos, o uso da tag também evita a impressão do ticket de papel.

Mesmo com esses benefícios, normalmente o usuário enxerga a Taggy apenas como uma forma mais rápida de passar por pedágios e estacionamentos. Nosso projeto foi criado para mostrar esse impacto de maneira simples.

No sistema, o usuário pode informar uma rota e os dados do veículo. A partir disso, o Carbon Defuse apresenta uma estimativa de distância, gasto de combustível, custo da viagem, tempo economizado e emissão de CO₂. Também é possível comparar o cenário com Taggy e sem Taggy.

Para empresas, o sistema possui uma área voltada para frotas, com dados que podem ajudar no acompanhamento de custos, rotas e indicadores ambientais.

## Objetivo

Nosso objetivo é tornar visível uma economia que já existe, mas que muitas vezes passa despercebida. Em vez de mostrar apenas números soltos, o sistema organiza as informações em gráficos, comparações e equivalências mais fáceis de entender.

## Funcionalidades

1. Simulação de rota com origem, destino e veículo.
2. Estimativa de distância e consumo de combustível.
3. Comparação da viagem com Taggy e sem Taggy.
4. Cálculo aproximado da emissão de CO₂.
5. Visualização do tempo e do combustível economizados.
6. Dashboard com os principais resultados.
7. Histórico de simulações para usuários cadastrados.
8. Área corporativa para análise de frotas.
9. Projeção mensal de gastos e impacto ambiental.
10. Geração de relatórios para consulta e apresentação dos dados.

## Cálculo de CO₂

O sistema trabalha com uma estimativa baseada no consumo do veículo e no fator de emissão do combustível.

```text
Litros consumidos = Distância percorrida / Consumo médio do veículo

CO₂ emitido = Litros consumidos x Fator de emissão do combustível
```

Fatores usados no projeto:

* Diesel: 2,67 kg de CO₂ por litro.
* Gasolina com etanol: 2,27 kg de CO₂ por litro.
* Etanol: 1,46 kg de CO₂ por litro.
* GNV: 2,02 kg de CO₂ por metro cúbico.

Esses resultados são aproximações usadas para a simulação. O Carbon Defuse não substitui um inventário ambiental completo de uma empresa.

## Tecnologias utilizadas

### Front-end

* React 18
* TypeScript
* React Router
* Vite
* Tailwind CSS
* Material UI
* Radix UI e shadcn/ui
* Recharts
* React Hook Form

### Back-end

* Node.js
* Express
* Prisma
* SQLite

### Organização do projeto

* Git e GitHub
* Trello
* Figma
* Google Sites
* Discord
* WhatsApp

## Como rodar o projeto

### Front-end

```bash
git clone https://github.com/gabriellucasknp/Carbon-Defuse.git
cd Carbon-Defuse
npm install
npm run dev
```

O front-end ficará disponível em:

```text
http://localhost:5173
```

### Back-end

```bash
git clone -b back-end https://github.com/FelipeUCAA/Car-Route-Management-System.git
cd Car-Route-Management-System/backend
npm install
npx prisma generate
npx prisma db push
npx tsx src/server.ts
```

O back-end ficará disponível em:

```text
http://localhost:3000
```

## Entregas do projeto

### Entrega 03

Nesta entrega, o grupo apresentou três histórias principais funcionando:

1. Cálculo da viagem usando origem, destino e veículo.
2. Comparação dos resultados com Taggy e sem Taggy.
3. Visualização dos dados no dashboard e no histórico.

Screencast da Entrega 03:

https://www.loom.com/share/ea465ea16c464d9e9664791bc43fab5d

### Entrega 04

Na Entrega 04, o grupo continuou o desenvolvimento das histórias, realizou ajustes no sistema, trabalhou na integração entre front-end e back-end e apresentou o deploy da aplicação.

Screencast da Entrega 04:

https://www.loom.com/share/d2733988810243f1afc6e4c0df53b11f

## Backlog priorizado

1. Calcular viagem. Prioridade alta. Concluído.
2. Estimar combustível. Prioridade alta. Concluído.
3. Comparar o cenário com Taggy e sem Taggy. Prioridade alta. Concluído.
4. Calcular o impacto ambiental. Prioridade alta. Concluído.
5. Mostrar a economia de tempo. Prioridade média. Concluído.
6. Exibir os resultados em gráficos. Prioridade média. Concluído.
7. Salvar simulações no histórico. Prioridade média. Concluído.
8. Fazer uma projeção mensal. Prioridade baixa. Concluído.
9. Criar o modo empresa. Prioridade baixa. Concluído.
10. Gerar relatórios automáticos. Concluído.

## Organização das sprints

### Sprint 01, de 25/05 a 28/05

Organização do backlog, definição das histórias e divisão inicial das tarefas.

### Sprint 02, de 29/05 a 01/06

Implementação das histórias principais e início dos testes.

### Sprint 03, de 02/06 a 06/06

Ajustes no front-end, integração com o back-end, revisão do sistema e preparação da Entrega 03.

### Sprint 04, de 08/06 a 11/06

Implementação das novas histórias, testes finais, deploy e preparação da Entrega 04.

## Testes do sistema

Durante o desenvolvimento, testamos os principais fluxos da aplicação:

* Login e autenticação.
* Cadastro de usuário.
* Simulação de rota.
* Comparação com Taggy e sem Taggy.
* Carregamento do dashboard.
* Salvamento e consulta do histórico.
* Geração de relatório na área corporativa.

Os problemas encontrados durante os testes foram registrados e ajustados pelo grupo. O acompanhamento das correções pode ser feito na área de Issues do GitHub.

## Programação em par

Em algumas etapas, dividimos o grupo em duplas para facilitar o desenvolvimento e a revisão das tarefas.

* Gabriel Lucas e Lucas Nery trabalharam na organização das histórias, no backlog, nos testes e na revisão geral do fluxo do sistema.
* Felipe Ulisses e Gabriel Dias trabalharam no back-end, na autenticação, nas rotas da API e na persistência dos dados.
* Jailson de Souza e Lucas Rogério trabalharam nas telas do front-end, no dashboard, no histórico e nos ajustes visuais.

A maior dificuldade foi conciliar os horários de todo mundo. Mesmo assim, trabalhar em dupla ajudou porque uma pessoa conseguia desenvolver enquanto a outra revisava a lógica e percebia erros que poderiam passar despercebidos. Também facilitou a integração entre as partes do projeto.

## Histórias de usuário no padrão 3Cs

### 1. Calcular viagem

**Card:** Como usuário, quero informar origem, destino e veículo para calcular o custo da viagem.

**Conversation:** O usuário preenche os dados da rota e escolhe o veículo. O sistema valida as informações e calcula distância, pedágios e consumo aproximado.

**Confirmation:** Com os dados válidos, o sistema mostra o custo total. Caso algum campo esteja errado, o usuário recebe uma mensagem para corrigir.

### 2. Estimar combustível

**Card:** Como usuário, quero visualizar o gasto de combustível da viagem.

**Conversation:** O cálculo usa a distância, o consumo médio do veículo, o tipo de combustível e o preço informado.

**Confirmation:** O sistema mostra a quantidade de litros necessária e o custo estimado.

### 3. Comparar com Taggy e sem Taggy

**Card:** Como usuário, quero comparar os dois cenários para entender a economia gerada pela Taggy.

**Conversation:** O sistema calcula os resultados da mesma rota com Taggy e sem Taggy.

**Confirmation:** A tela mostra lado a lado os valores de tempo, combustível, custos e emissão de CO₂.

### 4. Visualizar a economia de tempo

**Card:** Como usuário, quero saber quanto tempo posso economizar nos pedágios.

**Conversation:** O sistema considera a rota, a quantidade de pedágios e uma estimativa do tempo de espera.

**Confirmation:** O resultado mostra o tempo economizado por viagem e uma projeção mensal.

### 5. Fazer uma simulação mensal

**Card:** Como usuário, quero calcular os gastos das minhas viagens durante o mês.

**Conversation:** O usuário informa a frequência das viagens e o sistema repete os cálculos com base nessa quantidade.

**Confirmation:** A tela mostra o gasto mensal, a economia com Taggy e uma projeção anual.

### 6. Usar o modo empresa

**Card:** Como empresa, quero cadastrar veículos e rotas para acompanhar os custos da frota.

**Conversation:** A empresa informa os veículos, as rotas e a frequência de uso.

**Confirmation:** O painel apresenta os resultados por veículo e o total da frota.

### 7. Visualizar gráficos

**Card:** Como usuário, quero ver os resultados em gráficos para entender melhor os dados.

**Conversation:** Os dados das simulações são organizados em cards e gráficos.

**Confirmation:** O usuário consegue visualizar os principais valores sem precisar analisar todos os cálculos separadamente.

### 8. Visualizar o impacto ambiental

**Card:** Como usuário, quero saber a quantidade aproximada de CO₂ emitida ou evitada na viagem.

**Conversation:** O cálculo considera a rota, o consumo do veículo e o tipo de combustível.

**Confirmation:** O sistema apresenta a emissão estimada e compara os cenários com Taggy e sem Taggy.

### 9. Salvar simulações

**Card:** Como usuário, quero salvar uma simulação para consultar depois.

**Conversation:** O usuário precisa estar autenticado para salvar e acessar o histórico.

**Confirmation:** A simulação salva aparece no histórico da conta.

### 10. Gerar relatórios

**Card:** Como empresa, quero gerar relatórios para acompanhar os custos e o impacto ambiental da frota.

**Conversation:** A empresa escolhe o período e os dados que serão apresentados.

**Confirmation:** O sistema gera um relatório com os principais resultados e comparações.

## Equipe

* Gabriel Lucas: Scrum Master. Contato: glss@cesar.school
* Lucas Nery: Product Owner. Contato: lns3@cesar.school
* Felipe Ulisses: Desenvolvedor Full Stack. Contato: fucaa@cesar.school
* Jailson de Souza: Desenvolvedor Front-end. Contato: jsj3@cesar.school
* Gabriel Dias: Desenvolvedor Back-end. Contato: gdmm@cesar.school
* Lucas Rogério: Desenvolvedor Front-end. Contato: lrmb@cesar.school

<div align="center">

Carbon Defuse

CESAR School

Sistemas de Informação 2026.1

</div>
