// libs
import * as React from 'react'
import { Field } from 'formik'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './ClientInfo.styles'

export function ClientInfo() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <div className={styles.title}>Client</div>
      <div className={styles.name}>
        <Field name="clientName" fontSize={20} component={EditableText} />
      </div>
      <div className={styles.field}>
        <Field name="clientAddress" component={EditableText} />
      </div>
      <div className={styles.field}>
        <Field name="clientCity" component={EditableText} />
      </div>
      <div className={styles.field}>
        Phone: <Field name="clientPhone" component={EditableText} />
      </div>
      <div className={styles.field}>
        Email: <Field name="clientEmail" component={EditableText} />
      </div>
    </section>
  )
}
