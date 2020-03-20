import Vue from 'vue';
import { uiFieldsInstance } from './instance.js';

export default async ({ store }) => {
	Vue.prototype.$uiFields = {
		new(options) {
			return new uiFieldsInstance(options, store);
		},
		validate(formName, options) {
			return new Promise(async (resolve) => {
				const result = await store.dispatch('uiFields/validate', { formName, options });
				if (!result.valid) {
					const errors = result.errors.filter((error) => error.custom_error);
					if (errors.length === result.errors.length) {
						//only custom errors, delete and return
						errors.forEach((error) => store.dispatch('uiFields/removeError', error));
						result.errors = [];
						result.valid = true;
					} else {
						//there are only own errors, scroll to the first error
						const element = document.getElementById(`${result.errors[0].fieldsetIndex}__${result.errors[0].fieldIndex}`);
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'center'
							});
						}
					}
				}
				if (options && 'silent' in options && options.silent) {
					store.dispatch('uiFields/removeErrors');
				}
				resolve(result);
			});
		},
		setError(options) {
			store.dispatch('uiFields/setError', { ...options, custom_error: true });
		},
		removeError(options) {
			store.dispatch('uiFields/removeError', { ...options, custom_error: true });
		}
	};
};

Array.prototype.getSingleUiField = function (name) {
	if (name) {
		if (this.length) {
			return this.find(field => field.name === name);
		}
	}
	return undefined;
};