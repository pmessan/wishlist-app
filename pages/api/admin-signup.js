import { createAdmin } from '../../lib/admin';

export default async function signup(req, res) {
  try {
    await createAdmin(res, req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}
