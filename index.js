const express = require("express");
const app = express();

var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quote", { useNewUrlParser: true, useUnifiedTopology: true });

const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    createdAt: {
        type: Number,
        default: Date.now,
    },
})
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('User', QuoteSchema);

app.get('/', (req, res) => {
        res.render('index');
});

app.get('/quote', (req, res) => {
    arr = Quote.find({},(err, quotes) => {
      res.render('quote', {arr:quotes});
    })
  })
 

  app.post('/new', (req, res) =>{
    const quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save()
      .then(newQuoteData => console.log('user created: ', newQuoteData))
      .catch(err => console.log(err));
     
    res.redirect('/');
  })
  





  app.listen(8000, () => console.log("listening on port 8000"));







