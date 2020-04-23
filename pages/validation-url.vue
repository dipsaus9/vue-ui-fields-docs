<template>
	<section>
		<h1> Validation - Url</h1>
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
				name: 'url',
				type: 'text',
				validation: [
					{
						name: 'url'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>