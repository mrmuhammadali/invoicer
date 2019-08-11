// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  root: {
    '& table': {
      width: '100%',
      margin: '5px 0',
    },

    '& th': {
      fontFamily: 'Sanchez, Serif',
      fontSize: '12px',
      textTransform: 'uppercase',
      padding: '5px 3px',
      textAlign: 'center',
      background: '#b0b4b3',
      color: 'white',

      '&:first-child': {
        width: '30px',
        textAlign: 'left',
      },

      '&:last-child': {
        width: '30px',
        textAlign: 'left',
      },

      '&:nth-child(2)': {
        width: '40%',
        textAlign: 'left',
      },
    },

    '& td': {
      padding: '10px 3px',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',

      '&:first-child': {
        width: '30px',
        textAlign: 'left',
      },

      '&:last-child': {
        width: '30px',
        textAlign: 'left',
      },

      '&:nth-child(2)': {
        width: '40%',
        textAlign: 'left',
      },
    },
  },
  deleteIcon: {
    fontSize: 16, 
    color: '#e00707'
  },
  addRow: {
    color: '#0078c3',
    cursor: 'pointer'
  }
})
