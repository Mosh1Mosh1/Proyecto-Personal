var express = require("express")

var app = express()

app.get("/", function (require, res) {
    res.send("hola")
})

app.listen(3000, function (err) {
    if (err) return console.log("hubo un error"), process.exit(1)
    else
        console.log("esta escuchando")
}) 