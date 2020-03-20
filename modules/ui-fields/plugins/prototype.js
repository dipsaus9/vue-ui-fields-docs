import Vue from 'vue';
import { uiFields } from './instance.js';

export default async ({ store }) => {
	Vue.prototype.$uiFields = {
		/**
     * Create a new form
     * @param {String} name
     */
		new(name) {
			if (!name) {
				return;
			}

			const form = new uiFields(name);
			this.currentForms.set(name, form);
			return form;
		},
		/**
     * Set new field
     * @param {String} name
     * @param {Object} options
     */
		setField(name, options) {
			if (!name) {
				return;
			}

			const form = this.getForm(name);
			if (!form) {
				console.log('No form found');
				return;
			}
			form.setField(options);
		},
		/**
     * Set multiple fields
     * @param {name} name
     * @param {Array} options
     */
		setFields(name, options) {
			if (!name) {
				return;
			}

			const form = this.getForm(name);
			if (!form) {
				console.log('No form found');
				return;
			}
			form.setFields(options);
		},
		/**
     * Get all fields of formname
     * @param {String} formName
     */
		getFieldKeys(formName) {
			const form = this.getForm(formName);
			if (!form) {
				return;
			}
			return form.getFieldKeys();
		},
		/**
		 * Get single field
		 * @param {String} formName
		 * @param {String} fieldName
		 */
		getField(formName, fieldName) {
			const form = this.getForm(formName);
			if (!form) {
				return;
			}
			return form.getField(fieldName);
		},
		/**
		 * Get all fields
		 * @param {String} formName
		 */
		getFields(formName) {
			const form = this.getForm(formName);
			if (!form) {
				return;
			}
			return form.getFields();
		},
		/**
     * Get form
     * @param {String} name
     */
		getForm(name) {
			return this.currentForms.get(name);
		},
		/**
     * Current form instance
     */
		currentForms: new Map(),
		async validate(name, options) {
			const result = await store.dispatch('uiFields/validate', {
				name,
				options
			});
			if (!result.valid) {
				const errors = result.errors.filter(error => error.custom_error);
				if (errors.length === result.errors.length) {
					//only custom errors, delete and return
					errors.forEach(error =>
						store.dispatch('uiFields/removeError', error)
					);
					result.errors = [];
					result.valid = true;
				} else {
					//there are only own errors, scroll to the first error
					const element = document.getElementById(
						`${result.errors[0].fieldsetIndex}__${result.errors[0].fieldIndex}`
					);
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
			return result;
		},
		/**
     * Set error
     * @param {Objec} options
     */
		setError(options) {
			store.dispatch('uiFields/setError', { ...options, custom_error: true });
		},
		/**
     * Remove an error
     * @param {Object} options
     */
		removeError(options) {
			store.dispatch('uiFields/removeError', {
				...options,
				custom_error: true
			});
		}
	};
};