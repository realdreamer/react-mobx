import { observable, computed, action } from 'mobx';


class Todo {
  @observable value;
  @observable id;
  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.completed = false;
  }
}

class TodoStore {
  @observable todos = [];
  @observable filter = '';

  @action createTodo = (value) => {
    this.todos.push(new Todo(value));
  }

  @computed get filteredTodos() {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo));
  }
}

export default new TodoStore();