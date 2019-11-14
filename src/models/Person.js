// @flow
// libs
import {Document, model, Schema} from 'mongoose';

// src
import {Person} from '../types';

const personSchema = new Schema<Schema & Person>(
  {
    name: String,
    address: String,
    city: String,
    phone: String,
    email: String,
  },
  {versionKey: false}
);

export const PersonModel = model<Document & Person>('Person', personSchema);
