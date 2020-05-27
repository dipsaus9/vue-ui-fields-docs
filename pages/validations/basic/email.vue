/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				E-mail
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to validate a email in an input field you can use the email validation.
				This validation checks if the input value contains a monkeytail (@) and a dot (.).
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			< VueCodeHighlight language="javascript">
				{
					name: 'email',
					type: 'text',
					validation: [
						{
							name: 'email'
						}
					]
				}
			< /VueCodeHighlight>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="email" class="email" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>




export default {

	data() {
		return {
			isCode: false
		};
	},
	mounted() {
		this.$uiFields.new('email');

		this.$uiFields.setFields('email', [
			{
				name: 'email',
				type: 'text',
				label: 'Example',
				validation: [
					{
						name: 'email'
					}
				]
			}
		]);
	},
	methods: {
		toggle() {
			this.isCode = !this.isCode;
		}
	}
};
</script>