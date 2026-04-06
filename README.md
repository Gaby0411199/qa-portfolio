QA Portfolio — Playwright Automation
Mostrar imagen
Mostrar imagen
Mostrar imagen
Mostrar imagen
Portafolio profesional de automatización de pruebas con Playwright + TypeScript.
Cubre pruebas funcionales, E2E y de API sobre sitios web reales,
con integración a CI/CD mediante GitHub Actions y gestión de casos en Jira.

🚀 Tech Stack
HerramientaVersiónPropósitoPlaywrightlatestAutomatización E2E y APITypeScriptlatestLenguaje principalGitHub Actions—Pipeline CI/CDJira—Gestión de casos de pruebaJSONPlaceholder—API pública para pruebas RESTDemoblaze—E-commerce de práctica

📁 Estructura del proyecto
textqa-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml       # Pipeline CI/CD
├── fixtures/
│   └── testData.ts              # Datos de prueba reutilizables
├── pages/
│   └── LoginPage.ts             # Page Object Model
├── tests/
│   ├── functional/
│   │   └── login.spec.ts        # Pruebas de login
│   ├── e2e/
│   │   └── checkout.spec.ts     # Flujo completo de compra
│   └── api/
│       └── users.spec.ts        # Pruebas de API REST
├── reports/                     # Reportes HTML generados
├── playwright.config.ts         # Configuración central
└── README.md

✅ Casos de prueba
🔐 Login — demoblaze.com
IDDescripciónTipoNavegadoresEstadoTC-001Login exitoso con credenciales válidasFuncionalChrome / Firefox✅ PassTC-002Login fallido con credenciales inválidasFuncionalChrome / Firefox✅ PassTC-003Login con campos vacíos muestra alertaFuncionalChrome / Firefox✅ Pass
🛒 E2E — Flujo de compra — demoblaze.com
IDDescripciónTipoNavegadoresEstadoTC-004Agregar producto al carritoE2EChrome / Firefox✅ PassTC-005Carrito muestra productos agregadosE2EChrome / Firefox✅ Pass
🌐 API — JSONPlaceholder
IDDescripciónMétodoEndpointEstadoTC-006Retorna lista de usuariosGET/users✅ PassTC-007Crea un recurso nuevoPOST/posts✅ PassTC-008Retorna 404 para usuario inexistenteGET/users/999✅ Pass

📊 Resultados
textRunning 20 tests using 2 workers

  ✓  TC-001 | Login exitoso con credenciales válidas
  ✓  TC-002 | Login fallido con credenciales inválidas
  ✓  TC-003 | Login con campos vacíos muestra alerta
  ✓  TC-004 | Agregar producto al carrito
  ✓  TC-005 | Carrito muestra productos agregados
  ✓  TC-006 | GET /users retorna lista de usuarios
  ✓  TC-007 | POST /posts crea un recurso nuevo
  ✓  TC-008 | GET /users/999 retorna 404 para usuario inexistente

  20 passed (1.0m)

▶️ Cómo ejecutar localmente
bash# 1. Clonar el repositorio
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

⚙️ CI/CD — GitHub Actions
Cada push o pull request a main ejecuta automáticamente todos los tests en Chromium y Firefox.
yamlon:
  push:
    branches: [main]
  pull_request:
    branches: [main]
El pipeline instala dependencias, ejecuta los tests y publica el reporte HTML como artefacto descargable desde la pestaña Actions del repositorio.

👩‍💻 Autora
Gabriela — QA Engineer