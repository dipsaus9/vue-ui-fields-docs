<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - Conditions
				</h1>
				<p>
					Vue UI Fields gives you the opportunity to toggle fields or forms based on logic. By using conditions you can create complex forms with just a single line of code.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ start }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
		</div>
		<div class="content">
			<div>
				<h2>
					setCondition
				</h2>
				<p>
					The set condition can contain 4 variables, 3 required, 1 optional.
				</p>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			start: `this.$uiFields.setCondition(
	'Your_form_name',
	'Your_field_name',
	'The_value'
);`,
		};
	}
};
</script>