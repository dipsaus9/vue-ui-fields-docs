/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Text
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if your input value contains only alphabetical characters. So if there's a number in the value it gives an error.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'text',
					type: 'text',
					validation: [
						{
							name: 'text'
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="!isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields name="text" class="text" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
import 'prismjs/prism';
import 'prismjs/themes/prism-okaidia.css';

import Prism from 'vue-prism-component';

export default {
	components: {
		Prism
	},
	data() {
		return {
			isCode: false
		};
	},
	mounted() {
		this.$uiFields.new('text');

		this.$uiFields.setFields('text', [
			{
				name: 'text',
				type: 'text',
				validation: [
					{
						name: 'text'
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