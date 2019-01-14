import { observable, computed, action, decorate } from 'mobx';


class Todo {
  value;
  id;
  completed;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.completed = false;
  }
}

decorate(Todo, {
  value: observable,
  id: observable,
  completed: observable,
});

// class TodoStore {
//   todos = [{value: 'test', id: 1, completed: false}];
//   filter = '';
//   filterState: 'all';

//   createTodo = (value) => {
//     this.todos.push(new Todo(value));
//   }

//   setFilter = (filterState) => {
//     this.filterState = filterState;
//   }

//   get filteredTodos() {
//     let filterTodos;
//     switch(this.filterState) {
//       case 'completed':
//         filterTodos = this.todos.filter(todo => todo.completed)
//         break;
//       case 'active':
//         filterTodos = this.todos.filter(todo => !todo.completed)
//         break;
//       default:
//         filterTodos = this.todos;
//         break;
//     }
//     const matchesFilter = new RegExp(this.filter, 'i');
//     return filterTodos.filter(todo => !this.filter || matchesFilter.test(todo.value));
//   }
// }

const TodoStore = () => (observable({
  todos: [{value: 'test', id: 1, completed: false}],
  filter: '',
  filterState: 'all',

  createTodo (value) {
    this.todos.push(new Todo(value));
  },

  setFilter (filterState) {
    this.filterState = filterState;
  },

  get filteredTodos() {
    let filterTodos;
    switch(this.filterState) {
      case 'completed':
        filterTodos = this.todos.filter(todo => todo.completed)
        break;
      case 'active':
        filterTodos = this.todos.filter(todo => !todo.completed)
        break;
      default:
        filterTodos = this.todos;
        break;
    }
    const matchesFilter = new RegExp(this.filter, 'i');
    return filterTodos.filter(todo => !this.filter || matchesFilter.test(todo.value));
  },
}, {
  createTodo: action,
  setFilter: action,
}));

// decorate(TodoStore, {
//   todos: observable,
//   filter: observable,
//   filterState: observable,
//   filteredTodos: computed,
//   createTodo: action,
//   setFilter: action,
// });

// export default new TodoStore();
export default TodoStore();