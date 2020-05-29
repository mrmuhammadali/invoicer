// @flow
// src
import {BASE_URL} from '../constants';
import {createInvoice, getInvoiceById, getInvoices} from './invoice';
import {getPdf} from '../utils/puppeteer';

export const handlers = {
  '/api/invoice': {
    POST: ({body: values}) => createInvoice(values),

    '/all': {GET: getInvoices},

    '/download': {
      POST: ({body: values}) => {
        return createInvoice(values).then(res =>
          getPdf(`${BASE_URL}/${values.invoice.invoiceId}`)
        );
      },
    },

    '/:id': {
      GET: async ({params: {id}}) => {
        return getInvoiceById(id).then(res => {
          if (!res) {
            return Promise.reject(new Error("Invoice doesn't exist."));
          }

          const {client, seller, ...invoice} = res;
          return {client, seller, invoice};
        });
      },
    },
  },
};
