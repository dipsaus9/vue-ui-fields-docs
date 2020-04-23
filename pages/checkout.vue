<template>
	<div>
		<h1>Checkout page</h1>

		<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="checkout" class="checkout" component="fieldset" />
				<uiFields name="billing" class="billing" component="fieldset" />
			</client-only>
			<button type="submit">
				Submit
			</button>
		</form>
	</div>
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
						value: 'NL',
						selected: true
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
					}
					,
					{
						label: 'Afhalen: Gratis',
						value: 'dedwertwetuct',
						selected: true
					}
					,
					{
						label: 'Afhalen: Gratis',
						value: 'asdf',
						// selected: true
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
						value: 'ideal',
						selected: true
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
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

h1 {
	padding: 0 1rem;
}

fieldset {
	padding: 0 1rem;
	width: 50%;
	border: none;
}
button {
	appearance: none;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: .5rem;
	margin: 0 1rem;
	border-radius: 0;
	background-color: #white;
	background-color: #DDDDDD;
	border: 1px solid black;
}

.checkbox,
.radio {
	&__input {
		appearance: none;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: .5rem;
		margin: 0 0.5rem;
		border-radius: 0;
		width: 1rem;
		height: 1rem;
		background-color: #white;
		background-color: #DDDDDD;
		border: 1px solid black;
	}
	&__input:first-child {
		margin-left: 0;
	}
	&__input:hover {
		cursor: pointer;
	}
	&__input:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		background-color: #4CAF50;
		transition: 0.2s;
	}
	&__input:checked:after {
		content: '';
		position: absolute;
		width: 1rem;
		height: 1rem;
		color: #99a1a7;
		background-color: #4CAF50;
	}
}

.radio {
	&__input {
		border-radius: 100rem;
	}
	&__input:after {
		border-radius: 100rem;
	}
}

.range {
	&__input {
		appearance: none;
		width: 100%;
		height: 2rem;
		background: #DDDDDD;
		border: 1px solid black;
	}
	&__input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 2rem;
		height: 2rem;
		background: #4CAF50;
		border: 1px solid black;
		cursor: pointer;
	}
}
.select {
	&__input {
		appearance: none;
		height: 2rem;
		width: 100%;
		padding: 0 1rem;
		border-radius: 0;
		background: #DDDDDD;
		border: none;
		border: 1px solid black;
	}
	& option {

	}
	&__element {
	}
	&__label {
	}
}
.text{
	&__input {
		appearance: none;
		height: 2rem;
		width: 100%;
		padding: 0 1rem;
		border-radius: 0;
		background: #DDDDDD;
		border: none;
		border: 1px solid black;
	}
}
.email{
	&__input {
		appearance: none;
		height: 2rem;
		width: 100%;
		padding: 0 1rem;
		border-radius: 0;
		background: #DDDDDD;
		border: none;
		border: 1px solid black;
	}
}
.tel{
	&__input {
		appearance: none;
		height: 2rem;
		width: 100%;
		padding: 0 1rem;
		border-radius: 0;
		background: #DDDDDD;
		border: none;
		border: 1px solid black;
	}
}

.ui-fields {
	&__field {
		position: relative;
		display: flex;
		margin: 1rem 0;
		&--checkbox {
			flex-wrap: wrap;
			align-items: center;
		}
		&--range,
		&--select,
		&--text,
		&--email,
		&--tel {
			flex-direction: column-reverse;
		}
	}
	&__label {
		text-transform: uppercase;
		font-weight: 600;
	}

	&__error-message {
		position: absolute;
		bottom: -1.5rem;
		right: 0;
	}
	&__error {
		color: orangered;
		&--email {
		}
	}
}

</style>