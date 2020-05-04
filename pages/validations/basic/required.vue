<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Required
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the input field is not empty.If it is empty and there's no valid value you see an error.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="required" class="required" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('required');

		this.$uiFields.setFields('required', [
			{
				name: 'required1',
				type: 'text',
				label: 'Validation in array',
				validation: ['required']
			},
			{
				name: 'required2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'required3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'maxlength',
						options: 8
					}
				]
			}
		]);
	}
};
</script>