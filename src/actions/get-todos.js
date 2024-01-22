export const useRequestGetTodos = (dispatch) => {
	return new Promise((resolve) => {
		resolve(fetch(`http://localhost:3004/todos`).then((loadedData) => loadedData.json()));
	});
};

export const getTodosAsync = () => {
	return (dispatch) => {
		useRequestGetTodos().then((todosFromServer) =>
			dispatch({
				type: 'GET_TODOS_FROM_SERVER',
				payload: todosFromServer,
			}),
		);
	};
};
