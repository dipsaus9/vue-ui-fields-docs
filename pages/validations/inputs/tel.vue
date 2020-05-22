/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Tel
			</h1>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<prism language="javascript">
				{
					name: 'phonenumber',
					type: 'tel'
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
				name: 'phonenumber',
				type: 'tel'
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