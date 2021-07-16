import React from 'react';

const Todos: React.FC<{items: string[]}> = (props) => { 
  //functional component: is a function that acts as a functional component 
  //<{}> here define our own props and merge the existing Object type with the new
  return(
    <ul>
{props.items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default Todos;