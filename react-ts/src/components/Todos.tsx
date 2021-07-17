import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{items: Todo[]}> = (props) => { 
  //functional component: is a function that acts as a functional component 
  //<{}> here define our own props and merge the existing Object type with the new
  return(
    <ul>
{props.items.map((item) => <TodoItem key={item.id} text={item.text}/>)}
    </ul>
  );
}

export default Todos;