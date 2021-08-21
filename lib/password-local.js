/* eslint-disable import/prefer-default-export */
import Local from 'passport-local';
// import passport from 'passport';
// import { findUser, validatePassword } from './user';
import User from '../models/User';

export const localStrategy = new Local.Strategy(User.authenticate());

// passport.use(User.createStrategy());
// passport.authenticate('local')(() => {
//   console.log('Authenticated');
// });
