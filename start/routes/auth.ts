import Route from '@ioc:Adonis/Core/Route';

Route.get('login', 'AuthController.showLogin')
Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')

Route.resource('/users', 'UsersController');