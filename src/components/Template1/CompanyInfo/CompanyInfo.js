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
          placeholder='Name'
          InputStyles={{width: '300px'}}
        />
        <div className={styles.field}>
          <EditableText name="seller.city" InputStyles={{width: '200px'}} placeholder='City' />
        </div>
        <div className={styles.field}>
          <EditableText name="seller.phone" InputStyles={{width: '120px'}} placeholder='Phone' />
        </div>
        <div className={styles.field}>
          <EditableText name="seller.email" InputStyles={{width: '185px'}} placeholder='Email' />
        </div>
        <div className={styles.field}>
          <EditableText name="seller.address" InputStyles={{width: '200px'}} placeholder='Address' type="textarea" />
        </div>
      </div>

      <div className={styles.companyLogo}>
        <img alt="Company Logo" />
      </div>
    </section>
  )
}
