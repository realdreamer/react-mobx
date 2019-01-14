import { shallow } from 'enzyme';
import React from 'react';

import { TodoList } from './TodoList';
import TodoStore from './stores/TodoStoreWithoutDecorators';

describe('TodoList', () => {
  let store;
  beforeEach(function(){
    store = {
      filteredTodos: [
        {value: 'todo1', id: 111, completed: false},
        {value: 'todo2', id: 222, completed: false},
        {value: 'todo3', id: 333, completed: false},
      ],
      filter: 'test',
      filterState: 'all', 
      createTodo: (val) => {
        this.completed = true;
        this.todoValue = val;
        this.id = 12121;
      },
    };
  });

  it('renders TodoList', function(){
    // TodoStore.createTodo('todo1');
    const component = shallow(<TodoList store={store} />);
    console.log(component.find('li'));
    // expect(component.find('li span').at(0).text()).toBe('test');
    expect(component.find('li span').at(0).text()).toBe('todo1');
    expect(component.find('li span').at(1).text()).toBe('todo2');
  })
})