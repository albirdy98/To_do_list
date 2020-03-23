import React, { Component } from 'react';
import TodoInput from '../components/InputTodo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todo';


class TodoinputContainer extends Component {

  id = 1;
  getId = () => {
	return ++this.id;
  };

  handleChange = (e) => {
	const { value } = e.target;
	const { InputActions } = this.props;
	InputActions.setInput(value);
  };

  handleInsert = () => {
	const { InputActions, TodosActions, value } = this.props;

	TodosActions.insert({
	  id: this.getId(),
	  done: false,
	  text: value,
	});
	InputActions.setInput('');
  };

  render() {
	const { handleChange, handleInsert } = this;
	const { value } = this.props;
	return (
	  <TodoInput
		onChange={handleChange}
		onInsert={handleInsert}
		value={value}
	  />
	);
  }
}

export default connect(
  (state) => ({
	value: state.input.get('value')
  }),
  (dispatch) => ({
	InputActions: bindActionCreators(inputActions, dispatch),
	TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoinputContainer);