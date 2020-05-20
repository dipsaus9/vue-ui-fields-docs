/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Max
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the in put is a number and if this number is bigger than the number you want to.
				So if there's a number bigger than 5, 6 is not valid.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'maximum',
					type: 'number',
					validation: [
						{
							name: 'max',
							options: 5
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="!isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example (max is 5)</h2>
				<uiFields name="max" class="max" component="fieldset" />
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
		this.$uiFields.new('max');

		this.$uiFields.setFields('max', [
			{
				name: 'max',
				type: 'number',
				validation: [
					{
						name: 'max',
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