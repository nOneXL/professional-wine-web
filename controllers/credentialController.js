import { Credential } from "../models/Credential.js";

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


export { create };
