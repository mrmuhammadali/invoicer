// @flow
// libs
import React, { useState } from 'react'
import { FieldProps, useField, useFormikContext } from 'formik'
import size from 'lodash/fp/size'
import toString from 'lodash/fp/toString'
import { TextField } from '@material-ui/core'

// src
import { useStyles } from './EditableText.styles'

type Props = FieldProps & {
  className?: string,
  type?: string,
}

export function EditableText(props: Props) {
  const styles = useStyles(props)
  const { className, type = 'text', name, placeholder = '' } = props
  const { values: { isEditable = false } = {} } = useFormikContext()
  const [field] = useField(name)
  const value = !field.value && type === 'number' ? 0 : field.value
  const [text, setText] = useState(value)
  const onInput = e => {
    field.onChange(name)(e.currentTarget.innerText)
  }

  return (
    <div
      className={[styles.input, className].join(' ')}
      contentEditable={isEditable}
      dangerouslySetInnerHTML={{ __html: text }}
      onInput={onInput}
    />
  )
}
