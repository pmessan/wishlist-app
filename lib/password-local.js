/* eslint-disable import/prefer-default-export */
import Local from 'passport-local';
// import passport from 'passport';
// import { findUser, validatePassword } from './user';
import User from '../models/User';

// export const localStrategy = new Local.Strategy((
//   username,
//   password,
//   done,
// ) => {
//   findUser({ username })
//     .then((user) => {
//       // console.log('User found.');
//       console.log(user);
//       if (user && validatePassword(user, password)) {
//         done(null, user);
//       } else {
//         console.log(user);
//         done(new Error('Invalid username and password combination'));
//       }
//     })
//     .catch((error) => {
//       done(error);
//     });
// });

export const localStrategy = new Local.Strategy(User.authenticate());

// passport.use(User.createStrategy());
// passport.authenticate('local')(() => {
//   console.log('Authenticated');
// });
