// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async index() {
    return 'GET users';
  }

  public async store() {
    return 'POST user';
  }

  public async create() {
    return 'POST user';
  }

  public async show({ params, view }) {
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
