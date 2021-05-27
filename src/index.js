const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const Food = require("./models/food");
const foodData = require("./DummyData/food_data");
const foodRouter = require("./routers/food");

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("./Client/build"));
}

app.use(cors());
app.use(express.json());

// for (var foodItem in foodData) {
//   new Food(foodData[foodItem]).save().catch((err) => {
//     console.log(err.message);
//   });
// }

app.use(foodRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
