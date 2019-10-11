// libs
import makeStyles from '@material-ui/styles/makeStyles';

export const useStyles = makeStyles({
  input: {
    minWidth: '30px',

    '&:after': {
      display: 'block',
      content: '""',
      borderBottom: 'solid 1px #777',
      transform: 'scaleX(0)',
      transition: 'transform 250ms ease-in-out'
    },
    '&:focus': {
      outline: '0px solid transparent',

      '&:after': {
        transform: 'scaleX(1)'
      }
    }
  },
  description: {
    maxWidth: '450px;'
  }
});
