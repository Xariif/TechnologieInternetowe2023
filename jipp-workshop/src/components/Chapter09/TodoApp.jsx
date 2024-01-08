import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoApp() {
	const [todoItems, setTodoItems] = useState([]);

	const addItem = (item) => {
		setTodoItems([...todoItems, item]);
	};

	const deleteItem = (index) => {
		setTodoItems(todoItems.filter((el, i) => i !== index));
	};

	return (
		<div>
			<h1>TODO App</h1>
			<TodoList
				todoItems={todoItems}
				addItem={addItem}
				deleteItem={deleteItem}
			/>
		</div>
	);
}
