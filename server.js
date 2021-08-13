const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;
app.use(express.static(__dirname + '/dist/agendalive'));

app.get('/*', (reg, res) => {
    res.sendFile(__dirname + '/dist/agendalive/index.html');
});

app.listen(PORT, () =>{
    console.log('Servidor iniciado! PORT:' + PORT);
})