const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/college-erp").then(() => {
  const db = mongoose.connection;
  db.collection("users")
    .countDocuments()
    .then((count) => {
      console.log("Users in database:", count);
      db.collection("users")
        .find({})
        .limit(1)
        .toArray()
        .then((doc) => {
          console.log("First user:", doc[0]);
          mongoose.connection.close();
        });
    });
});
