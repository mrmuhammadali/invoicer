// @flow
// libs
import React, { useState, useEffect } from 'react'
import { FastField, FieldProps, useField, useFormikContext } from 'formik'

// src
import { useStyles } from './EditableText.styles'

type Props = FieldProps & {
  className?: string,
  type?: string,
}

export function EditableText(props: Props) {
  const styles = useStyles(props)
  const { className, type = 'text', name, placeholder = '' } = props
  const {
    values: { isEditable = false, invoice: { items } } = {},
  } = useFormikContext()
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
