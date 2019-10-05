// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  name: {
    fontSize: '28px',
    textTransform: 'uppercase',

    '&:after': {
      paddingBottom: '5px',
    },
  },

  field: {
    fontSize: '12px',
    color: '#858585',
  },
})
