/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Url
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the value is an valid url. If your input not contains (http(s)) or a dot (.) it gives an error.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			< VueCodeHighlight language="javascript">
				{
					name: 'url',
					type: 'text',
					validation: [
						{
							name: 'url'
						}
					]
				}
			< /VueCodeHighlight>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="url" class="url" component="fieldset" />
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
		this.$uiFields.new('url');

		this.$uiFields.setFields('url', [
			{
				name: 'url',
				type: 'text',
				label: 'Example',
				validation: [
					{
						name: 'url'
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