import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";

const styles ={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)

    const classes=[]

    if(todo.completed){
        classes.push("done")
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input checked={todo.completed} onChange={()=> onChange(todo.id)} type="checkbox" style={styles.input}/>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    );
};

ToDoItem.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem;