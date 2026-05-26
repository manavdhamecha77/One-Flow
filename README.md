# OneFlow — Plan to Bill in One Place

![OneFlow Hero](public/hero.png)

OneFlow is a modular Project Management system designed for financial precision and operational clarity. It seamlessly integrates project planning, execution tracking, and automated billing into a unified, high-performance platform.

## Table of Contents
1. [Overview](#1-overview)
2. [Core Features](#2-core-features)
3. [Architecture](#3-architecture)
4. [Tech Stack](#4-tech-stack)
5. [Project Structure](#5-project-structure)
6. [Getting Started](#6-getting-started)
7. [Database Layer](#7-database-layer)
8. [Deployment](#8-deployment)
9. [License](#9-license)

---

## 1. Overview
OneFlow addresses the fragmentation between project management and financial accounting. By bridging the gap from "Plan" to "Bill," it provides real-time visibility into project profitability, resource allocation, and cash flow.

![Analytics Dashboard](public/analytics-dashboard.png)

It emphasizes:
- **Financial Integrity**: Real-time KPI tracking and automated invoice generation.
- **Operational Clarity**: Role-based access for Admins, Project Managers, and Team Members.
- **Surgical Precision**: Modular architecture built for extensibility and performance.

## 2. Core Features
- **Integrated Billing**: Direct conversion of timesheets and expenses into client invoices.
- **Role-Based Workflows**: Tailored dashboards for different organizational roles.
- **Real-time Analytics**: Live tracking of project margins and resource utilization.
- **OCR-Powered Expense Management**: Automated data extraction from vendor bills.
- **Secure Onboarding**: Robust invitation system and bulk user import capabilities.

## 3. Architecture
OneFlow follows a modern, layered architectural pattern:

| Layer | Responsibility |
|-------|----------------|
| **UI (React / Next.js)** | Responsive, editorial-grade interface with Prometheus design system. |
| **Business Logic** | Server-side validation, workflow orchestration, and financial calculations. |
| **Data Access (Prisma)** | Type-safe database queries and automated migrations. |
| **Operational Scripts** | Maintenance utilities for data seeding and system health checks. |

## 4. Tech Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Auth**: Custom JWT-based authentication
- **OCR**: OCR Space API integration
- **Mailing**: Nodemailer

## 5. Project Structure
```text
.
├── prisma/                  # Database schema and migration history
├── public/                  # Static assets and system icons
├── scripts/                 # Operational and maintenance scripts
└── src/
    ├── app/                 # Next.js routes and API endpoints
    ├── components/          # Reusable UI components (Prometheus DS)
    ├── hooks/               # Custom React hooks for state management
    └── lib/                 # Core utilities, auth, and database client
```

## 6. Getting Started

### Prerequisites
- Node.js ≥ 20.x
- pnpm ≥ 9.x
- PostgreSQL instance

### Installation
```bash
git clone https://github.com/your-repo/one-flow.git
cd one-flow
pnpm install
```

### Environment Configuration
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@host:port/dbname"
JWT_SECRET="your-secure-jwt-secret"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional: Email & OCR
EMAIL_USER="your-email@example.com"
EMAIL_APP_PASSWORD="your-app-password"
OCR_SPACE_API_KEY="your-api-key"
```

### System Initialization
```bash
pnpm db:setup
pnpm dev
```

## 7. Database Layer
OneFlow uses Prisma as its primary ORM. The schema is optimized for relational integrity between tasks, timesheets, and financial documents.

- **Migrations**: Managed via `prisma migrate`.
- **Seeding**: Initialized via `prisma/seed.js` for base roles and system defaults.

## 8. Deployment
OneFlow is optimized for deployment on **Vercel**. 

- **CI/CD**: Automatic deployments on push to `main`.
- **Post-Deploy**: Ensure `pnpm prisma migrate deploy` is part of the build pipeline.
