import { persistentTime } from './options';

const time = new Date();

export default {
	setNewForm({ commit }, form) {
		if (!process.server) {
			commit('setForm', form);
		}
	},
	updateFieldValue({ commit, state }, fieldOptions) {
		const form = state.fields.find((form) => form.name === fieldOptions.formName);
		if (typeof fieldOptions.fieldsetIndex === 'string') {
			const fieldset = form.fieldsets.findIndex((fieldsetItem) => fieldsetItem.name === fieldOptions.fieldsetIndex);
			fieldOptions.fieldsetIndex = fieldset;
		}

		if (typeof fieldOptions.fieldIndex === 'string') {
			const field = form.fieldsets[fieldOptions.fieldsetIndex].fields.findIndex((field) => field.name === fieldOptions.fieldIndex);
			fieldOptions.fieldIndex = field;
		}

		commit('updateFieldValue', fieldOptions);
		if (fieldOptions) {
			if (process.client && fieldOptions.persistent !== false) {
				const uiFieldsLocal = localStorage.getItem('uiFields');
				if (uiFieldsLocal) {
					let uiFields = JSON.parse(uiFieldsLocal);
					const findIndex = uiFields.data.findIndex((item) => item.fieldIndex === fieldOptions.fieldIndex && item.fieldsetIndex === fieldOptions.fieldsetIndex && item.formName === fieldOptions.formName);
					if (findIndex > -1) {
						uiFields.data[findIndex] = fieldOptions;
					} else {
						uiFields.data.push(fieldOptions);
					}
					localStorage.setItem('uiFields', JSON.stringify({ data: uiFields.data, time: time.getTime() }));
				} else {
					localStorage.setItem('uiFields', JSON.stringify({ data: [fieldOptions], time: time.getTime() }));
				}
			}
		}
	},
	resetSingleForm({ dispatch, state }, formName) {
		if (formName) {
			//find correct form
			const form = state.fields.find(field => field.name === formName);
			if (form) {
				form.fieldsets.forEach((fieldset, index) => {
					fieldset.fields.forEach((field, i) => {
						dispatch('updateFieldValue', {
							formName: formName,
							fieldsetIndex: index,
							fieldIndex: i,
							persistent: field.uiFieldsData.persistent,
							value: Array.isArray(field.value) ? [] : typeof field.value === 'string' ? '' : Number(field.customData.value)
						});
					});
				});
			}
		}
	},
	resetFields({ commit }) {
		commit('resetFields');
	},
	updateFromLocalStorage({ dispatch }) {
		if (process.client) {
			let uiFields = localStorage.getItem('uiFields');
			if (uiFields) {
				uiFields = JSON.parse(uiFields);
				let time = new Date();
				time = time.getTime();
				if (time - uiFields.time < persistentTime) {
					uiFields.data.forEach(field => {
						dispatch('updateFieldValue', field);
					});
				} else {
					localStorage.removeItem('uiFields');
				}
			}
		}
	},
	setError({ commit, state }, fieldOptions) {
		const form = state.fields.find((form) => form.name === fieldOptions.formName);

		if (typeof fieldOptions.fieldsetIndex === 'number') {
			const fieldset = form.fieldsets[fieldOptions.fieldsetIndex];
			fieldOptions.fieldsetIndex = fieldset.name;
		}

		commit('setError', fieldOptions);
	},
	removeError({ commit, state }, fieldOptions) {
		const form = state.fields.find((form) => form.name === fieldOptions.formName);
		if (typeof fieldOptions.fieldsetIndex === 'number') {
			const fieldset = form.fieldsets[fieldOptions.fieldsetIndex];
			fieldOptions.fieldsetIndex = fieldset.name;
		}
		commit('removeError', fieldOptions);
	},
	removeErrors({ commit }) {
		commit('removeErrors');
	},
	validate({ dispatch, getters }, { formName, options }) {
		return new Promise(async (resolve) => {
			const fields = getters.flattenFields(formName);
			const validation = fields.reduce((accum, field, index) => {
				if (field.errors.validation) {
					const validation = [...field.errors.validation].map((item) => ({
						item,
						field,
						index
					}));
					if (field.conditionValue === true && field.fieldsetShow === true) {
						accum = accum.concat(validation);
						return accum;
					} else {
						field.errors.validation.forEach((item) => {
							dispatch('removeError', {
								formName: formName,
								fieldsetIndex: field.fieldsetName,
								fieldIndex: field.name,
								name: item.name
							});
						});
					}
				}
				return accum;
			}, []);
			await Promise.all(validation.map((valid) => {
				return new Promise(async (resolveMap) => {
					const item = valid.item;
					const field = valid.field;
					let validate = true;
					if (field.fieldsetShow !== true || field.conditionValue !== true) {
						validate = false;
					}
					if ((options && 'fieldsetName' in options && options.fieldsetName !== field.fieldsetName)) {
						validate = false;
					}
					if ((options && 'fieldName' in options && options.fieldName !== field.name)) {
						validate = false;
					}
					if (!validate) {
						dispatch('removeError', {
							formName: formName,
							fieldsetIndex: field.fieldsetName,
							fieldIndex: field.name,
							name: item.name
						});
						resolveMap();
						return;
					}

					const result = await item.validation(field.value, item.options);
					if (!result) {
						//there is an error, lets push it to the store (setter)
						dispatch('setError', {
							formName: formName,
							fieldsetIndex: field.fieldsetName,
							fieldIndex: field.name,
							name: item.name,
							message: item.message(field.value, field.name),
							value: field.value,
							sortIndex: valid.index
						});
					} else {
						dispatch('removeError', {
							formName: formName,
							fieldsetIndex: field.fieldsetName,
							fieldIndex: field.name,
							name: item.name
						});
					}
					resolveMap();
				});
			}));
			const errors = getters.errors({ formName: [formName] });
			resolve({
				valid: errors.length === 0,
				errors
			});
		});
	},
	extraCondition({ commit, getters }, options) {
		const dependentOptions = options.dependent;
		const form = getters['field'](dependentOptions.formName);
		if (form && Object.keys(form).length) {
			const fieldSetForCondition = form.fieldsets.findIndex((fieldset) => {
				if (fieldset.name === dependentOptions.fieldsetName) {
					return true;
				}
			});
			if (fieldSetForCondition > -1) {
				const fieldForCondition = form.fieldsets[fieldSetForCondition].fields.findIndex((field) => field.name === dependentOptions.fieldName);
				if (fieldForCondition > -1) {
					const depObj = {
						formName: dependentOptions.formName,
						fieldIndex: fieldForCondition,
						fieldSetForCondition,
					};
					//depObject found, condition object needs to be created

					const form2 = getters['field'](options.formName);
					if (form2 && Object.keys(form2).length) {
						const fieldSetForCondition2 = form2.fieldsets.findIndex((fieldset) => {
							if (fieldset.name === options.fieldsetName) {
								return true;
							}
						});
						if (fieldSetForCondition2 > -1) {
							const fieldForCondition2 = form2.fieldsets[fieldSetForCondition2].fields.findIndex((field) => field.name === options.fieldName);
							if (fieldForCondition > -1) {
								const conditionObj = {
									formName: options.formName,
									fieldsetIndex: fieldSetForCondition2,
									fieldIndex: fieldForCondition2,
									condition: options.condition
								};
								commit('addExtraCondition',
									{
										depObj,
										conditionObj
									}
								);
							}
						}
					}
				} else {
					console.warn('setNewCondition will be ignored, field not found');
				}
			} else {
				console.warn('setNewCondition will be ignored, field not found');
			}
		} else {
			console.warn('setNewCondition will be ignored, incorrect formName');
		}
	}
};