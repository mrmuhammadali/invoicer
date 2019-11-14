// @flow
// libs
import React, {useEffect, useReducer} from 'react';
import {Formik} from 'formik';
import {RouteComponentProps} from 'react-router';

// src
import {copyTextToClipboard, getBrowserOrigin} from '../../utils';
import {downloadInvoice, fetchInvoiceById} from '../../actions';
import {FormContainer} from '../FormContainer';
import {reducer} from './reducer';
import {useSnackbar} from '../../components/Snackbar/useSnackbar';
import {Values} from '../../types';

export function ViewInvoice(props: RouteComponentProps) {
  const {id} = props.match.params;
  const [{isLoading, payload}, dispatch] = useReducer(reducer, {});
  const {showSnackbar} = useSnackbar();

  useEffect(() => {
    fetchInvoiceById(id, dispatch);
  }, [id]);

  if (isLoading) {
    return 'Loading...';
  }

  if (payload) {
    return (
      <Formik
        initialValues={payload}
        component={FormContainer}
        onSubmit={({action, invoice}: Values) => {
          switch (action) {
            case 'download': {
              return downloadInvoice(payload);
            }
            case 'share': {
              return copyTextToClipboard(
                `${getBrowserOrigin()}/${invoice.invoiceId}`
              ).then(() =>
                showSnackbar('Shareable link copied to clipboard.', 'success')
              );
            }
            case 'print': {
              return window.print();
            }
          }
        }}
      />
    );
  }

  return 'Data not available';
}
