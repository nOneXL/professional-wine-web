import bcrypt from "bcrypt";

import { Strategy as LocalStrategy } from "passport-local";
import { Credential } from "../models/Credential.js";

function initializePassport(passport) {

  const authenticateUser = async (username, password, done) => {
    const user = await Credential.findOne({ username: username });
    if (user == null) {
      return done(null, false, { message: "No user with that username" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };


  passport.use(
    new LocalStrategy({ usernameField: "username" }, authenticateUser)
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, async (id) => {
      const user = await Credential.findOne({_id: id})
      return user.id
    });
  });
}

export default initializePassport;
