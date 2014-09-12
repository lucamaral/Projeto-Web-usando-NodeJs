module.exports = function (app) {
    var ContatosController = {
        index: function (request, response) {
            var usuario = request.session.usuario;
            var contatos = usuario.contatos;
            var params = {
                "usuario": usuario,
                "contatos": contatos
            };
            response.render("contatos/index", params);
        },
        create: function (request, response) {
            var contato = request.body.contato;
            var usuario = request.session.usuario;
            usuario.contatos.push(contato);
            response.redirect("/contatos");
        },
        show: function (request, response) {
            var id = request.params.id;
            var contato = request.session.usuario.contatos[id];
            var params = {
                contato: contato,
                id: id
            };
            response.render("contatos/show", params);
        },
        edit: function (request, response) {
            var id = request.params.id;
            var usuario = request.session.usuario;
            var contato = usuario.contatos[id];
            var params = {
                usuario: usuario,
                contato: contato,
                id: id
            };
            console.info(params);
            response.render("contatos/edit", params);
        },
        update: function (request, response) {
            var contato = request.body.contato;
            var usuario = request.session.usuario;
            usuario.contatos[request.params.id] = contato;
            response.redirect("/contatos");
        },
        destroy: function (request, response) {
            var usuario = request.session.usuario;
            var id = request.params.id;
            usuario.contatos.splice(id, 1);
            response.redirect("/contatos");
        }
    };
    return ContatosController;
};