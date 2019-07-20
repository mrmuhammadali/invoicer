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
      <div className={styles.number}>
        {'# '}
        <Field name="invoiceNumber" fontSize={16} component={EditableText} />
      </div>

      <Field
        className={styles.title}
        name="invoiceTitle"
        fontSize={50}
        component={EditableText}
      />

      <div>
        <b>Issue Date:</b>{' '}
        <Field name="createDate" type="date" component={EditableText} />
      </div>
      <div>
        <b>Due Date:</b>{' '}
        <Field name="dueDate" type="date" component={EditableText} />
      </div>
    </section>
  )
}
