import React,{ useState } from 'react';
import fakeData from '../../fakeData/Data' 
// console.log (fakeData)
// const data = JSON.parse(fakeData)
import './Shop.css'
import Product from '../Product/Product';
import Count from '../Count/Count';



const Shop = () => {
    // console.log(fakeData)  
    const first15 = fakeData.slice(0,15);
    const [products, setProducts]= useState(first15);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
    const newCart = [...cart, product];
    // console.log(newCart);
    setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {
                        products.map(pd => <Product 
                            handleAddProduct = {handleAddProduct}
                            product = {pd}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Count cart = {cart}></Count>
            </div>
        </div>
    );
};

export default Shop;