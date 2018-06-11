var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");
module.exports = {
    show: function(request, response) {
        Quote.find({}, function(err, quotes){
          if(err){
            console.log("couldn't retrieve quotes");
          } else {
            response.render('quotes', {htmlquotes: quotes});
          }
        });
    },
    create: function(request, response) {
        let newQuote = new Quote();
        newQuote.name = request.body.user_name;
        newQuote.quote = request.body.quote;
      
        newQuote.save(function(err){
          if(err) {
            console.log("Something went wrong in saving the quote");
            response.redirect('/');
          } else {
            response.redirect('quotes');      
          }
      
        })
      }
}