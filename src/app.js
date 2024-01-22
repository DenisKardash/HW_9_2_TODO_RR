import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { SORT_TODOS, getTodosAsync, LOAD_TODOS, SEARCH_TODOS } from './actions';
import { selectIsLoading, selectTodos, selectSearchText } from './selectors';

import styles from './app.module.css';

import {
	useRequestGetTodos,
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestUpdateTodo,
} from './hooks';

export const App = () => {
	const dispatch = useDispatch();

	const [searchText, setSearchText] = useState('');

	const todos = useSelector(selectTodos);
	// const isLoading = useSelector(selectIsLoading); // ???????????????????
	// const searchText = useSelector(selectSearchText);

	useRequestGetTodos(getTodosAsync, dispatch, LOAD_TODOS);

	const { requestAddTodo } = useRequestAddTodo();
	const { requestDeleteTodo } = useRequestDeleteTodo();
	const { requestUpdateTodo } = useRequestUpdateTodo();

	const sortTodos = () => {
		dispatch(SORT_TODOS);
	};

	const searchTodos = () => {
		const filteredTodos = [...todos].filter((todo) => todo.content.includes(searchText));
		return filteredTodos;
	};

	return (
		<>
			<header className={styles.app}>
				<input
					className={styles.input}
					type="text"
					placeholder="Saerch by phrases..."
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button className={styles.button} onClick={() => sortTodos()}>
					Sort
				</button>
				<button className={styles.button} onClick={requestAddTodo}>
					Add todo
				</button>
			</header>
			{/* <div className={styles.app}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					searchTodos().map(({ id, content }) => (
						<div key={id} className={styles.list}>
							<div>{content}</div>
							<button className={styles.button} onClick={() => requestDeleteTodo(id)}>
								Delete
							</button>
							<button
								className={styles.button}
								onClick={() => requestUpdateTodo(id, content)}
							>
								Change
							</button>
						</div>
					))
				)}
			</div> */}
			<div className={styles.app}>
				{searchTodos().map(({ id, content }) => (
					<div key={id} className={styles.list}>
						<div>{content}</div>
						<button className={styles.button} onClick={() => requestDeleteTodo(id)}>
							Delete
						</button>
						<button
							className={styles.button}
							onClick={() => requestUpdateTodo(id, content)}
						>
							Change
						</button>
					</div>
				))}
			</div>
		</>
	);
};
