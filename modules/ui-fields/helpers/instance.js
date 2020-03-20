import Vue from 'vue';
import formatProperties from './formatProperties';

export class uiFields {
	/**
		*
		* @param {String} name
	*/
	constructor(name) {
		this.name = name;
		this.fields = new Map();
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
	setField(field) {
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
			{ key: 'step', type: 'number' }
		];

		const defaultInputSettings = [
			{ key: 'label', type: 'string', default: '' },
			{ key: 'selected', type: 'boolean', default: false },
			{ key: 'disabled', type: 'boolean' },
			{ key: 'classes', type: 'any' }
		];

		const defaultDependentSettings = [
			{ key: 'persistent', type: 'boolean', default: true },
			{ key: 'errors', type: 'object' },
			{ key: 'requiredText', type: 'string', default: '*' },
			{ key: 'hooks', type: 'function' }
		];

		const {
			dependentSettings,
			inputSettings,
			htmlSettings,
			...remaining
		} = formatProperties(
			field,
			{ key: 'htmlSettings', values: defaultHTMLSettings },
			{ key: 'inputSettings', values: defaultInputSettings },
			{ key: 'dependentSettings', values: defaultDependentSettings }
		);

		const componentType = this.formatComponentType(remaining.type);
		this.fields.set(remaining.name, {
			dependentSettings,
			inputSettings,
			htmlSettings,
			basisSettings: {
				componentType,
				...remaining
			}
		});
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
}