<template>
	<div :id="`${form}_${name}`">
		<template v-for="(option, key) in fieldData.options">
			<input
				:id="`${form}_${name}_${key}`"
				:key="key"
				v-model="firstValue"
				:value="option.value"
				:name="option.name"
				:type="fieldData.type"
				v-bind="fieldData.htmlSettings"
				:class="`ui-fields__input ${fieldData.type}__input`"
				@change="setCheckboxValue"
			/>
			<label :key="`label_${key}`" :class="`ui-fields__element ${fieldData.type}__element`" :for="`${form}_${name}_${key}`">
				<span
					:class="[
						fieldData.htmlSettings.required
							? `${fieldData.type}__label--is-required ui-fields__label ${fieldData.type}__label`
							: `ui-fields__label ${fieldData.type}__label`
					]"
					v-html="option.label"
				>
				</span>
			</label>
		</template>
		<span
			v-if="fieldData.htmlSettings.required && fieldData.requiredText"
			:class="`ui-fields__label--required ui-fields__label ${fieldData.type}__label ${fieldData.type}__label--required`"
		>
			{{ fieldData.requiredText }}
		</span>
		<uiErrors :form="form" :name="name" />
	</div>
</template>
<script>
import mixinSettings from './../helpers/mixin.js';
export default {
	mixins: [mixinSettings],
	data() {
		return {
			component: 'ui-radio',
			firstValue: []
		};
	},
	methods: {
		setCheckboxValue() {
			this.$uiFields.setValue(this.form, this.name, this.firstValue);
		}
	}
};
</script>
