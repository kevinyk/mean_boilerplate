let path = require('path');
module.exports = (app) => {
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}