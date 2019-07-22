// libs
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

// src
import { useStyles } from './Toolbar.styles'

type Props = RouteComponentProps & {
  onClick: (action: string) => void,
}

export function ToolbarWithRouter(props: Props) {
  const styles = useStyles({})
  const {
    match: { path },
    onClick,
  } = props

  return (
    <div className={styles.root}>
      <button type="submit" onClick={() => onClick('download')}>
        Download as PDF
      </button>
      <button type="submit" onClick={() => onClick('share')}>
        Share
      </button>
      {path === '/' && (
        <button type="submit" onClick={() => onClick('save')}>
          Save
        </button>
      )}
    </div>
  )
}

export const Toolbar = withRouter(ToolbarWithRouter)
