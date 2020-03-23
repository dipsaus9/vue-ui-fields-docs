<template>
	<div v-if="uiFieldsErrors.length" :class="`uiFields__errors`">
		<span v-for="(error, index) in uiFieldsErrors" :key="index">
			{{ error.message }}
		</span>
	</div>
</template>
<script>
export default {
	props: {
		fieldName: {
			type: String,
			default: ''
		},
		fieldIndex: {
			type: String,
			default: ''
		},
		fieldsetIndex: {
			type: String,
			default: ''
		}
	},
	computed: {
		uiFieldsErrors() {
			return this.$store.getters['uiFields/errors']({
				formName: this.fieldName.split('|'),
				fieldIndex: this.fieldIndex,
				fieldsetIndex: this.fieldsetIndex
			});
		}
	}
};
</script>
 :class="`uiFields__error`"