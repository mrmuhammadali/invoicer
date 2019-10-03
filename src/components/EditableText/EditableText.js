// @flow
// libs
import * as React from 'react'
import { FieldProps, useField, useFormikContext } from 'formik'
import size from 'lodash/fp/size'
import toString from 'lodash/fp/toString'
import { TextField } from '@material-ui/core'

// src
import { useStyles } from './EditableText.styles'

type Props = FieldProps & {
  className?: string,
  fontSize?: number,
  type?: string,
}

export function EditableText(props: Props) {
  const styles = useStyles(props)
  const { className, fontSize = 15, type = 'text', name, InputStyles, placeholder = '' } = props
  const {
    values: { isEditable = false },
  } = useFormikContext()
  const [field] = useField(name)

  if (type === 'textarea') {
    return (
      <textarea
        {...field}
        rows={2}
        disabled={!isEditable}
        placeholder={placeholder}
        style={InputStyles ? InputStyles : {width: '100%'}}
        className={[styles.input, className].join(' ')}
      />
    )
  }

  const { value: _value_ } = field
  const c = type === 'date' ? 40 : 0
  const value = !_value_ && type === 'number' ? 0 : _value_

  return (
    <input
      {...field}
      disabled={!isEditable}
      value={value}
      style={InputStyles ?  InputStyles : {width: size(toString(value)) * (fontSize / 2) + c + 'px' }}
      className={[styles.input, className].join(' ')}
      type={type}
      placeholder={placeholder}
    />
  )
}
