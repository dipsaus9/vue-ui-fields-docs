import { uiFieldsInstance } from './instance.js';

export default {
	/**
		 * Create a new form
		 * @param {String} name
		 */
	new(name) {
		if (!name) {
			return;
		}

		const form = new uiFieldsInstance(name);
		this.forms.set(name, form);
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
		 * Set value to array
		 * @param {String} name
		 * @param {String || Array} value
		 */
	setValue(formName, name, value) {
		if (!formName || !name) {
			return;
		}

		const form = this.getForm(formName);
		if (!form) {
			console.log('No form found');
			return;
		}
		form.setValue(name, value);

		this._listen(formName, name, value);
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
		return this.forms.get(name);
	},
	/**
		 * Get all values mapped
		 */
	getValues(formName) {
		if (!formName) {
			return;
		}

		const form = this.getForm(formName);
		if (!form) {
			console.log('No form found');
			return;
		}
		return [...form.values.values()];

	},
	/**
		 * Subscriber
		 * @param {String} formName
		 * @param {Function} listener
		 */
	subscribe(formName, listener) {
		if (this.formListeners.has(formName)) {
			this.formListeners.set(formName, [...this.formListeners.get(formName), listener]);
		} else {
			this.formListeners.set(formName, [listener]);
		}
	},
	/**
		 * Unsubscribe
		 * @param {String} formname
		 */
	unsubscribe(formname) {
		this.formListeners.delete(formname);
	},
	/**
		 * Subscriber
		 * @param {String} formName
		 * @param {Function} listener
		 */
	subscribeField(formName, fieldName, listener) {
		if (this.fieldListeners.has(`${formName}_${fieldName}`)) {
			this.fieldListeners.set(`${formName}_${fieldName}`, [...this.fieldListeners.get(`${formName}_${fieldName}`), listener]);
		} else {
			this.fieldListeners.set(`${formName}_${fieldName}`, [listener]);
		}
	},
	/**
		 * Unsubscribe
		 * @param {String} formname
		 */
	unsubscribeField(formName, fieldName) {
		this.fieldListeners.delete(`${formName}_${fieldName}`);
	},
	/**
		 * Current form instance
		 */
	forms: new Map(),
	formListeners: new Map(),
	fieldListeners: new Map(),
	errors: new Map(),
	/**
		 * Listen to event
		 * @param {String} formName
		 * @param {String} fieldName
		 * @param {String} value
		 */
	_listen(formName, fieldName, value) {
		//form event
		if (this.formListeners.has(formName)) {
			const events = this.formListeners.get(formName);
			events.forEach((event) => {
				event(value, fieldName);
			});
		}
		//Field event
		if (this.fieldListeners.has(`${formName}_${fieldName}`)) {
			const fieldEvents = this.fieldListeners.get(`${formName}_${fieldName}`);
			fieldEvents.forEach((event) => {
				event(value, fieldName);
			});
		}
	}
};