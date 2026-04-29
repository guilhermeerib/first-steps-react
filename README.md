# Desafios React CRUD 🚀

Bem-vindo ao **Desafios React CRUD**! Este projeto é um ambiente de aprendizado prático focado em React e Tailwind CSS. O objetivo é construir um sistema completo de gerenciamento de alunos (CRUD - Create, Read, Update, Delete) através de desafios guiados passo a passo.

## 📋 Descrição do Projeto

O sistema é focado na gestão educacional, permitindo o acompanhamento de alunos, visualização de perfis e gerenciamento completo de dados. Baseado no nosso design de interface, o sistema conta com quatro telas principais:

1. **Dashboard de Alunos:** Uma visão geral onde os alunos são listados em formato de cartões ou tabela, permitindo buscas e rápida visualização do status (Read).
2. **Cadastro de Aluno:** Um formulário limpo e acessível para a inserção de novos alunos no sistema (Create).
3. **Perfil do Aluno:** Uma tela detalhada exibindo todas as informações, métricas e o progresso de um aluno específico (Read/Detalhes).
4. **Editar Aluno:** Uma tela com formulário preenchido com os dados atuais do aluno, permitindo a atualização de suas informações de forma intuitiva (Update).

## 🏗️ Estrutura do Desafio

Você não começará do zero! A branch `main` possui um projeto inicial pré-configurado (criado com Vite), com um layout principal pré-montado e alguns componentes base já disponíveis para referência.

- **Issues no GitHub:** O aprendizado será 100% guiado por _Issues_. Cada tela será tratada como um desafio específico.
- **O Desafio:** A primeira Issue será para você construir a sua primeira página. Você poderá consultar os exemplos existentes no código e deverá usar **Tailwind CSS** para os estilos e **React** para componentizar.
- **Servidor Mock:** Utilizaremos o servidor do Vite (em conjunto com bibliotecas como JSON Server ou rotas mockadas) para simular uma API de backend. Você focará puramente no Frontend (consumindo os dados fornecidos) sem precisar se preocupar em criar um banco de dados real.

## 👣 Primeiros Passos

Para começar, siga estas etapas na sua máquina local:

1. **Clone o repositório:** Baixe o código do Github para a sua máquina.
2. **Instale as dependências:** Abra o terminal na pasta do projeto e execute `npm install` (ou `yarn install`).
3. **Inicie o servidor de desenvolvimento e a API:** Execute `npm run dev`. Isso iniciará a aplicação React pelo Vite e também deixará a API mockada pronta para receber requisições em `http://localhost:3001`.
4. **Configuração de Ambiente:** Copie o arquivo `.env.example` para um novo arquivo chamado `.env` para que a aplicação saiba onde encontrar a API.
   ```bash
   cp .env.example .env
   ```
5. **Acesse as Issues:** Vá até a aba "Issues" do repositório, encontre o desafio correspondente à primeira tela, leia os requisitos e mãos à obra!

## 📡 Usando a API Mockada

A API simula um backend real para persistência de dados. Você pode interagir com ela usando `fetch` ou bibliotecas como `axios`.

- **Base URL:** Definida no seu `.env` como `VITE_API_URL`.
- **Endpoints:**
  - `GET /students`: Lista todos os alunos.
  - `GET /stats`: Retorna estatísticas do dashboard (total, ativos, novos).
- **Exemplo de uso:**
  ```tsx
  const apiUrl = import.meta.env.VITE_API_URL;

  // Listar alunos
  const students = await fetch(`${apiUrl}/students`).then(res => res.json());

  // Buscar estatísticas
  const stats = await fetch(`${apiUrl}/stats`).then(res => res.json());
  ```

Os dados ficam salvos no arquivo `db.json` na raiz do projeto. Qualquer alteração feita via POST, PUT ou DELETE será persistida nesse arquivo.

## ⚛️ Dicas e Truques de React

Em vez de criar uma página gigante com milhares de linhas de código, o React incentiva a criação de pequenos blocos de montar (componentes) como `<Button>`, `<Header>`, ou `<StudentCard>`.

- **Componentização:** Crie componentes separados para partes da UI que se repetem (como botões, campos de texto do formulário ou cartões de aluno).
- **Gerenciamento de Estado (`useState`):** Use o hook `useState` para controlar os dados que mudam na tela enquanto o usuário interage. Exemplo: O que o usuário digitou no campo de busca ou os dados preenchidos no cadastro.
- **Efeitos Colaterais (`useEffect`):** Use o hook `useEffect` para buscar os dados dos alunos da API mockada assim que a tela (ou componente) for carregada.
- **Props:** Para passar dados de um componente pai (como a tela Dashboard) para um filho (como o componente `<StudentCard>`), utilize propriedades (props).

📚 **Documentação Recomendada:** [React.dev - Aprenda React (PT-BR não-oficial / Inglês Oficial)](https://react.dev/learn)

## 🎨 Onde focar no Tailwind CSS

O Tailwind CSS é um framework _utility-first_, onde você constrói o design aplicando pequenas classes diretamente no HTML (`<div className="bg-blue-500 text-white p-4">`).

Para se dar bem nos desafios, foque em entender os seguintes conceitos do Tailwind:

- **Flexbox (`flex`):** É essencial para alinhar itens. Aprenda a usar `flex`, `flex-col` (colunas), `justify-between` (espaçamento entre itens) e `items-center` (alinhamento vertical). Praticamente 80% dos problemas de layout se resolvem com Flexbox.
- **Grid (`grid`):** Perfeito para layouts em duas dimensões, como a lista de alunos no Dashboard. Entenda como criar colunas com `grid-cols-2` ou `grid-cols-4` e adicionar espaçamento com `gap-4`.
- **Espaçamentos (Margin e Padding):** Classes de preenchimento interno (`p-2`, `px-4`, `py-6`) e margem externa (`m-2`, `mt-4`, `mb-8`) darão o respiro que a interface precisa.
- **Cores e Tipografia:** O projeto usa o **Tailwind v4**, portanto a configuração é feita diretamente no seu arquivo de CSS principal (ex: `input.css` ou `index.css`), sem a necessidade de um arquivo `tailwind.config.js`. Baseado no nosso Design System (veja o arquivo `DESIGN.md`), você deve usar a diretiva `@theme` para adicionar ou sobrescrever as cores.

  **Exemplo de como definir as cores (`index.css`):**

  ```css
  @import 'tailwindcss';

  @theme {
    /* Adicionando as cores do nosso DESIGN.md */
    --color-primary: #2563eb;
    --color-secondary: #7dd3fc;
    --color-tertiary: #f0f9ff;
    --color-surface: #f9f9ff;
    --color-neutral: #1e293b;
    /* Adicione as demais cores do DESIGN.md aqui */
  }
  ```

  **Exemplo de como usar diretamente no HTML:**
  Após definir as variáveis de cor no `@theme`, o Tailwind v4 gera automaticamente as classes utilitárias. Basta usar o prefixo (`bg-`, `text-`, `border-`) seguido do nome da cor:

  ```jsx
  <button className="bg-primary text-white px-4 py-2 rounded">
    Salvar Aluno
  </button>
  <div className="bg-surface text-neutral">
    Conteúdo principal do dashboard
  </div>
  ```

  **Uso em CSS puro com `var()`:**
  As variáveis definidas dentro do `@theme` (e as próprias cores nativas do Tailwind) ficam disponíveis para serem usadas normalmente com a função `var()` caso você precise escrever CSS tradicional:

  ```css
  .custom-component {
    background-color: var(--color-primary);
    color: var(--color-neutral);
  }
  ```

- **Responsividade:** Aprenda a usar prefixos como `md:` ou `lg:` para mudar o layout em telas maiores. (Exemplo: `grid-cols-1 md:grid-cols-3` - começa com 1 coluna no mobile e passa a ter 3 colunas em telas médias).

📚 **Documentação Recomendada:** [Tailwind CSS - Core Concepts](https://tailwindcss.com/docs/utility-first)

## 🎯 Boas Práticas e Recomendações

1. **Evite repetição:** Se você copiou e colou uma mesma estrutura HTML com classes Tailwind mais de duas vezes, provavelmente é hora de transformar isso num componente React.
2. **Comece pequeno:** Não tente fazer tudo de uma vez. Primeiro, crie os retângulos sem estilo. Depois aplique o Tailwind. Por fim, adicione a lógica React e integração com a API.
3. **Nomes em inglês:** Apesar do README estar em português, crie suas variáveis, funções e componentes com nomes em inglês (`handleSubmit`, `StudentProfile`, `fetchStudents`) – é o padrão mundial da indústria de software.
4. **Siga o Design System:** Consulte as diretrizes visuais para manter um padrão agradável e consistente no projeto inteiro.
5. **Divirta-se!** Programar é resolver quebra-cabeças. Peça ajuda nos comentários da Issue caso fique travado. Bom código! 🚀
