// src
import { INITIAL_VALUES } from '../containers/CreateInvoice/constants'
import { getPdf } from '../utils/puppeteer'
import { createInvoice, getInvoiceById } from './invoice'

export const handlers = {
  '/api/invoice': {
    POST: async (args, ctx) => {
      createInvoice(args)
      // return getPdf('http://localhost:3000')
    },
  },
  '/api/invoice/:id': {
    GET: async ({ id }) => {
      const { client, seller, ...invoice } = await getInvoiceById(id)

      return { client, seller, invoice }
    },
  },
}
