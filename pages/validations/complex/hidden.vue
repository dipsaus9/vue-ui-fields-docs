<template>
	<div>
		<h1>Example - Condition</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="checkout" class="checkout" component="fieldset" />
				<uiFields name="deliver-address" class="deliver-address" component="fieldset" />
			</client-only>
		</form>
		<button @click="toggle">
			Toggle
		</button>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('checkout');
		this.$uiFields.new('deliver-address');

		this.$uiFields.setFields('checkout', [
			{
				name: 'username',
				type: 'text',
				label: 'Username',
			}
		]);
		this.$uiFields.setFields('deliver-address', [
			{
				name: 'address',
				type: 'text',
				label: 'Adress'
			}
		]);

	},
	methods: {
		toggle() {
			this.$uiFields.conditionToggle('checkout', 'username', () => this.$uiFields.getValue('checkout', 'username'), 'deliver-address', 'address');
		}
	}

};
</script>