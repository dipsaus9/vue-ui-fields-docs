/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Maxlength
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks the input length. If you want the maximum input length
				of 8 than this validation gives an error when your input value contains more than 8 characters.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				{
					name: 'maxlength',
					type: 'text',
					validation: [
						{
							name: 'maxlength',
							options: 5
						}
					]
				}
			</VueCodeHighlight>
		</VueCodeHighlight>
>
</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="maxlength" class="maxlength" component="fieldset" />
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
		this.$uiFields.new('maxlength');

		this.$uiFields.setFields('maxlength', [
			{
				name: 'maxlength',
				type: 'text',
				label: 'Example (maxlength is 5)',
				validation: [
					{
						name: 'maxlength',
						options: 5
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