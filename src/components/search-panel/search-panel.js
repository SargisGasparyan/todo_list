import React, { Component } from 'react';
import './search-panel.css'
export default class SearchPanel extends Component{
//  state={
//    term:''
//  }



 onSearchChange=(e)=>{
   const term= e.target.value
  // this.setState({
  //     term:term
  // })
  this.props.onSearchChange(term)
}

  render(){
    return(
      <input  className="inp" placeholder={ 'search' }
      onChange= {this.onSearchChange}/>
    )
  }
}
