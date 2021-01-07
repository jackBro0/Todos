import React, {useEffect} from 'react';
import TudoList from "./ToDo/toDoList";
import Context from "./context"; 
import Loader from "./loader";
import Modal from "../src/Modal/Modal";

const AddToDo = React.lazy(()=> new Promise(resolve => {
  setTimeout(()=> {
    resolve(import('./ToDo/addToDo'))
  })
}))

function App() {
  const [todos, setTodos]=React.useState([]);
  const [Loading, setLoading] = React.useState(true);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(()=> {
          setTodos(todos)
          setLoading(false)
        },2000)
      })
  }, [])

  function changeValueToTrue(id){
    setTodos( 
      todos.map(todo => {
      if(todo.id === id){
        todo.completed =! todo.completed
      }
      return todo
    })
    )
  }

function addToDo(title){
  setTodos(todos.concat([{
   title,
   id: Date.now(),
   completed: false 
  }]))
}

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
}

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>React Tutorial</h1>

      <Modal/>

      <React.Suspense fallback={<p>Loading...</p>}>
      <AddToDo onCreate={addToDo}/>
      </React.Suspense>

      {Loading && <Loader/>}

      {todos.length ? (<TudoList 
      todos={todos}
      type={changeValueToTrue}
      />) : (
      Loading? null : <p>No To do</p>
      )}
      
    </div>
    </Context.Provider>
  );
}

export default App;
