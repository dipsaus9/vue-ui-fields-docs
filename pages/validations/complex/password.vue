<template>
	<section>
		<h1>Example - Password </h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="password" class="password" component="fieldset" />
			</client-only>
		</form>
		<button @click="getConditions">
			Get conditions
		</button>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('password');

		this.$uiFields.setFields('password', [
			{
				name: 'password1',
				type: 'password',
				label: 'Password 1',
				validation: [
					{
						name: 'minlength',
						options: 8
					},
					{
						name: 'maxlength',
						options: 20
					},
				]
			},
			{
				name: 'password2',
				type: 'password',
				label: 'Password 2',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'equalTo',
						options: () => this.$uiFields.getValue('validation', 'password1')
					}
				]
			}
		]);
	},
	methods: {
		getConditions() {
			this.$uiFields.getCondition();
		}
	}
};
</script>