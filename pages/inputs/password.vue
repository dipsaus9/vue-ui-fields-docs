/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Password
			</h1>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>

		<div class="usage" :class="!isCode ? 'hide' : ''">
			<h2>Syntax</h2>
			<VueCodeHighlight language="javascript">
				{ name: 'password', type: 'password' }
			</VueCodeHighlight>
		</div>

		<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
			<client-only>
				<uiFields name="form" class="form" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isCode: false,
		};
	},
	mounted() {
		this.$uiFields.new('form');

		this.$uiFields.setFields('form', [
			{
				name: 'password',
				type: 'password',
			},
		]);
	},
	methods: {
		toggle() {
			this.isCode = !this.isCode;
		},
	},
};
</script>
