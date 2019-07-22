// @flow
// libs
import { Document, model, Schema } from 'mongoose'

// src
import { Invoice, InvoiceItem } from '../types'

const invoiceItemSchema = new Schema<Schema & InvoiceItem>(
  {
    description: String,
    quantity: Number,
    unitPrice: Number,
  },
  { _id: false },
)

const invoiceSchema = new Schema<Schema & Invoice>(
  {
    invoiceId: String,
    issueDate: String,
    dueDate: String,
    currency: String,
    taxValue: Number,
    amountPaid: Number,
    terms: String,
    items: [invoiceItemSchema],
    client: { type: Schema.Types.ObjectId, ref: 'Person' },
    seller: { type: Schema.Types.ObjectId, ref: 'Person' },
  },
  { versionKey: false },
)

export const InvoiceModel = model<Document & Invoice>('Invoice', invoiceSchema)
