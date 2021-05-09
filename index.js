const express = require("express");
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('assets'))
app.get('/', function (req, res) {
    res.render('index')
})
app.listen( 8080 || process.ENV.PORT, function(){console.log("Server start on port 8080 !")});