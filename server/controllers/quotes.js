const mongoose = require("mongoose");
const Quote = mongoose.model('Quote');


module.exports = {

    index: function(req, res){
        res.render("index");
    },

    quotePage: function(req, res){
        Quote.find({},(err, quotes) => {
            res.render('quote', {quote :quotes});
          })
    },

    addQuote: function(req, res){
        const quote = new Quote();
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
          .then(newQuoteData => console.log('new Quote Added: ', newQuoteData))
          .catch(err => console.log(err));
        res.redirect('/');
    }
}