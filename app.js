const express = require("express");
const app = express();
const path = require('path');

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// template Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota Routes
const userRoutes = require('./routes/userRoutes'); // Required do method userRouter (Router)
app.use('/users', userRoutes); // Quando usuario digitar na rota /users

const loginRoutes = require('./routes/loginRoutes');
app.use('/login', loginRoutes);

app.listen(3000, ()=>{
    console.log('Servidor Rodando na porta 3000')
});