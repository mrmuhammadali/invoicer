// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  '@import': [
    'url(https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700&subset=cyrillic,cyrillic-ext,latin,greek-ext,greek,latin-ext,vietnamese)',
    'url(https://fonts.googleapis.com/css?family=Sanchez&subset=latin,latin-ext)',
  ],

  '@global body': {
    background: '#858585',
    margin: 0,
    '-webkit-print-color-adjust': 'exact',
  },

  '@global @media print': {
    '.dontPrint': {
      display: 'none',
    },
  },

  root: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    font: "normal 13px/1.4em 'Open Sans', Sans-serif",
    width: '800px',
    margin: '20px auto',
    padding: '20px',
    background: '#fff',

    '& section': {
      marginBottom: '15px',

      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },

  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  currency: {
    textAlign: 'right',
    color: '#858585',
    fontStyle: 'italic',
    fontSize: '12px',
  },
})
