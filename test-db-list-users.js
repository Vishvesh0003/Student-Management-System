const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/college-erp").then(() => {
  const db = mongoose.connection;
  db.collection("users")
    .find({})
    .toArray()
    .then((docs) => {
      console.log("All users:");
      docs.forEach((u) => console.log(`- ${u.email} (${u.role})`));
      mongoose.connection.close();
    });
});
