import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;

const Style = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    display: 'flex',
    minHeight: '100vh',
    maxWidth: '100vw'
  },
  grow: {
    flexGrow: 1
  },
  fullWidth: {
    width: '100%'
  },
  center: {
    textAlign: 'center'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  card: {
    maxWidth: 300,
    maxHeight: 500
  },
  cardInterests: {
    float: 'right'
  }
}));

export default Style;