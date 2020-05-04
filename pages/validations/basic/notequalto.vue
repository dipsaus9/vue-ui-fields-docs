<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Not equal to
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to check if a value of another field is NOT equal to some other field you can use this validation.
				If field A has a value of 'hello' and field B has value of 'hey', this validation gives NO error
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="notequalto" class="notequalto" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('notequalto');

		this.$uiFields.setFields('notequalto', [
			{
				name: 'value1',
				type: 'text',
				label: 'Value to compare with'
			},
			{
				name: 'value2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'notEqualTo',
						options: () => this.$uiFields.getValue('notequalto', 'value1')
					}
				]
			},
			{
				name: 'value3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'notEqualTo',
						options: () => this.$uiFields.getValue('notequalto', 'value1')
					}
				]
			}
		]);
	}
};
</script>