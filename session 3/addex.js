express = require("express");

app = express();

app.get("/:a/:b", function(req, res) {
    a = parseInt(req.params.a);
    b = parseInt(req.params.b);
    c = a + b;
    res.send("<h1>" + c + "</h1>");
});

app.listen(9000, function() {
    console.log("Listening on port 9000");
});