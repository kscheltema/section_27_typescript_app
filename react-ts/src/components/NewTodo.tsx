import React, {useRef} from "react";

const NewTodo = () => {
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