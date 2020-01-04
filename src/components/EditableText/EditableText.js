// @flow
// libs
import React from "react";
import { FieldProps, useField, useFormikContext } from "formik";

// src
import { useStyles } from "./EditableText.styles";

type Props = FieldProps & {
  className?: string,
  type?: string
};

export function EditableText(props: Props) {
  const styles = useStyles(props);
  const { className, name } = props;
  const { values: { isEditable = false } = {} } = useFormikContext();
  const [field, fieldMeta, fieldHelpers] = useField(name);
  const onInput = e => {
    fieldHelpers.setValue(e.currentTarget.innerText);
  };

  return (
    <div
      className={[
        styles.input,
        className,
        field.name.includes("description") && styles.description
      ]
        .filter(Boolean)
        .join(" ")}
      contentEditable={isEditable}
      dangerouslySetInnerHTML={{ __html: fieldMeta.initialValue }}
      onInput={onInput}
    />
  );
}
