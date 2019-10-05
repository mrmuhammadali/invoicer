// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  root: {
    '& table': {
      width: '100%',
      margin: '5px 0',
    },

    '& thead': {
      backgroundColor: '#e3e3e3',
      '& th': {
        fontSize: '12px',
        textTransform: 'uppercase',
        padding: '6px 4px',
        color: '#858585',
        fontWeight: '700',
      },
      '& tr': {
        display: 'grid',
        gridTemplateColumns: ({ isEditable }) =>
          `32px auto 85px 85px 200px ${isEditable ? '50px' : 0}`,
      },
    },

    '& tbody': {
      '& th': {
        padding: '11px 4px',
      },
      '& tr': {
        display: 'grid',
        alignItems: 'end',
        gridTemplateColumns: ({ isEditable }) =>
          `32px auto 85px 85px 200px ${isEditable ? '50px' : 0}`,
      },
    },

    '& td': {
      padding: '10px 4px',
    },
  },
  deleteIcon: {
    fontSize: 16,
    color: '#e00707',
  },
  addRow: {
    color: '#0078c3',
    cursor: 'pointer',
  },
  iconButton: {
    padding: '8px',
  },
})
