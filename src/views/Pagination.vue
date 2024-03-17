<script setup>
import { computed, ref, watchEffect } from "vue";

const posts = ref([]);
const byPage = 6;
const currentPage = ref(1);
const pagination = computed(() => {
	return posts.value ? Math.ceil(posts.value.length / byPage) : 0;
});

const fetchPost = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	posts.value = await response.json();
};
const movePage = (e) => {
	currentPage.value = +e.target.textContent;
};

watchEffect(() => {
	// console.log("Nombre de pages:", pagination.value);
	// console.log("Posts:", posts.value);
});
fetchPost();
</script>

<template>
	<main>
		<h1>Pagination</h1>
		<div class="commentaire-container">
			<div
				v-for="post in posts.slice(
					(currentPage - 1) * byPage,
					currentPage * byPage
				)"
				:key="post.id"
			>
				<h4>{{ post.id }}. {{ post.title }}</h4>
				<p>{{ post.body }}</p>
			</div>
		</div>
		<div class="pagination-container">
			<span
				v-for="(page, index) in pagination"
				:key="index"
				@click="movePage"
			>
				{{ page }}
			</span>
		</div>
	</main>
</template>

<style lang="scss">
main {
	.commentaire-container {
	}
	.pagination-container {
		span {
			margin-right: 3px;
			cursor: pointer;
		}
	}
}
</style>
