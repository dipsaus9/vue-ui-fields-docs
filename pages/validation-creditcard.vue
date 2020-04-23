<template>
	<section>
		<h1> Validation - Checkbox</h1>
		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="validation" class="validation" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('validation');

		this.$uiFields.setFields('validation', [
			{
				name: 'creditcard',
				type: 'text',
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard2',
				type: 'checkbox',
				options: [
					{
						name: 'green',
						label: 'Groen',
						value: 'green'
					}
				],
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard3',
				type: 'radio',
				options: [
					{
						name: 'green',
						label: 'Groen',
						value: 'green'
					},
					{
						name: 'red',
						label: 'Rood',
						value: 'red'
					},
					{
						name: 'yellow',
						label: 'Geel',
						value: 'yellow'
					}
				],
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard4',
				type: 'file',
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard5',
				type: 'select',
				options: [
					{
						name: 'green',
						label: 'Groen',
						value: 'green'
					},
					{
						name: 'red',
						label: 'Rood',
						value: 'red'
					},
					{
						name: 'yellow',
						label: 'Geel',
						value: 'yellow'
					}
				],
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
			{
				name: 'creditcard6',
				type: 'textarea',
				options: [
					{
						name: 'green',
						label: 'Groen',
						value: 'green'
					},
					{
						name: 'red',
						label: 'Rood',
						value: 'red'
					},
					{
						name: 'yellow',
						label: 'Geel',
						value: 'yellow'
					}
				],
				validation: [
					{
						name: 'creditcard'
					}
				]
			},
		]);
	}
};
</script>

<style lang="scss">

</style>