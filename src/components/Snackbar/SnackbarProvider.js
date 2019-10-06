// libs
import React, { createContext, useState } from 'react'

// src
import { Snackbar } from './Snackbar'

export const SnackbarContext = createContext()

export function SnackbarProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('error')

  function showSnackbar(text: string, type: string): void {
    setMessage(text)
    setVariant(type)
    setOpen(true)
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        message={message}
        open={open}
        variant={variant}
        setOpen={setOpen}
      />
    </SnackbarContext.Provider>
  )
}
