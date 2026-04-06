# 🧪 QA Portfolio — Playwright Automation

Portafolio profesional de automatización de pruebas con Playwright + TypeScript.
Pruebas funcionales, E2E y de API sobre sitios web reales.

---

## 🚀 Tech Stack

| Herramienta | Uso |
|---|---|
| Playwright | Automatización E2E y API |
| TypeScript | Lenguaje principal |
| GitHub Actions | CI/CD automático |
| Jira | Gestión de casos de prueba |

---

## 📁 Estructura del proyecto
qa-portfolio/
├── tests/
│   ├── functional/     # Login, validaciones
│   ├── e2e/            # Flujos completos de usuario
│   └── api/            # Pruebas de API REST
├── pages/              # Page Object Model
├── fixtures/           # Datos de prueba
├── reports/            # Reportes HTML
└── .github/workflows/  # CI/CD

---

## ✅ Casos de prueba

### 🔐 Login — demoblaze.com
| ID | Descripción | Estado |
|---|---|---|
| TC-001 | Login exitoso con credenciales válidas | ✅ Pass |
| TC-002 | Login fallido con credenciales inválidas | ✅ Pass |
| TC-003 | Login con campos vacíos muestra alerta | ✅ Pass |

### 🛒 E2E — Flujo de compra
| ID | Descripción | Estado |
|---|---|---|
| TC-004 | Agregar producto al carrito | ✅ Pass |
| TC-005 | Carrito muestra productos agregados | ✅ Pass |

### 🌐 API — JSONPlaceholder
| ID | Descripción | Estado |
|---|---|---|
| TC-006 | GET /users retorna lista de usuarios | ✅ Pass |
| TC-007 | POST /posts crea un recurso nuevo | ✅ Pass |
| TC-008 | GET /users/999 retorna 404 | ✅ Pass |

---

## ▶️ Cómo ejecutar
```bash
# Instalar dependencias
npm install
npx playwright install

# Correr todos los tests
npx playwright test

# Ver reporte HTML
npx playwright show-report reports
```

---

## 👩‍💻 Autora

**Gabriela** — QA Engineer
[GitHub](https://github.com/Gaby0411199)