// libs
import { FormikActions } from 'formik'

// src
import { handleFetchResponse } from '../utils'
import { Values } from '../components/types'

export const FETCH_INVOICE_BY_ID = 'FETCH_INVOICE_BY_ID'
export const FETCH_INVOICE_BY_ID_SUCCESS = 'FETCH_INVOICE_BY_ID_SUCCESS'
export const FETCH_INVOICE_BY_ID_FAILURE = 'FETCH_INVOICE_BY_ID_FAILURE'

export function fetchInvoiceById(id, dispatch) {
  dispatch({ type: FETCH_INVOICE_BY_ID })

  return fetch(`/api/invoice/${id}`)
    .then(handleFetchResponse)
    .then(payload => {
      dispatch({ type: FETCH_INVOICE_BY_ID_SUCCESS, payload })

      return payload
    })
    .catch(error => {
      dispatch({ type: FETCH_INVOICE_BY_ID_FAILURE, error })

      throw error
    })
}

function createInvoice(params) {
  return fetch('/api/invoice', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  }).then(handleFetchResponse)
}

export function submitForm(dispatch) {
  return (values: Values, actions: FormikActions) => {
    createInvoice(values)
  }
}
