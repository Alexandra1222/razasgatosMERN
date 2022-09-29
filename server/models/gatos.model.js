const mongoose = require('mongoose')

const gatosSchema = mongoose.Schema({
    title: String,
    caracteristicas: String,
    imageUrl: String
})

const Gatos = mongoose.model('gatos', gatosSchema)

module.exports = Gatos

