import React from 'react';
import './app-header.css'

const AppHeader = ({toDo,done}) => {
    return(  
     <div className="app-header">   
    <h1 className="header">My Todo List</h1>
    <h2 className="header">{toDo} more to do, {done} done</h2>
    </div>
    )
    }
export default AppHeader;