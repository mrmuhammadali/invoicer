// @flow
// libs
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

// src
import {useStyles} from './Toolbar.styles';

type Props = {
  onClick: (action: string) => void,
};

type ToolbarButtonProps = {
  icon: string,
  tooltip: string,
  onClick: Function,
};

const ToolbarButton = ({icon, onClick, tooltip}: ToolbarButtonProps) => {
  const styles = useStyles({});
  return (
    <Tooltip title={tooltip} placement="bottom">
      <IconButton
        className={styles.button}
        color="inherit"
        size="small"
        onClick={onClick}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </IconButton>
    </Tooltip>
  );
};

export function Toolbar(props: Props) {
  const styles = useStyles({});
  const {onClick} = props;

  return (
    <AppBar className={[styles.root, 'dontPrint'].join(' ')} position="sticky">
      <MuiToolbar variant="dense">
        <h1 className={styles.title}>React Invoicer</h1>
        <ToolbarButton
          icon="cloud_download"
          tooltip="Download"
          onClick={() => onClick('download')}
        />
        <ToolbarButton
          icon="share"
          tooltip="Share"
          onClick={() => onClick('share')}
        />
        <ToolbarButton
          icon="print"
          tooltip="Print"
          onClick={() => onClick('print')}
        />
      </MuiToolbar>
    </AppBar>
  );
}
