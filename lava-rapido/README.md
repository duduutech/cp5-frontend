# BOLHA AUTO — Estética Automotiva Especializada BYD

> Aplicação web interativa para gestão de agendamentos e exibição de serviços de estética técnica automotiva especializada na linha BYD. Desenvolvida com foco em alta performance visual, design escuro minimalista (*dark monochrome*) e gerenciamento de estado global reativo.

---

## Demonstração & Arquitetura Visual

* **Home:** Experiência imersiva com vídeo em background contínuo (*100vh*), tipografia minimalista e galeria de quadrantes dedicada aos modelos da BYD (Seal, Han, Song Plus e Dolphin).
* **Preços & Serviços:** Catálogo técnico de pacotes de tratamento em layout alternado (*zigue-zague*), com dados dinâmicos e seção de prova social com avaliações de clientes.
* **Agendamentos:** Painel operacional com Hero interativo em vídeo e console de emissão de ordens de serviço/tíquetes de lavagem em tempo real.
* **Header Operacional:** Contador em tempo real com indicador de pulso sincronizado com o total de veículos na fila do pátio.

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** — Biblioteca para construção de interfaces componentizadas e declarativas.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para robustez e manutenção do código.
- **[Vite](https://vitejs.dev/)** — Build tool rápida para desenvolvimento moderno em frontend.
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária com paleta monocromática em escala de cinzas profundas (`bg-zinc-950`).
- **[Framer Motion](https://www.framer.com/motion/)** — Animações de entrada e transições de scroll contínuas com `whileInView`.
- **[React Router](https://reactrouter.com/)** — Navegação em SPA com suporte a rotas indexadas e controle de estado ativo.

---

## Estrutura do Projeto

```text
lava-rapido/
├── public/
│   ├── videos/              # Vídeos locais de alta performance (Hero)
│   └── carros/              # Imagens e ativos estáticos
├── src/
│   ├── components/
│   │   ├── CartaoDepoimento.tsx   # Card de prova social de clientes
│   │   ├── Footer.tsx             # Rodapé padronizado em tema dark
│   │   ├── Header.tsx             # Navegação e contador global de fila
│   │   └── Ticket.tsx             # Tíquete com dados do veículo e ação de finalizar
│   ├── context/
│   │   └── AgendamentosContext.tsx# Gerenciamento de estado global da fila
│   ├── data/
│   │   ├── depoimentos.ts         # Base mockada de opiniões de clientes
│   │   └── servicos.ts            # Tabela de planos, descrições e durações
│   ├── pages/
│   │   ├── Agendamentos.tsx       # Formulário e lista de ordens de serviço
│   │   ├── Erro.tsx               # Tratamento de erro 404 / rota inválida
│   │   ├── Home.tsx               # Hero e galeria 4 quadrantes BYD
│   │   ├── Precos.tsx             # Tabela zig-zag de preços e depoimentos
│   │   └── Sobre.tsx              # Detalhes institucionais e infraestrutura
│   ├── types/
│   │   └── index.ts               # Interfaces e tipagens TypeScript
│   ├── App.tsx                    # Layout padrão com Header, Outlet e Footer
│   ├── main.tsx                   # Configuração das rotas do React Router
│   └── index.css                  # Diretivas Tailwind e estilização base
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
