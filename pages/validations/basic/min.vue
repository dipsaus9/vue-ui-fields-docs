/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Min
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the in put is a number and if this number is smaller than the number you want to.
				So if there's a number smaller than 5, 4 is not valid.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'minimum',
					type: 'number',
					validation: [
						{
							name: 'min',
							options: 5
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="min" class="min" component="fieldset" />
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
		this.$uiFields.new('min');

		this.$uiFields.setFields('min', [
			{
				name: 'min',
				type: 'number',
				label: 'Example (min is 5)',
				validation: [
					{
						name: 'min',
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