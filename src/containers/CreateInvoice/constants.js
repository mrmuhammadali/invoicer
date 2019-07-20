// src
import { makeUID } from '../../utils'

export const INITIAL_VALUES = {
  companyName: 'N A Builders',
  companyAddress: 'Stone Lane',
  companyCity: 'Peterborough',
  companyPhone: '07859936081',
  companyEmail: 'mr.muhammad.ali@live.com',

  invoiceNumber: makeUID(),
  invoiceTitle: 'Invoice',
  createDate: '2019-06-06',
  dueDate: '2019-06-16',

  clientName: 'Mark Wood',
  clientAddress: 'Park Road',
  clientCity: 'Peterborough',
  clientPhone: '079xxxxxxx',
  clientEmail: 'email@email.com',

  currency: 'GBP',
  taxValue: 3,
  amountPaid: 100,
  terms:
    'If you have any questions about this invoice, please contact Anjum 07989406091, Thank you.',
  items: [
    { description: 'Item description 1', quantity: 2, unitPrice: 100 },
    { description: 'Item description 2', quantity: 4, unitPrice: 150 },
    { description: 'Item description 2', quantity: 4, unitPrice: 150 },
    { description: 'Item description 2', quantity: 4, unitPrice: 150 },
  ],
  isEditable: true,
}
