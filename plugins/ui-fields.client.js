import uiFields from '@matise/ui-fields';

import Vue from 'vue';

if (process.client) {
	Vue.use(uiFields, {
		persistentTime: 1000 * 60
	});
}
