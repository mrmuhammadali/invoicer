// @flow
// libs
import * as React from 'react'
import { Field } from 'formik'

// src
import { calculateSubTotal, calculateTotal } from './utils'
import { EditableText } from '../../EditableText'
import { useStyles } from './Sums.styles'
import { Values } from '../../types'

type Props = {
  values: Values,
}

export function Sums({ values }: Props) {
  const styles = useStyles({})
  const { amountPaid, items, taxValue } = values
  const subTotalAmount = calculateSubTotal(items)
  const totalAmount = calculateTotal(subTotalAmount, taxValue)

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
              <Field name="taxValue" type="number" component={EditableText} />
            </td>
          </tr>
          <tr className={styles.amountTotal}>
            <td colSpan={2}>{totalAmount}</td>
          </tr>
          <tr>
            <th>Amount Paid: </th>
            <td>
              <Field name="amountPaid" type="number" component={EditableText} />
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
