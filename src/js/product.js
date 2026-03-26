import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';

// get product id from URL
const productId = getParam('product');

// set up data source
const dataSource = new ProductData('tents');

// create product instance
const product = new ProductDetails(productId, dataSource);

// initialize the page
product.init();