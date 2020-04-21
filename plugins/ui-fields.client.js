import Vue from 'vue';
import uiFields from '@matise/ui-fields';

if (process.client) {
	Vue.use(uiFields, {
		persistentTime: 1000 * 60
	});
}
