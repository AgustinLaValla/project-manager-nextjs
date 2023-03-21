import { Schema, model, Document, models } from 'mongoose'

type EntryStatus = 'pending' | 'in-progress' | 'finished';

interface IEntry extends Document {
  description: string;
  createdAt: number;
  status: EntryStatus;
}

const EntrySchema = new Schema<IEntry>({
  description: { type: String, required: true },
  createdAt: { type: Number, default: Date.now() },
  status: {
    type: String,
    default: 'pending'
  }
});

export const Entry = models.Entry || model<IEntry>('Entry', EntrySchema);