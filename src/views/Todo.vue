<script setup>
import list_todo from "@/components/list_todo.vue";
import { ref } from "vue";

const todos = ref(null);
const fetchTodos = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/todos?userId=1"
	);
	todos.value = await response.json();
};

const handleCompleted = (idTodo) => {
	todos.value = todos.value.map((todo) => {
		if (todo.id === idTodo) {
			todo.completed = !todo.completed;
		}
		return todo;
	});
};
const deleteTodo = (idTodo) => {
	console.log(idTodo);
	todos.value = todos.value.filter((todo) => todo.id !== idTodo);
};
</script>

<template>
	<div>
		<button @click="fetchTodos">Charge les todo Todo page</button>
		<div v-for="todo in todos" :key="todo.id">
			<list_todo
				:title="todo.title"
				:id="todo.id"
				:completed="todo.completed"
				@checkboxChange="(id) => handleCompleted(id)"
				@handleDeleteTodo="(id) => deleteTodo(id)"
			/>
		</div>
	</div>
</template>

<style lang="scss"></style>
