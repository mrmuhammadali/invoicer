// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  input: {
    background: 'transparent',
    color: 'inherit',
    padding: 'unset',
    font: 'inherit',
    minWidth: '30px',
    border: '1px solid transparent',
    borderRadius: '4px',
    padding: '0 2px',
    resize: 'none',

    '&:focus': {
      borderColor: '#ddd',
    },

    '&[type="number"]': {
      textAlign: 'right',
      '-moz-appearance': 'textfield',
    },

    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },

    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
    },
  },
})
