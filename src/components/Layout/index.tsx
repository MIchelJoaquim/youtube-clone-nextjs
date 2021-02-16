import useStyles from './layout.styles';
import Head from 'next/head';
import TopBar from './TopBar';

function Layout({ children, title }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={classes.root}>
        <TopBar></TopBar>
        <div>Draw</div>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
