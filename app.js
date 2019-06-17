const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const celebrate = require("celebrate");

mongoose.connect("mongodb://localhost/commission_tracker", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(express.urlencoded({extended: "false"}));
app.use(express.json());


app.use(require("./routes"));
app.use(celebrate.errors());


app.listen(port, () => console.log(`Server is listening on port ${port}`));