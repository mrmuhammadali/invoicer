// @flow
// src
import {createOrUpdatePerson} from './person';
import {InvoiceModel} from '../models/Invoice';
import {Values} from '../types';

export async function createInvoice(values: Values) {
  const foundInvoice = await getInvoiceById(values.invoice.invoiceId);

  if (foundInvoice) {
    return Promise.resolve(foundInvoice);
  }

  const clientPromise = createOrUpdatePerson(values.client);
  const sellerPromise = createOrUpdatePerson(values.seller);

  return Promise.all([clientPromise, sellerPromise])
    .then(
      ([client, seller]) =>
        new InvoiceModel({...values.invoice, client, seller})
    )
    .then(invoice => invoice.save());
}

export async function getInvoiceById(invoiceId) {
  return InvoiceModel.findOne({invoiceId}, {_id: 0})
    .populate({path: 'client', select: {_id: 0}})
    .populate({path: 'seller', select: {_id: 0}})
    .lean();
}
