const express = require('express');
const app = express();
const port = 3000;

//endpoint que responde un mensade de bienvenida
app.get('/', (req, res) => {
    res.send('¡Inegracion continua funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}); 