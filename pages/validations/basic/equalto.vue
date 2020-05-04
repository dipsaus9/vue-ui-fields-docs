<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Equal to
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to check if a value of another field is equal to some other field you can use this validation.
				If field A has a value of 'hello' and field B has value of 'hey', this validation gives an error
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="equalto" class="equalto" component="fieldset" />
			</client-only>
		</form>
		<button @click="unsubscribe">
			unsubscribe
		</button>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('equalto');

		this.$uiFields.setFields('equalto', [
			{
				name: 'value1',
				type: 'text',
				label: 'Value to compare with',
				placeholder: 'Compare',
				disabled: true,
				value: 'Compare'
			},
			{
				name: 'value2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('equalto', 'value1')
					}
				]
			},
			{
				name: 'value3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('equalto', 'value1')
					},
					{
						name: 'text'
					}
				]
			}
		]);
		this.$uiFields.subscribeField('equalto', 'value2', () => { return; });
		this.$uiFields.subscribeField('equalto', 'value3', () => { return; });
		this.$uiFields.subscribe('equalto', () => { return; });
	},
	methods: {
		unsubscribe() {
			this.$uiFields.delete('equalto');
		}
	}
};
</script>