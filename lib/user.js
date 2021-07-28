/* eslint-disable consistent-return */
import crypto from 'crypto';
// import { v4 as uuidv4 } from 'uuid';
import passport from 'passport';
import dbConnect from '../utils/dbConnect';
import User from '../models/User';

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

// const users = [];

export async function createUser(res, { username, password }) {
  await dbConnect();

  await User.register({ username }, password, (err, user) => {
    if (err) {
      console.log(err);
      res.redirect('/signup');
    } else {
      passport.authenticate('local')(() => {
        res.redirect('/');
      });
    }
  });

  return { username, createdAt: Date.now() };
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  await dbConnect();
  const result = await User.find({ username }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      return user;
    }
  });
  return result;
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
