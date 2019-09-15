const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  Celebrities.deleteMany()
    .then(deleted => {
      return Celebrities.deleteMany();
    })
    .then(celebritiesDroppedInfo => {
      Celebrities.create([
        {
          name: "Harrison Ford",
          occupation: "Actor",
          catchPhrase: "It's not the years, honey. It's the mileage."
        },
        {
          name: "Arnold Schwarzenegger",
          occupation: "Actor",
          catchPhrase: "I'll be back."
        },
        {
          name: "Keanu Reeves",
          occupation: "Actor",
          catchPhrase: "You're breathtaking!"
        }
      ])
        .then(addedCelebrities => {
          process.exit(0);
        });
    })
    .catch(error => {
      console.log(error);
    });
}
