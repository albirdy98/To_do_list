import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
	id: 0,
	done: false,
	text: '첫번째 일정 입니다.'
  })
]);

export default handleActions({
  [INSERT]: (state, action) => {
	const { id, done, text } = action.payload;

	return state.push(Map({
	  id,
	  done,
	  text
	}));
  },

  [TOGGLE]: (state, action) => {
	const { payload: id } = action;
	const index = state.findIndex(todo => todo.get('id') === id);

	return state.updateIn([index, 'done'], done => !done);
  },

  [REMOVE]: (state, action) => {
	const { payload: id } = action;
	const index = state.findIndex(todo => todo.get('id') === id);

	return state.delete(index);
  }
}, initialState);