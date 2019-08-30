// @flow
// libs
import * as React from "react"
import { ArrayHelpers, FieldArray, FormikProps } from "formik"
import { IconButton, Button, Icon, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@material-ui/core"

// src
import { EditableText } from "../../EditableText"
import { Item, Values } from "../../../types"
import { useStyles } from "./ItemsTable.styles"

const ITEM: Item = {
  description: "Enter description here...",
  quantity: 0,
  unitPrice: 0
}

type FieldArrayProps = ArrayHelpers & {
  form: FormikProps<Values>,
  name: string
}

export function ItemsTable() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              <FieldArray
                name="invoice.items"
                render={(fieldArrayProps: FieldArrayProps) => {
                  const {
                    form: {
                      values: {
                        invoice: { items = [] },
                        isEditable
                      }
                    },
                    remove
                  } = fieldArrayProps
  
                  return items.map(({ quantity, unitPrice }, index) => {
                    const itemString = `invoice.items[${index}]`
    
                    return (
                      <TableRow key={index + 1}>
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <EditableText 
                            name={`${itemString}.description`} 
                            InputStyles={{width: '232px'}} 
                            // type="textarea"
                          />                        
                        </TableCell>
                        <TableCell align="right">
                          <EditableText
                            InputStyles={{width: '58px'}}
                            name={`${itemString}.quantity`}
                            type="number"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <EditableText
                            InputStyles={{width: '58px'}}
                            name={`${itemString}.unitPrice`}
                            type="number"
                          />
                        </TableCell>
                        <TableCell align="center">{quantity * unitPrice}</TableCell>
                        <TableCell>
                          {isEditable && (
                            <IconButton
                              className={`dontPrint ${styles.iconButton}`}
                              onClick={() => remove(index)}
                            >
                              <Icon className={styles.deleteIcon}>delete</Icon>
                            </IconButton>
                          )}
                        </TableCell>
                    </TableRow>
                  )
                })
              }}
              />
            }
          </TableBody>
        </Table>
      </Paper>
      
      <FieldArray
        name="invoice.items"
        render={({
          push,
          form: {
            values: { isEditable }
          }
        }: FieldArrayProps) =>
          isEditable ? (
            <Button color="primary" className='dontPrint' onClick={() => push(ITEM)}>
              Add a row
            </Button>
          ) : null
        }
      /> 
     </section>
  )
}
