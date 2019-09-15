const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(allCelebs => {
      res.render("celebrities/index", { celebrities: allCelebs });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/show", { celebrity: celeb });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.create(newCeleb)
    .then(thisGuy => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
      res.render("celebrities/new");
    });
});

module.exports = router;
