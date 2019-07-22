// libs
import * as React from 'react'

// src
import { useStyles } from './Toolbar.styles'

export function Toolbar({ onClick }) {
  const styles = useStyles({})

  return (
    <div className={styles.root}>
      <button type="submit" onClick={() => onClick('download')}>
        Download as PDF
      </button>
      <button type="submit" onClick={() => onClick('share')}>
        Share
      </button>
      <button type="submit" onClick={() => onClick('save')}>
        Save
      </button>
    </div>
  )
}
