const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(allCelebs => {
      res.render("celebrities/index", { celebrities: allCelebs });
    })
    .catch(function() {
      next();
      throw new Error("First Error.");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/show", { celebrity: celeb });
    })
    .catch(function() {
      next();
      throw new Error("This error is the worst one.");
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
    .then(() => res.redirect("/celebrities"))
    .catch(function() {
      next();
      throw new Error("This is the second worst one error.");
    });
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(deletedCeleb => res.redirect("/celebrities"))
    .catch(function() {
      next();
      throw new Error("This is the delete error.");
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => res.render("celebrities/edit", {celebrity: celeb}))
    .catch(function() {
      next();
      throw new Error("This is the edit error, ya know.");
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.body._id, req.body)
    .then(celeb => {
      res.redirect("/celebrities");
    })
    .catch(function() {
      next();
      throw new Error("Error editing dudes.");
    });
});

module.exports = router;
