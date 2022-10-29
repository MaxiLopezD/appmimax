Proyecto final para el curso de React Coderhouse

Emula un e-commerce. El mismo fue creado con conceptos de React, firebas para los datos , bootstrap y css para sus estilos.
A continuación se detallan los pasos para poder utilizarlo.

Inicio

Clonar repositorio de GitHub

npm install

npm start para iniciar el localhost para verla


Librerías a instalar
React
React-router-dom
Bootstrap
SweetAlert \

Crear base de datos

Se debe crear una base de datos en firebase con la siguiente configuración:

Nombre de Colección: Products

Cada documento debe tener:

name: nombre corto del producto

category: categoría a definir

descripcion: Descripción larga del producto

price: precio del producto en números

stock: stock existente en números

img: nombre del archivo, sin extensión

Vincular base de datos
Se sugiere crear el archivo .env a nivel de src, con las keys correspondientes que otorga firebase.
dejo las key para la validacion de la base de datos 

    apiKey: "AIzaSyDUrR7CXuP69gRGr3sxEDbopabJCSR6D-I",
    
    authDomain: "backendmimax.firebaseapp.com",
    
    projectId: "backendmimax",
    
    storageBucket: "backendmimax.appspot.com",
    
    messagingSenderId: "750143034955",
    
    appId: "1:750143034955:web:101fc65e12eadfe0215fce"
    
despues de la correcion modifico el REDME para ocultar esta info



