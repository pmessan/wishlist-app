/* eslint-disable consistent-return */
import crypto from 'crypto';
// import { v4 as uuidv4 } from 'uuid';
import passport from 'passport';
import dbConnect from '../utils/dbConnect';
import Admin from '../models/Admin';

/**
 * Admin methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

// const users = [];

export async function createAdmin(res, { username, password }) {
  await dbConnect();

  await Admin.register({ username }, password, (err, user) => {
    if (err) {
      console.log(err);
      res.redirect('/admin-signup');
    } else {
      passport.authenticate('local')(() => {
        res.redirect('/');
      });
    }
  });

  return { username, createdAt: Date.now() };
}

// Here you should lookup for the user in your DB
export async function findAdmin({ username }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  await dbConnect();
  const result = await Admin.find({ username }, (err, admin) => {
    if (err) {
      console.log(err);
    } else if (admin) {
      return admin;
    }
  });
  return result;
}

// Compare the password of an already fetched user (using `findAdmin`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
