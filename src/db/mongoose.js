const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/search-widget-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DataBase Connected");
});
