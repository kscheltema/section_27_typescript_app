import React, {useRef, useContext} from "react";
import { TodoContext } from "../store/todos-context";
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => { 
  const todosCTX = useContext(TodoContext);
  const todoTextInputRef= useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; 
    //? value not known to be established
    //! value known to be established  - aka not a null value

    if(enteredText.trim().length === 0) {
      //throw error
      return;
    }
    todosCTX.addTodo(enteredText);
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
<label htmlFor="text">Todo text</label>
<input type="text" id="text" ref={todoTextInputRef}></input>
<button>Add Todo</button>
    </form>
  );
};

export default NewTodo;