<template>
	<div
		v-if="error"
		class="uiFields__errors"
	>
		<span class="uiFields__error">
			{{ error }}
		</span>
	</div>
</template>
<script>
export default {
	props: {
		form: {
			type: String,
			default: 'null'
		},
		name: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			count: 0,
			error: ''
		};
	},
	created() {
		this.$uiFields.subscribeField(this.form, this.name, () => {
			console.log(this.$uiFields.getError(this.form, this.name));
			this.error = this.$uiFields.getError(this.form, this.name);
		});
	}
};
</script>
