# 🏛️ PNCP Licitações - Sistema de Busca Avançada

Aplicação web completa para busca, filtro e análise inteligente de licitações do Portal Nacional de Contratações Públicas (PNCP).

## 🎯 Funcionalidades Principais

### ✨ Core Features
- 🔗 **Integração com API oficial do PNCP** - Dados em tempo real
- 🎯 **Filtros Avançados** - Data, tipo, órgão, valor, status, modalidade, UF, município
- 📊 **Dashboard Analítico** - Gráficos e insights de licitações
- 🔐 **Autenticação Completa** - JWT com refresh tokens
- ⭐ **Favoritos e Alertas** - Sistema inteligente de notificações
- 📥 **Exportação Completa** - Excel, PDF, CSV
- 🔍 **Histórico de Buscas** - Rastreamento de pesquisas
- 🔔 **Notificações Real-time** - WebSocket updates
- 📱 **Responsivo** - Desktop, tablet e mobile

## 🛠️ Stack Tecnológico

### Backend
- **Node.js 18+** + **Express** - API RESTful robusta
- **TypeScript** - Type safety em tempo de desenvolvimento
- **PostgreSQL 14+** - Banco de dados relacional
- **Redis 7+** - Cache e gerenciamento de sessões
- **Bull** - Fila para processamento assíncrono
- **Axios** - Cliente HTTP para API PNCP
- **Swagger/OpenAPI** - Documentação automática
- **Jest** - Testing framework

### Frontend
- **React 18** - Library UI moderna
- **TypeScript** - Type-safe development
- **Vite** - Build tool ultrarrápido
- **TailwindCSS 3** - Utility-first CSS
- **React Query** - Data fetching e caching
- **Zustand** - State management minimalista
- **Recharts** - Gráficos interativos
- **React Hook Form** - Gerenciamento de forms eficiente
- **Tanstack Table** - Tabelas avançadas
- **Vitest** - Unit testing

### DevOps & CI/CD
- **Docker & Docker Compose** - Containerização
- **GitHub Actions** - Workflows automatizados
- **PostgreSQL** - Banco relacional

## 📁 Estrutura do Projeto

```
pncp-licitacoes/
├── backend/                    # API Node.js + Express
│   ├── src/
│   │   ├── controllers/        # Controladores das rotas
│   │   ├── services/           # Lógica de negócio
│   │   ├── models/             # Schemas do banco
│   │   ├── routes/             # Definição de rotas
│   │   ├── middleware/         # Auth, validação, etc
│   │   ├── utils/              # Funções utilitárias
│   │   ├── config/             # Configurações
│   │   ├── integrations/       # APIs externas (PNCP)
│   │   └── index.ts            # Entrada da app
│   ├── tests/                  # Testes unitários
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                   # React + TypeScript
│   ├── src/
│   │   ├── components/         # Componentes reutilizáveis
│   │   ├── pages/              # Páginas da aplicação
│   │   ├── hooks/              # Custom hooks
│   │   ├── services/           # Chamadas API
│   │   ├── store/              # Estado global (Zustand)
│   │   ├── types/              # TypeScript interfaces
│   │   ├── utils/              # Funções auxiliares
│   │   ├── App.tsx             # Componente raiz
│   │   └── main.tsx            # Entrada da app
│   ├── tests/                  # Testes
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.ts
│
├── docker-compose.yml          # Orquestração dos containers
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
├── docs/                       # Documentação
│   ├── API.md
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   └── CONTRIBUTING.md
└── .gitignore

```

## 📊 Filtros Avançados

| Filtro | Tipo | Descrição |
|--------|------|-----------|
| **Data** | Range | Publicação, Edital, Abertura, Encerramento |
| **Tipo de Licitação** | Multi-select | Pregão, Concorrência, RDC, Dispensa, etc |
| **Órgão/Entidade** | Search/Select | Entidade contratante |
| **Categoria** | Multi-select | Objetos/Serviços |
| **Valor** | Range | Min e max do valor estimado |
| **Situação** | Multi-select | Aberta, Encerrada, Suspensa |
| **Modalidade** | Multi-select | Eletrônica, Presencial, Híbrida |
| **UF/Município** | Hierarchical | Localização geográfica |
| **Palavra-chave** | Text | Busca livre no objeto |

## 🚀 Quick Start

### Pré-requisitos
- **Node.js 18+**
- **Docker & Docker Compose** (opcional)
- **Git**

### Instalação Local (Modo Desenvolvimento)

```bash
# Clone o repositório
git clone https://github.com/brunofa1981/pncp-licitacoes.git
cd pncp-licitacoes

# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Em outro terminal - Frontend
cd frontend
npm install
npm run dev
```

### Com Docker (Recomendado)

```bash
# Na raiz do projeto
docker-compose up -d

# Acesse em:
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
# API Docs: http://localhost:3000/api/docs
```

## 🔐 Autenticação & Segurança

- **JWT com expiração configurável**
- **Refresh tokens** para renovação segura
- **Recuperação de senha** via email
- **Rate limiting** na API
- **CORS** configurado
- **Validação de entrada** em todas as rotas
- **Hash de senhas** com bcrypt

## 📈 Dashboard Analytics

- 📊 Gráficos de licitações por período
- 🏢 Top 10 órgãos contratantes
- 💰 Distribuição de valores
- 📈 Tendências por tipo de licitação
- 🗺️ Mapa de licitações por estado
- 🔥 Licitações trending

## 🔔 Sistema de Alertas

- ⭐ Criar alertas com filtros customizados
- 📧 Notificações por email
- 🔗 Atualizar frequência de monitoramento
- 📲 WebSocket para updates em tempo real
- 🎯 Smart notifications (não duplicar alertas)

## 📥 Exportação de Dados

- **Excel** - Planilhas formatadas com gráficos
- **PDF** - Relatórios profissionais
- **CSV** - Compatível com análise de dados

## 🧪 Testes

```bash
# Backend - Testes unitários
cd backend
npm run test
npm run test:watch
npm run test:coverage

# Frontend - Testes com Vitest
cd frontend
npm run test
npm run test:ui
```

## 📖 Documentação

- [Setup Completo](docs/SETUP.md)
- [Arquitetura](docs/ARCHITECTURE.md)
- [API Documentation](docs/API.md)
- [Contributing Guide](docs/CONTRIBUTING.md)

## 🌐 API PNCP

A integração com a API oficial do PNCP é feita através do serviço de integração. Documentação oficial: [Portal PNCP](https://pncp.gov.br)

## 📋 Roadmap

- [x] Setup inicial do projeto
- [ ] Integração com API PNCP
- [ ] Sistema de autenticação
- [ ] Interface de listagem com filtros
- [ ] Dashboard analytics
- [ ] Sistema de favoritos
- [ ] Alertas e notificações
- [ ] Exportação de dados
- [ ] Mobile responsivo
- [ ] Testes completos

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](docs/CONTRIBUTING.md) para guidelines.

## 📝 Licença

MIT License - Veja [LICENSE](LICENSE)

## 💬 Suporte

Dúvidas ou problemas? [Abra uma issue](https://github.com/brunofa1981/pncp-licitacoes/issues)

---

**Desenvolvido com ❤️ para licitantes profissionais**

Status: 🚧 Em desenvolvimento ativo
