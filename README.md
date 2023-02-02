# MDQBebidas - React App

App web para e-commerce de bebidas desarrollada en react

- Link a netlify: [MDQ Bebidas](https://mdqbebidas-react.netlify.app)

- Video de la pagina: [MDQBebidas.mp4](https://res.cloudinary.com/dgk9fa4rw/video/upload/v1675296114/ImgAppReact/img/MDQ_Bebidas_-_Google_Chrome_2023-02-01_19-55-01_Trim_hizoxa.mp4)

## Caracteristicas

- Página inicial donde se muestran todos los productos.
- Barra de navegacion con links a todas las categorias disponibles y con cartWidget que muestra la cantidad de productos del carrito. 
- En url, visualizacion de las rutas a las diferentes secciones de la pagina.
- Seccion con los detalles de cada producto, la cual permite elegir las cantidades a comprar de cada uno.
- Carrito dividido en 3 partes:
  - Productos seleccionados, donde cada uno cuenta con su descripcion, boton incrementador-decrementador de cantidad y subtotal
  - Resumen de compra, donde se indica el subtotal, costo de envio y total de la compra. Tambien un boton para vaciar el carrito.
  - Formulario de datos personales, el cual debe completarse para finalizar la compra.
- Utilizacion de firebase para guardar los productos disponibles, y actualizar su stock

## Librerias externas utilizadas

- react-boostrap
- react-dom
- react-icons
- react-router-dom
- toastify
