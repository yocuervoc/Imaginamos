


API/REST construido con Node.js y Express

Motor de base de datos MySQL

API corriendo en http://35.202.2.88:3000/api

rutas en GCP:

POST: http://35.202.2.88:3000/api/singUp

POST: http://35.202.2.88:3000/api/singIn

POST: http://35.202.2.88:3000/api/address

POST: http://35.202.2.88:3000/api/createOrder

POST: http://35.202.2.88:3000/api/drivers

GET: http://35.202.2.88:3000/api/orders/:id/:date

GET: http://35.202.2.88:3000/api/address

GET: http://35.202.2.88:3000/api/drivers

Para correr el proyecto localmente:

se debe crear una base de datos llamada delivery

create database delivery;

para crear la tablas  correr el comando:

node setup

para iniciar el servidor correr el comando 

node server


configuracion y permisos de la base de datos:

database: 'delivery',

username:  'root',

password:  'password',

host:  'localhost',

