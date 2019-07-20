import { INITIAL_VALUES } from '../containers/CreateInvoice/constants'

export const handlers = {
  '/api/invoice': {
    POST: async (args) => {
      console.log('server->', args)

      return {}
    },
  },
  '/api/invoice/:id': {
    GET: async ({ id }) => {
      return { ...INITIAL_VALUES, isEditable: false }
    },
  },
}
