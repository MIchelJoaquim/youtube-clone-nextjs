import { makeStyles } from "@material-ui/core";
import theme from '../../theme/index';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    },

  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

export default useStyles;