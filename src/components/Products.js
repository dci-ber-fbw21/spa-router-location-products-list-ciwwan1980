import React, { Component } from 'react'
import ProductDetails from "./ProductDetails"
import "./products.css"

export default class Products extends Component {

    state={
        products:[...this.props.data]
    }

    asc=()=>{

        console.log(this.state.products)
    let ascData=this.props.data.sort((a,b)=>{
        if (a.price>b.price){
            return -1
        }else{
            return 1
        }
    
    })
    console.log(ascData)
    this.setState({
        products:ascData, 
    })
}

    des=()=>{

        console.log(this.state.products)
    let desData=this.props.data.sort((a,b)=>{
        if (a.price>b.price){
            return 1
        }else{
            return -1
        }
    
    })
 
    this.setState({
        products:desData, 
    })
}
    render() {
        
        const allProducts= this.props.data&&this.props.data.map((product,i)=>{
            return(
                <ProductDetails  key={i} product={product}/>
            )
        })
        return (
            <div class
            
            // here we show only when we prsee on products, we have all information of products
            
            
            Name="products">
                <main style={{display:"flex", justifyContent:"center", padding:"20px"}}>
                <div className="btn1">Reset</div>
                <div className="btn1" onClick={this.asc}>Sort &#8593; </div>
                <div className="btn1" onClick={this.des}>Sort &#8595;</div>
                </main>

                <table>
                <thead>
                <tr>
                <th>Name</th>
                 <th>shortDecription</th>
                  <th>Price</th>
                </tr>
                </thead> 
                
                <tbody>
                {allProducts}
                </tbody>
                </table>
               
               
               
            </div>
        )
    }
}
