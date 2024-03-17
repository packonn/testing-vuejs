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
	<li>
		<input
			@change="$emit('checkboxChange', id)"
			type="checkbox"
			name="check"
			id="ckeck"
			v-bind:checked="completed"
		/>
		{{ title }}
		<span> {{ completed }}</span>
		<button @click="$emit('handleDeleteTodo', id)">X</button>
	</li>
</template>

<style lang="scss" scoped>
li {
	list-style: none;
}
</style>
