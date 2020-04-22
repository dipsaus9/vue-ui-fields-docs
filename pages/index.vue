<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<client-only>
			<uiFields name="checkout" class="checkout" component="fieldset" />
		</client-only>
		<button type="submit">
			Submit
		</button>
		<!-- <div v-for="(obj, i) in allData" :key="i" class="data">
			{{ allData[i] }}
		</div> -->
	</form>
</template>
<script>
export default {
	data() {
		return {
			diffAddress: false,
			allData: Array
		};
	},
	mounted() {
		this.$uiFields.new('checkout'); //only needs name

		this.$uiFields.setFields('checkout', [
			{
				name: 'firstname',
				type: 'text',
				label: 'Voornaam',
				classes: ['form-fields'],
				required: true
			},
			{
				name: 'surname',
				type: 'text',
				label: 'Achternaam',
				classes: ['form-fields'],
				required: true
			},
			{
				name: 'email',
				type: 'email',
				label: 'E-mail',
				classes: ['form-fields'],
				required: true,
				validation: [
					'email'
				]
			},
			{
				name: 'phonenumber',
				type: 'tel',
				label: 'Telefoonnummer',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'phone',
						options: 'nl-NL'
					},
					{
						name: 'phone',
						options: 'nl-BE'
					},
					{
						name: 'phone',
						options: 'de-DE'
					}
				]
			},
			{
				name: 'postalcode',
				type: 'text',
				label: 'Postcode',
				classes: ['form-fields'],
				required: true,
				validation: [
					{
						name: 'postalcode',
						options: 'NL'
					}
				]

			},
			{
				name: 'address',
				type: 'text',
				label: 'Straat + huisnummer',
				classes: ['form-fields'],
				required: true
			},
			{
				name: 'city',
				type: 'text',
				label: 'Woonplaats',
				classes: ['form-fields'],
				required: true
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
				required: true
			},
			{
				name: 'diff-address',
				type: 'checkbox',
				options: [
					{
						label: 'Op een ander adres bezorgen',
						value: 'diff-address'
					}
				],
				classes: ['form-fields'],
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
						value: 'deduct'
					}
				],
				classes: ['form-fields'],
			}
		]);
		this.$uiFields.subscribeField('checkout', 'diff-address', this.differentAddressToggle);
	},
	destroy() {
		this.$uiFields.unsubscribeField('checkout', 'first_field');
	},
	methods: {
		differentAddressToggle() {
			if(this.diffAddress == false ) {
				this.diffAddress = true;
			} else {
				this.diffAddress = false;
			}
		},
		async submit() {
			this.allData = this.$uiFields.getValues('checkout');
			console.log(this.allData);
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
		border: 2px solid black;
		&--text {

		}
		&--email {

		}
		&--tel {

		}
		&--select {

		}

	}

	&__input{
		width: 100%;
		padding: 1rem 0 1rem 50%;
	}
	&__element {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}

	&__error-message {
		position: absolute;
		right: 0;
		bottom: -2rem;
		color: #f05123;
		font-size: .875rem;
		width: 100%;
	}

}
.uiFields {
	&__error {
		position: absolute;
		right: 0;
		bottom: -3rem;
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

.data {
	width: 70%;
	margin: 0 auto;
	margin-top: .5rem;
}
</style>
