// @flow
// libs
import makeStyles from '@material-ui/styles/makeStyles';

export const useStyles = makeStyles({
  title: {
    background: '#415472',
    color: 'white',
    fontSize: '40px',
    padding: '20px 10px',
    fontFamily: 'Sanchez, Serif',
  },

  id: {
    fontSize: '16px',
    fontWeight: 'bold',
  },

  date: {
    display: 'flex',

    '& div': {
      flexGrow: 1,
      marginLeft: 5,
    },
  },
});
