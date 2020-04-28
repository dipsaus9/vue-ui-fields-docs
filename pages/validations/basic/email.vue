<template>
	<section>
		<h1>Validation - Email</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="email" class="email" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('email');

		this.$uiFields.setFields('email', [
			{
				name: 'email1',
				type: 'text',
				label: 'Validation in array',
				validation: ['email']
			},
			{
				name: 'email2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'email'
					}
				]
			},
			{
				name: 'email3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'email'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('email');
	}
};
</script>