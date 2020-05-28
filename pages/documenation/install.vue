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
				<h4>Runtime compiler</h4>
				<p>
					UI Fields is not compiled yet, so you need a runtime compiler from Vue. Also UI Fields uses async / await, so you might have to babel this.
				</p>
				<h2>Install</h2>
				<p>
					To install Vue UI Fields in your project simply include UI Fields and install it as a plugin.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>import Vue from 'vue';
import uiFields from 'vue-ui-fields';

Vue.use(uiFields);
	</VueCodeHighlight>
				</div>
				</ClientOnly>
				<h3>Options</h3>
				<p>
					You can include some options aswell
				</p>
				<ul>
					<li>
						<a href="#project-name">
							projectName
						</a>
					</li>
					<li>
						<a href="#persistent-time">
							persistentTime
						</a>
					</li>
					<li>
						<a href="#lang">
							lang
						</a>
					</li>
					<li>
						<a href="#class-name">
							className
						</a>
					</li>
					<li>
						<a href="#base-url">
							baseURL
						</a>
					</li>
				</ul>
				<h4 id="project-name">
				Project name
				</h4>
				<p>
					You can define your project name withe the projectName key. This name will be used to store your data in the localstorage. The default value is `VueUiFields`.
				</p>
				<h4 id="persistent-time">
				Persistent time
				</h4>
				<p>
					You can change the time your data stays in the localstorage (time in microseconds. Defaults to: 4320000 (1000 * 60 * 60 * 12 - half a day)
				</p>
				<h4 id="lang">
				Languague
				</h4>
				<p>
					You can change the default language used for validation. Defaults to 'en'. NL is the only other option at this moment.
				</p>
				<h4 id="base-url">
				Base URL
				</h4>
				<p>
					You can change the base url to send out forms. This feature only works when using helper functions.
				</p>
			</div>
		</div>
	</section>
</template>