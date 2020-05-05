<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Max
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the in put is a number and if this number is bigger than the number you want to.
				So if there's a number bigger than 5, 6 is not valid.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
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