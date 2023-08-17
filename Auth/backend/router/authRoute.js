const express = require('express');
const {signUp, signIn, getUser, logOut} = require('../controller/authController.js');
const jwtAuth = require('../middleware/jwtAuth.js')
const authRouter = express.Router();


authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.get('/user', jwtAuth, getUser);
authRouter.get('/logOut', jwtAuth, logOut);

module.exports = authRouter;