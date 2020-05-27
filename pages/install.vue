<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Intall
				</h1>
				<p>
					Install UI fields in any project u want
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