// libs
import addWeeks from 'date-fns/add_weeks'
import format from 'date-fns/format'

// src
import { makeUID } from '../../utils'

const DATE_TEMPLATE = 'YYYY-MM-DD'
const issueDate = format(new Date(), DATE_TEMPLATE)
const dueDate = format(addWeeks(issueDate, 1), DATE_TEMPLATE)

export const INITIAL_VALUES = {
  seller: {
    name: 'N A Builders',
    address: 'Stone Lane',
    city: 'Peterborough',
    phone: '07859936081',
    email: 'mr.muhammad.ali@live.com',
  },

  client: {
    name: 'Mark Wood',
    address: 'Park Road',
    city: 'Peterborough',
    phone: '079xxxxxxx',
    email: 'email@email.com',
  },

  invoice: {
    invoiceId: makeUID(),
    issueDate,
    dueDate,

    currency: 'GBP',
    taxValue: 3,
    amountPaid: 100,
    terms:
      'If you have any questions about this invoice, please contact Anjum 07989406091, Thank you.',
    items: [
      { id: 1, description: 'Item description 1', quantity: 1, unitPrice: 100 },
      { id: 2, description: 'Item description 2', quantity: 2, unitPrice: 200 },
      { id: 3, description: 'Item description 3', quantity: 3, unitPrice: 300 },
    ],
  },

  isEditable: true,
}
