// @flow
// libs
import addWeeks from 'date-fns/addWeeks';
import format from 'date-fns/format';

// src
import {makeUID} from '../../utils';

const DATE_TEMPLATE = 'yyyy-MM-dd';
const issueDate = format(new Date(), DATE_TEMPLATE);
const dueDate = format(addWeeks(new Date(), 1), DATE_TEMPLATE);

export const INITIAL_VALUES = {
  seller: {
    name: 'Company Name',
    address: 'Company address',
    city: 'City',
    phone: 'Phone',
    email: 'email@company.com',
  },

  client: {
    name: 'Client Name',
    address: 'Client address',
    city: 'City',
    phone: 'Phone',
    email: 'email@client.com',
  },

  invoice: {
    invoiceId: makeUID(),
    issueDate,
    dueDate,

    currency: 'GBP',
    taxValue: 7,
    amountPaid: 0,
    terms:
      'If you have any questions about this invoice, please contact X, Thank you.',
    items: [
      {
        id: 1,
        description: 'Enter item description here...',
        quantity: 0,
        unitPrice: 0,
      },
    ],
  },

  isEditable: true,
};
