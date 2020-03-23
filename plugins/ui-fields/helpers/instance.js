import Vue from 'vue';
import formatProperties from './formatProperties.js';
import path from 'path';

export class uiFieldsInstance {
	/**
		*
		* @param {String} name
	*/
	constructor(name) {
		this.name = name;
		this.fields = new Map();
		this.values = new Map();
	}

	/**
		* Return formname
	*/
	getFormName() {
		return this.name;
	}

	/**
		* Return Formatted fields
	*/
	getFieldKeys() {
		return [...this.fields.keys()];
	}

	/**
		* Return fields map
	*/
	getFields() {
		return this.fields;
	}

	/**
		* Return fields map
	*/
	getField(name) {
		return this.fields.get(name);
	}

	/**
		*
		* @param {Array} options - Setfields -> array to setField
  */
	setFields(fields) {
		if (!Array.isArray(fields)) {
			return;
		}

		fields.forEach(field => this.setField(field));
	}

	/**
		*
		* @param {Object} field - Set a field
	*/
	async setField(field) {
		const defaultSettings = [
			{ key: 'name', type: 'string' },
			{ key: 'value', type: 'string' },
			{ key: 'type', type: 'string' },
			{ key: 'label', type: 'string', default: '' },
			{ key: 'requiredText', type: 'string', default: '*' },
			{ key: 'classes', type: 'array', default: [] }
		];

		const defaultHTMLSettings = [
			{ key: 'autocomplete', type: 'string' },
			{ key: 'disabled', type: 'boolean' },
			{ key: 'max', type: 'number' },
			{ key: 'maxlength', type: 'number' },
			{ key: 'min', type: 'number' },
			{ key: 'minlength', type: 'number' },
			{ key: 'multiple', type: 'boolean' },
			{ key: 'placeholder', type: 'string' },
			{ key: 'required', type: 'boolean' },
			{ key: 'step', type: 'number' },
			{ key: 'autofocus', type: 'boolean' },
		];

		const defaultOptionsSettings = [
			{ key: 'selected', type: 'boolean', default: false },
			{ key: 'disabled', type: 'boolean' },
			{ key: 'value', type: 'string', default: '' }
		];

		const defaultDependentSettings = [
			{ key: 'validation', type: 'any' },
			{ key: 'persistent', type: 'boolean', default: true },
			{ key: 'errors', type: 'object' },
			{ key: 'hooks', type: 'function' }
		];

		let {
			baseSettings,
			dependentSettings,
			htmlSettings,
			...remaining
		} = formatProperties(
			field,
			{ key: 'baseSettings', values: defaultSettings },
			{ key: 'htmlSettings', values: defaultHTMLSettings },
			{ key: 'dependentSettings', values: defaultDependentSettings }
		);

		const { name, value, type, label, requiredText } = baseSettings;
		const componentType = this.formatComponentType(type);
		const formattedField = {
			customData: remaining,
			dependentSettings,
			htmlSettings,
			componentType,
			type,
			name,
			label,
			requiredText
		};
		if (Object.prototype.hasOwnProperty.call(remaining, 'options')) {
			const {
				options,
				...rest
			} = formatProperties(
				field,
				{ key: 'options', values: defaultOptionsSettings }
			);
			remaining = rest;
			formattedField.options = options;
		}

		const validationObject = await this.validator(dependentSettings.validation);

		if (validationObject) {
			console.log(validationObject.default('hallo'));
		}
		this.fields.set(name, formattedField);
		this.values.set(value, value);
	}

	/**
	 * Set single value
	 * @param {String} fieldName
	 * @param {*} value
	 */
	setValue(fieldName, value) {
		this.values.set(fieldName, value);
	}

	/**
		* Get component type
		* @param {String} type
		*/
	formatComponentType(type) {
		switch (type) {
			case 'text':
				return 'uiText';
			case 'select':
				return 'uiSelect';
			case 'checkbox':
				return 'uiCheckbox';
			case 'radio':
				return 'uiRadio';
			case 'number':
				return 'uiText';
			case 'textarea':
				return 'uiTextarea';
			case 'email':
				return 'uiText';
			case 'tel':
				return 'uiText';
			case 'password':
				return 'uiText';
			case 'range':
				return 'uiText';
			default:
				return type;
		}
	}

	/**
	 * Subscribe form
	 * @param {Function} listener
	 */
	subscribe(listener) {
		Vue.prototype.$uiFields.subscribe(this.getFormName(), listener);
	}

	/**
	 * Subscribe field
	 * @param {String} fieldName
	 * @param {Function} listener
	 */
	subscribeField(fieldName, listener) {
		Vue.prototype.$uiFields.subscribeField(this.getFormName(), fieldName, listener);
	}

	/**
	 * Unsubscribe form
	 */
	unsubscribe(){
		Vue.prototype.$uiFields.unsubscribe(this.getFormName());
	}

	/**
	 * Unsubscribe field
	 */
	unsubscribeField(fieldName) {
		Vue.prototype.$uiFields.unsubscribe(this.getFormName(), fieldName);
	}

	/**
	 * Validator Object
	 */
	async validator(type) {
		let rules;
		switch (type[0]) {
			case 'required':
				rules = await import('../rules/required.js');
				break;
			case 'email':
				rules = await import('../rules/email.js');
				break;
			case 'postalcode':
				rules = await import('../rules/postalcode.js');
				break;
			case 'number':
				rules = await import('../rules/number.js');
				break;
			case 'minlength':
				rules = await import('../rules/minlength.js');
				break;
			case 'maxlength':
				rules = await import('../rules/maxlength.js');
				break;
			case 'min':
				rules = await import('../rules/min.js');
				break;
			case 'max':
				rules = await import('../rules/max.js');
				break;
			case 'creditcard':
				rules = await import('../rules/creditcard.js');
				break;
			case 'date':
				rules = await import('../rules/date.js');
				break;
			case 'url':
				rules = await import('../rules/url.js');
				break;
			case 'equalTo':
				rules = await import('../rules/equalTo.js');
				break;
			case 'notEqualTo':
				rules = await import('../rules/notEqualTo.js');
				break;
			case 'vat':
				rules = await import('../rules/vat.js');
				break;
			case 'phone':
				rules = await import('../rules/phone.js');
				break;
		}
		return rules;
	}
}