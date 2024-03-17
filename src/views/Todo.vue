<script setup>
import list_todo from "@/components/list_todo.vue";
import { ref } from "vue";

const todos = ref(null);
const newTodo = ref("");

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
const addTodo = () => {
	todos.value.push({
		userId: 1,
		id: todos.value.length,
		title: newTodo.value,
		completed: false,
	});
	console.log(todos.value);
};

const deleteTodo = (idTodo) => {
	todos.value = todos.value.filter((todo) => todo.id !== idTodo);
};

fetchTodos();
</script>

<template>
	<div>
		<div class="untilTodo">
			<button @click="fetchTodos">Remise a Zéro</button>
			<form @submit.prevent="addTodo">
				<input type="text" name="addTodo" v-model="newTodo" />
				<button>add todo</button>
			</form>
		</div>
		<div>
			<h3>À faire</h3>
			<div v-for="todo in todos" :key="todo.id">
				<list_todo
					v-if="todo.completed"
					:title="todo.title"
					:id="todo.id"
					:completed="todo.completed"
					@checkboxChange="(id) => handleCompleted(id)"
					@handleDeleteTodo="(id) => deleteTodo(id)"
				/>
			</div>
		</div>
		<div>
			<h3>Fait</h3>
			<div v-for="todo in todos" :key="todo.id">
				<list_todo
					v-if="!todo.completed"
					:title="todo.title"
					:id="todo.id"
					:completed="todo.completed"
					@checkboxChange="(id) => handleCompleted(id)"
					@handleDeleteTodo="(id) => deleteTodo(id)"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.untilTodo {
	display: flex;
	justify-content: space-around;
}
</style>
