import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface PropsImg {
    img?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: PropsImg) => {

    const {product} = useContext(ProductContext)
    let imgToshow: string;
    if (img) {
        imgToshow = img;
    }else if (product.img) {
        imgToshow = product.img
    }else {
        imgToshow = noImage
    }

    return (
        <img 
            className={`${styles.productImg} ${className}`} src={imgToshow} 
            alt="coffe" 
            style={ style }
        />
    )
}