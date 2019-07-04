import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cart: {
      display: 'block',
      textAlign: 'right',
    },
    valueGrid: {
      display: 'block',
      textAlign: 'center',
    },
    valueTypo: {
      height: '100%',
      lineHeight: '50px',
    },
  })
);

const Cart: React.FC = () => {
  const { cart, valueGrid, valueTypo } = useStyles();

  return (
    <>
      <Grid item xs={1} className={cart}>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <CartIcon />
          </Badge>
        </IconButton>
      </Grid>
      <Grid item xs={1} className={valueGrid}>
        <Typography variant="body2" color="inherit" className={valueTypo}>
          R$ 0,00
        </Typography>
      </Grid>
    </>
  );
};

export default Cart;
