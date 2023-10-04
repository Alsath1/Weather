/** @format */
import { useState, useEffect, useRef } from 'react';

import { TodoList } from './TodoList';
import { ITodo } from '../types/data';
const App: React.FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const hanleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			addTodo();
		}
	};
	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false
				}
			]);
			setValue('');
		}
	};
	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id));
	};
	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) {
					return todo;
				}
				return {
					...todo,
					complete: !todo.complete
				};
			})
		);
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);
	return (
		<>
			<div>
				<input
					value={value}
					onChange={e => setValue(e.target.value)}
					ref={inputRef}
					onKeyDown={hanleKeyDown}
				/>
				<button onClick={addTodo}>Add</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</>
	);
};

export default App;