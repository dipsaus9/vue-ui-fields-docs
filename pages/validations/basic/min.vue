<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Min
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the in put is a number and if this number is smaller than the number you want to.
				So if there's a number smaller than 5, 4 is not valid.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="min" class="min" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('min');

		this.$uiFields.setFields('min', [
			{
				name: 'value1',
				type: 'text',
				label: 'Min value (Number)',
				placeholder: '5',
				disabled: true
			},
			{
				name: 'min1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'min',
						options: 5
					}
				]
			},
			{
				name: 'min2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'min',
						options: 5
					}
				]
			}
		]);
	}
};
</script>