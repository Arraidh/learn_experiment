const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Opened");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}