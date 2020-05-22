/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Equal to
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to check if a value of another field is equal to some other field you can use this validation.
				If field A has a value of 'hello' and field B has value of 'hey', this validation gives an error
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
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
							name: 'equalTo',
							options: () => this.$uiFields.getValue('equalto', 'value1')
						}
					]
				}
			</prism>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="equalto" class="equalto" component="fieldset" />
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
		this.$uiFields.new('equalto');

		this.$uiFields.setFields('equalto', [
			{
				name: 'value1',
				type: 'text',
				label: 'Value 1',
			},
			{
				name: 'equalto',
				type: 'text',
				label: 'Value 2',
				validation: [
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('equalto', 'value1')
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