/* eslint-disable import/prefer-default-export */
import Local from 'passport-local';
// import passport from 'passport';
// import { findAdmin, validatePassword } from './user';
import Admin from '../models/Admin';

export const localStrategyAdmin = new Local.Strategy(Admin.authenticate());
