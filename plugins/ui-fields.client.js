import uiFields from 'vue-ui-fields';
import { component as VueCodeHighlight } from 'vue-code-highlight';

import Vue from 'vue';

if (process.client) {
	Vue.use(uiFields, {
		persistentTime: 1000 * 60
	});
}
Vue.component('VueCodeHighlight', VueCodeHighlight);