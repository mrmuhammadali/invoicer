// @flow
// libs
import React, {useState} from 'react'
import { FormikProps } from 'formik'

// src
import WrappedComponent from '../../components/Template1'
import { Toolbar } from '../../components/Toolbar'
import { Values } from '../../types'

export function FormContainer(props: FormikProps<Values>) {
  const { handleSubmit, setFieldValue, values } = props
  const [resp, setResp] = useState('');
  const saveResponse = (resp) => setResp(resp)
  
  function onClick(action: string) {
    Promise.resolve(setFieldValue('action', action, false))
      // .then(() => handleSubmit())
      .then(() => saveResponse('pass'))
  }

  return (
    <React.Fragment>
      <Toolbar onClick={onClick} />
      <form onSubmit={handleSubmit}>
        <WrappedComponent values={values} resp={resp} />
      </form>
    </React.Fragment>
  )
}
