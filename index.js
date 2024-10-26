const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Opened");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//Structurize the data
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// Bind the schema to be model database
const Movie = mongoose.model("Movie", movieSchema);

const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 5,
  rating: "Nice la",
});
