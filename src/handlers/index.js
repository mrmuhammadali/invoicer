// src
import { INITIAL_VALUES } from '../containers/CreateInvoice/constants'
import { getPdf } from '../utils/puppeteer'
import { createInvoice, getInvoiceById } from './invoice'
import { Values } from '../types'

export const handlers = {
  '/api/invoice': {
    POST: (values: Values) => createInvoice(values),
  },
  '/api/invoice/download': {
    POST: (values: Values) => {
      return createInvoice(values).then(res =>
        getPdf(`http://localhost:3000/${values.invoice.invoiceId}`),
      )
    },
  },
  '/api/invoice/:id': {
    GET: async ({ id }) => {
      const { client, seller, ...invoice } = await getInvoiceById(id)

      return { client, seller, invoice }
    },
  },
}
