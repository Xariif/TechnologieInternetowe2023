import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, addItem, deleteItem }) {
	return (
		<div>
			{todoItems.map((el, i) => (
				<TodoItem key={i} name={el} deleteItem={() => deleteItem(i)} />
			))}

			<AddTodoItem addItem={addItem} toDoItems={todoItems} />
		</div>
	);
}

const AddTodoItem = ({ addItem }) => {
	const [newItem, setNewItem] = useState("");

	const onAdd = () => {
		addItem(newItem);
		setNewItem("");
	};

	return (
		<div>
			<input
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button onClick={onAdd}>Add</button>
		</div>
	);
};
