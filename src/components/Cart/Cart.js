import React from 'react'

const Cart = (props)=>{
    // let totalPrice = 0;
    // let shipping = 0;
    // props.cartInfo.map(x => {
    //     totalPrice = totalPrice + x.price;
    //     shipping =shipping + totalPrice % 20
    // })
    const totalPrice = props.cartInfo.reduce((totalPrice, x) => totalPrice+ x.price , 0)
    const formatNum = num =>{
        return Number(num.toFixed(2))
    }
    return(
        <div>
            <h2>Order Summery</h2>
            <p>Order Item: {props.cartInfo.length}</p>
            <h2>Total: {formatNum(totalPrice)}</h2>
            <h2>Shipping: {formatNum(totalPrice /10)}</h2>
            <h2>Sub Total: {formatNum(totalPrice + totalPrice /10)}</h2>
            <h2>tax: {formatNum(totalPrice /50)}</h2>
            <h2>Order Total: {formatNum(totalPrice+totalPrice /10+totalPrice %2)}</h2>
        </div>
    )
}
export default Cart;