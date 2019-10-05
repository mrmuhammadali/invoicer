// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  input: {
    minWidth: '30px',
    borderBottom: '1px solid transparent',
    transition: '0.2s linear border',

    '&:focus': {
      outline: '0px solid transparent',
      borderBottom: '1px solid #777',
    },
  },
})
