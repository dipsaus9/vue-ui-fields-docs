/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Required
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the input field is not empty.If it is empty and there's no valid value you see an error.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'required',
					type: 'text',
					validation: [
						{
							name: 'required'
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="!isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields name="required" class="required" component="fieldset" />
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
		this.$uiFields.new('required');

		this.$uiFields.setFields('required', [
			{
				name: 'required',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'required'
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