import { Credential } from "../models/Credential.js";
import * as bcrypt from "bcrypt";

const create = async (req, res) => {
  const user = new Credential({
    username: req.body.username,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
  });

  await user.save().catch((err) => console.error(err));
  res.redirect("/users/login"); // Should be changed as needed
};

const read = async (req, res) => {
  let user = await Credential.findOne({ username: req.body.username }).catch(
    (err) => console.error(err)
  );

  if (user == null) return res.status(400).send("Cannot find user");
  if (
    await bcrypt
      .compare(req.body.password, user.password)
      .catch((err) => res.status(500).send(`whoops ${err}`))
  )
    res.send("Allowed"); // Should be changed as needed
  else res.send("User or password are incorrect"); // Should be changed as needed
};

const test = async (req, res) => {
  const user = await Credential.findOne({ _id: "637150980d01b837974638be" });
  res.send(user);
};

export { create, read, test };
