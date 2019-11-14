// @flow
// libs
import * as React from 'react';

// src
import {EditableText} from '../../EditableText';
import {useStyles} from './Terms.styles';

export function Terms() {
  const styles = useStyles({});

  return (
    <section className={styles.root}>
      <span>TERMS</span>
      <EditableText className={styles.field} name="invoice.terms" />
    </section>
  );
}
