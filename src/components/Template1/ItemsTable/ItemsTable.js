// @flow
// libs
import * as React from 'react'
import { ArrayHelpers, FieldArray, FormikProps } from 'formik'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import MuiTableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

// src
import { EditableText } from '../../EditableText'
import { InvoiceItem, Values } from '../../../types'
import { makeUID } from '../../../utils'
import { useStyles } from './ItemsTable.styles'

const getDefaultItem: InvoiceItem = id => ({
  id,
  description: 'Enter description here...',
  quantity: 0,
  unitPrice: 0,
})

type FieldArrayProps = ArrayHelpers & {
  form: FormikProps<Values>,
  name: string,
}

function TableBody() {
  const styles = useStyles({})

  return (
    <MuiTableBody>
      <FieldArray
        name="invoice.items"
        render={(fieldArrayProps: FieldArrayProps) => {
          const {
            form: {
              values: {
                invoice: { items = [] },
                isEditable,
              },
            },
            remove,
          } = fieldArrayProps

          return items.map(({ id, quantity, unitPrice }, index) => {
            const itemString = `invoice.items[${index}]`

            return (
              <TableRow key={id || index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell>
                  <EditableText name={`${itemString}.description`} />
                </TableCell>
                <TableCell align="right">
                  <EditableText name={`${itemString}.quantity`} type="number" />
                </TableCell>
                <TableCell align="right">
                  <EditableText
                    name={`${itemString}.unitPrice`}
                    type="number"
                  />
                </TableCell>
                <TableCell align="center">{quantity * unitPrice}</TableCell>
                <TableCell className="dontPrint" align="center">
                  {isEditable && (
                    <IconButton
                      className={styles.iconButton}
                      size="small"
                      onClick={() => remove(index)}
                    >
                      <Icon fontSize="inherit">delete</Icon>
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            )
          })
        }}
      />
    </MuiTableBody>
  )
}

export function ItemsTable() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody />
        </Table>
      </Paper>

      <FieldArray
        name="invoice.items"
        render={({
          push,
          form: {
            values: { isEditable },
          },
        }: FieldArrayProps) =>
          isEditable ? (
            <Button
              color="primary"
              className="dontPrint"
              onClick={() => push(getDefaultItem(makeUID()))}
            >
              Add a row
            </Button>
          ) : null
        }
      />
    </section>
  )
}
