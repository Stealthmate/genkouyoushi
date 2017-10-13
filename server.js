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

const CONTENT = [
    "script.js",
    "style.css",
    "github.png"
]

app.get("/", (req, res) => {
    res.sendFile(appDir + "/index.html")
})

for (f of CONTENT) {
    (fname => {
        app.get("/" + fname, (req, res) => {
            console.log(fname)
            res.sendFile(appDir + "/" + fname);
        })
    })(f);
}

const PORT = process.env.PORT || ARGS.port || 80;

var server = app.listen(PORT, () => {
    console.log("Server running at " + server.address().address + server.address().port);
});
