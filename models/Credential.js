import * as bcrypt from "bcrypt";
import "jsonwebtoken";
import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import validator from "validator";

// Constants
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: [true, "That username is taken."],
      required: [true, "Enter a username."],
      validate: [
        validator.isAlphanumeric,
        "Usernames may only have letters and numbers.",
      ],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: [true, "That email address is taken."],
      required: [true, "Enter an email address."],
      validate: [validator.isEmail, "email is invalid"],
      index: true,
      select: false,
    },
    password: {
      type: String,
      required: [true, "Enter a password."],
      minLength: [4, "Password should be at least four characters"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "Retype your password."],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords don't match.",
      },
    },
    gender: {
      type: String,
      lowercase: true,
      default: "",
    },
    firstname: {
      type: String,
      required: [true, "Firstname can't be blank."],
    },
    lastname: {
      type: String,
      required: [true, "Lastname can't be blank."],
    },
    role: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.plugin(mongooseUniqueValidator, { message: "is already taken." });

// Passwords hashing
userSchema.pre("save", function (next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      user.passwordConfirm = undefined;
      next();
    });
  });
});

const Credential = mongoose.model("Credential", userSchema);

export { Credential };
