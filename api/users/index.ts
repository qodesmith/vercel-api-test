// https://vercel.com/docs/runtimes#official-runtimes/node-js/using-type-script-with-the-node-js-runtime
import type {VercelRequest, VercelResponse} from '@vercel/node'

const users = [
  {id: 1, name: 'Qodesmith'},
  {id: 2, name: 'Wolverine'},
  {id: 3, name: 'Link'},
]

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.json({users})
}
