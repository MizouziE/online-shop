// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

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

  public async show() {
    return 'GET user';
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
