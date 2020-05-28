/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				VAT
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the input value is a valid VAT-number. There are a lot of different numbers in different countries so if you put only a number with the Dutch settings it gives an error.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				{
					name: 'vat',
					type: 'text',
					validation: [
						{
							name: 'vat',
							options: ['NL', 'BE']
						}
					]
				}
			</VueCodeHighlight>
		</VueCodeHighlight>
>
</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="vat" class="vat" component="fieldset" />
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
		this.$uiFields.new('vat');

		this.$uiFields.setFields('vat', [
			{
				name: 'vat',
				type: 'text',
				label: 'Example',
				validation: [
					{
						name: 'vat',
						options: ['NL', 'BE']
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