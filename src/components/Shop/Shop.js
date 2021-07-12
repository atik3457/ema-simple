import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart'

const Shop = ()=>{
    const [products, setProducts] = useState(fakeData);
    const product10 = products.slice(0,10);
    const [cart, setCart] = useState([]);
    const addProductBtn = (x)=>{
        const newCart = [...cart, x];
        setCart(newCart);
        
    }
    console.log(cart)
    return(
        <div className="container-wrap">
            <div className="product-area">
                {
                    product10.map(x => <Product product = {x} addProductBtn = {addProductBtn}></Product>)
                }
                
            </div>
            
            <div className="right-sidebar">
                <Cart cartInfo ={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop;