// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async index() {
    return 'GET users';
  }

  public async store(req, res) {
    const userData = req.body;
    const enteredEmail = userData.email;
    const enteredConfirmEmail = userData['confirm-email'];
    const enteredPassword = userData.password;
  
    if (
      !enteredEmail ||
      !enteredConfirmEmail ||
      !enteredPassword ||
      enteredPassword.trim() < 6 ||
      enteredEmail !== enteredConfirmEmail ||
      !enteredEmail.includes('@')
    ) {
  
      req.session.inputData = {
        hasError: true,
        message: 'Nah fam, that ain\'t gonna run...',
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword
      };
  
      req.session.save(function () {
        res.redirect('/signup');
      });
      return;
    }
  }

  public async show({ view }) {
    const user = await User.find();
    return view.render('users/index', { user });
  }

  public async update() {
    return 'PATCH user';
  }

  public async edit() {
    return 'GET user';
  }

  public async destroy() {
    return 'DELETE user';
  }
}
