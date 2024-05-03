import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.black,
    height: '100dvh',
    color: theme.color.white,
    position: 'relative',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  letterA: {
    // marginTop: '-8svh',
    fontFamily: theme.font.brownSugar,
    lineHeight: '35dvh',
    fontSize: '35dvh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '-7.8%',

    '&::after': {
      content: '""',
      borderLeft: '1px solid white',
      height: '10dvh',
    },
  },
  letterV: {
    fontFamily: theme.font.brownSugar,
    // marginBottom: '-9dvh',
    lineHeight: '35dvh',
    fontSize: '35dvh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    bottom: '-10%',

    '&::before': {
      content: '""',
      borderLeft: '1px solid white',
      height: '10dvh',
    },
  },
  invite: {
    fontFamily: theme.font.rammillas,
    fontSize: 20,
  },
  date: {
    fontFamily: theme.font.brownSugar,
    fontSize: 30,
  },
  names: {
    fontFamily: theme.font.brownSugar,
    fontSize: 20,
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.letterA}>A</div>
      <div className={classes.headerContent}>
        <span className={classes.invite}>ПРИГЛАШЕНИЕ НА СВАДЬБУ</span>
        <span className={classes.date}>04.08.2024</span>
        <span className={classes.names}>valeriya & Andrey</span>
      </div>
      <div className={classes.letterV}>V</div>
    </header>
  );
}
