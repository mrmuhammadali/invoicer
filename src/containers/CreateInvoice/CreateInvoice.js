// @flow
// libs
import * as React from 'react';
import {Formik} from 'formik';
import {RouteComponentProps} from 'react-router';

// src
import {copyTextToClipboard, getBrowserOrigin} from '../../utils';
import {createInvoice, downloadInvoice} from '../../actions';
import {FormContainer} from '../FormContainer';
import {INITIAL_VALUES} from './constants';
import {useSnackbar} from '../../components/Snackbar/useSnackbar';
import {Values} from '../../types';

export function CreateInvoice(props: RouteComponentProps) {
  const {showSnackbar} = useSnackbar();
  const {history} = props;

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      component={FormContainer}
      onSubmit={({action, ...values}: Values) => {
        switch (action) {
          case 'download': {
            return createInvoice(values)
              .then(() => history.push(values.invoice.invoiceId))
              .then(() =>
                showSnackbar('Generating PDF, please wait...', 'info')
              )
              .then(() => downloadInvoice(values));
          }
          case 'share': {
            return createInvoice(values)
              .then(({invoiceId}) =>
                copyTextToClipboard(`${getBrowserOrigin()}/${invoiceId}`)
              )
              .then(() => history.push(values.invoice.invoiceId))
              .then(() =>
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
