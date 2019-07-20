// libs
import * as React from 'react'

// src
import { EditableText } from '../../EditableText'
import { useStyles } from './ClientInfo.styles'

export function ClientInfo() {
  const styles = useStyles({})

  return (
    <section className={styles.root}>
      <div className={styles.title}>Client</div>
      <div className={styles.name}>
        <EditableText name="clientName" fontSize={20}  />
      </div>
      <div className={styles.field}>
        <EditableText name="clientAddress"  />
      </div>
      <div className={styles.field}>
        <EditableText name="clientCity"  />
      </div>
      <div className={styles.field}>
        Phone: <EditableText name="clientPhone"  />
      </div>
      <div className={styles.field}>
        Email: <EditableText name="clientEmail"  />
      </div>
    </section>
  )
}
