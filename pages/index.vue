<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<uiFields name="checkout" class="tte" component="fieldset" />
		<button type="submit">
			Submit
		</button>
	</form>
</template>
<script>
export default {
	data() {
		return {
			submitted: false
		};
	},
	created() {
		const test = this.$uiFields.new('checkout');
		test.setFields([
			{
				label: 'Enter your first name',
				name: 'password',
				autocomplete: 'given-name',
				type: 'email',
				required: true,
				placeholder: 'What is your first name',
				validation: ['email']
			},
			{
				label: 'Enter your last name',
				name: 'passwordRepeat',
				autocomplete: 'additional-name',
				type: 'text',
				placeholder: 'test 2',
				classes: ['asdfasdf']
			}
		]);
	},
	methods: {
		async submit() {
			console.log(this.$uiFields.validate('checkout'));
		}
	}
};
</script>
<style lang="scss">
@import '~tools';
form {
	display: flex;
	margin: rem(100) auto;
	flex-direction: column;
	width: grid(14);
}
h1 {
	font-size: grid(1);
}
.uiFields__fieldset {
	margin: 50px 0;
}
</style>
