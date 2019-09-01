import React, { useState, useEffect } from 'react';
import { Snackbar, Icon, SnackbarContent, IconButton } from '@material-ui/core';
import { useStyles } from './withSnackbar.styles'

export const withSnackbar = (WrappedComponent) => (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('error');
  const classes = useStyles();

  function showSnackbar(text: string, type: string): void {
    setMessage(text);
    setVariant(type);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <WrappedComponent
        {...props} showSnackbar={showSnackbar}
      />
      <Snackbar
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
          action={[
            <IconButton aria-label="close" color="inherit" onClick={() => setOpen(false)}>
              <Icon>close</Icon>
            </IconButton>,
          ]}
        />
      </Snackbar>
    </React.Fragment>
  );
};
