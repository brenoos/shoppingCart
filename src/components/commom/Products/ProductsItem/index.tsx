import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Product } from '../../../../store/ducks/products/types';

const useStyles = makeStyles(
  createStyles({
    card: {
      idth: '100%',
      margin: 'auto',
      height: '100%',
    },
    root: {
      width: 180,
      height: 200,
      margin: 'auto',
    },
  })
);

interface Props {
  product: Product;
}

const ProductsItem: React.FC<Props> = ({ product }) => {
  const { card, root } = useStyles();
  const { id, title, picture, price } = product;

  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
      <Card className={card}>
        <CardActionArea>
          <CardHeader title={title} />

          <CardMedia classes={{ root }} image={picture} />
          <CardContent>
            <Typography variant="h4" color="textSecondary" component="p">
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Comprar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductsItem;
