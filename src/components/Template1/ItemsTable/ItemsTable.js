// @flow
// libs
import * as React from 'react'
import {
  ArrayHelpers,
  FieldArray,
  FormikProps,
  useField,
  useFormikContext,
} from 'formik'

// src
import { EditableText } from '../../EditableText'
import { Item, Values } from '../../../types'
import { useStyles } from './ItemsTable.styles'

const ITEM: Item = {
  description: 'Enter description here...',
  quantity: 0,
  unitPrice: 0,
}

type FieldArrayProps = ArrayHelpers & {
  form: FormikProps<Values>,
  name: string,
}

export function ItemsTable() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <FieldArray
            name="invoice.items"
            render={(fieldArrayProps: FieldArrayProps) => {
              const {
                form: {
                  values: {
                    invoice: { items = [] },
                    isEditable
                  },
                },
                remove,
              } = fieldArrayProps

              return items.map(({ quantity, unitPrice }, index) => {
                const itemString = `invoice.items[${index}]`

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <EditableText name={`${itemString}.description`} />
                    </td>
                    <td>
                      <EditableText
                        name={`${itemString}.quantity`}
                        type="number"
                      />
                    </td>
                    <td>
                      <EditableText
                        name={`${itemString}.unitPrice`}
                        type="number"
                      />
                    </td>
                    <td>{quantity * unitPrice}</td>
                    <td>
                      {isEditable && <button
                        className="dontPrint"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        X
                      </button>}
                    </td>
                  </tr>
                )
              })
            }}
          />
        </tbody>
      </table>
      <FieldArray
        name="invoice.items"
        render={({ push, form: { values: { isEditable } } }: FieldArrayProps) => isEditable ? (
            <button
              className="dontPrint"
              type="button"
              onClick={() => push(ITEM)}
            >
              Add a row
            </button>
        ) : null}
      />
    </section>
  )
}
