const Curso = require("../models/cursos.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let curso = new Curso({
        curso_id: req.body.curso_id,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion
        
    })

    
    curso.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el curso",
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El curso se guardo correctamente",
        res.json(response)
    })
}
exports.find = function(req,res){
    Curso.find(function (err, cursos) {
        res.json(cursos)
    })
}
exports.findOne = function(req,res){
    Curso.findOne({_id: req.params.id}, function (err, curso) {
        res.json(curso)
    })
}
exports.update = function(req,res){
    let curso = {

        curso_id: req.body.curso_id,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion
        
    }

    
    Curso.findByIdAndUpdate(req.params.id,{$set: curso}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el curso",
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El curso se modifico correctamente",
        res.json(response)
    })
}
exports.remove = function(req,res){  
    Curso.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el curso",
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El curso se elimino correctamente",
        res.json(response)
    })
}