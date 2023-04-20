import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children,  product }: ProductCardProps) => {

    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                { children }
                {/* <ProductImage img={ product.img }/>
                <ProductTitle title={ product.title }/>
                <ProductButtons counter={0} increaseBy={ increaseBy }/> */}
            </div>
        </Provider>
    )
}

export { ProductButtons, ProductImage, ProductTitle };
