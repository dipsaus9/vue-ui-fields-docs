<template>
	<section>
		<h1>Validation - Url</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="url" class="url" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('url');

		this.$uiFields.setFields('url', [
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
						name: 'required'
					},
					{
						name: 'url'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('url');
	}
};
</script>

<style lang="scss">

</style>