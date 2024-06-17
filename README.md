### MOVIE AI - Projeto React e Vite 🚀

Este é um projeto simples de um site de busca de filmes desenvolvido em React com Vite. Utiliza styled-components para estilização, skeleton para placeholders de carregamento e padrões de Clear Code para uma estrutura organizada e de fácil manutenção.

#### Tecnologias Utilizadas:
- React
- Vite (para desenvolvimento rápido)
- styled-components (para estilização)
- skeleton (para carregamento de placeholders)
- API do The Movie Database (TMDb) para busca de filmes

#### Funcionalidades:
- Busca de filmes por título
- Exibição de resultados de busca em uma lista
- Detalhes de cada filme selecionado, incluindo título, sinopse, avaliação, etc.

#### Como Executar o Projeto:

Certifique-se de ter Node.js instalado na sua máquina.

1. **Clone o repositório:**
```bash
git clone https://github.com/igorcacerez/movies-project-react.git
cd movies-project-react
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure a API do TMDb:**
- Crie uma conta no [TMDb](https://www.themoviedb.org/) para obter uma API Key.
- Crie um arquivo `.env` na raiz do projeto e adicione sua chave:
  ```
  TOKEN_TMDB=sua_api_key_aqui
  ```

4. **Execute o projeto:**
```bash
npm run dev
```

Isso iniciará o aplicativo em modo de desenvolvimento.
Abra [http://localhost:3030](http://localhost:3030) para visualizá-lo no navegador.

#### Estrutura do Projeto:

- `/src`
- `/@types`: Configuração do tipo do tema.
- `/assets`: Imagens, tais como a logo.
- `/components`: Componentes React reutilizáveis.
- `/core`: Interface e Class que são utilizadas em diversos componentes.
- `/layouts`: Layouts contendo varaveis para cores, fonts e espaçamentos.
- `/navigation`: Configuração das rotas.
- `/pages`: Componentes de página do aplicativo.
- `/repositories`: Configuração e lógica para conexão com a API do TMDb.
- `/styles`: Estilos globais e temas usando styled-components.
- `/utils`: Funções utilitárias e helpers.
- `App.js`: Componente principal do aplicativo.
- `main.tsx`: Ponto de entrada do aplicativo.

#### Privew do Projeto:

O site esta publicado na Vercel, podendo ser acessado atráves do link: [https://movies-project-react-mu.vercel.app/](https://movies-project-react-mu.vercel.app/)



#### Licença:

Este projeto está licenciado sob a MIT License.