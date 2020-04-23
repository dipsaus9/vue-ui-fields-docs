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
				label: 'Email 1',
			},
			{
				name: 'equalto2',
				type: 'email',
				label: 'Email 2',
				validation: [
					{
						name: 'equalTo',
						option: 'equalto'
					}
				]
			}
		]);
	}
};
</script>

<style lang="scss">

</style>