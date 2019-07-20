// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& th': {
      minWidth: '100px',
      padding: '8px 3px',
      textAlign: 'left',
    },

    '& td': {
      minWidth: '100px',
      padding: '8px 3px',
      textAlign: 'right',
    },
  },

  amountTotal: {
    '& td': {
      background: '#415472',
      color: 'white',
      fontFamily: 'Sanchez, Serif',
      fontSize: '35px',
      lineHeight: '1em',
      padding: '7px !important',
    },
  },

  dueAmount: {
    '& th': {
      fontWeight: 'bold',
    },

    '& td': {
      fontWeight: 'bold',
    },
  },
})
