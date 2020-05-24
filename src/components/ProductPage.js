import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class ProductPage extends Component {

state={
    index:0,
    data:this.props.data,
    item:null

    }


componentDidMount(){
         const item=this.props.data&&this.props.data.find(({slug})=>slug===this.props.match.params.slug)
  const indexItem= this.state.data.indexOf(item)
        this.setState({
            item:item,
            index:indexItem
        })
    }

 previous=()=>{
      
        this.setState({
            index:this.state.index-1, 
            item:this.state.data[this.state.index]
        })
 this.props.history.push(`/products/${this.state.item.slug}`)

    console.log(this.state.index)
 }
 next=()=>{
      

        this.setState({
            index:this.state.index+1,
            item:this.state.data[this.state.index]
        })

        this.props.history.push(`/products/${this.state.item.slug}`)


    console.log(this.state.index)
 }
    render() {
        const Item= this.state.item
       
        return (
            <div>
            <span onClick={()=>this.props.history.goBack()}>&#8249;</span>
            <h2>{Item && Item.name}</h2>
            <div className="image">
            <img src={Item && Item.image} width="300" alt="product image"/></div>

            <h4>{Item && Item.description}</h4>
            <h3>{Item && Item.price}</h3>

            <button onClick={this.previous}>prev</button>
            <button onClick={this.next}>next</button>
            </div>

        )
    }
}
