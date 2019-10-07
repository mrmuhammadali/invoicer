// @flow
// libs
import { FormikActions } from 'formik'

// src
import { copyTextToClipboard, handleFetchResponse } from '../utils'
import { Values } from '../types'

export const FETCH_INVOICE_BY_ID = 'FETCH_INVOICE_BY_ID'
export const FETCH_INVOICE_BY_ID_SUCCESS = 'FETCH_INVOICE_BY_ID_SUCCESS'
export const FETCH_INVOICE_BY_ID_FAILURE = 'FETCH_INVOICE_BY_ID_FAILURE'

export function fetchInvoiceById(id: string, dispatch: Function) {
  dispatch({ type: FETCH_INVOICE_BY_ID })

  return fetch(`/api/invoice/${id}`)
    .then(handleFetchResponse)
    .then(payload => {
      if (payload.status === 'failure') {
        return Promise.reject(payload.data)
      }

      dispatch({ type: FETCH_INVOICE_BY_ID_SUCCESS, payload })

      return { ...payload, isEditable: false }
    })
    .catch(error => {
      dispatch({ type: FETCH_INVOICE_BY_ID_FAILURE, error })
      return Promise.reject(error)
    })
}

export function createInvoice(values: Values) {
  return fetch('/api/invoice', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' },
  }).then(handleFetchResponse)
}

export function downloadInvoice(values: Values) {
  return fetch('/api/invoice/download', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `Invoice_${values.invoice.invoiceId}.pdf`)
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    })
}
