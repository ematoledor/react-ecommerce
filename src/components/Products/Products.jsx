import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes', price: '$4', image: 'https://www.sperry.com/on/demandware.static/-/Sites-sperry_us-Library/default/dwcf6657a5/content/seasonal-content/nav-graphics/2021/08/Moc-Sider.jpg'},
  { id: 2, name: 'Macbook', description: 'Apple laptop', price: '$2', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_MX?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948893000'},
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )

}

export default Products;