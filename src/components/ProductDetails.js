import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class ProductDetails extends Component {
    render() {

        //?????? weher we got the this.props.product

        const {name,slug,price}= this.props.product

        return (
            // ?????? why we put here Slug, whats the different between productDetails and ProductsPage
            
            <NavLink to={`/products/${slug}`} >
         <tr>
        <td>{name}</td>
        <td>{slug}</td>
        <td>{price}</td>
         </tr>
         </NavLink>
        )
    }
}
