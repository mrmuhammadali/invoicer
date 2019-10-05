// @flow
// libs
import * as React from 'react'
import { Formik } from 'formik'

// src
import { FormContainer } from '../FormContainer'
import { INITIAL_VALUES } from './constants'
import { submitForm } from '../../actions/invoice'

export function CreateInvoice() {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      component={FormContainer}
      validate={values => {
        console.log(values)
      }}
      onSubmit={submitForm}
    />
  )
}
