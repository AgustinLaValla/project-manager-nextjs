import { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "@/models";
import { db } from "@/database";

export const getEntryByID = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect();

    const entry = await Entry.findById(req.query.id);

    await db.disconnect();

    if (!entry) return res.status(404).json({ ok: false, message: 'No entry found' });


    return res.status(200).json({ ok: true, message: 'Success', entry });

  } catch (error) {
    console.log({ error });
    await db.disconnect();
    return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}

export const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    await db.connect();

    const entry = await Entry.findById(req.query.id);

    if (!entry) {
      await db.disconnect();
      return res.status(404).json({
        ok: false,
        message: 'No entry found'
      });
    }

    const { description, status } = req.body;

    const updatedEntry = await Entry.findOneAndUpdate({ _id: req.query.id },
      { $set: { description, status } },
      {
        runValidators: true,
        new: true
      }
    );
    await db.disconnect();


    return res.status(200).json({ ok: true, message: 'Success', entry: updatedEntry });

  } catch (error) {
    console.log({ error })
    await db.disconnect();
    return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}

export const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect();

    const entry = await Entry.findByIdAndDelete(req.query.id);
    await db.disconnect();

    return res.status(200).json({ ok: true, message: 'Success', entry });

  } catch (error) {
    console.log({ error })
    await db.disconnect();
    return res.status(500).json({ ok: false, message: 'Internal server error' });
  }
}