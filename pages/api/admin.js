import { getLoginSession } from '../../lib/auth';
import { findAdmin } from '../../lib/admin';

export default async function admin(req, res) {
  try {
    const session = await getLoginSession(req);
    // console.log('admin session');
    // console.log(session);
    const admin = (session && (await findAdmin(session))) ?? null;

    res.status(200).json({ admin });
  } catch (error) {
    console.error(error);
    res.status(500).end('Authentication token is invalid, please log in');
  }
}
