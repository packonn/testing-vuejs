<script setup>
import { defineProps } from "vue";
const emit = defineEmits(["checkboxChange", "handleDeleteTodo"]);

const props = defineProps({
	title: String,
	id: Number,
	completed: Boolean,
});
</script>

<template>
	<div>
		<input
			@change="$emit('checkboxChange', id)"
			type="checkbox"
			name="check"
			id="ckeck"
			v-bind:checked="completed"
		/>
		<li>
			{{ title }}
		</li>
		<button @click="$emit('handleDeleteTodo', id)">X</button>
	</div>
</template>

<style lang="scss" scoped>
div {
	display: flex;
	justify-content: space-between;
	max-width: 600px;

	li {
		list-style: none;
		button {
			background: #5e5df0;
			border-radius: 999px;
			box-shadow: #5e5df0 0 10px 20px -10px;
			box-sizing: border-box;
			color: #ffffff;
			cursor: pointer;
			font-weight: 700;
			line-height: 24px;
			opacity: 1;
			padding: 0px 8px;
			border: 0;
		}
	}
}
</style>
