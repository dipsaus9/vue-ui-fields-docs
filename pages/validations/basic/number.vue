/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Number
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the value of the input fiels is a number.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'number',
					type: 'text',
					validation: [
						{
							name: 'number'
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="!isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields name="number" class="number" component="fieldset" />
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
		this.$uiFields.new('number');

		this.$uiFields.setFields('number', [
			{
				name: 'number',
				type: 'text',
				validation: [
					{
						name: 'number'
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