import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import api from '../../../../services/api';
import ProductItem, { Product } from '../ProductsItem';

const useStyles = makeStyles(
  createStyles({
    gridList: {
      padding: 12,
    },
  })
);

const ProductsList: React.FC = () => {
  const { gridList } = useStyles();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('products');
      setProducts(response.data);
    }
    fetchData();
  }, []);

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
