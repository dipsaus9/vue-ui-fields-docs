<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - Validation
				</h1>
				<p>
					UI Fields gives you the opportunity to validate al fields client side.
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