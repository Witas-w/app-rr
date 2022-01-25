 import React from 'react';
 
import '../styles/header.css'

 import header1 from '../images/sf-1.jpeg';
 import header2 from '../images/sf-2.jpeg';
 import header3 from '../images/sf-3.jpeg';

 import {Route,Routes} from 'react-router-dom';

const ImageOne =()=>{
    return(
        <img src={header1} alt="san francisco"/>
    )
}
const ImageTwo =()=>{
    return(
        <img src={header2} alt="san francisco"/>
    )
}
const ImageThree =()=>{
    return(
        <img src={header3} alt="san francisco"/>
    )
}


 class Header extends React.Component {

     render(){
 
        return ( 
            <Routes>
            <Route path="/" exact element={<ImageOne/>}/>
            <Route path="/products" element={<ImageTwo/>}/>
            <Route path="/contact" element={<ImageThree/>}/>
            <Route path="/admin" element={<ImageThree/>}/>
            <Route path="*" element={<ImageOne/>}/>

   
              
            </Routes>
         );
     }
 
 }
  
 export default Header;