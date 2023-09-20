const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dineshtogare:dinesh123@shopping-app.uprdddq.mongodb.net/LoginSignupFacebook"
  )

  .then(() => {
    // console.log("mongodb connected");
  })
  .catch(() => {
    // console.log("failed to connected");
  });

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{ timestamps: true } );

const shop_user = new mongoose.model("shop_user", LogInSchema);

module.exports = shop_user;
