var quotes = require("../controllers/quotes");

module.exports = function(app) {


    app.get('/', quotes.index)

    app.get("/quote", quotes.quotePage)   

    app.post("/new", quotes.addQuote)
}