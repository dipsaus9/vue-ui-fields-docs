<template>
	<component :is="field.basisSettings.componentType" v-if="field && field.basisSettings && field.basisSettings.componentType" :name="name" :form="form" />
</template>

<script>
export default {
	components: {
		'uiText': () => import('UiText'),
		'uiCheckbox': () => import('UiCheckbox'),
		'uiSelect': () => import('UiSelect'),
		'uiRadio': () => import('UiRadio'),
		'uiTextarea': () => import('UiTextarea')
	},
	props: {
		name: {
			type: String,
			default: ''
		},
		form: {
			type: String,
			default: ''
		}
	},
	computed: {
		field() {
			return this.$uiFields.getField(this.form, this.name);
		}
	}
};
</script>
