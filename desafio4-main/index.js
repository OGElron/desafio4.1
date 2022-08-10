const express = require('express');
const app = express();

const {Router} = express;
app.use(express.static('public')); 

/* rutas Productos */
const rutaProductos = new Router();

rutaProductos.use(express.json());
rutaProductos.use(express.urlencoded({extended: true}))

const productos = [];

rutaProductos.get('/api/productos', (req, res) => {
    console.log('ruta 1');
    res.json(productos);
})

rutaProductos.get('/api/productos/:id', (req, res) => {
    console.log('ruta 2');
    const id = req.params.id;
    const productoId = productos.find(prod=> prod.id === id)
    res.json(productoId);
});

rutaProductos.post('/', (req, res) => {
    productos.push(req.body)
    res.json(req.body)
});

rutaProductos.put('/api/productos/:id', (req, res) => {
    res.send({});
});

rutaProductos.delete('/api/productos/:id', (req, res) => {
    res.send({});
});

/* Cargo los routers */

app.use('/api/productos', rutaProductos)

/* Server Listen */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))