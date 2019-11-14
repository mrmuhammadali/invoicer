// @flow
// libs
import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MuiSnackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

// src
import {useStyles} from './Snackbar.styles';

type Props = {
  message: string,
  open: boolean,
  variant: 'success' | 'info' | 'error' | 'warning',
  setOpen: (open: boolean) => void,
};

export const Snackbar = (props: Props) => {
  const classes = useStyles();
  const {message, open, variant, setOpen} = props;

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
    >
      <SnackbarContent
        className={classes[variant]}
        aria-describedby="client-snackbar"
        message={message}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <Icon>close</Icon>
          </IconButton>
        }
      />
    </MuiSnackbar>
  );
};
