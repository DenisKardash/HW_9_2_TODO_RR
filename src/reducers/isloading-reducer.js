const isLoadingInitialState = false; // Выкл - false, Вкл - true

export const isLoadingReducer = (state = isLoadingInitialState, { type, payload }) => {
	switch (type) {
		case 'IS_LOADING': {
			return false;
		}

		default:
			return state;
	}
};
