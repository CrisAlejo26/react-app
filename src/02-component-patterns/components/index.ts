import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductCard";
import { ProductTitle } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";
export { ProductImage } from "./ProductCard";
export { ProductTitle } from "./ProductCard";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Buttons: ProductButtons,
    Image: ProductImage
} )

export default ProductCardHOC