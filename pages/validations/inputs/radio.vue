/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Radio
			</h1>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'color',
					type: 'checkbox',
					options: [
						{
							name: 'color-blue',
							label: 'Blue',
							value: 'blue'
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="form" class="form" component="fieldset" />
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
		this.$uiFields.new('form');

		this.$uiFields.setFields('form', [
			{
				name: 'color',
				type: 'radio',
				options: [
					{
						name: 'color-blue',
						label: 'Blue',
						value: 'blue'
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