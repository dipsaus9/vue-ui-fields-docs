<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Login e-mail
			</h1>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				this.$uiFields.new('login-email');
				this.$uiFields.setFields('login-email', [ { name: 'username', type:
				'text', label: 'Email', validation: [ { name: 'required' }, { name:
				'email' } ] }, { name: 'password1', type: 'password', label: 'Password
				1', validation: [ { name: 'minlength', options: 8 }, { name:
				'maxlength', options: 20 }, ] }, { name: 'password2', type: 'password',
				label: 'Password 2', validation: [ { name: 'required' }, { name:
				'equalTo', options: () => this.$uiFields.getValue('validation',
				'password1') } ] } ]);
			</VueCodeHighlight>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields name="login-email" class="login-email" component="fieldset" />
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
		this.$uiFields.new('login-email');

		this.$uiFields.setFields('login-email', [
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
		]);
	},
	methods: {
		toggle() {
			this.isCode = !this.isCode;
		},
	},
};
</script>
