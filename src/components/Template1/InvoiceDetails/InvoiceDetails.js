// libs
import * as React from 'react'
import { Field } from 'formik'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './InvoiceDetails.styles'

export function InvoiceDetails() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <div className={styles.id}>
        <Field name="invoice.invoiceId">
          {({ field }) => `# ${field.value}`}
        </Field>
      </div>

      <div className={styles.title}>Invoice</div>

      <div>
        <b>Issue Date:</b> <EditableText name="invoice.issueDate" type="date" />
      </div>
      <div>
        <b>Due Date:</b> <EditableText name="invoice.dueDate" type="date" />
      </div>
    </section>
  )
}
