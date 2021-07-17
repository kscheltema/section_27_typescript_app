import React, {useRef} from "react";

const NewTodo = () => {
  const todoTextInputRef= useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => { //React form submission event
event.preventDefault();
  };
  
  return (
    <form onSubmit={submitHandler}>
<label htmlFor="text">Todo text</label>
<input type="text" id="text" ref={todoTextInputRef}></input>
<button>Add Todo</button>
    </form>
  );
};

export default NewTodo;