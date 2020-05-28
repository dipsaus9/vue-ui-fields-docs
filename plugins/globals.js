import Vue from 'vue';
Vue.mixin({
	methods: {
		copyToKeyboard(e) {
			const codeEl = e.target.nextElementSibling;
			const copyTextarea = codeEl.querySelector('code');
			const text = copyTextarea.textContent;

			const textArea = document.createElement('textarea');
			textArea.value = text;
			// Avoid scrolling to bottom
			textArea.style.top = '0';
			textArea.style.left = '0';
			textArea.style.position = 'fixed';

			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				window.document.execCommand('copy');
				const oldText = e.target.innerHTML;
				e.target.innerHTML = 'Copied';
				setTimeout(() => {
					e.target.innerHTML = oldText;
				}, 1000);
			} catch (err) {
				console.log('Oops, unable to copy');
			}
			window.document.body.removeChild(textArea);
		}
	}
});