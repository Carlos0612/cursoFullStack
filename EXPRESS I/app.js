const express = require('express');
const app = express();



//view

let comentarios = []
//Controller (controlador)
let muralController = {
    
    index: (req, res) => {
        let htmlComentario = comentarios
        res.send('Entrei no mural <br>'+htmlComentario)
    },

    comentar: (req, res) => {
        comentarios.push('Comentario <br>')
        res.send('Mural comentado!');
    },

    show: (req, res) => {
        let numero = req.params.numero;
        res.send(comentarios[numero])
    },

    //excluir um comentario da lista de comentarios pela posição

    excluirComentario: (req, res) => {
        let numero = req.params;
        comentarios.splice(numero, 1)
        res.send("Comentadio exluido com sucesso")
    }

}


//Rotas

app.get('/mural', muralController.index);
app.get('/comentario', muralController.comentar)
app.get('/mural/:numero', muralController.show)
app.get('/mural/:id', muralController.excluirComentario)


//inicia o servidor
app.listen(5000, () => console.log("Servidor online"))