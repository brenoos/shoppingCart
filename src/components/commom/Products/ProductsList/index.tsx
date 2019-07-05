import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import api from '../../../../services/api';
import ProductItem from '../ProductsItem';
import { Product } from '../../../../store/ducks/products/types';
import { ApplicationState } from '../../../../store';

import { loadRequest } from '../../../../store/ducks/products/actions';
import { getData } from '../../../../store/ducks/products/selectors';

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
    getData(state)
  );
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
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
