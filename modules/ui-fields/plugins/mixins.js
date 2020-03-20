//global mixin functions
import Vue from 'vue';
import { uiFieldsInstance } from './instance.js';

Vue.component('uiText', () => import('UiText'));
Vue.component('uiError', () => import('UiError'));
Vue.component('uiErrors', () => import('UiErrors'));
Vue.component('uiCheckbox', () => import('UiCheckbox'));
Vue.component('uiSelect', () => import('UiSelect'));
Vue.component('uiRadio', () => import('UiRadio'));
Vue.component('uiFields', () => import('UiFields'));
Vue.component('uiTextarea', () => import('UiTextarea'));


Vue.mixin({
	methods: {
		createNewUiFieldsInstance(options) {
			return new uiFieldsInstance(options, this.$store);
		},
		getClasses(classes, name = '') {
			if (classes.length) {
				return classes.map(clas => `${clas}${name}`);
			}
			return '';
		},
		getCorrectFieldSet(options) {
			if (options) {
				const uiField = this.$store.state.uiFields.fields;
				if (options.formName) {
					const form = uiField.find(form => form.name === options.formName);
					if (form && form.fieldsets) {
						if (options.fieldsetName) {
							const fieldSet = form.fieldsets.find(
								fieldset => fieldset.name === options.fieldsetName
							);
							if (fieldSet && fieldSet.fields) {
								return fieldSet.fields;
							}
						}
					}
				}
			}
			return false;
		},
		getCorrectField(options) {
			const fieldSet = this.getCorrectFieldSet(options);
			if (typeof fieldSet === 'object') {
				if (fieldSet.length) {
					return fieldSet.find(field => field.name === options.fieldName);
				}
			}
			return false;
		}
	}
});