const app = require("express")()
var path = require('path');
var appDir = path.dirname(require.main.filename);

let parseArgs = require('minimist');
let aliases = {
    "p": "port",
    "port": "port"
};
const ARGS = parseArgs(process.argv.slice(2), {
    alias: aliases
});

app.get("/", (req, res) => {
    res.sendFile(appDir + "/index.html")
})

app.get("/script.js", (req, res) => {
    res.sendFile(appDir + "/script.js")
})

app.get("/style.css", (req, res) => {
    res.sendFile(appDir + "/style.css")
})

const PORT = process.env.PORT || ARGS.port || 80;

var server = app.listen(PORT, () => {
    console.log("Server running at " + server.address().address + server.address().port);
});
