<template>
	<div>
		<h1>Example - Condition</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="checkout" class="checkout" component="fieldset" />
				<uiFields name="deliver-address" class="deliver-address" component="fieldset" />
			</client-only>
		</form>
		<button @click="removeCondition">
			remove condition
		</button>
		<button @click="removeConditions">
			remove conditions
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
				label: 'Username'
			}
		]);
		this.$uiFields.setFields('deliver-address', [
			{
				name: 'address',
				type: 'text',
				label: 'Adress'
			},
			{
				name: 'address2',
				type: 'text',
				label: 'Adress 2'
			},
			{
				name: 'address3',
				type: 'text',
				label: 'Adress 3'
			},
			{
				name: 'address4',
				type: 'text',
				label: 'Adress 4'
			},
			{
				name: 'address5',
				type: 'text',
				label: 'Adress 5'
			},
			{
				name: 'address6',
				type: 'text',
				label: 'Adress 6'
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
			['address2','address3']
		);

		this.$uiFields.setCondition(
			'checkout',
			'username',
			'guus',
			'deliver-address',
			['address4','address5', 'address6']
		);
	},
	methods: {
		removeCondition() {
			this.$uiFields.removeCondition(
				'deliver-address',
				'address4'
			);
		},
		removeConditions() {
			this.$uiFields.removeCondition(
				'deliver-address'
			);
		}
	}
};
</script>