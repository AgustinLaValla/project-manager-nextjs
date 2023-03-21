import { NextApiRequest, NextApiResponse } from "next";
import { deleteEntry, getEntryByID, updateEntry } from "./controllers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const responses = {
    'GET': () => getEntryByID(req, res),
    'PUT': () => updateEntry(req, res),
    'DELETE': () => deleteEntry(req, res)
  }

  const response = responses[req.method as keyof typeof responses];

  if (!response) return res.status(404).json({ ok: false, message: 'No route found' });

  return response();

}