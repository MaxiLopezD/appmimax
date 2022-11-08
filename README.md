Proyecto final para el curso de React Coderhouse

Emula un e-commerce. El mismo fue creado con conceptos de React, firebas para los datos , bootstrap, Tailwind para sus estilos.
Al momento de finalizar la compra, se debe completar un formulario para el pedido y obtendrá un código de seguimiento.

Este proyecto utiliza estas bibliotecas: Styled-Components para estilos, Tailwind CSS para complementar componentes con estilo, Font Awesome para íconos y Sweet Alert para alertas.
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
Tailwind CSS
Styled-Components

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

 Estructura
1- Botón Detalle para ver los detalles de un producto, usando useState(Hook) para controlar los estados de la aplicación.

2- React Router Dom para las rutas de la aplicación, esta biblioteca es perfecta para evitar la actualización de la aplicación cuando cambia de categoría, también nos ofrece useParams (Hook) para hacer rutas dinámicas.

3- Contador de aumento o disminución de artículos en carrito.

4- Funciones para suma de precios y stocks.

5- Botón para eliminar un producto único.

6- Botón para editar un producto.

7- Botón para vaciar el carro.

8- Métodos de Firebase para extraer la información como nombre de productos, imágenes, precios, etc.

9- Cargadores mientras la información no esté lista.

10- Contexto para la lógica del carrito.


