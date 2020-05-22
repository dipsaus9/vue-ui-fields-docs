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
				This validation checks of the postalcode is valid.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'postalcode1',
					type: 'text',
					label: 'Validation as object in array',
					validation: [
						{
							name: 'postalcode',
							options: ['NL', 'DE']
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="postalcode" class="postalcode" component="fieldset" />
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
		this.$uiFields.new('postalcode');

		this.$uiFields.setFields('postalcode', [
			{
				name: 'postalcode1',
				type: 'text',
				label: 'Example',
				validation: [
					{
						name: 'postalcode',
						options: ['NL', 'DE']
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