<template>
	<section>
		<h1> Validation - Min</h1>
		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="validation" class="validation" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('validation');

		this.$uiFields.setFields('validation', [
			{
				name: 'min',
				type: 'text',
				validation: [
					{
						name: 'min',
						options: 5
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>