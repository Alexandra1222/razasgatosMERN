const express = require('express')
const app = express()

app.listen(5000,()=>console.log('servidor corriendo'));
//CORS
const cors = require('cors')
app.use(cors())

//routing
app.get('/api/gatos',(req,res)=>{
    Gatos
    .find() 
    .then (todosGatos=>res.json(todosGatos))

});

app.get('/api/details/:gato_id', (req, res) => {

    const { gato_id } = req.params

    Gatos
        .findById(gato_id)
        .then(gato => res.json(gato))
})

//conexion a la bd con mongoose
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/MERN_CON_GATOS_1')
    .then(() => console.log('CONECTADO A BBDD'))

//importo el modelo 
const Gatos = require('./models/Gatos.model')
