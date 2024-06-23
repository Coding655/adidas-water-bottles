import { useState } from 'react';
import './bottle.css'

const Bottle = ({bottles, handleCartbtn}) => {
    // console.log(bottles)
    const {name, img, price_usd, color} = bottles;
    const [select, setSelect] = useState(false);
    const handleSelectBtn = () =>{
        setSelect(!select)
    }
    return (
        <div className={`border ${select ? 'select' : 'non-select'}`}>
            <h3>Name: <em>{name}</em></h3>
            <img className="img-width" src={img} alt="" />
            <p>Color: {color}</p>
            <p>Price: {price_usd}</p>
            
            <button onClick={handleSelectBtn}>{select ? 'SELECT' : 'N-SELECT'}</button>
                                    <br />
            <button className='btn-block' onClick={()=>handleCartbtn(bottles)}>Purchase</button> 
           
        </div>
    );
};

export default Bottle;