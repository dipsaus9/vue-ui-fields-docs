<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Text
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if your input value contains only alphabetical characters. So if there's a number in the value it gives an error.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
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
	}
};
</script>