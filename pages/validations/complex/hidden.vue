<template>
	<div>
		<h1>Example - Condition</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="checkout" class="checkout" component="fieldset" />
				<uiFields name="deliver-address" class="deliver-address" component="fieldset" />
			</client-only>
		</form>
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
				persistent: false
			}
		]);
		this.$uiFields.setFields('deliver-address', [
			{
				name: 'address',
				type: 'text',
				label: 'Adress',
				persistent: false
			},
			{
				name: 'address2',
				type: 'text',
				label: 'Adress 2',
				persistent: false
			}
		]);


		this.$uiFields.setCondition(
			'checkout',
			'username',
			'hallo',
			'deliver-address',
			'address'
		);

		this.$uiFields.setCondition(
			'checkout',
			'username',
			'test',
			'deliver-address',
			'address2'
		);

		// this.$uiFields.setConditions(
		// 	'checkout',
		// 	'username',
		// 	'test',
		// 	['deliver-address'],
		// 	['address2']
		// );
	}
};
</script>