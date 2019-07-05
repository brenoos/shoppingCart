import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../commom/ProductsItem';
import { Product } from '../../../store/ducks/products/types';
import { ApplicationState } from '../../../store';

import { load } from '../../../store/ducks/products/actions';
import { getProductsData } from '../../../store/ducks/products/selectors';

const useStyles = makeStyles(
  createStyles({
    gridList: {
      padding: 12,
    },
  })
);

const ProductsList: React.FC = () => {
  const { gridList } = useStyles();
  const products: Product[] = useSelector((state: ApplicationState) =>
    getProductsData(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  return (
    <>
      <Grid container className={gridList} spacing={2}>
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
