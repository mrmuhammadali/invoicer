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
      <EditableText
        className={styles.name}
        name="client.name"
        placeholder="Name"
      />
      <EditableText name="client.city" placeholder="City" />
      <EditableText name="client.phone" placeholder="Phone" />
      <EditableText name="client.email" placeholder="Email" />
      <EditableText name="client.address" placeholder="Address" />
    </section>
  )
}
