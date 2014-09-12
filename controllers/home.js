module.exports = function (app) {
    var HomeController = {
        index: function (request, response) {
            response.render("home/index");
        },
        login: function (request, response) {
            var usuario = request.body.usuario;
            var email = usuario.email;
            var nome = usuario.name;
            if (email && nome) {
                usuario["contatos"] = [];
                request.session.usuario = usuario;
                response.redirect("/contatos");
            } else {
                response.redirect("/");
            }
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect("/");
        }
    };
    return HomeController;
};