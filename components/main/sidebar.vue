<template>
	<nav class="sidebar">
		<SubNav title="Installation" :list="intro" :open="true" />
		<SubNav title="Documentation" :list="docs" :open="true" />
		<SubNav title="Input options" :list="inputFields" />
	</nav>
</template>

<script>
import SubNav from '~/components/main/sub-nav.vue';

export default {
	components: {
		SubNav
	},
	data() {
		return {
			intro: [
				'Install',
				'Philosophy'
			],
			docs: [
				'Plugin install',
				'New form',
				'SetField',
				'Validation',
				'Conditions',
				'Helper functions',
				'Best practices',
			],
			inputFields: [
				'text',
				'phone',
				'date',
				'number',
				'email',
				'tel',
				'password',
				'range',
				'hidden',
				'file',
				'select',
				'checkbox',
				'radio',
				'textarea'
			],
		};
	}
};
</script>