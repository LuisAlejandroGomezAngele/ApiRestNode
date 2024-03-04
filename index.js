const express = require('express');
const app = express();
const { verUsuarios } = require('./ConsultaUsuarios'); // Asegúrate de que la ruta sea correcta

const PORT = process.env.PORT || 3001; // Cambiar a 3001 o cualquier otro puerto disponible


/*
app.get('/usuarios', async (req, res) => {
    try {
        const data = await verUsuarios(); // Llama a la función
        res.json(data); // Envía los datos como respuesta JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de los usuarios');
    }
});*/

app.get('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await verUsuarios(id); // Llama a la función
        res.json(data); // Envía los datos como respuesta JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de los usuarios');
    }
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
