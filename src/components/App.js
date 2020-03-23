import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoinputContainer from '../containers/TodoinputContainer';
import TodoListContainer from '../containers/TodoListContainer';



class App extends Component {
  render() {
	return (
	  <PageTemplate>
				<TodoinputContainer/>
				<TodoListContainer/>
			</PageTemplate>
	);
  }
}

export default App;