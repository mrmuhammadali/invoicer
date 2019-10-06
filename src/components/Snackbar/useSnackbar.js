// libs
import { useContext } from 'react'

// src
import { SnackbarContext } from './SnackbarProvider'

type UseSnackbar = {
  showSnackbar: (text: String, type: string) => void,
}

export function useSnackbar(): UseSnackbar {
  return useContext(SnackbarContext)
}
