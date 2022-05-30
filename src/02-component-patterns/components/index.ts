import {ProductCard as ProductCardHOC}  from "./ProductCard";
import {ProductButtons, ProductTitle, ProductImage } from '../components';

export { ProductTitle } from "./ProductTitle";
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})

export default ProductCard;