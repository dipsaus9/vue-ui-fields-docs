<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<client-only>
			<uiFields name="checkout" class="hallo" component="fieldset" />
		</client-only>
		<button type="submit">
			Submit
		</button>
	</form>
</template>
<script>
export default {
	data() {
		return {
			counter: 0
		};
	},
	mounted() {
		this.$uiFields.new('checkout'); //only needs name


		this.$uiFields.setFields('checkout', [
			{
				type: 'text',
				name: 'firstField',
				classes: 'noem maar wat leuke classes',
				label: 'Label van het eerste veld',
				value: '',
				required: true,
				persistent: false,
				validation: [
					{
						name: 'required',
						message: () => 'Je moet wel iets invullen'
					}
				]
			},
			{
				type: 'text',
				name: 'secondField',
				classes: 'noem maar wat leuke classes',
				label: 'Label van het eerste veld',
				value: '',
				persistent: false,
				required: true
			}
		]);

		this.$uiFields.subscribeField('checkout', 'first_field', this.filterMyProducts);
	},
	destroy() {
		this.$uiFields.unsubscribeField('checkout', 'first_field');
	},
	methods: {
		filterMyProducts() {
			this.counter++;
		},
		async submit() {
			const results = this.$uiFields.validate('checkout');
			console.log(results);
		}
	}
};
</script>
<style lang="scss">
@import '~tools';
form {
	display: flex;
	margin: rem(100) auto;
	flex-direction: column;
	width: grid(14);
}
h1 {
	font-size: grid(1);
}
.uiFields__fieldset {
	margin: 50px 0;
}
</style>
