// @flow
// src
import { InvoiceItem } from '../../../types'

export function calculateSubTotal(items: InvoiceItem[]): number {
  return items.reduce((sum: number, { quantity, unitPrice }: InvoiceItem) => {
    return quantity * unitPrice + sum
  }, 0)
}

export function calculateTotal(subTotal: number, tax: number): number {
  return (subTotal / 100) * tax + subTotal
}

export function round(number: number) {
  return Math.round(number * 100) / 100
}
