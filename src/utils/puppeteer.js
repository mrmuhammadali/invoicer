// @flow
// libs
import * as puppeteer from 'puppeteer'

export async function getPdf(url: string): Promise<Buffer> {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })
  const pdf = await page.pdf({ format: 'A4' })
  await browser.close()

  return pdf
}
