import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css'

export default class App extends Component{
maxId=100;
state={
  todoData : [],
  term:'',
  filter:'all'
}
   

createTodoItem(label){
  return{
    label,
    important:false,
    done:false,
    id:this.maxId++
  }
}  


deleteItem=(id)=>{
  this.setState(({todoData})=>{
    const idx = todoData.findIndex((el)=>el.id==id);
    const before =todoData.slice(0,idx);
    const after =todoData.slice(idx+1);
    const newArray =[...before,...after];
    return{
      todoData:newArray
    }
  })
}

addItem=(text)=>{
  const newItem=this.createTodoItem(text)
  this.setState(({todoData})=>{
    const newArr=[...todoData,newItem];
    return{
      todoData:newArr
    }
  })
}

toggleProperty=(arr,id,propName)=>{
  const idx = arr.findIndex((el)=>el.id==id);
  const oldItem=arr[idx]
  const newItem={...oldItem,
  [propName]:!oldItem[propName ]};
  
  return [...arr.slice(0,idx),newItem,...arr.slice(idx+1)]
}



onToggleDone=(id)=>{
  this.setState(({todoData})=>{
    return{
  todoData:this.toggleProperty(todoData,id,'done')
    }
  })
};
onToggleImportant=(id)=>{
  this.setState(({todoData})=>{
    return{
  todoData:this.toggleProperty(todoData,id,'important')
    }
  })
};
onSearchChange=(term)=>{
this.setState({term})
} 

onFilterChange=(filter)=>{
  this.setState({filter})
  }

search=(items,term)=>{
  if(term.length==0){
    return items
  }
  return items.filter((item)=>{
    return item.label.indexOf(term)>-1
  })
}

filter=(items,filter)=>{
  switch(filter){
    case 'all':
            return items
    case 'active':
              return items.filter((item)=>!item.done)
    case 'done':
              return items.filter((item)=>item.done)
    default:
           return items;
  }
}

render(){
  const {todoData, term,filter} = this.state;
  const visibleItems=this.filter(this.search(todoData,term),filter)

  const countDone= todoData.filter((el)=>el.done).length
  const countTodo=todoData.length - countDone
  return(
    <div className='main'>
    <AppHeader toDo={countTodo} done={countDone}/>
    <SearchPanel onSearchChange={this.onSearchChange}/>
    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
    <TodoList 
    todos = {visibleItems }
    onDeleted={ this.deleteItem}
    onToggleImportant={this.onToggleImportant}
    onToggleDone={this.onToggleDone}/>
    <AddItem 
    onItemAdded={ this.addItem }/>
    </div>
     );
    }
  }