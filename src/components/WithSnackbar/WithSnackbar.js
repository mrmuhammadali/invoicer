import React, {useState, useEffect} from 'react';
import {Snackbar,Icon, SnackbarContent, IconButton} from '@material-ui/core';
import { useStyles } from './WithSnackbar.styles'

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;

  return (
    <SnackbarContent
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={message}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>,
      ]}
      {...other}
    />
  );
}

const WithSnackbar = (WrappedComponent) => {
  const HOC = (props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const toggleSnackbar = (bool) => setOpen(bool)
    
    useEffect(() => {
      setOpen(props.resp === 'pass')
      setMessage(props.resp === 'pass' ? 'Succesfully completed action.' : 'Error in completing action.')
    }, [props.resp]); 

    return (
      <>
        <WrappedComponent
          {...props}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={() => toggleSnackbar(false)}
        >
          <MySnackbarContentWrapper
            onClose={() => toggleSnackbar(false)}
            variant={props.resp === 'pass' ? "success" : "error"}
            message={message}
          />
        </Snackbar>
      </>
    );
  }
    
  return HOC;
};

export default WithSnackbar;