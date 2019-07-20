// libs
import * as React from 'react'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './CompanyInfo.styles'

export function CompanyInfo() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <div className={styles.companyInfo}>
        <EditableText
          className={styles.name}
          name="companyName"
          fontSize={32}
        />
        <EditableText className={styles.field} name="companyAddress" />
        <EditableText className={styles.field} name="companyCity" />
        <span className={styles.field}>
          Phone: <EditableText name="companyPhone" />
        </span>
        <span className={styles.field}>
          Email: <EditableText name="companyEmail" />
        </span>
      </div>

      <div className={styles.companyLogo}>
        <img alt="Company Logo" />
      </div>
    </section>
  )
}
