import './cart.css'

const Cart = ({cart}) => {
   
    return (
        <div>
            <h3>cart: {cart.length}</h3>
           <div>
           {
                cart.map(bottle=> <img key={bottle} className='img' src={bottle.img} alt="" />)
            }
           </div>
        </div>
    );
};

export default Cart;