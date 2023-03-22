const express = require('express');
const app = express();
const routes = require("./routes/routes");
const PORT = 8080 || 8000;
app.use(express.json());
routes(app);
(async function(){
    try {
        app.listen(PORT, async () => {
            try {
                console.log(`App is started on port ${PORT}...`)
            } catch (error) {
                console.log(`error:`, error);
            }
        });

    } catch (e) {
        console.log("server error", e.message);
        process.exit(1);
    }
})()
