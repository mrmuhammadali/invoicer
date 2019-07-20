// @flow
// libs
import * as React from 'react'
import { FormikProps } from 'formik'

// src
import { Template1 } from '../../components/Template1'
import { Values } from '../../components/types'

export function FormContainer(props: FormikProps<Values>) {
  const { handleSubmit, values } = props

  return (
    <form id="invoice" onSubmit={handleSubmit}>
      <Template1 values={values} />
    </form>
  )
}
