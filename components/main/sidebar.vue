<template>
	<div class="sidebar">
		<nuxt-link class="sidebar__link h3" :to="`/what-is-ui-fields`">
			Intro
		</nuxt-link>
		<nuxt-link class="sidebar__link h3" :to="`/how-to-start`">
			How to start
		</nuxt-link>
		<validationNav />
		<formExamplesNav />
	</div>
</template>

<script>
import validationNav from '~/components/main/nav/validation-nav.vue';
import formExamplesNav from '~/components/main/nav/examples-nav.vue';

export default {
	components: {
		validationNav,
		formExamplesNav
	}
};
</script>

<style lang="scss">
</style>