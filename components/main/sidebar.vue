<template>
	<div class="sidebar">
		<nuxt-link class="sidebar__link h3" :to="`/what-is-ui-fields`">
			Intro
		</nuxt-link>
		<nuxt-link class="sidebar__link h3" :to="`/how-to-start`">
			How to start
		</nuxt-link>
		<nuxt-link class="sidebar__link h3" :to="`/ui-field-instance`">
			Ui-field instance
		</nuxt-link>
		<validationNav />
		<formInputsNav />
		<formExamplesNav />
	</div>
</template>

<script>
import validationNav from '~/components/main/nav/validation-nav.vue';
import formExamplesNav from '~/components/main/nav/examples-nav.vue';
import formInputsNav from '~/components/main/nav/inputs-nav.vue';

export default {
	components: {
		validationNav,
		formExamplesNav,
		formInputsNav
	}
};
</script>

<style lang="scss">
</style>