import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/navigation.css'

const list=[
    {
        name:'start',
        path:'/'
    },
    {
        name:'produkty',
        path:'/products',

    },
    {
        name:'kontakt',
        path:'/contact',  

    },
    {
        name:'panel admina',
        path:'/admin', 
         
    },
]
 
const Nav = () => {

    const menu = list.map((item,i)=>(
        <li key={item.name}>
            <NavLink to={item.path} >
                {item.name}
            </NavLink>
        </li>
    ))
    return ( 
        <div>
   <nav>
       <ul>
        {menu}
       </ul>
   </nav>
        </div>
   
     );
}
 
export default Nav;