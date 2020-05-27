/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Phone
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks the input field if it is a valid phonenumber. if you put text instead of a number it is not valid.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				{
					name: 'phone',
					type: 'text',
					validation: [
						{
							name: 'phone',
							options: 'nl-NL'
						}
					]
				}
			</VueCodeHighlight>
		</VueCodeHighlight>
>
</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="phone" class="phone" component="fieldset" />
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
		this.$uiFields.new('phone');

		this.$uiFields.setFields('phone', [
			{
				name: 'phone',
				type: 'text',
				label: 'Example',
				validation: [
					{
						name: 'phone',
						options: 'nl-NL'
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