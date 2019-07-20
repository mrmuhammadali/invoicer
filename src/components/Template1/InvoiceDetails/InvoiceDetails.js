// libs
import * as React from 'react'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './InvoiceDetails.styles'

export function InvoiceDetails() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <div className={styles.number}>
        {'# '}
        <EditableText name="invoiceNumber" fontSize={16} />
      </div>

      <EditableText
        className={styles.title}
        name="invoiceTitle"
        fontSize={50}
      />

      <div>
        <b>Issue Date:</b> <EditableText name="createDate" type="date" />
      </div>
      <div>
        <b>Due Date:</b> <EditableText name="dueDate" type="date" />
      </div>
    </section>
  )
}
