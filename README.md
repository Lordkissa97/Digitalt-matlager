# 🍽️ Digitalt Matlager

En enkel app for å administrere dine matvarer og få AI-baserte oppskriftsforslag.
!DESIGN! er under utvikling, nåværende oppsett er kun lagt inn for å få struktur på plass og etterse at ting fungerer! :D

## 🚀 Kom i gang på 5 minutter

### Du trenger:
- [Node.js 18+](https://nodejs.org/) 
- [Python 3.11+](https://www.python.org/downloads/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 

### Steg 1: Last ned og installer
```bash
git clone https://github.com/Lordkissa97/Digitalt-matlager.git
cd Digitalt-matlager
```

### Steg 2: Installer avhengigheter
```bash
# Frontend
cd frontend
npm install

# Backend API
cd ../api
npm install

# AI-tjeneste
cd ../recipe-ai
pip install fastapi uvicorn
```

### Steg 3: Start database
```bash
cd ../docker
docker-compose -f docker-compose.dev.yml up -d
```

### Steg 4: Start alle tjenester
Åpne 3 nye terminaler og kjør:

**Terminal 1:**
```bash
cd frontend
npm start
```

**Terminal 2:**
```bash
cd api
npm run start:dev
```

**Terminal 3:**
```bash
cd recipe-ai
uvicorn main:app --reload --port 8000
```

### 🎉 Ferdig!
Åpne **http://localhost:3000** i nettleseren

---

## 📱 Hva kan du gjøre?

| Side | URL | Hva gjør den? |
|------|-----|---------------|
| **🏠 Hjem** | `/home` | Oversikt over alt |
| **📦 Matvarer** | `/matvarer` | Legg til/fjern matvarer |
| **🧾 Oppskrifter** | `/recipes` | Få oppskriftsforslag |
| **👤 Profil** | `/profile` | Brukerinnstillinger |
| **🚪 Login** | `/login` | Logg inn/ut |

---

## ❌ Noe går galt?

**Frontend starter ikke?**
```bash
cd frontend
npm install
npm start
```

**Database virker ikke?**
```bash
docker ps
# Ser du ikke "postgres"? Kjør:
cd docker
docker-compose -f docker-compose.dev.yml up -d
```

**Port opptatt?**
```bash
# Windows - stopp prosess på port 3000:
netstat -ano | findstr :3000
taskkill /PID <nummer> /F
```