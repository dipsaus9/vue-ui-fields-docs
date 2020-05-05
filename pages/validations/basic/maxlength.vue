<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Max length
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks the input length. If you want the maximum input length
				of 8 than this validation gives an error when your input value contains more than 8 characters.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="maxlength" class="maxlength" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('maxlength');

		this.$uiFields.setFields('maxlength', [
			{
				name: 'value1',
				type: 'text',
				label: 'Max length of value (Number)',
				placeholder: '5',
				disabled: true
			},
			{
				name: 'maxlength1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'maxlength',
						options: 5
					}
				]
			},
			{
				name: 'maxlength2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'maxlength',
						options: 5
					}
				]
			}
		]);
	}
};
</script>