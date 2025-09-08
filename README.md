# rental-system

A full-stack rental platform connecting owners, tenants and admin.<br>

Owners list properties for rent (enter pending, need admin approval).<br>
Tenants search approved properties, submit rental applications, and request viewings.<br> 
Admin approves new listings, verifies tenants, manages users and overall operations.<br> 

# Tech

[React & TypeScript] – SPA with modern tooling<br> 
[React Router] – pages & navigation<br> 
[React Query] – data fetching, cache & mutations<br> 
[shadcn/ui] & [Tailwind CSS] – UI components & styling<br>
[Spring Boot] – backend REST API<br>
[Gradle] – build & dependency management<br>
[Spring Security + JWT] – authentication & authorization<br>
[MySQL] – relational database<br>
[Hibernate JPA] – ORM & DB access<br>
[MapStruct] – DTO ↔ Entity mapping<br>
[OpenAPI/Swagger] – API docs & live testing<br>

# Environment

**Ports (defaults):**<br>
API: http://localhost:8080<br>
Frontend (Vite): http://localhost:5173<br>
Swagger UI: http://localhost:8080/swagger-ui/index.html<br>

# Installation & Run
Add dev-all script to rental-frontend/package.json<br>
**Windows:**
```
{
  "scripts": {
    "dev": "vite",
    "dev:all": "concurrently \"npm:dev\" \"cd ../rental-api && gradlew.bat bootRun\""
  },
  "devDependencies": { "concurrently": "^9.0.0" }
}
```
**Unix/ macOS:**
```
{
  "scripts": {
    "dev": "vite",
    "dev:all": "concurrently \"npm:dev\" \"cd ../rental-api && ./gradlew bootRun\""
  },
  "devDependencies": { "concurrently": "^9.0.0" }
}

```
Start (frontend):
```
cd rental-frontend
npm install
npm run dev:all
```

# Run as Admin

username : admin, password: 12345



