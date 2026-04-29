# 🚀 Dicas e Truques: Guia do Projeto

Bem-vindo ao guia de sobrevivência e boas práticas do nosso projeto React! Aqui você encontrará dicas essenciais para evoluir na base de código, estudar melhor e manter o projeto organizado.

---

## 📚 1. O que e Como Estudar

Para mandar bem neste projeto, foque nos seguintes pilares:

### O que estudar:

- **React:**
  - _Fundamentos:_ Componentes, Props, State (`useState`), Lifecycle/Efeitos (`useEffect`).
  - _Intermediário:_ Context API, Custom Hooks, Roteamento (React Router DOM).
- **TypeScript:**
  - Focar em como tipar Props de componentes (`interface` e `type`).
  - Aprender a estender interfaces de elementos HTML nativos (ex: `React.ButtonHTMLAttributes<HTMLButtonElement>`).
- **Tailwind CSS:**
  - Entender o modelo de classes utilitárias.
  - Como lidar com responsividade (`sm:`, `md:`, `lg:`).
  - Estados interativos (`hover:`, `focus:`, `disabled:`).
- **Uso de Inteligência Artificial (IAs):**
  O uso de IAs (como Copilot, Gemini, ChatGPT, GitHub Chat) **não é proibido** — pelo contrário, é **fortemente incentivado** como uma ferramenta de estudo e produtividade! 
  A regra de ouro é: use a IA a seu favor, contanto que você **entenda a sintaxe da linguagem e compreenda exatamente o que o código gerado está fazendo**. Use-as como um "tutor particular" para explicar conceitos, gerar boilerplate ou sugerir melhorias, mas nunca para copiar e colar cegamente um código que você não sabe como funciona.

### Como estudar:

- **Mão na massa:** Não fique só na teoria. Crie páginas e componentes novos na prática.
- **Inspecione o código:** Leia os componentes já criados (como os na pasta `src/components`) para entender as convenções adotadas no projeto.
- **Documentações oficiais:** A documentação do React (react.dev) e do Tailwind (tailwindcss.com) são excelentes. Consulte-as sempre.
- **Estudando e Depurando com IA:**
  - *Seja específico nos Prompts:* Quando encontrar um erro, não diga apenas "não funciona". Copie a mensagem de erro inteira do console, o trecho de código afetado e explique o comportamento esperado.
  - *Peça o "Por quê":* Se o ChatGPT ou a IA do seu editor sugerir um código e ele resolver o problema, não pare por aí. Pergunte: *"Me explique passo a passo por que essa alteração resolveu o bug"*.
  - *Use o Contexto a seu favor:* Em agentes integrados ao VSCode (como Copilot Chat, Gemini, etc), use ferramentas de contexto (como mencionar arquivos específicos ou usar `@workspace`) para que a IA analise como seu componente conversa com o resto do sistema.

---

## 🧩 2. Usando e Sobrescrevendo Componentes

Criamos nossos componentes de forma modular para que sejam reutilizáveis. O arquivo `src/components/Button.tsx` é um ótimo exemplo de como usar o utilitário `cn` (que combina `clsx` com `tailwind-merge`) para permitir a sobrescrita de estilos de forma segura.

### Exemplo 1: Uso normal do Botão

```tsx
import { Button } from '../components/Button'

export function MinhaPagina() {
  return <Button variant="primary">Salvar</Button>
}
```

### Exemplo 2: Sobrescrevendo classes (Customização local)

Se você precisar que o botão ocupe 100% da largura em um formulário ou mude de cor especificamente naquela página, passe a propriedade `className`. O utilitário `cn` garante que sua classe sobrescreva o comportamento padrão.

```tsx
import { Button } from '../components/Button'

export function Formulario() {
  return (
    <Button
      variant="primary"
      // O 'bg-purple-600' vai sobrescrever a cor primária padrão do variante graças ao cn()
      className="mt-6 w-full bg-purple-600 hover:bg-purple-700"
    >
      Enviar Formulário
    </Button>
  )
}
```

### Exemplo 3: Criando um Componente Derivado

Se você repete o mesmo estilo "customizado" várias vezes na mesma página ou contexto, crie um wrapper local:

```tsx
import { Button, ButtonProps } from '../components/Button'

// Wrapper para um botão de "Ação de Sucesso"
function SuccessButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      variant="primary"
      className={`bg-green-600 shadow-md hover:bg-green-700 ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}

export function Painel() {
  return (
    <SuccessButton onClick={() => alert('Feito!')}>Confirmar</SuccessButton>
  )
}
```

---

## 📝 3. Padrões de Commit (Commit Patterns)

Utilizamos o padrão **Conventional Commits** para que o histórico do Git fique legível. O formato básico é:

`<tipo>(<escopo opcional>): <descrição no imperativo>`

**Tipos mais usados:**

- `feat`: Uma nova funcionalidade ou tela.
  - _Exemplo:_ `feat(aluno): adiciona página de perfil do aluno`
- `fix`: Correção de um bug.
  - _Exemplo:_ `fix(sidebar): corrige erro no fechamento do menu no mobile`
- `style`: Mudanças de formatação (Prettier, espaços, ponto e vírgula), sem impacto lógico.
  - _Exemplo:_ `style: aplica formatação do prettier nos arquivos tsx`
- `refactor`: Mudanças no código que não adicionam feature nem corrigem bug (ex: extrair um componente).
  - _Exemplo:_ `refactor(components): extrai lógica de formatação de data para um utilitário`
- `chore`: Atualizações de dependências, tarefas de build, configuração.
  - _Exemplo:_ `chore: atualiza dependência do react-router-dom`

---

## 🐙 4. Dicas de Git

- **Commits atômicos e lógicos:** Faça commits pequenos. Se você corrigiu o CSS de um botão e criou a lógica de login de usuário, isso são dois commits diferentes.
- **Use Branches (Ramificações):** Evite codar direto na `main`. Crie branches descritivas:
  - `git checkout -b feature/nova-tela-cadastro`
  - `git checkout -b fix/botao-quebrado`
- **Revisão antes de salvar:** Use `git status` e `git diff` antes de rodar `git add` para ter certeza absoluta do que você está prestes a incluir no commit.
- **Aperto na hora de trocar de branch:** Estava no meio de um código e precisou corrigir um bug urgente na `main`? Salve seu progresso temporário com `git stash`. Depois, recupere com `git stash pop`.

---

## 🔍 5. Depurando com o DevTools do Navegador

O DevTools (acessível com **F12** no Chrome/Edge ou **Ctrl+Shift+I**) é a sua janela para dentro do navegador. Aprenda a usá-lo e você vai resolver bugs 10x mais rápido.

### Aba Console
- É o ponto de partida. Qualquer `console.log()`, `console.error()` ou erro não tratado aparece aqui.
- Antes de perguntar para alguém "por que não funciona?", olhe o console primeiro.
- Filtre as mensagens: use os botões **Errors**, **Warnings** e **Info** para não se perder em um mar de mensagens.

### Aba Network (Rede)
- **Essencial para depurar chamadas de API.** Toda requisição que o seu código faz (`fetch`, `axios`) aparece aqui.
- Clique em uma requisição e analise:
  - **Headers:** Veja a URL exata que foi chamada, o método (GET, POST...) e os cabeçalhos enviados.
  - **Payload (Corpo):** O que você enviou no `body` de um POST/PATCH.
  - **Response (Resposta):** O JSON que a API retornou — ou a mensagem de erro se der 4xx/5xx.
- **Dica prática:** Se o `getStudents()` não está retornando dados, vá na aba Network, filtre por `students` e veja exatamente o que aconteceu na requisição.

### Aba Elements (Elementos)
- Inspecione o HTML e CSS renderizado em tempo real.
- Passe o mouse sobre um elemento, clique com o botão direito e escolha **"Inspecionar"**. O DevTools vai saltar direto para aquele nó no DOM.
- No painel da direita, em **Styles**, você pode **adicionar, editar ou desabilitar classes CSS ao vivo** sem precisar salvar o arquivo — ótimo para testar estilos Tailwind rapidamente.

### React Developer Tools (Extensão)
Instale a extensão **[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)** no seu navegador:
- **Aba Components:** Mostra a árvore de componentes React. Você consegue clicar em qualquer componente e ver suas **props** e **state** em tempo real — sem precisar de `console.log`.
- **Aba Profiler:** Permite gravar uma sessão e ver quais componentes re-renderizaram e por quê. Útil para encontrar gargalos de performance.

---

## 🎨 6. Inspiração e Ecossistema

Quer criar novos componentes bonitos e acessíveis? Consulte estas referências:

- **[shadcn/ui](https://ui.shadcn.com/):** É o padrão ouro moderno do React. Você não instala o shadcn como uma biblioteca de dependências, mas sim **copia e cola** o código base dos componentes (exatamente como fizemos com nosso `Button`). Explore o site para ver como construir Inputs, Modals (Dialogs), Dropdowns e Cards bem estruturados.
- **[Tailwind UI](https://tailwindui.com/):** Galeria oficial de componentes da equipe do Tailwind. Excelente para tirar ideias de layout, dashboards, formulários e listas.
- **[Radix UI Primitives](https://www.radix-ui.com/primitives):** Componentes base que cuidam apenas da acessibilidade e funcionalidade (WAI-ARIA). O shadcn usa Radix por baixo dos panos.
- **Figma Community:** Precisa de inspiração visual? Pesquise por "Dashboard UI Kit" ou "Design System" de graça na comunidade do Figma para treinar seus olhos.
