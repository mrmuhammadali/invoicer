// @flow
// libs
import React from 'react';
import {FormikProps} from 'formik';

// src
import Template1 from '../../components/Template1';
import {Toolbar} from '../../components/Toolbar';
import {Values} from '../../types';

export function FormContainer(props: FormikProps<Values>) {
  const {handleSubmit, setFieldValue, values} = props;

  function onClick(action: string) {
    Promise.resolve(setFieldValue('action', action, false)).then(handleSubmit);
  }

  return (
    <React.Fragment>
      <Toolbar onClick={onClick} />
      <form onSubmit={handleSubmit}>
        <Template1 values={values} />
      </form>
    </React.Fragment>
  );
}
