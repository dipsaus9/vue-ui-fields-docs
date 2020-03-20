export default {
	field: (state) => (name) => {
		if (name && state.fields) {
			return state.fields.find((item) => item.name === name) || {};
		}
		return {};
	},
	error: (state) => (options) => {
		const form = state.fields.find((form) => form.name === options.formName);

		if (typeof options.fieldsetIndex === 'number') {
			const fieldset = form.fieldsets[options.fieldsetIndex];
			options.fieldsetIndex = fieldset.name;
		}

		if (options && state.errors) {
			return state.errors.filter((item) => item.formName === options.formName && item.fieldsetIndex === options.fieldsetIndex && item.fieldIndex === options.fieldIndex);
		}
		return [];
	},
	errors: (state) => (options) => {
		if (options) {
			if (options.formName) {
				let errors = options.formName.reduce((accum, error) => {
					if (options.fieldsetIndex) {
						if (options.fieldIndex) {
							accum = accum.concat(state.errors.filter((item) => item.formName === error && item.fieldsetIndex === options.fieldsetIndex && item.fieldIndex === options.fieldIndex));
						} else {
							accum = accum.concat(state.errors.filter((item) => item.formName === error && item.fieldsetIndex === options.fieldsetIndex));
						}
					} else {
						accum = accum.concat(state.errors.filter((item) => item.formName === error));
					}
					return accum;
				}, []);
				errors.sort((a, b) => a.sortIndex > b.sortIndex ? 1 : -1);
				return errors;
			}
		}
		return [];
	},
	flattenFields: (state) => (formName, fieldsetName) => {
		const form = state.fields.find((form) => form.name === formName);
		if (form) {
			return form.fieldsets.reduce((accum, curr) => {
				if (curr.fields) {
					accum = accum.concat(curr.fields.map((field) => ({ ...field, fieldsetName: curr.name, fieldsetShow: curr.conditionValue })));
					if (fieldsetName) {
						accum = accum.filter((item) => item.fieldsetName === fieldsetName);
					}
				}
				return accum;
			}, []);
		}
		return [];
	}
};