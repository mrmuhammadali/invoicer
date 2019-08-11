// libs
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { AppBar, Toolbar as M_Toolbar, IconButton, Icon } from '@material-ui/core';

// src
import { useStyles } from './Toolbar.styles'

type Props = RouteComponentProps & {
  onClick: (action: string) => void,
}

const ToolbarIcon = ({ iconType, OnIconClick }) => {
  return (
    <IconButton onClick={OnIconClick}>
      <Icon>{iconType}</Icon>
    </IconButton>
  )
}

export function ToolbarWithRouter(props: Props) {
  const styles = useStyles({})
  const {
    match: { path },
    onClick,
  } = props
  

  return (
    <AppBar className="dontPrint" position="static">
      <M_Toolbar className={styles.toolbar} >
        <ToolbarIcon iconType='cloud_download' OnIconClick={() => onClick('download')} />

        {
          path === '/' && (
            <ToolbarIcon iconType='save' OnIconClick={() => onClick('save')} />
          )
        }

        <ToolbarIcon iconType='print' OnIconClick={() => console.log("on print click")} />

        <ToolbarIcon iconType='email' OnIconClick={() => console.log("on email click")} />

        <ToolbarIcon iconType='share' OnIconClick={() => onClick('share')} />
      </M_Toolbar>
    </AppBar>
  )
}

export const Toolbar = withRouter(ToolbarWithRouter)
