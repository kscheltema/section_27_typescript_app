import React, {useRef} from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => { 
  //{onAddTodo:(parameters) => define the return- TS way of defining a function
  const todoTextInputRef= useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => { //React form submission event
event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; 
    //? value not known to be established
    //! value known to be established  - aka not a null value

    if(enteredText.trim().length === 0) {
      //throw error
      return;
    }

    props.onAddTodo(enteredText);
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