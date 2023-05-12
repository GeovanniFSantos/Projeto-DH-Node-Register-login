const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(session({
    secret: "projetoExpress",
    resave: true,
    saveUninitialized: true
}));

app.use(express.static('./public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// template Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota Routes
const logMiddleware = require('./middlewares/logMiddleware');
app.use(logMiddleware.toConsole);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const loginRoutes = require('./routes/loginRoutes');
app.use('/login', loginRoutes);

const adminRoutes = require('./routes/adminRoutes')
app.use('/admin', adminRoutes);

const produto = require('./routes/produtoRoutes');
app.use('/produto', produto);


app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000')
});