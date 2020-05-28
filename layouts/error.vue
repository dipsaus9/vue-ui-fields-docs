<template>
	<div class="layout layout-default">
		<header>
			<NuxtLink to="/">
				UI Fields
			</NuxtLink>
		</header>
		<div class="content">
			<Sidebar />
			<h1>Whoops, something went wrong</h1>
		</div>
	</div>
</template>

<script>
import Sidebar from '~/components/main/sidebar.vue';

export default {
	components: {
		Sidebar
	}
};
</script>