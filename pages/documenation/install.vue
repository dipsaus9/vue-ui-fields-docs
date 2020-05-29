<template>
	<section>
		<div class="intro">
			<div>
				<h1>
					Documentation - Install
				</h1>
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
		<div class="content">
			<div>
				<h2>Install</h2>
				<p>
					To install Vue UI Fields in your project simply include UI Fields and install it as a plugin.
				</p>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ install }}</VueCodeHighlight>
				</div>
				</ClientOnly>
				<h3>Options</h3>
				<p>
					You can include some options to change the default settings
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
					You can define your project name withe the <code>projectName</code> key. This name will be used to store your data in the localstorage. The default value is `VueUiFields`.
				</p>
				<h4 id="persistent-time">
				Persistent time
				</h4>
				<p>
					You can change the time your data stays in the localstorage with the <code>persistentTimme</code> key (time in microseconds. Defaults to: <code>4320000</code> (1000 * 60 * 60 * 12 - half a day)
				</p>
				<h4 id="lang">
				Languague
				</h4>
				<p>
					You can change the default language used for validation with the <code>lang</code> key. Defaults to <code>en</code>. <code>nl</code> is the only other option at this moment.
				</p>
				<h4 id="lang">
				Class name
				</h4>
				<p>
					You can change the default class name used for all the components with the <code>className</code> key. Defaults to <code>ui-fields</code>
				</p>
				<h4 id="base-url">
				Base URL
				</h4>
				<p>
					You can change the base url to send out forms with the <code>baseURL</code> key. This feature only works when using helper functions.
				</p>
				<h3>Example</h3>
				<ClientOnly>
					<div class="code">
						<button @click="copyToKeyboard">
							Copy
						</button>
						<VueCodeHighlight>{{ installOptions }}</VueCodeHighlight>
					</div>
				</ClientOnly>
				<h4>Runtime compiler</h4>
				<p>
					UI Fields is not compiled yet, so you need a runtime compiler from Vue. Also UI Fields uses async / await, so you might have to babel this.
				</p>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			install: `import Vue from 'vue';
import uiFields from 'vue-ui-fields';

Vue.use(uiFields);`,
			installOptions: `import Vue from 'vue';
import uiFields from 'vue-ui-fields';

Vue.use(uiFields, {
	persistentTime: 1000 * 60,
	baseURL: 'https://youreserver.com',
	lang: 'nl',
	projectName: 'Test',
	className: 'test'
});`
		};
	}
};
</script>