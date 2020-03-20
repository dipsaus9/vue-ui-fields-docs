<template>
	<div>
		<template v-for="field of uiFields">
			<uiField :key="field" :name="field" :form="name" />
		</template>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	computed: {
		uiFields() {
			return this.$uiFields.getFieldKeys(this.$props.name);
		}
	}
};
</script>
