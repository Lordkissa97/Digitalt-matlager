# 🍽️ Digitalt Matlager App

Et omfattende digitalt matlager-system med AI-drevne oppskriftsanbefalinger.
En applikasjon hvor bruker kan legge inn og ha sine matvarer

## 🐳 Docker (Avansert)

### Kun database (anbefalt for utvikling):
```bash
cd docker
docker-compose -f docker-compose.dev.yml up -d
```

### Full Docker-oppsett (alle tjenester):
```bash
# Bygg og start alle tjenester i Docker
cd docker  
docker-compose -f docker-compose.dev.yml up --build
```


## 🏗️ Arkitektur

Denne applikasjonen består av 3 hovedtjenester:

- **Frontend** (React) - Brukergrensesnitt på port 3000
- **API** (NestJS) - Backend REST API på port 3001  
- **AI-tjeneste** (FastAPI) - Oppskriftsanbefalinger på port 8000
- **Database** (PostgreSQL) - Datalagring på port 5432

## 🚀 Kom i gang - 3 enkle steg

### Forutsetninger
- [Node.js 18+](https://nodejs.org/) 
- [Python 3.11+](https://www.python.org/downloads/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 
- [Git](https://git-scm.com/downloads)

---

### **Steg 1: Klon og installer**

```bash
# Klon repository
git clone https://github.com/Lordkissa97/Digitalt-matlager.git
cd Digitalt-matlager

# Installer frontend avhengigheter
cd frontend
npm install

# Installer API avhengigheter  
cd ../api
npm install

# Installer Python avhengigheter
cd ../recipe-ai
pip install fastapi uvicorn
```

### **Steg 2: Start database**

```bash
# Fra prosjektets rotmappe
cd docker
docker-compose -f docker-compose.dev.yml up -d

# Verifiser at database kjører
docker ps
```

### **Steg 3: Start alle tjenester**

Åpne **3 terminaler** og kjør disse kommandoene:

**Terminal 1 - Frontend:**
```bash
cd frontend
npm start
# ✅ Kjører på http://localhost:3000
```

**Terminal 2 - API:**
```bash
cd api
npm run start:dev
# ✅ Kjører på http://localhost:3001
```

**Terminal 3 - AI-tjeneste:**
```bash
cd recipe-ai
python -m uvicorn main:app --reload --port 8000
# ✅ Kjører på http://localhost:8000
```

### **🎉 Ferdig!**

Åpne http://localhost:3000 i nettleseren din

## 📁 Prosjektstruktur

```
Digitalt-matlager/
├── frontend/           # React frontend applikasjon
├── api/               # NestJS backend API  
├── recipe-ai/         # FastAPI AI-tjeneste
├── docker/           # Docker konfigurasjoner
├── .github/          # GitHub Actions CI/CD
└── README.md
```

## 🔍 Test at alt fungerer

### Hurtige tester:

```bash
# Test frontend build
cd frontend && npm run build

# Test API build  
cd api && npm run build

# Test AI-tjeneste
cd recipe-ai && python -c "from main import app; print('✅ AI-tjeneste fungerer!')"
```


## 🔧 Feilsøking

### ❌ Vanlige problemer og løsninger

**"Tjenester starter ikke"**
```bash
# Sjekk at avhengigheter er installert
cd frontend && npm install
cd api && npm install  
cd recipe-ai && pip install fastapi uvicorn
```

**"Database tilkoblingsfeil"**
```bash
# Sjekk om Docker kjører
docker ps

# Restart database
cd docker
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up -d
```

**"Port allerede i bruk"**
```bash
# Finn og stopp prosess på port (eks. 3000)
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID-nummer> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**"AI-tjeneste importfeil"**
```bash
# Sørg for at du er i riktig mappe
cd recipe-ai
python -c "from main import app; print('OK')"
```

### 💡 Tips for utvikling

- **Hot reload**: Alle tjenester støtter automatisk gjenstart ved kodeendringer
- **API-dokumentasjon**: Besøk http://localhost:8000/docs for interaktiv FastAPI-dokumentasjon  
- **Database-verktøy**: Bruk verktøy som pgAdmin eller DBeaver for å utforske databasen
- **Logger**: Sjekk terminal-output for detaljerte feilmeldinger

## 🧪 Testing og CI/CD

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