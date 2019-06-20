const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const expressSession = require("express-session");
const MongoStore = require('connect-mongo')(expressSession);
const CookieParser = require("cookie-parser");
const app = express();
const celebrate = require("celebrate");



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(CookieParser());

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(express.urlencoded({extended: "false"}));
app.use(express.json());

app.use(morgan("combined"));

const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());


app.use(require("./routes"));
app.use(celebrate.errors());


module.exports = app;