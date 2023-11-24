import express from "express"

const PORT = 8080
const app = express()


app.listen(PORT, ()=> {
    console.log('Servidor funcionando en el puerto' + PORT );
})

const productos = [
    {
      "title": "Manzanas",
      "description": "Frescas manzanas de Viedma",
      "price": 30,
      "thumbnail": "",
      "code": "-",
      "stock": 55,
      "id": 1
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "eeee",
      "stock": 54,
      "id": 2
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 3
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 4
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 5
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 6
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 7
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 8
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 9
    },
    {
      "title": "Naranjas",
      "description": "Jugosas Naranjas neuquinas",
      "price": 70,
      "thumbnail": "",
      "code": "-",
      "stock": 54,
      "id": 10
    }
]

app.get('/productos', (req,res)=> {
    res.json(productos)
})  // endpoint


app.get('/productos/:idProductos', (req,res)=> {
    const idProductos = req.params.idProductos

    const producto = productos.find(p => {
        return p.id === parseInt(idProductos)
    })

    if (!producto || idProductos != 2) {
        return res.send({
            error: "el producto no existe"
        })
    }

    res.json({producto})
}) 
app.get('/products', (req, res) => {
  const limit = req.query.limit;

  if (!limit || isNaN(limit)) {
      return res.json({ error: "Por favor, proporciona un límite válido" });
  }

  const limiteNumerico = parseInt(limit, 10);
  const productosFiltrados = productos.slice(0, limiteNumerico);

  res.json({
      productosFiltrados
  });
});
