// @flow
// libs
import React, { useEffect, useReducer } from 'react'
import { Formik } from 'formik'
import { RouteComponentProps } from 'react-router'

// src
import { fetchInvoiceById, submitForm } from '../../actions'
import { FormContainer } from '../FormContainer'
import { reducer } from './reducer'

export function ViewInvoice(props: RouteComponentProps) {
  const { id } = props.match.params
  const [{ isLoading, payload }, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    fetchInvoiceById(id, dispatch)
  }, [id])
  // console.log(payload)

  if (isLoading) {
    return 'Loading...'
  }

  if (payload) {
    return (
      <Formik
        initialValues={payload}
        component={FormContainer}
        onSubmit={submitForm()}
      />
    )
  }

  return 'Data not available'
}
