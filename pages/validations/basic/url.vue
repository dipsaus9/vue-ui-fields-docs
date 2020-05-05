<template>
	<section>
		<div class="intro">
			<h1 class="intro__title">
				Url
			</h1>
			<h2 class="intro__subtitle">
				Validation
			</h2>
			<p class="intro__info">
				This validation checks if the value is an valid url. If your input not contains (http(s)) or a dot (.) it gives an error.
			</p>
			<p class="intro__usage">
				You can use this like this:
			</p>
		</div>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="url" class="url" component="fieldset" />
			</client-only>
		</form>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$uiFields.new('url');

		this.$uiFields.setFields('url', [
			{
				name: 'url1',
				type: 'text',
				label: 'Validation in array',
				validation: ['url']
			},
			{
				name: 'url2',
				type: 'text',
				label: 'Validation as object in array',
				validation: [
					{
						name: 'url'
					}
				]
			},
			{
				name: 'url3',
				type: 'text',
				label: 'More than one validation',
				validation: [
					{
						name: 'required'
					},
					{
						name: 'url'
					}
				]
			}
		]);
	}
};
</script>