const db = require("../models");
​
// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then((dbModel) => {res.json(dbModel)
          console.log(dbModel)
      })

      .catch(err => res.status(422).json(err));
  },

};
