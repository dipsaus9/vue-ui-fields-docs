<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Signup full
			</h1>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				this.$uiFields.setFields('login-details-email', [ { name: 'username',
				type: 'text', label: 'Email', validation: [ { name: 'required' }, {
				name: 'email' } ] }, { name: 'password1', type: 'password', label:
				'Password 1', validation: [ { name: 'minlength', options: 8 }, { name:
				'maxlength', options: 20 } ] }, { name: 'password2', type: 'password',
				label: 'Password 2', validation: [ { name: 'required' }, { name:
				'equalTo', options: () => this.$uiFields.getValue('validation',
				'password1') } ] }, { name: 'firstname', type: 'text', label:
				'Firstname', validation: [ { name: 'required' }, { name: 'maxlength',
				options: 30 }, { name: 'minlength', options: 2 }, { name: 'text' } ] },
				{ name: 'surname', type: 'text', label: 'Surname', validation: [ { name:
				'required' }, { name: 'maxlength', options: 50 }, { name: 'minlength',
				options: 2 }, { name: 'text' } ] }, { name: 'email', type: 'text',
				label: 'E-mail', validation: [ { name: 'required' }, { name: 'email' } ]
				}, { name: 'phonenumber', type: 'text', label: 'Phonenumber',
				validation: [ { name: 'required' }, { name: 'phone', options: ['nl-NL']
				} ] }, { name: 'postalcode', type: 'text', label: 'Postalcode',
				validation: [ { name: 'required' }, { name: 'postalcode', options:
				['NL'] } ] }, { name: 'address', type: 'text', label: 'Address',
				validation: ['required'] }, { name: 'city', type: 'text', label: 'City',
				validation: ['required'] } ]);
			</VueCodeHighlight>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields
					name="login-details-full"
					class="login-details-full"
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
		this.$uiFields.new('login-details-full');

		this.$uiFields.setFields('login-details-full', [
			{
				name: 'username',
				type: 'text',
				label: 'Email',
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
				name: 'password1',
				type: 'password',
				label: 'Password 1',
				validation: [
					{
						name: 'minlength',
						options: 8,
					},
					{
						name: 'maxlength',
						options: 20,
					},
				],
			},
			{
				name: 'password2',
				type: 'password',
				label: 'Password 2',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'password1'),
					},
				],
			},
			{
				name: 'firstname',
				type: 'text',
				label: 'Firstname',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'maxlength',
						options: 30,
					},
					{
						name: 'minlength',
						options: 2,
					},
					{
						name: 'text',
					},
				],
			},
			{
				name: 'surname',
				type: 'text',
				label: 'Surname',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'maxlength',
						options: 50,
					},
					{
						name: 'minlength',
						options: 2,
					},
					{
						name: 'text',
					},
				],
			},
			{
				name: 'email',
				type: 'text',
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
				name: 'phonenumber',
				type: 'text',
				label: 'Phonenumber',
				validation: [
					{
						name: 'required',
					},
					{
						name: 'phone',
						options: ['nl-NL'],
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
						options: ['NL'],
					},
				],
			},
			{
				name: 'address',
				type: 'text',
				label: 'Address',
				validation: ['required'],
			},
			{
				name: 'city',
				type: 'text',
				label: 'City',
				validation: ['required'],
			},
		]);
	},
	methods: {
		toggle() {
			this.isCode = !this.isCode;
		},
	},
};
</script>
