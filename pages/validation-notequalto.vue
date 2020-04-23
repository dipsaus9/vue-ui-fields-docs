<template>
	<section>
		<h1> Validation - Notequalto</h1>
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
				name: 'notequalto',
				type: 'text',
				label: 'Not Equal To',
				validation: [
					{
						name: 'notequalto'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>