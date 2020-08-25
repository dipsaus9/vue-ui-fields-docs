<template>
	<div class="code-toggle">
		<div class="code-toggle__header">
			<p>
				You can toggle between executed code and syntax highlighlight
			</p>
			<button class="intro__toggle" @click="isCode = !isCode">
				{{ isCode ? 'Syntax' : 'Test form' }}
			</button>
		</div>
		<ClientOnly>
			<div v-if="isCode" class="code">
				<button @click="copyToKeyboard">
					Copy
				</button>
				<VueCodeHighlight>{{ code }}</VueCodeHighlight>
			</div>
			<div v-else class="ui-fields-example">
				<uiFields :name="name" />
			</div>
		</ClientOnly>
	</div>
</template>
<script>
export default {
	name: 'CodeToggle',
	props: {
		code: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
	},
	data: () => ({
		isCode: true,
	}),
	mounted() {
		eval(this.code);
	},
};
</script>
<style lang="scss">
.code-toggle {
	&__header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		p {
			font-style: italic;
			font-size: rem(14);
		}
		button {
			border: none;
			font-size: rem(16);
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
				Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			color: white;
			margin: 0;
			line-height: 1.25;
			font-weight: 500;
			padding: rem(5 10);
			background: #272822;
			cursor: pointer;
			border-radius: 0;
			z-index: 1;
		}
	}
}
.ui-fields-example {
	padding: 1rem;
	border: 1px solid #272822;
	border-radius: 1rem;
}
</style>
