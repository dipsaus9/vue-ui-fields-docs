<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - New Form
				</h1>
				<p>
					Install UI fields in any project u want. UI Fields is unbundled so you can lazyload multiple components.
				</p>
			</div>
		</div>
		<div class="content">
			<div>
				<p>
					To install Vue UI Fields download the package using npm
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>git clone vue-ui-fields</VueCodeHighlight>
					</div>
				</ClientOnly>
			</div>
		</div>
	</section>
</template>