import React from 'react';

import { Link } from "react-router-dom";

export default class Home extends React.Component {

    render() {
      console.log(this.props)
      const topProducts =this.props.data && this.props.data.sort((a, b) => b.price - a.price).slice(0,4);
      console.log(topProducts)
        return(
         
            <div>
            <h1>Welcome visitor</h1>
            
            <span>
            <Link to="/products">
            Products
            </Link>
            </span>

      
                <div className="outer-div">

                {topProducts && topProducts.map((topProduct, index) => {
              return (

                //???????? why we went here in Home to topProduct.slug

                
                <Link to={`/products/${topProduct.slug}`}>
                  <div className="inner-div">
              <h3>{topProduct.name}</h3>
              <span>{topProduct.price}</span>
                  </div>
                  </Link>
                  )
                })}
                
                </div>
              
            <div>
             
            </div>
              </div>
            
     
        )
    }
}