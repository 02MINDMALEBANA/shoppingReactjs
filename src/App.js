import logo from './logo.svg';

import './App.css';

import AddItems from './shopping/addItems';
import DisplayOutputs from './shopping/DisplayOutput';
import React, {useEffect, useState} from 'react'


function App() {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    console.log(products);
  }, [products])
  const addPro = ((_item)=>{
    setProducts((item)=> [...item,
      _item

      
    ])
    console.log(products);
     //storing to local storage
    const results = localStorage.setItem('results', JSON.stringify(products))
     console.log('stored', JSON.parse(localStorage.getItem('results')))

    

  })
 
  
  // const [transaction, setTransaction] = useState ([]);
  // useEffect( () => {
  //   console.log(transaction);
  // }, [transaction])

  // const addTransaction=((_name,_amount)=>{

  //   setTransaction((item)=> [...item, {
  //     id:item.length,
  //     name:'DELL Keyboard',
  //     amount:'150.00'
      
      


  //   }])
  //   //
  //   setTransaction((item)=> [...item, {
  //     id:item.length,
  //     name:'SAMSUNG Keyboard',
  //     amount:'429.99',
      
    


  //   }])
  //   //
  //   setTransaction((item)=> [...item, {
  //     id:item.length,
  //     name:'HP wireless Mouse',
  //     amount:'159.99',
      
  //   }])
  //   //
  //   setTransaction((item)=> [...item, {
  //     id:item.length,
  //     name:'wired USB Mouse',
  //     amount:'199.99',
    
  //   }])
  //   //
  //   setTransaction((item)=> [...item, {
  //     id:item.length,
  //     name:'HP Computer Case',
  //     amount:'999.99',
     
  //   }])
  //   //
  //   setTransaction((item)=> [...item, {
  //     id:item.length,
  //     name:'SAMSUNG Computer Case',
  //     amount:'1500.00',
     
  //   }])
  //   console.log(transaction);

    //storing to local storage
    // const results = localStorage.setItem('results', JSON.stringify(transaction))
    // console.log('stored', JSON.parse(localStorage.getItem('results')))

  // })


 
  
  return (
    <div className="App">
      {/* <AddItems add={addTransaction}/> */}

      <AddItems addProducts={addPro} />
      <DisplayOutputs list={products} />
      
  

      
    </div>
  );
}

export default App;
