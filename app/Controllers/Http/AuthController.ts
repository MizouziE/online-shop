// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import mongoose from "mongoose";

import User from "App/Models/User";

export default class AuthController {
  public async showLogin({ view }) {
    return view.render('login');
  }

  public async login({ request, response, auth }) {
    await auth.attempt(request.input('uid'), request.input('password'), true);
    response.redirect('/');
  }

  public async logout({ response, auth }) {
    await auth.logout();
    response.redirect('/login');
  }

  public async signupForm({ view }) {
    console.log('under this one');
    return view.render('signup');
  }

  public async signup({ request, response }) {
    const newUser = new User
  //   const userData = request.body();
  //   const userName = userData.name;
  //   const enteredEmail = userData.email;
  //   const enteredConfirmEmail = userData['confirm-email'];
  //   const enteredPassword = userData.password;
  //   const enteredConfirmPassword = userData['confirm-password'];
  //   const fullTing = request.only(['name', 'email', 'password']);

    // console.log(fullTing);
    // response.redirect('/signup');
    // return;

    // if (
    //   !enteredEmail ||
    //   !enteredConfirmEmail ||
    //   !enteredPassword ||
    //   enteredPassword.trim() < 6 ||
    //   enteredEmail !== enteredConfirmEmail ||
    //   !enteredEmail.includes('@')
    // ) {

    //   request.session.inputData = {
    //     hasError: true,
    //     message: 'Nah fam, that ain\'t gonna run...',
    //     email: enteredEmail,
    //     confirmEmail: enteredConfirmEmail,
    //     password: enteredPassword
    //   };

    //  mongoose.db.users.insertOne(fullTing);
    return;
    // }
  }
}
