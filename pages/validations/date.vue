/* eslint-disable vue/html-indent */
<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Date (In progress)
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				If you want to validate a date in an input field you can use the date validation.
				The validation checks if the date has enough characters and if it is a number.
			</p>
			<button class="intro__toggle" @click="toggle()">
				{{ !isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>
		<div class="content usage">
			<ClientOnly>
				<div class="code" :class="!isCode ? 'hide' : ''">
					<button @click="copyToKeyboard">
						Copy
					</button>
					<VueCodeHighlight language="javascript">
this.$uiFields.new('date');

this.$uiFields.setField('date',
	{
		name: 'date',
		type: 'text',
		label: 'Example',
		validation: [
			{
				name: 'date'
			}
		]
	}
);
						</VueCodeHighlight>
				</div>
				<form novalidate :class="isCode ? 'hide' : ''" @submit.prevent="submit">
					<uiFields name="date" class="date" component="fieldset" />
				</form>
			</ClientOnly>
		</div>
	</section>
</template>

<script>




export default {
	data() {
		return {
			isCode: false
		};
	},
	mounted() {
		this.$uiFields.new('date');

		this.$uiFields.setField('date',
			{
				name: 'date',
				type: 'text',
				label: 'Example',
				validation: [
					{
						name: 'date'
					}
				]
			}
		);
	},
	methods: {
		toggle() {
			this.isCode = !this.isCode;
		}
	}
};
</script>