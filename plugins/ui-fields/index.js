import prototype from './helpers/prototype.js';

const uiFields = {
	install(Vue) {

		//global mixin functions
		Vue.component('uiErrors', () => import('./template/ui-errors.vue'));
		Vue.component('uiError', () => import('./template/ui-error.vue'));
		Vue.component('uiFields', () => import('./template/ui-fields.vue'));
		Vue.component('uiField', () => import('./template/ui-field.vue'));

		Vue.prototype.$uiFields = prototype;

	}
};

export default uiFields;