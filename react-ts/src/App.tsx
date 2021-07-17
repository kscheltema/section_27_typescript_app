import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
new Todo('Learn React'),
new Todo('Learn TypeScript')
  ];

  return (
    <div className="App">
<Todos items={todos}/> 
{/* the error is because props is expected  */}
    </div>
  );
}

export default App;
