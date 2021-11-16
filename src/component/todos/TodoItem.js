import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div className = "container p-2 mt-2 bg-secondary form-check  d-flex align-items-center">
      <input type="checkbox"  onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
      
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}} className="text-white" >{todo.text}</span>
      
      <button onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})} className="btn btn-danger ml-auto"><i class="fa-solid fa-trash"></i></button>
    </div>
  );
}

export default TodoItem;