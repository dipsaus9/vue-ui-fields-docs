<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Philosophy
				</h1>
				<p>
					The idea of UI Fields started a long time ago.
				</p>
			</div>
		</div>
		<div class="content">
			<ClientOnly>
				<div class="code">
					<button @click="copyToKeyboard">
						Copy
					</button>
					<VueCodeHighlight>git clone @matise/ui-fields</VueCodeHighlight>
				</div>
			</ClientOnly>
		</div>
	</section>
</template>