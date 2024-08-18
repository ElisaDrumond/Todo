# Todo List
![Todo](https://i.imgur.com/V8I7CXp.png)

## Descrição
Esta aplicação é uma lista de tarefas (Todo List) desenvolvida com React, utilizando Vite como bundler e Yarn como gerenciador de pacotes. A aplicação permite criar, visualizar, editar, deletar e marcar tarefas como concluídas. O design é feito com Tailwind CSS para garantir uma interface responsiva e estilizada.

## Tecnologias Utilizadas
- React: Biblioteca JavaScript para construção da interface de usuário.
- Vite: Bundler rápido para desenvolvimento e produção.
- Yarn: Gerenciador de pacotes para instalação e gerenciamento de dependências.
- Tailwind CSS: Framework CSS utilitário para estilização e design responsivo.

## Configuração do Ambiente
### Pré-requisitos
- Node.js (versão 14 ou superior)

### Instalação e Configuração

#### Clone o repositório:
```bash
git clone https://github.com/ElisaDrumond/Todo.git
```

#### Navegue até o diretório do projeto:
```bash
cd Todo
```

#### Instale as dependências:
##### Yarn
```bash
yarn install
```
ou
##### npm
```bash
npm install
```

#### Inicie o servidor de desenvolvimento:
##### Yarn
```bash
yarn dev
```
ou
##### npm
```bash
npm run dev
```

A aplicação estará disponível em http://localhost:5173

## Estrutura do Projeto
A estrutura do projeto segue um padrão organizado para facilitar a manutenção e a escalabilidade.

```bash
Todo/
├── public/              # Arquivos estáticos
├── src/                 # Código fonte
│   ├── assets/          # Imagens e outros recursos
│   ├── components/      # Componentes reutilizáveis
|   ├── App.jsx          # Componente principal da aplicação
│   ├── index.css        # Estilos globais e Tailwind CSS
│   ├── main.jsx         # Arquivo de entrada da aplicação
├── .gitignore           # Arquivos e diretórios a serem ignorados pelo Git
├── index.html           # Arquivo HTML principal
├── package.json         # Informações e dependências do projeto
└── tailwind.config.js   # Configurações do Tailwind CSS
```

## Funcionalidades
- Criar Tarefa: Adicione novas tarefas à lista.
- Visualizar Tarefas: Veja todas as tarefas criadas.
- Editar Tarefa: Modifique o texto de uma tarefa existente.
- Deletar Tarefa: Remova uma tarefa da lista.
- Marcar Como Feito: Marque tarefas como concluídas.

## Componentes
- TodoItem: Representa uma tarefa individual.
- TodoList: Exibe a lista de tarefas.
- TodoForm: Formulário para criar e editar tarefas.
- Modal: Modal da aplicação.

## Estilização
A estilização é feita com Tailwind CSS. O projeto utiliza classes utilitárias para garantir um design responsivo e moderno. As configurações do Tailwind estão localizadas no arquivo tailwind.config.js.