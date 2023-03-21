import { NextApiRequest, NextApiResponse } from "next";
import { createEntry, getEntries } from "./controllers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const responses = {
    'GET': () => getEntries(req, res),
    'POST': () => createEntry(req, res)
  }

  const method = req.method;
  const response = responses[method as keyof typeof responses];
  
  return response
    ? response()
    : res.status(405).json({ ok: false, message: 'No route found' });

}