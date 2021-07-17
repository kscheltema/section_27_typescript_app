import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
new Todo('Learn React'),
new Todo('Learn TypeScript')
  ];

  const addTodoHandler = (todoText: string) => {

  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
<Todos items={todos}/> 
{/* the error is because props is expected  */}
    </div>
  );
}

export default App;
