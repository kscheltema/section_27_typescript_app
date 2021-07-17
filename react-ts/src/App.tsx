import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
;
  const addTodoHandler = (todoText: string) => {
const newTodo = new Todo(todoText);
setTodos((prevTodo) => {
  return prevTodo.concat(newTodo);
});
  }

const removeTodoHandler = (todoId: string) => {
setTodos((prevTodos) => {
  return prevTodos.filter(todo => todo.id !== todoId);
});
};

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
<Todos items={todos} onRemoveTodo={removeTodoHandler}/> 
{/* the error is because props is expected  */}
    </div>
  );
}

export default App;
