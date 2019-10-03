// libs
import { makeStyles } from '@material-ui/styles'

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
  },

  field: {
    fontSize: '12px',
    color: '#858585',
    paddingLeft: '3px'
  },
})
