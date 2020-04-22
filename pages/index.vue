<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<client-only>
			<uiFields name="checkout" class="checkout" component="fieldset" />
			<uiFields name="billing" class="billing" component="fieldset" />
		</client-only>
		<button type="submit">
			Submit
		</button>
		<div v-for="(obj, i) in allData" :key="i" class="data">
			{{ allData[i] }}
		</div>
		<p>{{ radioVal }}</p>
	</form>
</template>
<script>
export default {
	data() {
		return {
			diffAddress: false,
			allData: Array,
			radioVal: ''
		};
	},
	mounted() {
		this.$uiFields.new('checkout'); //only needs name
		this.$uiFields.new('billing');

		this.$uiFields.setFields('checkout', [
			{
				name: 'firstname',
				type: 'text',
				label: 'Voornaam',
				placeholder: 'bv. Hugo',
				autofocus: true,
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'surname',
				type: 'text',
				label: 'Achternaam',
				placeholder: 'bv. Scholtens',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'email',
				type: 'email',
				label: 'E-mail',
				placeholder: 'bv. info@scholtenswerkplek.nl',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'email'
					},
					{
						name: 'required'
					}
				]
			},
			{
				name: 'phonenumber',
				type: 'tel',
				label: 'Telefoonnummer',
				placeholder: 'bv. 06 12 34 56 78',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'phone',
						options: ['nl-NL', 'nl-BE', 'de-DE']
					},
					{
						name: 'required'
					}
				]
			},
			{
				name: 'postalcode',
				type: 'text',
				label: 'Postcode',
				placeholder: 'bv. 1234 AB',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'postalcode',
						options: 'NL'
					},
					{
						name: 'required'
					}
				]

			},
			{
				name: 'address',
				type: 'text',
				label: 'Straat + huisnummer',
				placeholder: 'bv. Scholtensweg 123',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'city',
				type: 'text',
				label: 'Woonplaats',
				placeholder: 'bv. Amsterdam',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'country',
				type: 'select',
				label: 'Land',
				options: [
					{
						label: 'Nederland',
						value: 'NL'
					},
					{
						label: 'Belgie',
						value: 'BE'
					},
					{
						label: 'Duitsland',
						value: 'DE'
					},
					{
						label: 'Luxemburg',
						value: 'L'
					}
				],
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'required'
					}
				]
			},
			{
				name: 'diff-address',
				type: 'checkbox',
				options: [
					{
						label: 'Op een ander adres bezorgen',
						value: 'asdf'
					}
				],
				classes: ['form-fields']
			},
			{
				name: 'shipping',
				type: 'radio',
				options: [
					{
						label: 'Verzending Nederland: Gratis',
						value: 'send'
					},
					{
						label: 'Afhalen: Gratis',
						value: 'deduct',
						selected: true
					}
				],
				classes: ['form-fields'],
				validation: [
					{
						name: 'required'
					}
				]
			}
		]);

		this.$uiFields.setFields('billing', [
			{
				name: 'billing',
				type: 'select',
				label: 'Betaaldmethode',
				options: [
					{
						label: 'iDEAL',
						value: 'ideal'
					},
					{
						label: 'PayPal',
						value: 'paypal'
					},
					{
						label: 'Bancontact',
						value: 'bancontact'
					},
					{
						label: 'KBC/CBC Payment Button',
						value: 'paymentbutton'
					}
				],
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'required'
					}
				]
			},
		]);




		this.$uiFields.subscribeField('checkout', 'shipping', this.shippingToggle);
	},
	destroy() {
		this.$uiFields.unsubscribeField('checkout', 'shipping');
	},
	methods: {
		shippingToggle() {
			this.radioVal = this.$uiFields.getValue('checkout','shipping');

		},
		async submit() {
			this.allData = this.$uiFields.getValues('checkout');
		}
	}
};
</script>
<style lang="scss">
@import '~tools';

* {
	box-sizing: border-box;
}
body {
	font-family: sans-serif;
}
.checkout {
	border: none;
}

.ui-fields {
	&__field {
		position: relative;
		margin-top: 2.5rem;
	}
	&__element {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}

	&__input {
		width: 100%;
		padding: 1rem 0 1rem 40%;
		border: 2px solid black;
	}

	&__error-message {
		right: 0;
		bottom: -2rem;
		color: #f05123;
		font-size: .875rem;
		width: 100%;
	}

}
.text {
	&__label {
		&--required {
			color: orange;
		}
	}
}

.select {
	&__input {
		width: 100%;
		padding: 1rem;
		padding: 1rem 0 1rem 40%;
		border: 2px solid black;
	}
}
.radio {
	&__element {
		position: relative;
		top: 0;
		left: 0;
	}
}

</style>
