<template>
	<section>
		<h1> Example - Phone </h1>
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
				name: 'phone1',
				type: 'text',
				label: 'Phone 1',
				validation: [
					{
						name: 'maxlength',
						options: 10
					},
					{
						name: 'minlength',
						options: 10
					},
					{
						name: 'number'
					},
					{
						name: 'phone',
						options: ['nl-NL']
					},
				]
			},
			{
				name: 'phone2',
				type: 'text',
				label: 'Phone 2',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'phone1')
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