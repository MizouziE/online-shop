import Route from '@ioc:Adonis/Core/Route';

Route.get('login', 'AuthController.showLogin')
Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')

Route.get('signup', 'AuthController.signupForm')
Route.post('signup', 'AuthController.signup')

Route.resource('/users', 'UsersController').apiOnly();