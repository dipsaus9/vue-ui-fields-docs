<template>
	<section>
		<h1> Validation - Equalto</h1>
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
				name: 'equalto',
				type: 'email',
				label: 'Equal to',
			},
			{
				name: 'equalto2',
				type: 'email',
				label: 'Equal to',
				validation: [
					{
						name: 'equalto'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>