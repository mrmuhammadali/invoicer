// @flow
// libs
import React, { useEffect, useReducer } from 'react'
import { Formik } from 'formik'
import { RouteComponentProps } from 'react-router'

// src
import { fetchInvoiceById, submitForm } from '../../actions'
import { FormContainer } from '../FormContainer'
import { reducer } from './reducer'
import { useSnackbar } from '../../components/Snackbar/useSnackbar'

export function ViewInvoice(props: RouteComponentProps) {
  const { id } = props.match.params
  const [{ isLoading, payload }, dispatch] = useReducer(reducer, {})
  const { showSnackbar } = useSnackbar()

  useEffect(() => {
    fetchInvoiceById(id, dispatch)
  }, [id])

  if (isLoading) {
    return 'Loading...'
  }

  if (payload) {
    return (
      <Formik
        initialValues={payload}
        component={FormContainer}
        onSubmit={({ action }) =>
          submitForm(showSnackbar)({ action, ...payload })
        }
      />
    )
  }

  return 'Data not available'
}
