function toConsole(req, res, next){
    console.log(`O usuario acessou a rota ${req.url}.`);
    next();
};

module.exports = {
    toConsole,
}