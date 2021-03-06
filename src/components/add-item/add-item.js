import React, {Component} from 'react';
import './add-item.css'

export default class AddItem extends Component{

    state={
        label:''
    }

    
    onLabelChange=(e)=>{
        this.setState({
            label:e.target.value
        })
    }


    onoclick=(e)=>{
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label:''
        })
    }
    
        render(){
        return(
            <form className='item-add-form d-flex'>
                <input type='text'
                        className="form-control"
                        onChange= {this.onLabelChange}
                        placeholder= 'What needs to be done' value={this.state.label} />
                <button type="button" className='clsAddBtn'
                  onClick = {this.onoclick}>Add
                </button>
            </form>
        )
    }
}