import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Cart from '../Cart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      display: 'block',
      lineHeight: '50px',
    },
  })
);

const Header: React.FC = () => {
  const { root, title } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h6" color="inherit" className={title}>
                Shopping
              </Typography>
            </Grid>
            <Cart />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
