import * as puppeteer from 'puppeteer'

import { INITIAL_VALUES } from '../containers/CreateInvoice/constants'

export const handlers = {
  '/api/invoice': {
    POST: async (args, ctx) => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })
      const pdf = await page.pdf({ format: 'A4' })
      await browser.close()

      return pdf
    },
  },
  '/api/invoice/:id': {
    GET: async ({ id }) => {
      return { ...INITIAL_VALUES, isEditable: false }
    },
  },
}
