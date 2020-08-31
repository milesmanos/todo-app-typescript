import { createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import indigo from '@material-ui/core/colors/indigo'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: indigo[500],
    },
  },
  typography: {
    fontFamily: 'ff-meta-correspondence-web-p',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: '0.15px',
    h1: {
      fontFamily: 'plantin',
      fontWeight: 600,
      fontSize: 96,
      lineHeight: '96px',
      letterSpacing: '-1.5px',
    },
    h2: {
      fontFamily: 'plantin',
      fontWeight: 600,
      fontSize: 72,
      lineHeight: '90px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: 'plantin',
      fontWeight: 600,
      fontSize: 48,
      lineHeight: '60px',
      letterSpacing: '0px',
    },
    h4: {
      fontFamily: 'plantin',
      fontWeight: 400,
      fontSize: 36,
      lineHeight: '45px',
      letterSpacing: '0.25px',
    },
    h5: {
      fontFamily: 'plantin',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    h6: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },
    body1: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    body2: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: '0.25px',
    },
    caption: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
    button: {
      fontFamily: 'ff-meta-correspondence-web-p',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
  },
})

export default theme
