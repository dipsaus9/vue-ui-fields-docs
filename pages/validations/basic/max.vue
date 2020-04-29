<template>
	<section>
		<h1>Validation - Max</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="max" class="max" component="fieldset" />
			</client-only>
		</form>
		<button @click="click">
			click
		</button>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('max');

		this.$uiFields.setFields('max', [
			{
				name: 'value1',
				type: 'text',
				label: 'Max value (Number)',
				placeholder: '5',
				disabled: true
			},
			{
				name: 'max1',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'max',
						options: 5
					}
				]
			},
			{
				name: 'max2',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'max',
						options: 5
					}
				]
			}
		]);

		this.$uiFields.subscribeField('max', 'max1', () => { console.log('max listener 1 aangemaakt');});
		this.$uiFields.subscribeField('max', 'max2', () => { console.log('max listener 2 aangemaakt');});
		this.$uiFields.subscribe('max', () => { console.log('form listener 3 aangemaakt');});

	},
	methods: {
		click() {
			// this.$uiFields.unsubscribe('euqalto');
			// this.$uiFields.unsubscribeField('euqalto', 'value2');
			// this.$uiFields.unsubscribeFields('max');
		}
	}
};
</script>