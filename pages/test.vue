<template>
	<h2>Test</h2>
</template>
<script>
export default {
	data() {
		return {
			counter: 0
		};
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
