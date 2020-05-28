<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - New Form
				</h1>
				<p>
					Create a new form to start.
				</p>
			</div>
		</div>
		<div class="content">
			<div>
				<p>
					When using UI Fields you first have to start by creating a new form instance. You can do this by using the UI Fields prototype created by installing UI Fields.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>this.$uiFields.new('Your_form_name_here');</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					Creating a new instance also returns the instance. You can also call this instance with the prototype. All functions are available on both methods.
				</p>
				<h3>Template</h3>
				<p>
					You can now use the UI Fields component in your template. This will automaticaly render the form (without fields for now).
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ weirdHTML }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<p>
					The component contains some options you can change. You can always change the class name by simply adding the class element to it. You can also change the first html element wrapping all fields. You can do this by adding a component tag.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ weirdHTML2 }}</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			weirdHTML: `<template>
	<UiFields name="Your_form_name_here" />
</template>`,
			weirdHTML2: '<UiFields name="Your_form_name_here" component="fieldset" class="container-class"/>'
		};
	}
};
</script>