
<div align="center">

<img width="220" alt="Carbon Defuse Logo" src="https://github.com/user-attachments/assets/804996da-c484-4b34-9fb4-d134da2c132d" />

# 🌱 Carbon Defuse

**Calculadora inteligente de impacto ambiental integrada à Taggy.**

Transformamos a economia invisível de CO₂ em dados claros, comparáveis e fáceis de entender.

Projeto desenvolvido pelo **Grupo 5 — Sistemas de Informação · CESAR School · 2026.1**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript\&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite\&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Entrega%2003%20em%20finalização-f4b400)](#)

</div>

---

## 🔗 Links do projeto

| Recurso                     | Link                                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| 🌐 Site institucional       | [Google Sites](https://sites.google.com/cesar.school/grupo-5-si-2026-1?usp=sharing)                      |
| 🎨 Protótipo                | [Figma](https://www.figma.com/files/team/1616514991350928449/project/574924099?fuid=1617004462867806530) |
| 📋 Gestão do projeto        | [Trello / Board](https://trello.com/b/9rcdpxLn/carbon-defuse)                                            |
| 💻 Repositório principal    | [GitHub — Carbon Defuse](https://github.com/gabriellucasknp/Carbon-Defuse)                               |
| ⚙️ Repositório com back-end | [GitHub — branch back-end](https://github.com/FelipeUCAA/Car-Route-Management-System/tree/back-end)      |

---

## 📌 Sobre o projeto

A Taggy já contribui para uma experiência mais eficiente: o motorista evita filas em pedágios, reduz paradas desnecessárias, economiza combustível e, consequentemente, deixa de emitir parte do CO₂ que seria gerado durante a espera.

O problema é que esse impacto sustentável normalmente fica invisível para o usuário. Para muita gente, a tag é vista apenas como uma solução de conveniência para evitar filas, e não como uma ferramenta que também pode gerar impacto ambiental positivo.

O **Carbon Defuse** resolve esse problema ao transformar dados de uso em indicadores ambientais claros. A plataforma permite simular rotas, comparar cenários com e sem Taggy, visualizar economia de tempo e combustível, acompanhar emissões evitadas e gerar indicadores úteis para usuários e empresas.

---

## 🎯 Proposta de valor

### Para usuários

* Visualizar o CO₂ evitado em viagens.
* Entender a economia de tempo e combustível.
* Acompanhar o impacto ambiental do uso da Taggy.
* Ter uma visão simples e tangível da sustentabilidade no dia a dia.

### Para empresas

* Acompanhar indicadores ESG.
* Analisar impacto ambiental de frotas.
* Gerar relatórios ambientais.
* Apoiar decisões logísticas mais eficientes e sustentáveis.

---

## ✨ Funcionalidades principais

| Funcionalidade                  | Descrição                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------- |
| 🚗 Simulação de rota            | Permite informar origem, destino e veículo para estimar distância, combustível e impacto ambiental. |
| ⛽ Estimativa de combustível     | Calcula consumo aproximado com base na distância e no consumo médio do veículo.                     |
| 💳 Comparação com/sem Taggy     | Compara tempo, consumo, custos e emissão de CO₂ nos dois cenários.                                  |
| 🌱 Cálculo de impacto ambiental | Estima emissões de CO₂ com base no combustível consumido.                                           |
| 📊 Dashboard interativo         | Exibe cards, gráficos e equivalências ambientais.                                                   |
| 📈 Histórico de simulações      | Registra simulações realizadas por usuários autenticados.                                           |
| 🏢 Modo corporativo             | Permite análise gerencial para frotas e empresas.                                                   |
| 📄 Relatórios automáticos       | Exportação de relatórios ambientais em PDF e Excel.                                                 |

---

## 🧮 Como o cálculo de CO₂ funciona

O sistema utiliza uma estimativa baseada na lógica do **GHG Protocol**, padrão amplamente usado para inventários de emissões.

```text
Litros consumidos = Distância percorrida ÷ Consumo médio do veículo

CO₂ emitido = Litros consumidos × Fator de emissão do combustível
```

### Fatores de emissão utilizados

| Combustível         | Fator de emissão |
| ------------------- | ---------------: |
| Diesel              |    2,67 kg CO₂/L |
| Gasolina com etanol |    2,27 kg CO₂/L |
| Etanol              |    1,46 kg CO₂/L |
| GNV                 |   2,02 kg CO₂/m³ |

> O Carbon Defuse não substitui um inventário ambiental corporativo completo. A proposta é gerar uma estimativa inteligente e compreensível a partir das rotas simuladas.

---

## 🛠️ Tecnologias utilizadas

| Camada        | Tecnologias                          |
| ------------- | ------------------------------------ |
| Front-end     | React 18, TypeScript, React Router   |
| Build / Dev   | Vite                                 |
| Estilização   | Tailwind CSS, MUI, Radix UI / shadcn |
| Gráficos      | Recharts                             |
| Formulários   | React Hook Form                      |
| Ícones e UI   | Lucide Icons, Motion, Sonner         |
| Back-end      | Node.js, Express, Prisma, SQLite     |
| Versionamento | Git e GitHub                         |

---

## 🚀 Como rodar o projeto localmente

### Front-end

```bash
git clone https://github.com/gabriellucasknp/Carbon-Defuse.git
cd Carbon-Defuse
npm install
npm run dev
```

A aplicação ficará disponível em:

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

O servidor ficará disponível em:

```text
http://localhost:3000
```

---

# ✅ Entrega 03 — Implementação de 3 histórias

## Histórias implementadas nesta entrega

| Nº | História                                                                                                                      | Status         | Evidência                |
| -: | ----------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------ |
|  1 | Como usuário, quero inserir origem, destino e veículo para calcular custo, distância, combustível e emissão de CO₂ da viagem. | ✅ Implementada | Screencast da Entrega 03 |
|  2 | Como usuário, quero comparar o cenário com e sem Taggy para visualizar economia de tempo, combustível e emissão.              | ✅ Implementada | Screencast da Entrega 03 |
|  3 | Como usuário, quero visualizar os resultados em dashboard e histórico para acompanhar meu impacto ambiental.                  | ✅ Implementada | Screencast da Entrega 03 |

---

## Checklist da Entrega 03

| Critério solicitado                | Status                        | Evidência                       |
| ---------------------------------- | ----------------------------- | ------------------------------- |
| Implementar pelo menos 3 histórias | ✅ Concluído                   | Histórias listadas acima        |
| Criação de sprint no Board         | ✅ Concluído                   | Sprint 01 documentada abaixo    |
| Ambiente de versionamento atuante  | ✅ Concluído                   | Repositórios no GitHub          |
| Commits frequentes                 | ✅ Em andamento                | Histórico de commits do GitHub  |
| Novo screencast no README          | 🔄 A inserir                  | Link do vídeo                   |
| Quadro da Sprint 01 atualizado     | ✅ Concluído                   | Quadro em Markdown abaixo       |
| Backlog atualizado no README       | ✅ Concluído                   | Backlog em Markdown abaixo      |
| Issue/Bug Tracker no GitHub        | ⚠️ Pendente de evidência real | Criar issues reais no GitHub    |
| Testes de sistema                  | 🔄 A inserir                  | Screencast dos testes no cartão |
| Relato de programação em par       | ✅ Documentado                 | Seção abaixo                    |

---

## 🎥 Screencasts

| Entrega    | Foco                                                | Link                               |
| ---------- | --------------------------------------------------- | ---------------------------------- |
| Entrega 03 | Novas histórias implementadas + testes de sistema   | 
 **https://www.loom.com/share/ea465ea16c464d9e9664791bc43fab5d** |
| Entrega 04 | Novas histórias + deploy com URL aparecendo na tela | **Em andamento** |

---

# 🗂️ Quadro da Sprint e Backlog

Esta seção foi feita em **Markdown puro**, sem depender de arquivos PNG. Assim o conteúdo aparece direto no README.

## Backlog priorizado

| Status      | Item                                | Projeto   | Observações                                        |
| ----------- | ----------------------------------- | --------- | -------------------------------------------------- |
| ✅ Concluído | Elicitação de requisitos            | Projeto 2 | Entrega inicial concluída                          |
| ✅ Concluído | Protótipos Lo-Fi                    | Projeto 2 | Protótipos organizados no Figma                    |
| ✅ Concluído | Screencast                          | Projeto 2 | Vídeo da etapa anterior registrado                 |
| ✅ Concluído | Comparar custos com e sem Taggy/UH1 | Projeto 2 | História base para comparação com/sem Taggy        |
| ✅ Concluído | Visualização do impacto ambiental   | Projeto 2 | Indicadores e equivalência ambiental               |
| ✅ Concluído | Dashboard com dados principais      | Projeto 2 | Cards e gráficos principais                        |
| ✅ Concluído | Histórico de simulações             | Projeto 2 | Acompanhamento das simulações do usuário           |
| ✅ Concluído | Simulação de rota                   | Projeto 2 | Origem, destino, veículo e resultados              |
| ✅ Concluído | Modo corporativo                    | Projeto 2 | Indicadores para empresas/frotas                   |
| ✅ Concluído | Relatórios ambientais               | Projeto 2 | Exportação planejada/implementada conforme entrega |

---

## Sprint 01 — Entrega 03

| Status          | Tarefa                              | Responsável | Prioridade | Comentários                             |
| --------------- | ----------------------------------- | ----------- | ---------- | --------------------------------------- |
| ✅ Concluído     | Elicitação de requisitos            | Grupo 5     | Alta       | Base do produto e definição do problema |
| ✅ Concluído     | Protótipos Lo-Fi                    | Grupo 5     | Alta       | Fluxo inicial validado                  |
| ✅ Concluído     | Screencast                          | Grupo 5     | Alta       | Registro da apresentação                |
| ✅ Concluído     | Comparar custos com e sem Taggy/UH1 | Grupo 5     | Alta       | História usada na demonstração          |
| 🔄 Em andamento | Implementação de 6 histórias        | Grupo 5     | Alta       | Continuação para Entrega 04             |
| 🔄 Em andamento | Deploy                              | Grupo 5     | Alta       | Preparação da publicação                |
| 🔄 Em andamento | Desenvolvimento do Back-End         | Grupo 5     | Alta       | API, autenticação e persistência        |
| 🔄 Em andamento | Front-End                           | Grupo 5     | Alta       | Telas, componentes e integração         |
| 🔄 Em andamento | Protótipo UX                        | Grupo 5     | Média      | Ajustes visuais e experiência           |
| ⏳ A fazer       | Testes                              | Grupo 5     | Alta       | Testes finais de sistema                |
| ⏳ A fazer       | Armazenamento do Banco de Dados     | Grupo 5     | Alta       | Persistência das simulações             |
| ⏳ A fazer       | Desenvolvimento da API              | Grupo 5     | Alta       | Rotas e comunicação com o front         |
| ⏳ A fazer       | Design                              | Grupo 5     | Média      | Refinamento visual                      |

---

# 🐛 Issue / Bug Tracker

O acompanhamento de bugs, melhorias e tarefas técnicas deve ser registrado no GitHub Issues.

🔗 [Issues do projeto](https://github.com/gabriellucasknp/Carbon-Defuse/issues)

## Status atual

O grupo optou por **não inserir imagem falsa** do Issue/Bug Tracker. A evidência correta deve ser adicionada após a criação das issues reais no GitHub.

## Issues sugeridas para registrar no GitHub

| Tipo     | Título sugerido                                        | Prioridade |
| -------- | ------------------------------------------------------ | ---------- |
| História | Implementar simulação de rota com cálculo ambiental    | Alta       |
| História | Implementar comparação com e sem Taggy                 | Alta       |
| História | Implementar dashboard e histórico de impacto ambiental | Alta       |
| Bug      | Ajustar responsividade dos cards no dashboard          | Média      |
| Melhoria | Revisar feedback visual da geração de relatório        | Média      |
| Bug      | Validar campos obrigatórios na simulação               | Alta       |

---

# 🧪 Testes de Sistema

Os testes de sistema validam o fluxo principal do Carbon Defuse de ponta a ponta.

| Teste                    | Resultado esperado                                  | Status     |
| ------------------------ | --------------------------------------------------- | ---------- |
| Login e autenticação     | Usuário consegue acessar o sistema                  | ✅ Aprovado |
| Cadastro de usuário      | Usuário consegue criar conta e acessar a plataforma | ✅ Aprovado |
| Simulação de rota        | Sistema exibe distância, combustível e CO₂          | ✅ Aprovado |
| Comparação com/sem Taggy | Sistema exibe economia nos dois cenários            | ✅ Aprovado |
| Dashboard                | Cards e gráficos são carregados corretamente        | ✅ Aprovado |
| Histórico                | Simulações aparecem no histórico do usuário         | ✅ Aprovado |
| Relatório corporativo    | Sistema permite gerar relatório                     | ✅ Aprovado |

Screencast dos testes no cartão do Board:

**[ADICIONAR LINK DO SCREENCAST DOS TESTES]**

---

# 👥 Programação em Par

Durante a Entrega 03, a equipe experimentou programação em par para dividir responsabilidades, revisar decisões e reduzir erros de implementação.

| Par                              | Funcionalidade trabalhada                                                     |
| -------------------------------- | ----------------------------------------------------------------------------- |
| Gabriel Lucas + Lucas Nery       | Organização das histórias, revisão do fluxo do usuário, backlog e priorização |
| Felipe Ulisses + Gabriel Dias    | Integração do back-end, autenticação, rotas e persistência de dados           |
| Jailson de Souza + Lucas Rogério | Telas do front-end, dashboard, histórico e melhorias visuais                  |

## Relato da experiência

A programação em par ajudou o grupo a validar decisões mais rapidamente. Enquanto uma pessoa conduzia a implementação, a outra revisava lógica, fluxo e possíveis erros. Isso facilitou principalmente a integração entre telas, simulações e dados exibidos no dashboard.

A principal dificuldade foi alinhar horários entre os integrantes, mas a divisão por duplas tornou o desenvolvimento mais organizado. Para as próximas entregas, o grupo pretende manter esse formato, registrando melhor as sessões e vinculando cada funcionalidade aos cards do Board.

---

# 📋 Histórias de usuário no padrão 3Cs

## 1. 🚗 Calcular viagem

### Card

Como usuário, quero inserir origem, destino e veículo para calcular custo da viagem.

### Conversation

Entradas: origem, destino e veículo.

Validações: campos obrigatórios, endereço válido e veículo selecionado.

Cálculos/consultas: rota, pedágios, distância e estimativa de consumo.

Saída: custo total da viagem.

### Confirmation

* Dado origem, destino e veículo válidos, o sistema exibe o custo total da viagem.
* Se algum dado estiver inválido, o sistema exibe mensagem de erro clara e permite correção.

---

## 2. ⛽ Estimar combustível

### Card

Como usuário, quero ver o custo estimado de combustível para planejar gastos.

### Conversation

Entradas: distância, tipo de combustível, consumo médio e preço do combustível.

Cálculos: litros necessários e custo total.

Saídas: custo estimado e litros necessários.

### Confirmation

* Com entradas válidas, o sistema exibe litros necessários e custo estimado.
* O resultado é consistente com a fórmula: `(distância ÷ consumo) × preço`.

---

## 3. 💳 Comparar com/sem Taggy

### Card

Como usuário, quero comparar custos para entender a economia.

### Conversation

Entradas: rota e veículo.

O sistema calcula dois cenários: sem Taggy e com Taggy.

Deve comparar valor em pedágios, impacto no tempo, consumo e emissão de CO₂.

### Confirmation

* O sistema exibe um comparativo lado a lado com total sem Taggy e total com Taggy.
* O sistema mostra economia de tempo, combustível e emissão.

---

## 4. ⏱️ Economia de tempo

### Card

Como usuário, quero visualizar tempo economizado em pedágios.

### Conversation

Entradas: rota.

O sistema identifica pedágios e estima tempo médio de fila.

Saídas: tempo poupado por viagem, por mês e por ano.

### Confirmation

* O sistema mostra o total de tempo perdido sem Taggy.
* O sistema mostra o tempo poupado com Taggy.

---

## 5. 📅 Simulação mensal

### Card

Como usuário, quero simular meus gastos mensais com viagens.

### Conversation

Entradas: viagens recorrentes, frequência e rotas.

O sistema multiplica custos pela frequência e consolida os resultados.

Saídas: gasto mensal, economia mensal e projeção anual.

### Confirmation

* O sistema exibe resumo com gasto total do mês.
* O sistema exibe economia com Taggy e projeção anual.

---

## 6. 🏢 Modo empresa

### Card

Como empresa, quero inserir frota e rotas para calcular custos totais.

### Conversation

Entradas: frota, rotas e frequência.

O sistema calcula os valores por veículo e agrega totais.

Saídas: custo por veículo, custo total, economia potencial e ranking de rotas.

### Confirmation

* O painel exibe indicadores gerenciais com consolidação por frota e por veículo.

---

## 7. 📊 Visualização gráfica

### Card

Como usuário, quero ver gráficos para entender os dados facilmente.

### Conversation

Entradas: dados vindos de cálculos e simulações.

Tipos de visualização: rosca, barras, linha e cards de indicadores.

### Confirmation

* O sistema renderiza visualizações claras.
* O usuário consegue interpretar os principais números sem dificuldade.

---

## 8. 🌱 Impacto ambiental

### Card

Como usuário, quero ver redução de CO₂ para entender impacto ambiental.

### Conversation

Entradas: rota, veículo e combustível.

O sistema estima emissão, distância e impacto das filas.

Saídas: redução estimada de CO₂ e equivalência ambiental.

### Confirmation

* O sistema apresenta emissão estimada.
* O sistema apresenta redução comparando com e sem Taggy.

---

## 9. 💾 Salvar simulações

### Card

Como usuário, quero salvar cálculos para consultar depois.

### Conversation

Requer autenticação.

Ações: salvar com nome, listar histórico, visualizar, editar, excluir e compartilhar.

### Confirmation

* Usuário autenticado consegue salvar e reencontrar a simulação no histórico.
* Usuário não autenticado é direcionado ao login.

---

## 10. 📄 Relatórios automáticos

### Card

Como empresa, quero gerar relatórios para tomada de decisão.

### Conversation

Entradas: período e escopo.

Conteúdo: gráficos, resumo de custos, impacto ambiental e comparativos.

Exportação: PDF, Excel/CSV e envio automático por e-mail.

### Confirmation

* O sistema gera relatório com os blocos definidos.
* O sistema permite exportação em PDF e CSV/Excel.

---

# 📅 Cronograma de Sprints

| Sprint    | Período       | Meta                                                                                       |
| --------- | ------------- | ------------------------------------------------------------------------------------------ |
| Sprint 01 | 25/05 – 28/05 | Kickoff da Entrega 03, organização do backlog, criação dos cards e definição das histórias |
| Sprint 02 | 29/05 – 01/06 | Implementação das 3 histórias principais e testes de sistema                               |
| Sprint 03 | 02/06 – 06/06 | Ajustes visuais, documentação, screencast e preparação da Entrega 03                       |
| Sprint 04 | 08/06 – 11/06 | Deploy, novas histórias e preparação da Entrega 04                                         |

---

# 📌 Status das entregas

| Entrega    | Descrição                                                 | Status            |
| ---------- | --------------------------------------------------------- | ----------------- |
| Entrega 01 | Backlog, histórias no padrão 3Cs e diagramas              | ✅ Concluída       |
| Entrega 02 | Protótipos Lo-Fi e screencast                             | ✅ Concluída       |
| Entrega 03 | Implementação de 3 histórias                              | 🔄 Em finalização |
| Entrega 04 | Implementação de 6 histórias, deploy e documentação final | 🔄 Planejada      |

---

# 👥 Equipe — Grupo 5

| Nome             | Função                   | Contato                                         |
| ---------------- | ------------------------ | ----------------------------------------------- |
| Gabriel Lucas    | Scrum Master             | [glss@cesar.school](mailto:glss@cesar.school)   |
| Lucas Nery       | Product Owner            | [lns3@cesar.school](mailto:lns3@cesar.school)   |
| Felipe Ulisses   | Desenvolvedor Full Stack | [fucaa@cesar.school](mailto:fucaa@cesar.school) |
| Jailson de Souza | Desenvolvedor Front-End  | [jsj3@cesar.school](mailto:jsj3@cesar.school)   |
| Gabriel Dias     | Desenvolvedor Back-End   | [gdmm@cesar.school](mailto:gdmm@cesar.school)   |
| Lucas Rogério    | Desenvolvedor Front-End  | [lrmb@cesar.school](mailto:lrmb@cesar.school)   |

Ferramentas de gestão: **Trello**, **Figma**, **Google Sites**, **GitHub**, **Discord** e **WhatsApp**.

---

<div align="center">

**Carbon Defuse · CESAR School · Sistemas de Informação 2026.1**

*Tornando visível o impacto ambiental que já existe.* 🌱

</div>

