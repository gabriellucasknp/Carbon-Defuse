  <img width="463" height="463" alt="image" src="https://github.com/user-attachments/assets/804996da-c484-4b34-9fb4-d134da2c132d" />

Calculadora inteligente de impacto ambiental integrada à Taggy, que transforma a economia de CO₂ invisível em dados claros e tangíveis.
Projeto desenvolvido pelo Grupo 5 — Sistemas de Informação · CESAR School (2026.1)
🔗 Site do projeto (Google Sites) · 🎨 Figma · 📋 Trello

📌 Sobre o projeto
A Taggy já é um produto sustentável por natureza: quando o carro não para no pedágio, ele economiza combustível e deixa de emitir CO₂; quando entra no estacionamento com a tag, não imprime o papelzinho térmico. O problema é que o cliente não faz ideia disso — para ele, a tag é apenas uma conveniência para não pegar fila.
Como não existe nada tangível mostrando esse impacto ambiental, a empresa perde a chance de usar a sustentabilidade como um argumento forte de retenção, tanto para usuários quanto para empresas com metas ESG.
O Carbon Defuse resolve isso tornando o impacto ambiental visível: o usuário simula seu uso (rotas, pedágios, estacionamentos) e enxerga, em números claros, quanto CO₂ deixou de ser emitido e quanto economizou em tempo e combustível.

🎯 Proposta de valor
Para usuários
·	Visualização do CO₂ evitado
·	Consciência ambiental no dia a dia
Para empresas
·	Indicadores ESG
·	Relatórios ambientais
·	Apoio à tomada de decisão e à gestão de frotas

✨ Funcionalidades
·	Simulação de rota — origem, destino, custo total e consumo estimado
·	Comparação "com Taggy vs sem Taggy" — visão clara da economia financeira e de tempo
·	Cálculo de impacto ambiental — emissão aproximada de CO₂ por viagem
·	Dashboard interativo — visualização gráfica dos principais dados
·	Projeção mensal — estimativa de gastos e impacto recorrentes
·	Histórico de simulações — registro das simulações por usuário autenticado
·	Modo empresa (corporativo) — análise de múltiplos veículos / frotas
·	Relatórios automáticos — exportação em PDF e Excel para empresas
·	Equivalência ambiental — tradução do impacto em termos compreensíveis (ex.: árvores)

🧮 Como o cálculo de CO₂ funciona
O sistema usa como base o GHG Protocol, padrão internacional adotado por empresas e concessionárias para inventário de emissões de gases de efeito estufa, com fatores de emissão do SEEG/MCTI (Brasil).
A fórmula geral do GHG Protocol é:
Emissões (CO₂) = Dados de Atividade × Fator de Emissão × GWP

Como o CO₂ tem GWP igual a 1, ela é simplificada para:
CO₂e (kg) = Litros Consumidos × Fator de Emissão

O cálculo acontece em duas etapas:
1. Combustível consumido
Litros Consumidos = Distância Percorrida (km) ÷ Consumo Médio do Veículo (km/L)

2. Emissão de CO₂
CO₂e (kg) = Litros Consumidos × Fator de Emissão

Fatores de emissão utilizados
Combustível	Fator de Emissão
Diesel	2,67 kg CO₂/L
Gasolina com Etanol	2,27 kg CO₂/L
Etanol	1,46 kg CO₂/L
GNV	2,02 kg CO₂/m³

O Carbon Defuse não realiza um inventário ambiental corporativo completo, mas sim uma estimativa inteligente baseada nas rotas simuladas. A metodologia é compatível com a usada por empresas do setor rodoviário (EcoRodovias, CCR, Arteris). No Brasil, o programa é gerido pela FGV através do Registro Público de Emissões (RPE).

🛠️ Tecnologias
Camada	Tecnologias
Front-end	React 18 · TypeScript · React Router 7
Build / Dev	Vite 6
Estilização	Tailwind CSS 4 · MUI · Radix UI (shadcn/ui)
Visualização	Recharts
Outros	React Hook Form · Lucide Icons · Motion · Sonner


🗂️ Estrutura do projeto
Carbon-Defuse/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Rotas da aplicação
│   │   ├── components/          # Header, Navigation, layout, rotas protegidas, UI
│   │   └── pages/               # Telas (Login, Cadastro, Dashboard, etc.)
│   ├── imports/                 # Telas/recursos importados do Figma
│   └── styles/                  # Estilos globais e tema
├── index.html
├── package.json
└── vite.config.ts

Rotas da aplicação
Rota	Tela	Acesso
/login	Login	Público
/cadastro	Cadastro	Público
/	Dashboard	Autenticado
/simulacao	Simulação de rota	Autenticado
/comparacao	Comparação Taggy	Autenticado
/historico	Histórico	Autenticado
/corporativo	Área corporativa	Autenticado

As rotas autenticadas são protegidas via ProtectedRoute.

🚀 Como rodar o projeto
Pré-requisitos: Node.js instalado.
# 1. Clone o repositório
git clone https://github.com/gabriellucasknp/Carbon-Defuse.git
cd Carbon-Defuse

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

Para gerar a build de produção:
npm run build

📖 Para um guia completo de como configurar o ambiente e contribuir com o projeto, veja o arquivo CONTRIBUTING.md.

✅ Checklist das Entregas
Entrega 03
·	Pelo menos 3 histórias implementadas (com sprint criada no Board)
·	Ambiente de versionamento atuante (commits frequentes — no mínimo semanais)
·	Screencast das novas histórias adicionado ao README
·	Quadro da Sprint atualizado refletindo a entrega (print no README)
·	Print do backlog atualizado no README
·	Issue/bug tracker atualizado no GitHub (print no README)
·	Testes de sistema com screencast anexado ao cartão
·	Relato de programação em par no README (funcionalidades por dupla)
Entrega 04 — Semana de 08/06 até 11/06
·	Pelo menos 6 histórias implementadas (com 2 novas sprints no Board)
·	Ambiente de versionamento atuante (commits frequentes — no mínimo semanais)
·	Deploy realizado + screencast com a URL aparecendo na tela
·	Issue/bug tracker atualizado no GitHub (print no README)
·	Testes de sistema com screencast anexado aos cartões
·	Relato de programação em par incrementado em relação à Entrega 03
·	Quadro atualizado refletindo a entrega (print no README)
·	CONTRIBUTING.md claro e objetivo guiando setup e contribuição

🌐 Deploy
A aplicação está disponível em produção:
🔗 [ADICIONAR URL DO DEPLOY AQUI]
⚠️ A URL de produção deve aparecer no screencast da Entrega 04.

🎥 Screencasts
Demonstrações em vídeo da aplicação em funcionamento, com ênfase nas novas histórias implementadas em cada entrega.
Entrega	Foco	Link
Entrega 03	Novas histórias implementadas + testes de sistema	[ADICIONAR SCREENCAST]
Entrega 04	Novas histórias + deploy (com a URL na tela)	[ADICIONAR SCREENCAST]

💡 Dica: no GitHub, você pode arrastar e soltar o arquivo de vídeo (.mp4/.mov) diretamente nesta área ao editar o README — o GitHub gera o link automaticamente. Alternativamente, hospede no YouTube/Google Drive e cole o link.

🗂️ Quadro da Sprint e Backlog
Prints do quadro no Board (Trello) atualizados, refletindo o andamento das sprints e o backlog priorizado.
Backlog e Backlog Priorizado:
![Backlog e Backlog Priorizado]([ADICIONAR PRINT DO BACKLOG])
Quadro da Sprint (Sprint Atual / Em andamento / Em teste / Concluído):
![Quadro da Sprint]([ADICIONAR PRINT DO QUADRO DA SPRINT])
💡 Sugestão: crie uma pasta docs/ no repositório e coloque as imagens lá (ex.: docs/backlog.png, docs/sprint-board.png), referenciando-as como ![Backlog](./docs/backlog.png).

🐛 Issue / Bug Tracker
O acompanhamento de issues e bugs é feito pelo GitHub Issues deste repositório.
🔗 Issues do projeto
Print do issue tracker atualizado:
![Issue Tracker]([ADICIONAR PRINT DO ISSUE/BUG TRACKER])

🧪 Testes de Sistema
Os testes do fluxo completo da aplicação são executados e registrados em vídeo, com o screencast anexado ao cartão correspondente no Board.
Item	Status / Link
Screencast da execução dos testes (no cartão)	[ADICIONAR SCREENCAST DOS TESTES]

Os testes cobrem o fluxo principal: simulação de rota → cálculo de combustível e CO₂ → comparação com/sem Taggy → dashboard → histórico.

👥 Programação em Par (Pair Programming)
Relato das sessões de programação em par realizadas durante o desenvolvimento, indicando quais funcionalidades cada par executou.
Entrega 03
Par (Driver + Navigator)	Funcionalidade(s) desenvolvida(s)
[NOME 1] + [NOME 2]	[FUNCIONALIDADE — ex.: cálculo de emissão de CO₂]
[NOME 3] + [NOME 4]	[FUNCIONALIDADE — ex.: tela de simulação de rota]

Como foi a experiência: [BREVE RELATO — o que funcionou bem, dificuldades, aprendizados da dupla.]
Entrega 04 (incremento do relato anterior)
Par (Driver + Navigator)	Funcionalidade(s) desenvolvida(s)
[NOME 1] + [NOME 2]	[FUNCIONALIDADE]
[NOME 3] + [NOME 4]	[FUNCIONALIDADE]

Evolução em relação à Entrega 03: [O QUE MUDOU/MELHOROU NA PRÁTICA DE PAIR PROGRAMMING.]

📋 Backlog priorizado
#	História de usuário	Prioridade
1	Calcular viagem: origem, destino e custo total	Alta
2	Estimar combustível: baseado em consumo e preço atual	Alta
3	Comparar com/sem Taggy: visão clara da economia	Alta
4	Impacto ambiental: cálculo de emissão de CO₂	Alta
5	Economia de tempo: tempo poupado em filas de pedágio	Média
6	Visualização gráfica: dashboards interativos	Média
7	Salvar simulações: histórico para usuários logados	Média
8	Simulação mensal: projeção de gastos recorrentes	Baixa
9	Modo empresa: cálculo para múltiplos veículos/frotas	Baixa
10	Relatórios automáticos: exportação em PDF e Excel	Sem prioridade


📅 Cronograma de Sprints
Sprint	Período	Meta
7	13/04 – 18/04	Planejamento e estrutura inicial do projeto
8	19/04 – 25/04	Protótipo inicial: tela de simulação de rota
9	26/04 – 02/05	Tela de comparação e dashboard
10	04/05 – 09/05	Dashboard e histórico de simulações
11	11/05 – 16/05	Tela corporativa (frotas)
12	19/05 – 23/05	Exportação de relatórios (PDF/Excel)
13	25/05 – 30/05	Testes, validações e entrega final (Entrega 03)
14	01/06 – 06/06	Novas histórias — Entrega 04 (planejada)
15	08/06 – 11/06	Novas histórias + deploy — Entrega 04 (planejada)


👥 Equipe — Grupo 5
Nome	Função	Contato
Gabriel Lucas	Scrum Master	glss@cesar.school
Lucas Nery	Product Owner	lns3@cesar.school
Felipe Ulisses	Desenvolvedor Full Stack	fucaa@cesar.school
Jailson de Souza	Desenvolvedor Front-End	jsj3@cesar.school
Gabriel Dias	Desenvolvedor Back-End	gdmm@cesar.school
Lucas Rogério	Desenvolvedor Front-End	lrmb@cesar.school

Ferramentas de gestão: Trello (tarefas) · Figma (prototipação) · Google Sheets (cronograma) · Discord / WhatsApp (comunicação)

Carbon Defuse · CESAR School · Sistemas de Informação 2026.1

Tornando visível o impacto ambiental que já existe. 🌱
