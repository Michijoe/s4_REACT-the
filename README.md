# VERSION 1

## Commandes
npx create-react-app tp2
npm install react-icons --save
npm i react-router-dom
npm start
npm run build

## Pour publier sur WEBDEV
1. Ajouter un basename au router :
<BrowserRouter basename={"/react"}>

2. Ajouter un .htaccess à la racine :
RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]
RewriteRule ^ /react/index.html [L]



# VERSION 2

Suppression du basename dans App.js
Suppression de l'adresse homepage dans package.json
Supression du dossier build de la version webdev

## Commandes
npm run build
npm i -g serve
npx serve -s build -p 8000

npm i json-server
npm run server
