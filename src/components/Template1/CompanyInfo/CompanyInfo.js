// libs
import * as React from 'react'
import { Field } from 'formik'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './CompanyInfo.styles'

export function CompanyInfo() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <div className={styles.companyInfo}>
        <Field
          className={styles.name}
          name="companyName"
          fontSize={32}
          component={EditableText}
        />
        <Field
          className={styles.field}
          name="companyAddress"
          component={EditableText}
        />
        <Field
          className={styles.field}
          name="companyCity"
          component={EditableText}
        />
        <span className={styles.field}>
          Phone: <Field name="companyPhone" component={EditableText} />
        </span>
        <span className={styles.field}>
          Email: <Field name="companyEmail" component={EditableText} />
        </span>
      </div>

      <div className={styles.companyLogo}>
        <img alt="Company Logo" />
      </div>
    </section>
  )
}
