import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
import data from './data'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';


function App() {

  const [cartData,setCartdata]= useState([])
  const handleCartData= (product)=>{
    console.log(product)
    setCartdata((cartData)=> [...cartData,{data:product, quantity:1}])
  }
  return (
    <div className="App" style={{backgroundColor:"black"}}>
    <Router>
      <Navbar />
      <Carousel />
      <Routes>
        <Route exact path = "/" element={<Card data={data} handleCartData={handleCartData}/>}/>
        <Route exact path = "/Cart" element={<Cart data={cartData} />}/>
      </Routes>
    
    </Router>
    </div>
  );
}
export default App
