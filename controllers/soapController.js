const response = require("./../response");
const soap = require("soap");
const Cookie = require("soap-cookie")
exports.soap = async (req, res) => {
    const url = "http://ws.tradetracker.com/soap/affilate?wsdl";
    soap.createClient(url, function (err, client) {
        if(err) {
            res.send(err)
        } else {
            const args = {
                customerID: "",
                passphrase: "",
                sandbox: false,
                locale: "de_DE",
                demo: false
            }
            const header = client.lastRequestHeaders;
            client.setSecurity(new Cookie(header));
            client.authenticate(args, function (err, response, headers) {
                res.send(response)
            })
        }
    })
};
