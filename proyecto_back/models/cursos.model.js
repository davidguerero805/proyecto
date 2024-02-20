const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursosSchema = new Schema ({
    curso_id: {type: String, required: true, max:60},
    nombre: {type: String, required: true, max:60},
    tipo: {type: String, required: true, max:40},
    duracion: {type: String, required: true, max:40},
    descripcion: {type: String, required: true, max:200}
});

module.exports = mongoose.model("cursos", CursosSchema);