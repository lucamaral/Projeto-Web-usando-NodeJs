module.exports = function (app) {
    var Schema = require("mongoose").Schema;
    var contato = Schema({
        name: String,
        email: String
    });
    var usuario = Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        contatos: [contato]
    });

    return db.model("usuarios", usuario);
};