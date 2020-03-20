
export default {
	setForm(state, form) {
		const formExsist = state.fields.findIndex((singleForm) => singleForm.name === form.name);
		//dont change if it already exsists
		if (formExsist === -1) {
			state.fields.push(form);
		} else {
			state.fields.splice(formExsist, 1, form);
		}
	},
	updateFieldValue(state, options) {
		const form = state.fields.find((form) => form.name === options.formName);
		if (form) {
			const fieldset = form.fieldsets[options.fieldsetIndex];
			if (fieldset) {
				const field = fieldset.fields[options.fieldIndex];
				if (field) {
					field.value = options.value;

					//activate hooks
					if (field.uiFieldsData.hooks) {
						field.uiFieldsData.hooks(options.value);
					}

					if (field.conditions) {
						field.conditions.forEach((condition) => {
							const form = state.fields.find((form) => form.name === condition.formName);
							if (condition.hasOwnProperty('fieldIndex')) {
								const field = form.fieldsets[condition.fieldsetIndex].fields[condition.fieldIndex];
								if (typeof condition.condition !== 'function') {
									field.conditionValue = options.value === condition.condition;
								} else if (typeof condition.condition === 'function') {
									field.conditionValue = condition.condition(options.value);
								}
							} else {
								//fieldset condition
								const fieldset = form.fieldsets[condition.fieldsetIndex];
								if (typeof condition.condition !== 'function') {
									fieldset.conditionValue = options.value === condition.condition;
								} else if (typeof condition.condition === 'function') {
									fieldset.conditionValue = condition.condition(options.value);
								}
							}
						});
					}
				}
			}
		}
	},
	addExtraCondition(state, { depObj, conditionObj }) {
		const form = state.fields.find((form) => form.name === depObj.formName);
		if (form) {
			const field = form.fieldsets[depObj.fieldSetForCondition].fields[depObj.fieldIndex];
			if (!field.hasOwnProperty('conditions')) {
				field.conditions = [];
			}
			field.conditions.push(conditionObj);
			const form2 = state.fields.find((form) => form.name === conditionObj.formName);
			const field2 = form2.fieldsets[conditionObj.fieldsetIndex].fields[conditionObj.fieldIndex];
			if (typeof conditionObj.condition !== 'function') {
				//Do something here
			} else if (typeof conditionObj.condition === 'function') {
				field2.conditionValue = field.value === conditionObj.condition;
				field2.conditionValue = conditionObj.condition(field.value);
			}
		}
	},
	resetFields(state) {
		state.fields = [];
	},
	setError(state, options) {
		const stateDup = [...state.errors];
		const errorExsist = stateDup.findIndex((error) => error.formName === options.formName && error.fieldsetIndex === options.fieldsetIndex && error.fieldIndex === options.fieldIndex && error.name === options.name);

		if (errorExsist === -1) {
			stateDup.push(options);
		}

		state.errors = stateDup;
	},
	removeError(state, options) {
		const stateDup = [...state.errors];
		const errorExsist = stateDup.findIndex((error) => error.formName === options.formName && error.fieldsetIndex === options.fieldsetIndex && error.fieldIndex === options.fieldIndex && error.name === options.name);

		if (errorExsist > -1) {
			//we can only remove an item that already exsists
			stateDup.splice(errorExsist, 1);
		}

		state.errors = stateDup;
	},
	removeErrors(state) {
		state.errors = [];
	},
};
