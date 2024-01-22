const todosInitialState = [];

export const todosReducer = (state = todosInitialState, actions) => {

	switch (actions.type) {
		case 'GET_TODOS_FROM_SERVER':
			return [...actions.payload] ;

		case 'SORT_TODOS':
			return [...state].sort((a, b) => a.content.localeCompare(b.content));

		default:
			return state;
	}
};
