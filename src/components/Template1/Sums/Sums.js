// @flow
// libs
import * as React from 'react'

// src
import { calculateSubTotal, calculateTotal, round } from './utils'
import { EditableText } from '../../EditableText'
import { useStyles } from './Sums.styles'
import { Values } from '../../../types'

type Props = {
  values: Values,
}

export function Sums({ values }: Props) {
  const styles = useStyles({})
  const { amountPaid, items, taxValue } = values.invoice
  const subTotalAmount = round(calculateSubTotal(items))
  const totalAmount = round(calculateTotal(subTotalAmount, taxValue))

  return (
    <section className={styles.root}>
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <th>Subtotal: </th>
            <td>{subTotalAmount}</td>
          </tr>
          <tr>
            <th>Tax (%): </th>
            <td>
              <EditableText name="invoice.taxValue" type="number" />
            </td>
          </tr>
          <tr className={styles.amountTotal}>
            <td colSpan={2}>£ {totalAmount}</td>
          </tr>
          <tr>
            <th>Amount Paid: </th>
            <td>
              <EditableText name="invoice.amountPaid" type="number" />
            </td>
          </tr>
          <tr className={styles.dueAmount}>
            <th>Amount Due: </th>
            <td>{totalAmount - amountPaid}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
