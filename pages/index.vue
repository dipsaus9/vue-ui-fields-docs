<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<client-only>
			<fieldset>
				<legend>Checkout 1</legend>
				<uiFields name="checkout" />
			</fieldset>
			<fieldset>
				<legend>Checkout 2</legend>
				<uiFields name="checkout2" />
			</fieldset>
		</client-only>
		<button type="submit">
			Submit
		</button>
	</form>
</template>
<script>
export default {
	mounted() {
		const test = this.$uiFields.new('checkout');
		const test2 = this.$uiFields.new('checkout2');
		for (let i = 0; i < 2; i++) {
			test.setField(
				{
					label: 'Test',
					name: `field-${i}`,
					type: 'text',
					placeholder: 'Test',
					// persistent: false,
					options: [
						{
							label: 'hoi',
							value: 'hoi'
						},
						{
							label: 'hoi2',
							value: 'hoi2'
						}
					]
				}
			);
			test2.setField(
				{
					label: 'Test',
					name: `field-${i}`,
					type: 'checkbox',
					placeholder: 'Test',
					options: [
						{
							label: 'hoi',
							value: 'hoi'
						},
						{
							label: 'hoi2',
							value: 'hoi2'
						}
					]
				}
			);
		}
	},
	methods: {
		async submit() {
			this.$uiFields.validate('checkout');
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
