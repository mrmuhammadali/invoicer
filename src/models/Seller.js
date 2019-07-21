// @flow
// libs
import { Document, model, Schema } from 'mongoose'

// src
import { clientSchema } from './Client'
import { invoiceSchema } from './Invoice'
import { Seller } from '../types'

export const sellerSchema = new Schema<Schema & Seller>(
  {
    name: String,
    address: String,
    city: String,
    phone: String,
    email: String,
  },
  { versionKey: false },
)

export const SellerModel = model<Document & Seller>('Seller', sellerSchema)
