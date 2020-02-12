const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/userName/:id', ensureAuthenticated, AuthController.updateName);
  router.put('/userEmail/:id', ensureAuthenticated, AuthController.updateEmail);
  router.put('/userPhone/:id', ensureAuthenticated, AuthController.updatePhone);
  router.put('/userPassword/:id', ensureAuthenticated, AuthController.updatePassword);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

   // App
   router.get('/listed-app', AppController.getListedApp);


  return router;

};
