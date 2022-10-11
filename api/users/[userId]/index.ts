// https://vercel.com/docs/runtimes#official-runtimes/node-js/using-type-script-with-the-node-js-runtime
import type {VercelRequest, VercelResponse} from '@vercel/node'
import {users} from '../index'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const {userId} = req.query
  const user = users.find(({id}) => id === +userId) ?? null
  res.json({user})
}
