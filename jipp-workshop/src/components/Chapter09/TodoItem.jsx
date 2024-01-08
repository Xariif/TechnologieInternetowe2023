export default function TodoItem({ name, deleteItem }) {
	return (
		<div>
			{name}
			<button onClick={deleteItem}>X</button>
		</div>
	);
}
