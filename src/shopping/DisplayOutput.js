import React from "react";
import "../CSS/display.css"
function DisplayOutputs(props){
    return(
        <div>
            {props.list.map((item) => (
                <div key={item.id}>
                <div className="transaction-item">
                    <div className="head"><h3>BOOKMARK</h3></div>
                    <div>
                        <h4 style={{paddingLeft:'1px', paddingTop: '25px'}}>{item.name}</h4>
                    </div>
                    <div>
                        <h4 style={{paddingLeft:'1px', paddingTop: '25px'}}>R{item.amount}</h4>
                    </div>
                </div>


        </div>

            ))}
            
              {/* {props.list.map((item) => (
                <div key={item.id}>

                     {item.componentType == "COMPONENTS" ? (

                        <div className="transaction-item">
                            <div className="head"><h3>BOOKMARK</h3></div>
                        
                           <div>
  
                               <h4 style={{paddingLeft:'1px', paddingTop: '25px'}}>{item.name}</h4>
                               </div>
                           <div>
                               <h4 style={{paddingLeft:'1px', paddingTop: '25px'}}>R{item.amount}</h4>
                           </div>
                          
                       </div>

                    ) : (
                        <div className="transaction-item">
                            <div className="head"><h3>BOOKMARK</h3></div>
                            <div>
                                <h4 style={{paddingLeft:'1px', paddingTop: '25px'}}>{item.name}</h4>
                            </div>
                            <div>
                                <h4 style={{paddingLeft:'1px', paddingTop: '25px'}}>R{item.amount}</h4>
                            </div>
                           
                        </div>
                    ) 

                    }
                  
                </div> 
            ))} */}
            
        </div>

    )

}

export default DisplayOutputs;
