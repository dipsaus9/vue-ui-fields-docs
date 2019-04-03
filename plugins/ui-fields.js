import Vue from 'vue';
import UiCheckbox from '@matise/ui-fields/src/form/ui-checkbox.vue';
import UiSelect from '@matise/ui-fields/src/form/ui-select.vue';
import UiText from '@matise/ui-fields/src/form/ui-text.vue';
import UiFields from '@matise/ui-fields/src/form/ui-fields.vue';
import UiRadio from '@matise/ui-fields/src/form/ui-radio.vue';

const Components = {
	UiCheckbox,
	UiSelect,
	UiText,
	UiFields,
	UiRadio
};

Object.keys(Components).forEach((key) => {
	Vue.component(key, Components[key]);
});
