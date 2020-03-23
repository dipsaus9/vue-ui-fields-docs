<template>
	<component :is="field.componentType" v-if="field && field.componentType" :name="name" :form="form" />
</template>

<script>
export default {
	components: {
		'uiText': () => import('./ui-text.vue'),
		'uiCheckbox': () => import('./ui-checkbox.vue'),
		'uiSelect': () => import('./ui-select.vue'),
		'uiRadio': () => import('./ui-radio.vue'),
		'uiTextarea': () => import('./ui-textarea.vue')
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
