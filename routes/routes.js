const soapController = require("../controllers/soapController");

module.exports = (app) => {
    app.route("/soap").get(soapController.soap);
};
