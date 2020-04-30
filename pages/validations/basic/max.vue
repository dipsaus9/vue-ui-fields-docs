<template>
	<section>
		<h1>Validation - Max</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="max" class="max" component="fieldset" />
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
		this.$uiFields.subscribeField('max', 'max1', () => { return; });
		this.$uiFields.subscribeField('max', 'max2', () => { return; });
		this.$uiFields.subscribe('max', () => { return; });
	},
	methods: {
		unsubscribe() {
			this.$uiFields.delete('max');
		}
	}
};
</script>