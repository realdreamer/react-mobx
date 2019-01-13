import TodoStore from './TodoStore';

describe('TodoStore', () => {
  it('creates todos', () => {
    TodoStore.createTodo('Buy Milk');
    expect(TodoStore.todos.length).toBe(1);
  });
})