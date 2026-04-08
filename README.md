# CARBON-DEFUSE

## 📌 Ideia da Aplicação

**Nome:** Carbon Defuse 🌱🚗
Uma calculadora inteligente inspirada na Taggy que simula custos de viagens, economia financeira e impacto ambiental ao utilizar pedágios e estacionamentos eletrônicos.

---

## 🎯 Objetivo

Ajudar usuários e empresas a visualizar, de forma clara e interativa, os benefícios econômicos e ambientais do uso de soluções automáticas como a Taggy.

---

## 👥 Papéis da Equipe

* **Dev Back end:** Gabriel Lucas Soares da Silva
* **Product Owner:** Lucas Rogério Moura Brito
* **Dev Front End:** Jailson de Souza Jr
* **Designer:** Gabriel Dias Mendonça de Melo
* **Scrum Master:** Felipe Ulisses Cavalcanti de Albuquerque
* **QA:** Lucas Nery Sereno

---
             
             ## 📖 Histórias de Usuário 
             
             ### 🚗 1. Calcular viagem
             
             Como usuário, quero inserir origem, destino e veículo para calcular custo da viagem.
             
             ### ⛽ 2. Estimar combustível
             
             Como usuário, quero ver o custo estimado de combustível para planejar gastos.
             
             ### 💳 3. Comparar com/sem Taggy
             
             Como usuário, quero comparar custos para entender a economia.
             
             ### ⏱️ 4. Economia de tempo
             
             Como usuário, quero visualizar tempo economizado em pedágios.
             
             ### 📅 5. Simulação mensal
             
             Como usuário, quero simular meus gastos mensais com viagens.
             
             ### 🏢 6. Modo empresa
             
             Como empresa, quero inserir frota e rotas para calcular custos totais.
             
             ### 📊 7. Visualização gráfica
             
             Como usuário, quero ver gráficos para entender os dados facilmente.
             
             ### 🌱 8. Impacto ambiental
             
             Como usuário, quero ver redução de CO₂ para entender impacto ambiental.
             
             ### 💾 9. Salvar simulações
             
             Como usuário, quero salvar cálculos para consultar depois.
             
             ### 📄 10. Relatórios automáticos
             
             Como empresa, quero gerar relatórios para tomada de decisão.

---

## ✅ 3Cs das Histórias

* **Card:** Histórias descritas acima
* **Conversation:** Refinamento contínuo com o time
* **Confirmation:** Critérios de aceitação definidos para validar funcionalidades

---

## 📊 Priorização das Entregas

### 🔥 Alta Prioridade

* Calcular viagem
* Comparação com/sem Taggy
* Cadastro/Login

### ⚡ Média Prioridade

* Simulação mensal
* Modo empresa
* Impacto ambiental

### 🧊 Baixa Prioridade

* Gráficos
* Relatórios automáticos
* Salvamento de simulações

---

## 🧠 Funcionalidades Baseadas no Brainwriting

### 1. Calculadora de despesas de viagem

Usuário informa origem, destino e veículo.
Sistema calcula pedágios, combustível e custo total.

### 2. Comparação Taggy vs tradicional

Exibe diferença de custos e tempo.

### 3. Simulador mensal

Calcula gastos e economia com base em frequência de viagens.

### 4. Modo corporativo

Analisa frotas e rotas médias.

### 5. Visualização gráfica

Exibe gráficos de custos e economia.

### 6. Impacto ambiental

Mostra redução de CO₂ e uso de papel.

---

## 🔮 Possíveis Desdobramentos

* Simulação de cenários futuros
* Comparação de rotas
* Estimativa anual de custos
* Histórico de cálculos
* Relatórios empresariais avançados

---

## 🛠️ Tecnologias
* Java
* Spring Boot
* Spring Data JPA
* Spring Security
* MySQL
* Docker
* HTML/CSS/JS

---

## 🧩 Estrutura do Projeto
```
project/
 ├── src/
 │   ├── main/
 │   │   ├── java/com/project/
 │   │   │   ├── trips/
 │   │   │   ├── users/
 │   │   │   ├── analytics/
 │   │   │   ├── core/
 │   │   │   └── ProjectApplication.java
 │   │   └── resources/
 │   │       ├── templates/
 │   │       ├── static/
 │   │       └── application.properties
 │   └── test/
 ├── pom.xml
```


---


### 📋 Backlog (Trello)

Adicione aqui o print do backlog:
[
https://app.clickup.com/90171098067/v/dc/2kz9vgyk-677
---

## 📌 Quadro Kanban

Adicione aqui o print do quadro:

https://app.clickup.com/90171098067/v/b/2kz9vgyk-717

---

#protótipos Lofi das Histórias de Usuário 

https://ignite-opera-61434632.figma.site/

#Screencast: https://drive.google.com/file/d/1P_Wi3_xW9Hr4-8Oe3ZbyY9el_fQXwVpF/view?usp=drivesdk

# Diagramas das Histórias de Usuário

```

---
```
## 1. calcular viagem

```mermaid
flowchart TD
    A([Usuário]) --> B[Abre o app]
    B --> C[Insere origem]
    C --> D[Insere destino]
    D --> E[Seleciona veículo]
    E --> F{Dados válidos?}
    F -- Não --> G[Exibe mensagem de erro]
    G --> C
    F -- Sim --> H[Calcula rota]
    H --> I[Consulta pedágios]
    I --> J[Consulta distância]
    J --> K[Exibe custo total da viagem]
    K --> L([Resultado apresentado])
```

---

## 2. Estimar Combustível

```mermaid
flowchart TD
    A([Usuário]) --> B[Informa distância da viagem]
    B --> C[Informa tipo de combustível]
    C --> D[Informa consumo médio do veículo - km/l]
    D --> E[Informa preço atual do combustível]
    E --> F[Calcula litros necessários]
    F --> G[Calcula custo total de combustível]
    G --> H{Exibe resultado}
    H --> I[Custo estimado]
    H --> J[Litros necessários]
    H --> K[Postos sugeridos na rota]
    I & J & K --> L([Planejamento de gastos concluído])
```

---

## 3. Comparar Com / Sem Taggy

```mermaid
flowchart TD
    A([Usuário]) --> B[Insere rota e veículo]
    B --> C[Sistema calcula dois cenários]

    C --> D[Sem Taggy]
    C --> E[Com Taggy]

    D --> F[Valor em dinheiro nos pedágios]
    D --> G[Tempo parado nas filas]

    E --> H[Valor com desconto Taggy]
    E --> I[Passagem sem parar]

    F & G --> J[Custo total SEM Taggy]
    H & I --> K[Custo total COM Taggy]

    J & K --> L[Comparativo lado a lado]
    L --> M([Usuário entende a economia])
```

---

## 4. Economia de Tempo

```mermaid
flowchart TD
    A([Usuário]) --> B[Informa rota da viagem]
    B --> C[Sistema identifica pedágios na rota]
    C --> D[Calcula tempo médio de fila por pedágio]
    D --> E[Multiplica por número de pedágios]
    E --> F[Tempo perdido SEM Taggy]
    F --> G[Tempo poupado COM Taggy]
    G --> H{Visualização}
    H --> I[Minutos economizados por viagem]
    H --> J[Horas economizadas por mês]
    H --> K[Dias economizados por ano]
    I & J & K --> L([Usuário visualiza ganho de tempo])
```

---

## 5. Simulação Mensal

```mermaid
flowchart TD
    A([Usuário]) --> B[Informa viagens recorrentes]
    B --> C[Informa frequência - Diária / Semanal / Mensal]
    C --> D[Informa rotas utilizadas]
    D --> E[Sistema multiplica custos por frequência]
    E --> F[Calcula total mensal SEM Taggy]
    E --> G[Calcula total mensal COM Taggy]
    F & G --> H[Exibe resumo mensal]
    H --> I[Gasto total no mês]
    H --> J[Economia mensal com Taggy]
    H --> K[Projeção anual]
    I & J & K --> L([Planejamento financeiro concluído])
```

---

## 6. Modo Empresa

```mermaid
flowchart TD
    A([Empresa]) --> B[Acessa Modo Empresa]
    B --> C[Cadastra frota de veículos]
    C --> D[Cadastra rotas utilizadas]
    D --> E[Define frequência das viagens]
    E --> F[Sistema calcula por veículo]
    F --> G[Agrega custos da frota completa]
    G --> H{Exibe painel gerencial}
    H --> I[Custo por veículo]
    H --> J[Custo total da frota]
    H --> K[Economia potencial com Taggy]
    H --> L[Ranking de rotas mais caras]
    I & J & K & L --> M([Gestão de custos da frota])
```

---

## 7. Visualização Gráfica

```mermaid
flowchart TD
    A([Usuário]) --> B[Realiza cálculo ou simulação]
    B --> C[Sistema processa os dados]
    C --> D{Tipo de gráfico}
    D --> E[Gráfico de rosca - Distribuição de custos]
    D --> F[Gráfico de barras - Com vs Sem Taggy]
    D --> G[Gráfico de linha - Evolução mensal]
    D --> H[Mapa da rota com pedágios marcados]
    E & F & G & H --> I[Renderiza visualizações interativas]
    I --> J([Usuário compreende os dados facilmente])
```

---

## 8. Impacto Ambiental

```mermaid
flowchart TD
    A([Usuário]) --> B[Informa rota e veículo]
    B --> C[Sistema calcula distância total]
    C --> D[Identifica tipo de combustível]
    D --> E[Aplica fator de emissão de CO2 - g por km]
    E --> F[Calcula emissão total]
    F --> G{Com Taggy vs Sem Taggy}
    G --> H[Rotas otimizadas reduzem distância]
    G --> I[Menor tempo parado reduz emissão em fila]
    H & I --> J[Reducão de CO2 estimada]
    J --> K[Equivalência em árvores plantadas]
    K --> L([Usuário entende seu impacto ambiental])
```

---

## 9. Salvar Simulações

```mermaid
flowchart TD
    A([Usuário]) --> B[Realiza uma simulação]
    B --> C[Clica em Salvar simulação]
    C --> D{Usuário autenticado?}
    D -- Não --> E[Redireciona para login/cadastro]
    E --> F[Usuário se autentica]
    F --> C
    D -- Sim --> G[Nomeia a simulação]
    G --> H[Sistema salva com data e parâmetros]
    H --> I[Simulação disponível no histórico]
    I --> J{Ações disponíveis}
    J --> K[Visualizar]
    J --> L[Editar]
    J --> M[Excluir]
    J --> N[Compartilhar]
    K & L & M & N --> O([Consulta futura garantida])
```

---

## 10. Relatórios Automáticos

```mermaid
flowchart TD
    A([Empresa]) --> B[Acessa painel de relatórios]
    B --> C[Seleciona período - Semanal / Mensal / Anual]
    C --> D[Seleciona escopo - Frota completa ou veículo específico]
    D --> E[Sistema compila os dados]
    E --> F{Gera relatório com}
    F --> G[Gráficos de desempenho]
    F --> H[Resumo de custos]
    F --> I[Impacto ambiental]
    F --> J[Comparativo de períodos]
    G & H & I & J --> K{Exportar como}
    K --> L[PDF]
    K --> M[Excel / CSV]
    K --> N[Envio por e-mail automático]
    L & M & N --> O([Tomada de decisão embasada])
```
