#  Guia de Contribuição — Carbon Defuse

Obrigado por contribuir com o **Carbon Defuse**! Este documento explica, de forma
objetiva, como **montar o ambiente local**, **rodar o projeto** e **enviar suas
contribuições** seguindo o padrão da equipe.

> Projeto desenvolvido pelo **Grupo 5 — Sistemas de Informação · CESAR School · 2026.1**.
> Antes de começar, leia também o [README.md](./README.md) para entender o produto.

---

##  Índice

1. [Visão geral da arquitetura](#-visão-geral-da-arquitetura)
2. [Pré-requisitos](#-pré-requisitos)
3. [Configurando o ambiente](#-configurando-o-ambiente)
4. [Rodando o projeto](#-rodando-o-projeto)
5. [Estrutura de pastas](#-estrutura-de-pastas)
6. [Padrões de código](#-padrões-de-código)
7. [Fluxo de trabalho com Git](#-fluxo-de-trabalho-com-git)
8. [Padrão de commits](#-padrão-de-commits)
9. [Pull Requests](#-pull-requests)
10. [Reportando bugs e sugerindo melhorias](#-reportando-bugs-e-sugerindo-melhorias)
11. [Checklist antes de abrir o PR](#-checklist-antes-de-abrir-o-pr)

---

##  Visão geral da arquitetura

O Carbon Defuse é uma aplicação **fullstack** organizada em duas camadas dentro do
mesmo repositório:

| Camada       | Pasta      | Tecnologias                                                    |
| ------------ | ---------- | ------------------------------------------------------------- |
| **Frontend** | raiz (`/`) | React 18, TypeScript, Vite 6, Tailwind 4, Radix UI/shadcn, MUI, Recharts, React Router 7 |
| **Backend**  | `backend/` | Node.js 20+, Express 5, Prisma 6, SQLite, JWT, bcryptjs       |

- O **frontend** consome a API via `src/lib/api.ts`, que lê a variável `VITE_API_URL`.
- O **backend** expõe as rotas de autenticação, simulações e viagens, e também
  serve o frontend buildado (`/dist`) em produção.
- Em produção (Render), **frontend e backend rodam no mesmo serviço** — por isso o
  frontend usa caminho relativo quando `VITE_API_URL` está vazio.

---

##  Pré-requisitos

Garanta que você tem instalado:

| Ferramenta | Versão mínima | Verificar com    |
| ---------- | ------------- | ---------------- |
| **Node.js**| `>= 20.0.0`   | `node -v`        |
| **npm**    | `>= 10`       | `npm -v`         |
| **Git**    | qualquer      | `git --version`  |

> Recomendamos usar a versão LTS mais recente do Node 20.

---

## ⚙ Configurando o ambiente

### 1. Faça o fork e clone o repositório

```bash
# Faça o fork pelo GitHub e depois clone o SEU fork
git clone https://github.com/<seu-usuario>/Carbon-Defuse-by-Taggy.git
cd Carbon-Defuse-by-Taggy
```

### 2. Configure as variáveis de ambiente

O projeto usa **dois arquivos `.env`**: um para o frontend (raiz) e outro para o backend.

**Frontend** — copie o exemplo na raiz:

```bash
cp .env.example .env
```

```env
# .env (raiz)
# Em desenvolvimento, aponte para o backend local:
VITE_API_URL="http://localhost:3000"
```

**Backend** — copie o exemplo dentro de `backend/`:

```bash
cp backend/.env.example backend/.env
```

```env
# backend/.env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="defina_uma_chave_longa_e_aleatoria"
FRONTEND_URL="http://localhost:5173"
PORT=3000
```

> ⚠️ **Nunca** faça commit de arquivos `.env`. Eles já estão no `.gitignore`.
> Use sempre uma chave forte em `JWT_SECRET`.

### 3. Instale as dependências

```bash
# Frontend (na raiz)
npm install

# Backend
cd backend
npm install
cd ..
```

### 4. Prepare o banco de dados (backend)

O backend usa **Prisma + SQLite**. Gere o client e aplique as migrations:

```bash
cd backend
npx prisma generate        # gera o Prisma Client
npx prisma migrate dev     # cria/atualiza o banco local (prisma/dev.db)
cd ..
```

> Para inspecionar o banco visualmente, use `npx prisma studio` dentro de `backend/`.

---

## ▶ Rodando o projeto

Abra **dois terminais** (um para cada camada):

**Terminal 1 — Backend** (`http://localhost:3000`):

```bash
cd backend
npm run dev        # tsx watch src/server.ts (recarrega ao salvar)
```

**Terminal 2 — Frontend** (`http://localhost:5173`):

```bash
npm run dev        # vite
```

Acesse **http://localhost:5173** no navegador. O frontend chamará a API em
`http://localhost:3000` conforme o `VITE_API_URL`.

### Scripts úteis

| Comando (frontend, na raiz) | O que faz                                   |
| --------------------------- | ------------------------------------------- |
| `npm run dev`               | Sobe o Vite em modo desenvolvimento         |
| `npm run build`             | Gera o build de produção em `/dist`         |
| `npm run start`             | Serve o `/dist` estático localmente         |

| Comando (backend, em `backend/`) | O que faz                                |
| -------------------------------- | ---------------------------------------- |
| `npm run dev`                    | Sobe o servidor com hot reload (`tsx`)   |
| `npm run build`                  | Roda `prisma generate`                   |
| `npm run start`                  | Aplica migrations e inicia o servidor    |

---

##  Estrutura de pastas

```
Carbon-Defuse-by-Taggy/
├── src/                      # Frontend (React + TS)
│   ├── app/
│   │   ├── components/       # Componentes reutilizáveis (inclui ui/ shadcn)
│   │   ├── context/          # Contextos React (ex.: ImpactContext)
│   │   ├── pages/            # Páginas (Login, Cadastro, Simulação, Dashboard…)
│   │   └── App.tsx           # Rotas do frontend
│   ├── lib/api.ts            # Configuração da URL da API
│   ├── styles/               # CSS / Tailwind / temas
│   └── main.tsx              # Entry point
├── backend/                  # API (Express + Prisma)
│   ├── prisma/
│   │   ├── schema.prisma     # Modelos: User, Simulation, Trip
│   │   └── migrations/       # Histórico de migrations
│   └── src/
│       ├── routes/           # auth.ts, simulation.ts, trip.ts
│       ├── lib/prisma.ts     # Instância do Prisma Client
│       └── server.ts         # Bootstrap do Express
├── .env.example              # Exemplo de env do frontend
└── backend/.env.example      # Exemplo de env do backend
```

### Endpoints principais da API

| Método | Rota                | Autenticação | Descrição                        |
| ------ | ------------------- | ------------ | -------------------------------- |
| `POST` | `/register`         | —            | Cadastro de usuário              |
| `POST` | `/login`            | —            | Login (retorna token JWT)        |
| `POST` | `/simulation`       | JWT          | Salva uma simulação              |
| `GET`  | `/simulation`       | JWT          | Lista simulações do usuário      |
| `POST` | `/trips`            | —            | Cria uma viagem                  |
| `GET`  | `/trips/:userId`    | —            | Lista viagens de um usuário      |

---

## 🎨 Padrões de código

Para manter a base consistente, siga as convenções já adotadas no projeto:

- **Idioma:** o código, comentários e nomes do domínio são em **português**
  (ex.: `nome`, `senha`, `origem`, `destino`, `distancia`). Mantenha esse padrão.
- **TypeScript** em todo o projeto — evite `any` sempre que possível.
- **Componentes React:** um componente por arquivo, em `PascalCase`
  (ex.: `DashboardPage.tsx`).
- **Componentes de UI base** ficam em `src/app/components/ui/` (shadcn/Radix) —
  reaproveite-os antes de criar novos.
- **Estilização:** prefira **Tailwind CSS**; use os componentes de UI existentes
  para manter o visual coerente.
- **Backend:** novas rotas devem ficar em `backend/src/routes/` e ser registradas
  em `server.ts`. Use `try/catch` e retorne erros em JSON
  (`res.status(...).json({ error: "..." })`), seguindo o padrão das rotas atuais.
- **Banco de dados:** qualquer alteração no `schema.prisma` **exige** uma migration
  (`npx prisma migrate dev --name descricao_curta`). Nunca edite o banco manualmente.
- **Indentação:** 2 espaços, sem ponto e vírgula opcional removido — siga o estilo
  dos arquivos vizinhos.

---

## 🌿 Fluxo de trabalho com Git

1. **Atualize** sua branch base antes de começar.
2. **Crie uma branch** a partir da branch de desenvolvimento, com nome descritivo:

   ```bash
   git checkout -b feat/simulacao-mensal
   ```

   Use prefixos:
   - `feat/` — nova funcionalidade
   - `fix/` — correção de bug
   - `docs/` — documentação
   - `refactor/` — refatoração sem mudança de comportamento
   - `style/` — ajustes visuais/formatação

3. **Nunca** faça commit direto na `main`. Trabalhe sempre em branches e abra um PR.

---

## 📝 Padrão de commits

Use **Conventional Commits**, em português, no imperativo:

```
<tipo>: <descrição curta no imperativo>
```

**Tipos aceitos:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

**Exemplos:**

```bash
git commit -m "feat: adicionar cálculo de impacto ambiental na simulação"
git commit -m "fix: corrigir validação de campos obrigatórios no cadastro"
git commit -m "docs: atualizar instruções de setup do backend"
```

> Faça commits **pequenos e frequentes**, cada um com uma mudança coesa.

---

## 🔀 Pull Requests

1. Suba sua branch para o seu fork:

   ```bash
   git push origin feat/simulacao-mensal
   ```

2. Abra o PR no GitHub apontando para a branch de desenvolvimento do repositório.
3. No PR, descreva:
   - **O que** foi feito e **por quê**.
   - **Como testar** (passos para reproduzir/validar).
   - **Issue relacionada** (ex.: `Closes #12`), se houver.
   - **Evidências** (prints/screencast) quando a mudança for visual.
4. Marque ao menos **um colega** como revisor e aguarde a aprovação.
5. Resolva os comentários da revisão antes do merge.

---

## 🐛 Reportando bugs e sugerindo melhorias

Use a aba **Issues** do GitHub. Ao abrir uma issue, inclua:

- **Bug:** passos para reproduzir, comportamento esperado vs. obtido, prints e
  ambiente (SO, navegador, versão do Node).
- **Melhoria/Feature:** o problema que ela resolve e a proposta de solução.

Classifique com labels (`bug`, `feature`, `docs`, `prioridade-alta`…) quando possível.

---

## ✔ Checklist antes de abrir o PR

- [ ] O projeto **builda** sem erros (`npm run build` no frontend).
- [ ] O **backend sobe** sem erros (`npm run dev` em `backend/`).
- [ ] Não há arquivos `.env`, `node_modules/` ou `dist/` no commit.
- [ ] Alterações no `schema.prisma` vieram com a respectiva **migration**.
- [ ] Os commits seguem o padrão **Conventional Commits**.
- [ ] A funcionalidade foi **testada manualmente** no fluxo principal.
- [ ] A documentação foi atualizada, se necessário.

---

<div align="center">

**Carbon Defuse · CESAR School · Sistemas de Informação 2026.1** 🌱

Dúvidas? Fale com a equipe pelos canais do Grupo 5 (Discord / WhatsApp) ou abra uma issue.

</div>