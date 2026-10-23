# Cityguide

Blog de viagens inspirado na referência enviada, com conteúdo em português.
Projeto acadêmico independente; os exercícios anteriores foram preservados.

## Como abrir

Na pasta do projeto, execute:

```powershell
npm.cmd run dev
```

Abra `http://127.0.0.1:5173`. Para encerrar, pressione Ctrl+C.
É necessário ter Node.js instalado; não precisa executar `npm install`.
O servidor usa somente módulos nativos, sem dependências adicionais.

Também pode abrir `index.html` diretamente no navegador.
Também pode usar **Open with Live Server** no VS Code.
As bibliotecas e fotografias estão salvas na própria pasta.

## O que funciona

- Menu recolhível no celular e navegação por seções.
- Filtros por categoria e busca combinados, ignorando diferenças de acentos.
- Contagem de resultados e aviso quando nenhuma história é encontrada.
- Seis artigos completos, acessíveis pelos cartões e destaques.
- Mensagem para links com id desconhecido, como `artigo.html?id=teste`.
- Layout que começa pelo celular e ganha colunas nas telas maiores.

## Conhecimentos dos exercícios

AngularJS: módulo, controllers, binding, `ng-model`, `ng-repeat`, `ng-if`,
`ng-click`, `ng-class`, `ng-cloak` e filtro com função.
JavaScript: arrays, objetos, funções, normalização de texto e parâmetros da URL.
HTML semântico, acessibilidade básica, CSS Grid, Flexbox e media queries.
Bootstrap local fornece a base de normalização. O visual usa CSS próprio.

## Organização

```text
cityguide/
├── index.html
├── artigo.html
├── README.md
├── assets/
│   ├── favicon.svg
│   ├── images/
│   └── vendor/
└── src/
    ├── controllers/
    │   └── blogController.js
    ├── data/
    │   └── articles.js
    └── styles/
        ├── global.css
        ├── home.css
        └── article.css
```

## Como editar

Textos e imagens dos cartões ficam em `src/data/articles.js`.
Cada artigo tem um `id` único, usado no endereço da página de leitura.
O HTML define a estrutura, os controllers definem o comportamento,
e cada página tem seu próprio CSS, além dos estilos compartilhados.

Os roteiros são conteúdo editorial ilustrativo; não representam consultas
de horários, preços ou disponibilidade em tempo real.
Fotografias: Unsplash, com endereços de origem em `assets/images/fontes.txt`.
AngularJS 1.8.2 e Bootstrap são bibliotecas utilizadas como material de estudo.
Não há formulário de cadastro, coleta de dados ou serviço externo de envio.
