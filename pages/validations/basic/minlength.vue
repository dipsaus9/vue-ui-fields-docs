<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Min length
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks the input length. If you want the minimum input length
				of 8 than this validation gives an error when your input value contains less than 8 characters.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="minlength" class="minlength" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('minlength');

		this.$uiFields.setFields('minlength', [
			{
				name: 'value1',
				type: 'text',
				label: 'Min length of value (Number)',
				placeholder: '5',
				disabled: true
			},
			{
				name: 'minlength1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'minlength',
						options: 5
					}
				]
			},
			{
				name: 'minlength2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'minlength',
						options: 5
					}
				]
			}
		]);
	}
};
</script>