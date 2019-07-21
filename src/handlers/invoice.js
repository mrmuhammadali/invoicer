// src
import { InvoiceModel } from '../models/Invoice'
import { ClientModel } from '../models/Client'
import { SellerModel } from '../models/Seller'

export async function createInvoice(params) {
  const client = new ClientModel(params.client)
  const seller = new SellerModel(params.seller)
  const invoice = new InvoiceModel({ ...params.invoice, seller, client })

  const result = await invoice
    .save()
    .then(() => client.save())
    .then(() => seller.save())

  console.log(result)
}

export async function getInvoiceById(invoiceId) {
  const invoice = await InvoiceModel.findOne({ invoiceId })
    .populate('client')
    .populate('seller')
    .lean()

  return invoice
}
