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
        <EditableText name="client.name" fontSize={20} InputStyles={{width: '120px', textAlign: 'right'}} placeholder='Name'/>
      </div>
      <div className={styles.field}>
        <EditableText name="client.city" InputStyles={{width: '200px', textAlign: 'right'}} placeholder='City'/>
      </div>
      <div >
        <EditableText name="client.phone" InputStyles={{width: '120px', textAlign: 'right'}} placeholder='Phone'/>
      </div>
      <div className={styles.field}>
        <EditableText name="client.email" InputStyles={{width: '120px', textAlign: 'right'}} placeholder='Email'/>
      </div>
      <div className={styles.field}>
        <EditableText name="client.address" InputStyles={{width: '200px', textAlign: 'right'}} placeholder='Address' type="textarea"/>
      </div>
    </section>
  )
}
