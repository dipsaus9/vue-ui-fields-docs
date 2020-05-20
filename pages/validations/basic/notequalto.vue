/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Not equal to
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to check if a value of another field is NOT equal to some other field you can use this validation.
				If field A has a value of 'hello' and field B has value of 'hey', this validation gives NO error
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'value1',
					type: 'text'
				},
				{
					name: 'value2',
					type: 'text',
					validation: [
						{
							name: 'notequalto',
							options: () => this.$uiFields.getValue('equalto', 'value1')
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="!isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<h2>Example</h2>
				<uiFields name="notequalto" class="notequalto" component="fieldset" />
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
		this.$uiFields.new('notequalto');

		this.$uiFields.setFields('notequalto', [
			{
				name: 'value1',
				type: 'text',
				label: 'Value 1',
			},
			{
				name: 'value2',
				type: 'text',
				label: 'Value 2',
				validation: [
					{
						name: 'notequalto',
						options: () => this.$uiFields.getValue('notequalto', 'value1')
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