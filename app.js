const express = require('express'); // importa el modulo Express
const app = express(); // Crea una instancia de Express

// Define una ruta raiz y envia "Hola mundo" como respuesta
app.get('/hola', (req,res) => {
    res.send('Hola mundo');
})

app.post('/meh', (req,res) => {
    res.send('Por aca no se va al FRONTEND')
})

// Configura el servidor para que escuche en el puerto 3000
app.listen(3000 , () => {
    console.log('Servidor ejecutándose en http://localhost:3000')
})