// src
import { BASE_URL } from '../constants';
import { createInvoice, getInvoiceById } from './invoice'
import { getPdf } from '../utils/puppeteer'
import { Values } from '../types'

export const handlers = {
  '/api/invoice': {
    POST: (values: Values) => createInvoice(values),
  },
  '/api/invoice/download': {
    POST: (values: Values) => {
      return createInvoice(values).then(res =>
        getPdf(`${BASE_URL}/${values.invoice.invoiceId}`),
      )
    },
  },
  '/api/invoice/:id': {
    GET: async ({ id }) => {
      return getInvoiceById(id).then(res => {
        if (!res) {
          return Promise.reject(new Error("Invoice doesn't exist."))
        }

        const { client, seller, ...invoice } = res
        return { client, seller, invoice }
      })
    },
  },
}
