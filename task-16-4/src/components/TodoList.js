import React from 'react';
import style from './css/TodoList.css';
import Item from '../components/Todo';

const TodoList = props => {
  const list = props.todoItems.map(element => <li Todo key={element.id} remove={props.rem.bind(this)} >tasks={element.text}</li> )

  return (
  		<div className={style.TodoList}>
    		<ul>{list}</ul>
    	</div>
  )
}

export default TodoList;