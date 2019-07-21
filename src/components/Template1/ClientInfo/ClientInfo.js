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
        <EditableText name="client.name" fontSize={20}  />
      </div>
      <div className={styles.field}>
        <EditableText name="client.address"  />
      </div>
      <div className={styles.field}>
        <EditableText name="client.city"  />
      </div>
      <div className={styles.field}>
        Phone: <EditableText name="client.phone"  />
      </div>
      <div className={styles.field}>
        Email: <EditableText name="client.email"  />
      </div>
    </section>
  )
}
