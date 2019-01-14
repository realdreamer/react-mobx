import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

export class TodoList extends Component {
  createNew = (e) => {
    if(e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = '';
    }
  }

  filter = (e) => {
    this.props.store.filter = e.target.value;
  }

  toggleComplete = (todo) => e => {
    todo.completed = !todo.completed;
  }

  setFilterState = (value) => e => {
    e.preventDefault();
    this.props.store.filterState = value;
  }

  render() {
    const { filter, filteredTodos } = this.props.store;
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <input type="text" name="createnew" onKeyPress={this.createNew} placeholder="create todo" />
          <input type="text" name="filter" value={filter} onChange={this.filter} placeholder="filter" />
        </div>
        <ul>
          {
            filteredTodos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" name={todo.value} checked={todo.completed} value={todo.completed} onChange={this.toggleComplete(todo)} />
                <span>{todo.value}</span>
              </li> 
            ))
          }
        </ul>
        <a onClick={this.setFilterState('all')} href="#all">All</a><span>|</span>
        <a onClick={this.setFilterState('active')} href="#active">Active</a><span>|</span>
        <a onClick={this.setFilterState('completed')} href="#completed">Completed</a>
        <DevTools />
      </div>
    )
  }
}


const TodoListWrapper = inject('store')(observer(TodoList));

export default TodoListWrapper;