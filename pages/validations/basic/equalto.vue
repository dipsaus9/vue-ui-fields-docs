<template>
	<section>
		<h1>Validation - Equal to</h1>
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