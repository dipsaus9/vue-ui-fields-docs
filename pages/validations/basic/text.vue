<template>
	<section>
		<h1>Validation - Text</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="text" class="text" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('text');

		this.$uiFields.setFields('text', [
			{
				name: 'text1',
				type: 'text',
				label: 'Validation in array',
				validation: ['text']
			},
			{
				name: 'text2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'text'
					}
				]
			},
			{
				name: 'text3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'text'
					}
				]
			}
		]);
	},
	destroy() {
		this.$uiFields.new('text');
	}
};
</script>