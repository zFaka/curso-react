const initalState = [{

  id:1, 
  todo:'buy bread', 
  done:false

}];

const todoReducer = (state=initalState, action) => {

  if(action?.type === 'add'){

      return [...state, action.payload]

  }

  return state;

};

let todos = todoReducer();

const newTodo = {

  id:2, 
  todo:'buy milk', 
  done:false

};

const agregarTodoAction = {
  type: 'add', 
  payload: newTodo
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
