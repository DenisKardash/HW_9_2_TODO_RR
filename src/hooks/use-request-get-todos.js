

export const useRequestGetTodos = (getTodosAsync, dispatch) => {
	dispatch(getTodosAsync());
};
