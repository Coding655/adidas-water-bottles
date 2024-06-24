import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToCart,getStoredCart,removeFromLs } from "../../utilies/localStorage";
import Cart from "../cart/Cart";



const Bottols = () => {
    const [bottles, setBottles] = useState([]);
    // cart
    const [cart , setCart] = useState([]);


    // fetch
    useEffect(()=>{
        fetch('bottols.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    } ,[]);

    useEffect(()=>{
        if(bottles.length >0){
            console.log(bottles)
            const storedCart = getStoredCart();
            const saveCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }
    },[bottles])
    const handleCartbtn= bottles=>{
        const newCart = [...cart, bottles];
        setCart(newCart)
        // addToLs(newCart.id)  
        addToCart(bottles.name)
    }
    const handleRemoveBtn = id =>{
        removeFromLs(id)
    }

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
                    <Cart cart={cart}></Cart>
                
            </div>
         
         </div>


        </div>
    );
};

export default Bottols;