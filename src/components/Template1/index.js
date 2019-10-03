// @flow
// libs
import * as React from 'react'
import { Field } from 'formik'

// src
import { ClientInfo } from './ClientInfo'
import { CompanyInfo } from './CompanyInfo'
import { InvoiceDetails } from './InvoiceDetails'
import { ItemsTable } from './ItemsTable'
import { Sums } from './Sums'
import { Terms } from './Terms'
import { useStyles } from './index.styles'
import { Values } from '../../types'

type Props = {
  values: Values,
}

const Template1 = ({ values }: Props) => {
  const styles = useStyles({})

  return (
    <div className={styles.root}>
      <CompanyInfo />
      <div className={styles.row}>
        <InvoiceDetails />
        <ClientInfo />
      </div>
      <div className={styles.currency}>
        <span>* All Prices are in </span>{' '}
        <span>
          <Field name="invoice.currency">{({ field }) => field.value}</Field>
        </span>
      </div>
      <ItemsTable />
      <Sums values={values} />
      <Terms />
    </div>
  )
}

export default Template1;
