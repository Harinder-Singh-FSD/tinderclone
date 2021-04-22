import express from "express";
import mongoose from "mongoose";
import User from "./model/userModel.js";
import Cors from "cors";
const app = express();
app.use(Cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const mongodb_uri =
  "mongodb+srv://harryadmin:harry1234@cluster0.xqkuy.mongodb.net/tinderdb?retryWrites=true&w=majority";
mongoose.connect(
  mongodb_uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) throw new Error("db not connected");
    console.log("db connected");
  }
);
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.post("/users/adduser", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      imgURL: req.body.imgURL,
    });
    await user.save();
    res.status(200).send({ msg: "User Created" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

app.listen(PORT, () => console.log("Server Connected"));
