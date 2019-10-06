// libs
import React, { useState } from 'react'

// src
import { Snackbar } from './Snackbar'

export const withSnackbar = WrappedComponent => props => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('error')

  function showSnackbar(text: string, type: string): void {
    setMessage(text)
    setVariant(type)
    setOpen(true)
  }

  return (
    <React.Fragment>
      <WrappedComponent {...props} showSnackbar={showSnackbar} />
      <Snackbar
        message={message}
        open={open}
        variant={variant}
        setOpen={setOpen}
      />
    </React.Fragment>
  )
}
