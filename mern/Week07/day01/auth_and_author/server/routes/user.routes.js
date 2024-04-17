const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config')


module.exports = app => {
    app.post('/api/users/register', UserController.register);
    app.post('/api/users/login', UserController.login)
    app.post('/api/users/logout', UserController.logout)

    // Get All users
    // this authenticate is protecting users info, after this authenticate if the user have no token they cant get user info
    app.get('/api/users', authenticate, UserController.getAllUsers)
}