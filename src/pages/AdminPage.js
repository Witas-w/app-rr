import React from 'react';
import {Navigate } from 'react-router';

const permission = false;

const AdminPage=(props)=>{
    return(
 <>      
 {permission?<h3>Siema</h3>:<Navigate to="/login"/>} 

</>
    );
}
export default AdminPage;