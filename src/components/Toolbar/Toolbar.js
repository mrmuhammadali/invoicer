// libs
import * as React from 'react'

// src
import { useStyles } from './Toolbar.styles'

export function Toolbar() {
  const styles = useStyles({})

  return (
    <div className={styles.root}>
      <button type="submit" form="invoice">
        Download as PDF
      </button>
    </div>
  )
}
