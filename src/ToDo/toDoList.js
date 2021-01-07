import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './toDoItem';




const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }

function ToDoList(props) {
   return(
       <ul style={styles.ul}>
           {props.todos.map((todo, index) => {
             return <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.type}/>
           })}
       </ul>
   ); 
};
ToDoList.propTypes={
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.func.isRequired
}


export default ToDoList;