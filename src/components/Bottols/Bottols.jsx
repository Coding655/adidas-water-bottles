import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'

const Bottols = () => {
    const [bottles, setBottles] = useState([]);
    // cart
    const [cart , setCart] = useState([]);
    const handleCartbtn= bottles=>{
        const newCart = [...cart, bottles];
        setCart(newCart)
    }
    // fetch
    useEffect(()=>{
        fetch('bottols.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    } ,[]);

    return (
        <div >
            <h2>Total: <big>{bottles.length}</big> bottles</h2>
           
         <div className="flex">
            {/*BOTTLE CONTAINER */}
         <div className="bottles-container">
                {
                    bottles.map(bottles => <Bottle 
                        handleCartbtn={handleCartbtn}
                        key={bottles.capacity_m} 
                        bottles={bottles}></Bottle>)
                }
              
            </div>
                {/* ADD TO CART */}
            <div className="add-to-cart-border">
                <marquee ><h3>ADD TO CART</h3></marquee>
                <h2>Cart Count: {cart.length} </h2>
                
            </div>
         
         </div>


        </div>
    );
};

export default Bottols;