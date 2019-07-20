// libs
import * as React from 'react'
import { Field } from 'formik'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './Terms.styles'

export function Terms() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <span>TERMS</span>

      <Field
        className={styles.field}
        name="terms"
        type="textarea"
        component={EditableText}
      />
    </section>
  )
}
