<template>
	<div
		:class="[
			`ui-fields__field ui-fields__field--${fieldData.type}`,
			`${fieldData.classes}`,
			{ 'ui-fields__field--pristine' : pristine },
			{ 'ui-fields__field--valid' : !pristine && valid },
			{ 'ui-fields__field--invalid' : !pristine && !valid }
		]"
	>
		<input
			:id="`${form}__${name}`"
			v-model="value"
			:name="fieldData.name"
			:type="fieldData.type"
			v-bind="fieldData.htmlSettings"
			:class="`ui-fields__input ${fieldData.type}__input`"
		/>
		<label :class="`ui-fields__element ${fieldData.type}__element`" :for="`${form}__${name}`">
			<span
				:class="[
					fieldData.htmlSettings.required
						? `${fieldData.type}__label--is-required ui-fields__label ${fieldData.type}__label`
						: `ui-fields__label ${fieldData.type}__label`
				]"
				v-html="fieldData.label"
			>
			</span>
			<span
				v-if="fieldData.htmlSettings.required && fieldData.requiredText"
				:class="`ui-fields__label--required ui-fields__label ${fieldData.type}__label ${fieldData.type}__label--required`"
			>
				{{ fieldData.requiredText }}
			</span>
		</label>
	</div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		},
		form: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			component: 'ui-text',
			pristine: true,
			valid: true
		};
	},
	computed: {
		fieldData() {
			return this.$uiFields.getField(this.form, this.name);
		},
		value: {
			get() {
				if (this.fieldData) {
					return this.fieldData.value;
				}
				return '';
			},
			set(value) {
				this.$uiFields.setValue(this.form, this.name, value);
			}
		}
	}
};
</script>
