# Eventura - simplify your events from booking to billing

### Application Goal:
The creation of an integrated, web-based system for comprehensive management of ticket sales and invoicing in the context of events. The system will enable users to conveniently browse and reserve seats for events, as well as make seamless online payments supporting popular methods (e.g., Stripe, BLIK). Additionally, the application will provide automation of VAT invoice generation and document management, including editing, approval, versioning, and integration with external systems via APIs and webhooks.

---

### Folder structure

```
eventura/
├── backend/
│   ├── Eventura.API/
│   ├── Eventura.Application/
│   ├── Eventura.Domain/
│   ├── Eventura.Infrastructure/
│   ├── Eventura.Tests/
│   ├── Eventura.sln
│   ├── Dockerfile
│	└── global.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── store/
│   │   └── types/
│   ├── tests/
│   ├── .prettierrc
│   ├── Dockerfile
│   ├── eslint.config.mjs
│   ├── package.json
│   └── tsconfig.json
├── .dockerignore
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

### Technologies used

| Category          | Tool                  | Purpose                                           |
|-------------------|-----------------------|---------------------------------------------------|
| Frontend          | Next.js               | Framework for building client side                |
| Frontend          | Typescript            | Typed superset of JavaScript                      |
| Frontend          | Tanstack Query        | Data fetching library                             |
| Frontend          | Zustand               | Small, fast and scalable state management         |
| Frontend          | dayjs                 | Minimalist library for dates and times            |
| Frontend          | TailwindCSS           | Utility-first CSS framework                       |
| Frontend          | Shadcn/ui             | Component library                                 |
| Frontend          | Sonner                | Toast notification component                      |
| Frontend          | Lucide                | Hand-crafted SVG icons                            |
| Backend           | ASP.NET Core          | Web framework for building APIs and services      |
| Backend           | C#                    | Programming language used for backend development |
| Backend           | Entity Framework Core | ORM for database access and management            |
| Backend           | JWT                   | JSON Web Token-based authentication               |
| Database          | PostgreSQL            | Relational database                               |
| DevOps            | Docker                | Containerization platform                         |
| Development Tools | Jest                  | Unit testing framework for TypeScript             |
| Development Tools | xUnit                 | Unit testing framework for .NET                   |
| Development Tools | ESLint                | Linter for maintaining code quality               |
| Development Tools | Prettier              | Code formatter                                    |
