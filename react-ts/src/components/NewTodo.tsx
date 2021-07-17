import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => { //React form submission event
event.preventDefault();
  };
  
  return (
    <form onSubmit={submitHandler}>
<label htmlFor="text">Todo text</label>
<input type="text" id="text"></input>
<button>Add Todo</button>
    </form>
  );
};

export default NewTodo;