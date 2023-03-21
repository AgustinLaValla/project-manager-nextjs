import { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "@/models";
import { db } from "@/database";

export const getEntries = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();
    return res.status(200).json({ ok: true, entries })
  } catch (error) {
    console.log({ error });
    await db.disconnect();
    return res.status(500).json({ ok: false, message: 'Internal Server Error' });
  }
}

export const createEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { description } = body;

  if (!description) return res.status(400).json({ ok: false, message: 'Description is required' });

  try {


    await db.connect();
    const entry = new Entry({ description });
    await entry.save();
    await db.disconnect();

    return res.status(201).json({ ok: true, entry, message: 'Entry successfully created' })

  } catch (error) {
    console.log({ error });
    await db.disconnect();
    return res.status(500).json({ ok: false, message: 'Internal Server Error' });
  }
}