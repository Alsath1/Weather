import { ITodo } from 'src/types/data';

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = props => {
	const { id, title, complete, removeTodo, toggleTodo } = props;
	return (
		<>
			<input
				type='checkbox'
				checked={complete}
				onChange={() => {
					toggleTodo(id);
				}}
			/>
			<span style={{ display: 'inline-block', margin: '0 10px' }}>{title}</span>
			<button
				onClick={() => {
					removeTodo(id);
				}}
				style={{
					background: 'transparent',
					border: 'none',
					outline: 'none',
					color: 'red'
				}}
			>
				X
			</button>
		</>
	);
};

export { TodoItem };
