<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Validations
				</h1>
				<p>
					Use a default validation.
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