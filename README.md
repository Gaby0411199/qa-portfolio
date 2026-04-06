# QA Portfolio — Playwright Automation

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)

Portafolio profesional de automatización de pruebas con **Playwright + TypeScript**.
Cubre pruebas **funcionales**, **E2E** y de **API** sobre sitios web reales,
con integración a CI/CD mediante GitHub Actions y gestión de casos en Jira.

---

## 🚀 Tech Stack

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| [Playwright](https://playwright.dev/) | latest | Automatización E2E y API |
| TypeScript | latest | Lenguaje principal |
| GitHub Actions | — | Pipeline CI/CD |
| Jira | — | Gestión de casos de prueba |
| JSONPlaceholder | — | API pública para pruebas REST |
| Demoblaze | — | E-commerce de práctica |

---

## 📁 Estructura del proyecto

```
qa-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml       (Pipeline CI/CD)
├── fixtures/
│   └── testData.ts              (Datos de prueba reutilizables)
├── pages/
│   └── LoginPage.ts             (Page Object Model)
├── tests/
│   ├── functional/
│   │   └── login.spec.ts        (Pruebas de login)
│   ├── e2e/
│   │   └── checkout.spec.ts     (Flujo completo de compra)
│   └── api/
│       └── users.spec.ts        (Pruebas de API REST)
├── reports/                     (Reportes HTML generados)
├── playwright.config.ts         (Configuración central)
└── README.md
```

---

## ✅ Casos de prueba

### 🔐 Login — demoblaze.com

| ID | Descripción | Tipo | Navegadores | Estado |
|----|-------------|------|-------------|--------|
| TC-001 | Login exitoso con credenciales válidas | Funcional | Chrome / Firefox | ✅ Pass |
| TC-002 | Login fallido con credenciales inválidas | Funcional | Chrome / Firefox | ✅ Pass |
| TC-003 | Login con campos vacíos muestra alerta | Funcional | Chrome / Firefox | ✅ Pass |

### 🛒 E2E — Flujo de compra — demoblaze.com

| ID | Descripción | Tipo | Navegadores | Estado |
|----|-------------|------|-------------|--------|
| TC-004 | Agregar producto al carrito | E2E | Chrome / Firefox | ✅ Pass |
| TC-005 | Carrito muestra productos agregados | E2E | Chrome / Firefox | ✅ Pass |

### 🌐 API — JSONPlaceholder

| ID | Descripción | Método | Endpoint | Estado |
|----|-------------|--------|----------|--------|
| TC-006 | Retorna lista de usuarios | GET | /users | ✅ Pass |
| TC-007 | Crea un recurso nuevo | POST | /posts | ✅ Pass |
| TC-008 | Retorna 404 para usuario inexistente | GET | /users/999 | ✅ Pass |

---

## 📊 Resultados

```
Running 20 tests using 2 workers

  ✓  TC-001 | Login exitoso con credenciales válidas
  ✓  TC-002 | Login fallido con credenciales inválidas
  ✓  TC-003 | Login con campos vacíos muestra alerta
  ✓  TC-004 | Agregar producto al carrito
  ✓  TC-005 | Carrito muestra productos agregados
  ✓  TC-006 | GET /users retorna lista de usuarios
  ✓  TC-007 | POST /posts crea un recurso nuevo
  ✓  TC-008 | GET /users/999 retorna 404 para usuario inexistente

  20 passed (1.0m)
```

---

## ▶️ Cómo ejecutar localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/Gaby0411199/qa-portfolio.git
cd qa-portfolio

# 2. Instalar dependencias
npm install
npx playwright install

# 3. Ejecutar todos los tests
npx playwright test

# 4. Ver reporte HTML
npx playwright show-report reports

# 5. Ejecutar solo un tipo de test
npx playwright test tests/functional
npx playwright test tests/e2e
npx playwright test tests/api
```

---

## ⚙️ CI/CD — GitHub Actions

Cada `push` o `pull request` a `main` ejecuta automáticamente todos los tests en Chromium y Firefox.

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

El pipeline instala dependencias, ejecuta los tests y publica el reporte HTML como artefacto descargable desde la pestaña **Actions** del repositorio.

---

## 👩‍💻 Autora

**Gabriela** — QA Engineer

[![GitHub](https://img.shields.io/badge/GitHub-Gaby0411199-181717?style=flat&logo=github)](https://github.com/Gaby0411199)