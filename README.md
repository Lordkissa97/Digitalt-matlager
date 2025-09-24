# Digitalt-matlager# 🍽️ Digitalt Matlager App

Et omfattende digitalt matlager-system med AI-drevne oppskriftsanbefalinger.
En applikasjon hvor bruker kan legge inn og ha sine matvarer fra husholdning liggende på app og få forslag til hva man kan lage av ingridienser som man har og eventuelt mangler kan legges til i handleliste

## 🏗️ Arkitektur

Denne applikasjonen består av 4 hovedtjenester:

- **Frontend** (React/Next.js) - Brukergrensesnitt på port 3000
- **API** (NestJS) - Backend REST API på port 3001  
- **AI-tjeneste** (FastAPI) - Oppskriftsanbefalinger på port 5000
- **Database** (PostgreSQL) - Datalagring på port 5432

## 🚀 Hurtigstart

### Forutsetninger

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- Git

### 1. Klon Repository

```bash
git clone <repository-url>
cd digital-pantry-app
```

### 2. Miljøoppsett

Kopier eksempel miljøfiler og konfigurer:

```bash
# API-tjeneste
cp api/.env.example api/.env
# Rediger api/.env med dine database-opplysninger og API-nøkler

# AI-tjeneste  
cp recipe-ai/.env.example recipe-ai/.env
# Rediger recipe-ai/.env med dine AI-tjeneste API-nøkler
```

### 3. Start Database

```bash
cd docker
docker-compose -f docker-compose.dev.yml up -d
```

### 4. Start Alle Tjenester

**Terminal 1 - Frontend:**
```bash
cd frontend
npm install
npm start
# Kjører på http://localhost:3000
```

**Terminal 2 - API:**
```bash
cd api
npm install
npm run start:dev
# Kjører på http://localhost:3001
```

**Terminal 3 - AI-tjeneste:**
```bash
cd recipe-ai
pip install fastapi uvicorn
python -m uvicorn digital-pantry-app.recipe-ai.main:app --reload --port 5000
# Kjører på http://localhost:5000
```

### 5. Verifiser Tjenester

- Frontend: http://localhost:3000
- API: http://localhost:3001
- AI-tjeneste: http://localhost:5000/ping
- Database: localhost:5432

## 📁 Prosjektstruktur

```
digital-pantry-app/
├── frontend/           # React/Next.js frontend
├── api/               # NestJS backend API
├── recipe-ai/         # FastAPI AI-tjeneste
├── db/               # Database migrasjoner og seed-data
├── docker/           # Docker konfigurasjoner
├── .github/          # GitHub Actions workflows
└── README.md
```

## 🔧 Utvikling

### Miljøvariabler

#### API-tjeneste (`api/.env`)
```bash
DATABASE_URL=postgresql://dev:dev@localhost:5432/pantry_dev
JWT_SECRET=din-jwt-hemmelighet
PORT=3001
OPENAI_API_KEY=din-openai-nøkkel
```

#### AI-tjeneste (`recipe-ai/.env`)
```bash
PORT=5000
DATABASE_URL=postgresql://dev:dev@localhost:5432/pantry_dev
OPENAI_API_KEY=din-openai-nøkkel
SPOONACULAR_API_KEY=din-spoonacular-nøkkel
```

### API Endepunkter

#### API-tjeneste (NestJS)
- `GET /` - Helsekontroll
- `GET /api/pantry` - Hent matlagerelementær
- `POST /api/pantry` - Legg til matlagerelementær
- `PUT /api/pantry/:id` - Oppdater matlagerelementær
- `DELETE /api/pantry/:id` - Slett matlagerelementær

#### AI-tjeneste (FastAPI)
- `GET /ping` - Helsekontroll
- `POST /recipes/recommend` - Få oppskriftsanbefalinger
- `POST /recipes/generate` - Generer ny oppskrift
- `POST /nutrition/analyze` - Analyser næringsinnhold

### Database Schema

```sql
-- Matlager elementer
CREATE TABLE pantry_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER,
    unit VARCHAR(50),
    expiry_date DATE,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Oppskrifter  
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    ingredients JSONB,
    instructions TEXT[],
    prep_time INTEGER,
    cook_time INTEGER,
    servings INTEGER,
    difficulty VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🧪 Testing

### Kjør Alle Tester
```bash
# Frontend tester
cd frontend && npm test

# API tester  
cd api && npm run test

# AI-tjeneste tester
cd recipe-ai && python -m pytest
```

### GitHub Actions

Automatisert CI/CD pipeline kjører på:
- Push til `main` eller `develop` branches
- Pull requests til `main`

Pipeline inkluderer:
- ✅ Frontend tester og bygging
- ✅ API tester med PostgreSQL
- ✅ AI-tjeneste tester  
- ✅ Docker bygg verifisering

## 🐳 Docker

### Utviklingsmiljø
```bash
cd docker
docker-compose -f docker-compose.dev.yml up -d
```

### Produksjonsmiljø
```bash
cd docker  
docker-compose -f docker-compose.prod.yml up -d
```

## 🚀 Deployment

### Miljøvariabler for Produksjon

Sett disse i ditt produksjonsmiljø:

```bash
# Database
DATABASE_URL=postgresql://user:password@prod-db:5432/pantry_prod

# API Nøkler
OPENAI_API_KEY=din-produksjon-openai-nøkkel
SPOONACULAR_API_KEY=din-produksjon-spoonacular-nøkkel
JWT_SECRET=din-produksjon-jwt-hemmelighet

# Sikkerhet
NODE_ENV=production
ALLOWED_ORIGINS=https://ditt-domene.com
```

## 🔒 Sikkerhet

- Miljøvariabler for sensitive data
- JWT autentisering
- CORS konfigurасjon
- Input validering
- SQL injection beskyttelse

## 🔧 Feilsøking

### Vanlige Problemer

**Tjenester starter ikke:**
- Sørg for at alle avhengigheter er installert
- Sjekk at miljøvariabler er satt korrekt
- Verifiser at Docker kjører for database

**Database tilkoblingsproblemer:**
- Sjekk om PostgreSQL er oppe: `docker ps`
- Bekreft database opplysninger i .env filer
- Sørg for at database eksisterer og er tilgjengelig

**AI Service import feil:**
- Bruk full module path: `python -m uvicorn digital-pantry-app.recipe-ai.main:app`
- Pass på at du er i riktig directory
- Sjekk Python sin path og virtual environment

**Frontend bygg problemer:**
- Slett node_modules og reinstaller: `rm -rf node_modules && npm install`
- Sjekk Node.js version.

## 🏷️ Versjonshistorikk

Ingen fullstendige utgivelser enda