// @flow
// libs
import { Document, model, Schema } from 'mongoose'

// src
import { invoiceSchema } from './Invoice'
import { Client } from '../types'

export const clientSchema = new Schema<Schema & Client>(
  {
    name: String,
    address: String,
    city: String,
    phone: String,
    email: String,
  },
  { versionKey: false },
)

export const ClientModel = model<Document & Client>('Client', clientSchema)
