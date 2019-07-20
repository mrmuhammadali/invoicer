// @flow
// src
import { Item } from '../../types'

export function calculateSubTotal(items: Item[]): number {
  return items.reduce((sum: number, { quantity, unitPrice }: Item) => {
    return quantity * unitPrice + sum
  }, 0)
}

export function calculateTotal(subTotal: number, tax: number): number {
  return (subTotal / 100) * tax + subTotal
}
