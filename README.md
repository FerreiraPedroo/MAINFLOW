### React + TypeScript + Vite

# Arquitetura das pastas

src/
├── assets/             # Imagens, fontes, ícones globais
├── components/         # Componentes globais (Button, Input, Modal)
├── config/             # Constantes, variáveis de ambiente, clientes de API
├── hooks/              # Custom hooks globais (useAuth, useTheme)
├── utils/              # Funções utilitárias puras (formatters, validators)
└── features/           # O coração da aplicação
    ├── auth/           # Funcionalidade de Autenticação
    │   ├── components/ # Componentes exclusivos da autenticação (LoginForm)
    │   ├── hooks/      # Hooks exclusivos (useLogin)
    │   ├── services/   # Chamadas de API da autenticação (authApi.ts)
    │   ├── types/      # Interfaces e tipos do TypeScript
    │   └── index.ts    # Ponto de entrada público (expõe apenas o necessário)

- Para componentes
src/
├── components/
│   ├── atoms/         # Elementos base irredutíveis (Button, Label, Input)
│   ├── molecules/     # Combinação de átomos (SearchInput = Input + Button)
│   ├── organisms/     # Estruturas complexas (Navbar, ProductCard, Sidebar)
│   └── templates/     # Layouts de página sem conteúdo real (GridSystem)
