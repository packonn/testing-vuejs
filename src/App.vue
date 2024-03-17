<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/todo">Todo list</RouterLink>
			</nav>
		</div>
	</header>
	<main>
		<RouterView />
	</main>
</template>

<style lang="scss">
header {
	div {
		nav {
			display: flex;
			justify-content: space-around;
		}
	}
}
</style>
