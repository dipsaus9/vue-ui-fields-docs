<template>
	<section class="page-details">
		<div class="intro">
			<h1 class="intro__title">
				How to start
			</h1>
			<prism language="bash">
				git clone [name]
			</prism>
		</div>
	</section>
</template>

<script>

import 'prismjs/prism';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-okaidia.css';

import Prism from 'vue-prism-component';

export default {
	components: {
		Prism
	}
};
</script>