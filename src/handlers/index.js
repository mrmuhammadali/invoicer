import { INITIAL_VALUES } from '../containers/CreateInvoice/constants'
import { getPdf } from '../utils/puppeteer'

export const handlers = {
  '/api/invoice': {
    POST: async (args, ctx) => {
      return getPdf('http://localhost:3000')
    },
  },
  '/api/invoice/:id': {
    GET: async ({ id }) => {
      return { ...INITIAL_VALUES, isEditable: false }
    },
  },
}
