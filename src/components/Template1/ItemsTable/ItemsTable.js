// @flow
// libs
import * as React from 'react'
import { ArrayHelpers, Field, FieldArray, FormikProps } from 'formik'

// src
import { EditableText } from '../../EditableText'
import { Item, Values } from '../../types'
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
            name="items"
            render={(fieldArrayProps: FieldArrayProps) => {
              const {
                form: {
                  values: { items = [] },
                },
                remove,
              } = fieldArrayProps

              return (
                <React.Fragment>
                  {items.map(({ quantity, unitPrice }, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Field
                          name={`items[${index}].description`}
                          component={EditableText}
                        />
                      </td>
                      <td>
                        <Field
                          name={`items[${index}].quantity`}
                          type="number"
                          component={EditableText}
                        />
                      </td>
                      <td>
                        <Field
                          name={`items[${index}].unitPrice`}
                          type="number"
                          component={EditableText}
                        />
                      </td>
                      <td>{quantity * unitPrice}</td>
                      <td>
                        <button
                          className="dontPrint"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              )
            }}
          />
        </tbody>
      </table>
      <FieldArray
        name="items"
        render={({ push }: FieldArrayProps) => (
          <button
            className="dontPrint"
            type="button"
            onClick={() => push(ITEM)}
          >
            Add a row
          </button>
        )}
      />
    </section>
  )
}
