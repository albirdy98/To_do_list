import React, { Component } from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todo';

class TodoListContainer extends Component {

  handleToggle = (id) => {
	const { TodoListActions } = this.props;
	TodoListActions.toggle(id);
  };

  handleRemove = (id) => {
	const { TodoListActions } = this.props;
	TodoListActions.remove(id);
  };

  render() {
	const { todos } = this.props;
	const { handleToggle, handleRemove } = this;
	return (
	  <TodoList
		todos={todos}
		onToggle={handleToggle}
		onRemove={handleRemove}
	  />
	);
  }
}

export default connect(
  (state) => ({
	todos: state.todos,
  }),
  (dispatch) => ({
	TodoListActions: bindActionCreators(todosActions, dispatch),
  })
)(TodoListContainer);