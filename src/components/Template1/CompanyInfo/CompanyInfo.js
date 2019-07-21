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
          name="seller.name"
          fontSize={32}
        />
        <EditableText className={styles.field} name="seller.address" />
        <EditableText className={styles.field} name="seller.city" />
        <span className={styles.field}>
          Phone: <EditableText name="seller.phone" />
        </span>
        <span className={styles.field}>
          Email: <EditableText name="seller.email" />
        </span>
      </div>

      <div className={styles.companyLogo}>
        <img alt="Company Logo" />
      </div>
    </section>
  )
}
