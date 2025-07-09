# 🦠 UI - Profilaxia de Zoonoses

Interface moderna para consulta de medidas profiláticas e condutas frente a exposições a doenças como **Raiva**, **Leptospirose** e **Chikungunya**, baseada na API desenvolvida no Mini Projeto do Módulo 4 - Programadores do Amanhã.

## 🔗 API

Este front-end consome os dados da API disponível em:

https://m5-mp-3o8n-o0ap9xht0-namartinxs-projects.vercel.app/

---

## 🛠️ Tecnologias Utilizadas

- [Next.js]
- [React]
- [TypeScript]
- [TailwindCSS]
- [Vercel]
- [Render]
---

## 🗂️ Estrutura do Projeto

📦 src/
┣ 📂 app/
┃ ┣ 📜 globals.css
┃ ┣ 📜 layout.tsx
┃ ┣ 📜 page.tsx
┣ 📂 components/
┃ ┣ 📜 aviso.tsx
┃ ┣ 📜 footer.tsx
┃ ┣ 📜 header.tsx
┃ ┣ 📜 leptoSection.tsx
┃ ┣ 📜 tratChickSection.tsx
┃ ┣ 📜 zoonoses.tsx
┃ ┣ 📜 zoonosesChikungunya.tsx
┃ ┣ 📜 zoonosesLeptospirose.tsx
┃ ┣ 📜 zoonosesRaiva.tsx
┣ 📂 utils/
┃ ┗ 📜 api.ts


---

## 📌 Funcionalidades


### ✅ Leptospirose
- Retorna **medidas de prevenção ambientais e pessoais**.

### ✅ Chikungunya
- Retorna o **tratamento recomendado** de acordo com a fase da doença (aguda ou crônica).

### ✅ Zoonoses
- Retorna dados informativos sobre zoonoses cadastradas.

---

## 📄 Documentação:
Acesse a documentação no navegador!
A documentação completa das rotas, parâmetros e exemplos de resposta está disponível no Swagger 
http://localhost:3000/api-docs

---

## 📨 Rotas disponíveis

### 🔹 Raiva
GET /profilaxiaraiva/avaliarAcidenteRaiva?animal=cao_gato&tipo_exposicao=direto&observacao=passivel_de_observacao

### 🔹 Leptospirose
GET /prevencaoLeptospirose


### 🔹 Chikungunya
GET /tratamentoChikungunya


### 🔹 Zoonoses
GET /zoonoses/:nome

---

## 🧪 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ui-profilaxia.git

# Acesse o diretório
cd ui-profilaxia

# Instale as dependências
npm install

# Rode o projeto
npm run dev

# Acesse no navegador
http://localhost:3000


---



