const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mohansudesh:8328473594@task-manager.2chc0.mongodb.net/task-manager?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("DataBase Connected");
});
