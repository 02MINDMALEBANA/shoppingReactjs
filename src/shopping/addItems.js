// import '../CSS/display.css'
import '../CSS/additems.css'
import React,{useState} from "react";

import pic from '../media/wiredKeyboard.jfif';
import pic1 from '../media/wirelesskeyboard.jfif';
import pic2 from '../media/wirelessMouse.jfif';
import pic3 from '../media/wiredMOuse.jfif';
import pic4 from '../media/case.jfif';
import pic5 from '../media/computercase.jfif';
function AddItems (props){
    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');
   
    // const add=(()=>{
        
    //     console.log(name);
    //     console.log(amount);


    //     props.add (name, amount);
    // })
    const addProducts=(item) =>{
        props.addProducts(item);

    }
    //
    // const addC=(()=>{
        
    //     console.log(transactionType);

    //     props.addC (name, amount, transactionType) ;
    // })

    //
    // const data=[
    //     {
    //         "name" : "DELL keyboard",
    //         "amount" : "R350.00"
    //     }
    // ]
    // ///////
    // const tablerows=data.map(
    //     (element) =>{
    //         return(
    //             <button>
    //                 {element.name}
    //                 {element.amount}
    //             </button>
    //         )
    //     }
    // )
    // /////////
    
    return (
        <div>
            <h1 style={{color:'black',fontStyle:'italic', fontWeight:'bolder', marginTop:'60px'}}>COMPUTER COMPONENTS STORE</h1>
            <table id="table" border={"1"}>
                <tbody>
                    <tr>
                       
                        <td>
                            
                            <img src={pic}></img>
                            <h3 id='key1' style={{color:'black'}}>DELL keyboard</h3><h5 style={{color:'red'}}>R350.00</h5>
                            <button className='btn' onClick={()=>addProducts({image:pic,name:"DELL keyboard", amount:'350.00'})}>Add to BookMark</button>
                        </td>
                        <td>
                            <img src={pic1}></img>
                            <h3 style={{color:'black'}}>SAMSUNG keyboard</h3><h5 style={{color:'red'}}>R429.99</h5>
                            <button className='btn' onClick={()=>addProducts({image:pic1 , name:"SAMSUNG keyboard", amount:"429.99"})}>Add to BookMark</button>
                        </td>

                    </tr>
                   
                    <tr>
                        <td>
                            <img src={pic2}></img>
                            <h3 style={{color:'black'}}>HP wireless Mouse</h3><h5 style={{color:'red'}}>R159.99</h5>
                            <button className='btn' onClick={()=>addProducts({image:pic2 , name:"HP wireless Mouse", amount:"159.99"})}>Add to BookMark</button>
                        </td>
                        <td>
                            <img src={pic3}></img>
                            <h3 style={{color:'black'}}>wired USB Mouse</h3><h5 style={{color:'red'}}>R119.99</h5>
                            <button className='btn' onClick={()=>addProducts({image:pic3 , name:"wired USB Mouse", amount:"119.99"})}>Add to BookMark</button>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <img src={pic4}></img>
                            <h3 style={{color:'black'}}>HP Computer Case</h3><h5 style={{color:'red'}}>R999.99</h5>
                            <button className='btn' onClick={()=>addProducts({image:pic4 , name:"HP Computer Case", amount:"999.99"})}>Add to BookMark</button>
                  
                        </td>
                        <td>
                            <img src={pic5}></img>
                            <h3 style={{color:'black'}}>SAMSUNG Computer Case</h3><h5 style={{color:'red'}}>R1500.00</h5>
                            <button className='btn' onClick={()=>addProducts({image:pic5 , name:"SAMSUNG Computer Case", amount:"1500.00"})}>Add to BookMark</button>
                        </td>

                    </tr>   
                </tbody>
            </table>
           
       
        </div>
       

    );
}

export default AddItems;


