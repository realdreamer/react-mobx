import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
class TodoList extends Component {
  createNew = (e) => {
    if(e.which === 13) {
      this.props.TodoStore.createTodo(e.target.value);
      e.target.value = '';
    }
  }

  filter = (e) => {
    this.props.TodoStore.filter = e.target.value;
  }

  toggleComplete = (todo) => e => {
    console.log(e);
    todo.completed = !todo.completed;
  }

  render() {
    const { filter, filteredTodos } = this.props.TodoStore;
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <input type="text" name="createnew" onKeyPress={this.createNew} />
          <input type="text" name="filter" value={filter} onChange={this.filter} />
        </div>
        <ul>
          {
            filteredTodos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" name={todo.value} checked={todo.completed} value={todo.completed} onChange={this.toggleComplete(todo)} />
                {todo.value}
              </li> 
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;