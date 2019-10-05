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
          placeholder="Name"
        />
        <EditableText
          className={styles.field}
          name="seller.city"
          placeholder="City"
        />
        <EditableText
          className={styles.field}
          name="seller.phone"
          placeholder="Phone"
        />
        <EditableText
          className={styles.field}
          name="seller.email"
          placeholder="Email"
        />
        <EditableText
          className={styles.field}
          name="seller.address"
          placeholder="Address"
          type="textarea"
        />
      </div>

      <div className={styles.companyLogo}>
        <img alt="Company Logo" />
      </div>
    </section>
  )
}
