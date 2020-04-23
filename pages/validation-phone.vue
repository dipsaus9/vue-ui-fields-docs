<template>
	<section>
		<h1> Validation - Phone</h1>
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
				name: 'phone',
				type: 'text',
				validation: [
					{
						name: 'phone',
						options: ['nl-NL', 'nl-BE', 'de-DE']
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>