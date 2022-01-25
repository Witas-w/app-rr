import React from 'react';
import Product from '../components/Product';
import { Link,useParams} from 'react-router-dom';

const ProductPage=(props)=>{
    let match = useParams();
    
    return(
 <>
 <div>Strona produktu</div>
 <Product id={match.id}/>
 <Link to="/products">Powrót do listy produktów</Link>
 </>
    );
}
export default ProductPage;