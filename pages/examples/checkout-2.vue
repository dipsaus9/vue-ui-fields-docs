<template>
	<!-- Scholtens werkplek formulier beter maken. Subscribe functions toevoegen voor ander andress -->
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Checkout - different address
			</h1>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				this.$uiFields.new('checkout'); this.$uiFields.new('different-address');
				this.$uiFields.setFields('checkout', [ { name: 'person', type: 'select',
				label: 'What are you', options: [ { name: 'individual', label:
				'Individual', value: 'individual' }, { name: 'company', label:
				'Company', value: 'individual' } ], validation: [ { name: 'required' } ]
				}, { name: 'firstname', type: 'text', label: 'firstname', validation: [
				{ name: 'required' }, { name: 'text' } ] }, { name: 'lastname', type:
				'text', label: 'Lastname', validation: [ { name: 'required' }, { name:
				'text' } ] }, { name: 'email', type: 'email', label: 'E-mail',
				validation: [ { name: 'required' }, { name: 'email' } ] }, { name:
				'phone', type: 'phone', label: 'Phonenumber', validation: [ { name:
				'required' }, { name: 'phone' } ] }, { name: 'postalcode', type: 'text',
				label: 'Postalcode', validation: [ { name: 'required' }, { name:
				'postalcode' } ] }, { name: 'street', type: 'text', label: 'Street',
				validation: [ { name: 'required' }, { name: 'text' } ] }, { name:
				'housenumber', type: 'number', label: 'Housenumber', validation: [ {
				name: 'required' }, { name: 'number' } ] }, { name: 'city', type:
				'text', label: 'City', validation: [ { name: 'required' }, { name:
				'text' } ] }, { name: 'country', type: 'select', label: 'Country',
				options: [ { name: 'netherland', label: 'Netherland', value: 'NL' }, {
				name: 'belgium', label: 'Belgium', value: 'BE' }, { name: 'germany',
				label: 'Germany', value: 'GE' }, { name: 'luxembourg', label:
				'Luxembourg', value: 'L' } ], validation: [ { name: 'required' } ] }, {
				name: 'diff-address', type: 'checkbox', options: [ { name:
				'other-address', label: 'Other deliver address', value: 'true' } ] } ]);
				this.$uiFields.setFields('different-address', [ { name:
				'diff-firstname', type: 'text', label: 'Firstname', }, { name:
				'diff-lastname', type: 'text', label: 'Lastname', }, { name:
				'diff-email', type: 'email', label: 'E-mail', }, { name:
				'diff-postalcode', type: 'text', label: 'Postalcode', }, { name:
				'diff-street', type: 'text', label: 'street', }, { name:
				'diff-housenumber', type: 'text', label: 'Housenumber', }, { name:
				'diff-city', type: 'text', label: 'City', }, { name: 'country', type:
				'select', label: 'Country', options: [ { name: 'netherland', label:
				'Netherland', value: 'NL' }, { name: 'belgium', label: 'Belgium', value:
				'BE' }, { name: 'germany', label: 'Germany', value: 'GE' }, { name:
				'luxembourg', label: 'Luxembourg', value: 'L' } ] } ]);
			</VueCodeHighlight>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields name="checkout" class="checkout" component="fieldset" />
				<uiFields
					name="different-address"
					class="different-address"
					component="fieldset"
				/>
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isCode: false,
		};
	},
	mounted() {
		this.$uiFields.new('checkout');
		this.$uiFields.new('different-address');

		this.$uiFields.setFields('checkout', [
			{
				name: 'person',
				type: 'select',
				label: 'What are you',
				options: [
					{
						name: 'individual',
						label: 'Individual',
						value: 'individual',
					},
					{
						name: 'company',
						label: 'Company',
						value: 'individual',
					},
				],
				validation: [
					{
						name: 'required',
					},
				],
			},
			{
				name: 'firstname',
				type: 'text',
				label: 'firstname',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'text',
					},
				],
			},
			{
				name: 'lastname',
				type: 'text',
				label: 'Lastname',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'text',
					},
				],
			},
			{
				name: 'email',
				type: 'email',
				label: 'E-mail',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'email',
					},
				],
			},
			{
				name: 'phone',
				type: 'phone',
				label: 'Phonenumber',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'phone',
					},
				],
			},
			{
				name: 'postalcode',
				type: 'text',
				label: 'Postalcode',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'postalcode',
					},
				],
			},
			{
				name: 'street',
				type: 'text',
				label: 'Street',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'text',
					},
				],
			},
			{
				name: 'housenumber',
				type: 'number',
				label: 'Housenumber',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'number',
					},
				],
			},
			{
				name: 'city',
				type: 'text',
				label: 'City',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'text',
					},
				],
			},
			{
				name: 'country',
				type: 'select',
				label: 'Country',
				options: [
					{
						name: 'netherland',
						label: 'Netherland',
						value: 'NL',
					},
					{
						name: 'belgium',
						label: 'Belgium',
						value: 'BE',
					},
					{
						name: 'germany',
						label: 'Germany',
						value: 'GE',
					},
					{
						name: 'luxembourg',
						label: 'Luxembourg',
						value: 'L',
					},
				],
				validation: [
					{
						name: 'required',
					},
				],
			},
			{
				name: 'diff-address',
				type: 'checkbox',
				options: [
					{
						name: 'other-address',
						label: 'Other deliver address',
						value: 'true',
					},
				],
			},
		]);

		this.$uiFields.setFields('different-address', [
			{
				name: 'diff-firstname',
				type: 'text',
				label: 'Firstname',
			},
			{
				name: 'diff-lastname',
				type: 'text',
				label: 'Lastname',
			},
			{
				name: 'diff-email',
				type: 'email',
				label: 'E-mail',
			},
			{
				name: 'diff-postalcode',
				type: 'text',
				label: 'Postalcode',
			},
			{
				name: 'diff-street',
				type: 'text',
				label: 'street',
			},
			{
				name: 'diff-housenumber',
				type: 'text',
				label: 'Housenumber',
			},
			{
				name: 'diff-city',
				type: 'text',
				label: 'City',
			},
			{
				name: 'country',
				type: 'select',
				label: 'Country',
				options: [
					{
						name: 'netherland',
						label: 'Netherland',
						value: 'NL',
					},
					{
						name: 'belgium',
						label: 'Belgium',
						value: 'BE',
					},
					{
						name: 'germany',
						label: 'Germany',
						value: 'GE',
					},
					{
						name: 'luxembourg',
						label: 'Luxembourg',
						value: 'L',
					},
				],
			},
		]);

		this.$uiFields.setCondition(
			'checkout',
			'diff-address',
			'true',
			'different-address'
		);
	},
	methods: {
		toggle() {
			this.isCode = !this.isCode;
		},
	},
};
</script>
