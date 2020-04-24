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
				name: 'url1',
				type: 'text',
				label: 'Validation in array',
				validation: ['url']
			},
			{
				name: 'url2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'url'
					}
				]
			},
			{
				name: 'url3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'url'
					},
					{
						name: 'required'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>