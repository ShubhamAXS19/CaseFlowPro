import { Request, Response } from "express";
const User = require("../models/Auth.model");
const passport = require("passport");

export const signup = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;

  // Validate user data
  // ...

  // Create new user with role
  const newUser = new User({ username, password, role });

  // Save user to database
  try {
    await newUser.save();
    req.login(newUser, (err) => {
      if (err) {
        return res.status(500).send("Error logging in");
      }
      res.redirect("/"); // Redirect to home page
    });
  } catch (err) {
    // Handle errors
    res.status(500).send("Error creating user");
  }
};

export const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
});
