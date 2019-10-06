// @flow
// libs
import * as React from 'react'
import { Formik } from 'formik'

// src
import { FormContainer } from '../FormContainer'
import { INITIAL_VALUES } from './constants'
import { submitForm } from '../../actions/invoice'
import { useSnackbar } from '../../components/Snackbar/useSnackbar'

export function CreateInvoice() {
  const { showSnackbar } = useSnackbar()

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      component={FormContainer}
      onSubmit={submitForm(showSnackbar)}
    />
  )
}
