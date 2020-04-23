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
				name: 'date',
				type: 'text',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date2',
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
						name: 'date'
					}
				]
			},
			{
				name: 'date3',
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
						name: 'date'
					}
				]
			},
			{
				name: 'date4',
				type: 'file',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date5',
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
						name: 'date'
					}
				]
			},
			{
				name: 'date6',
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
						name: 'date'
					}
				]
			},
			{
				name: 'date7',
				type: 'date',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date8',
				type: 'number',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date9',
				type: 'email',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date10',
				type: 'tel',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date11',
				type: 'phone',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date12',
				type: 'password',
				validation: [
					{
						name: 'date'
					}
				]
			},
			{
				name: 'date13',
				type: 'range',
				validation: [
					{
						name: 'date'
					}
				]
			},
		]);
	}
};
</script>

<style lang="scss">

</style>