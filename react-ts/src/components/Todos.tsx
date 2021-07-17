import React from 'react';
import Todo from '../models/todo';

const Todos: React.FC<{items: Todo[]}> = (props) => { 
  //functional component: is a function that acts as a functional component 
  //<{}> here define our own props and merge the existing Object type with the new
  return(
    <ul>
{props.items.map((item) => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}

export default Todos;