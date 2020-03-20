<template>
	<div>
		<input
			:id="`${form}__${name}`"
			v-model="fieldData.basisSettings.value"
			:name="fieldData.basisSettings.name"
			:type="fieldData.basisSettings.type"
			v-bind="fieldData.htmlSettings"
			:class="`ui-fields__input ${fieldData.basisSettings.type}__input`"
		/>
		<label :class="`ui-fields__element ${fieldData.basisSettings.type}__element`" :for="`${form}__${name}`">
			<span
				:class="[
					fieldData.htmlSettings.required
						? `${fieldData.basisSettings.type}__label--is-required ui-fields__label ${fieldData.basisSettings.type}__label`
						: `ui-fields__label ${fieldData.basisSettings.type}__label`
				]"
				v-html="fieldData.inputSettings.label"
			>
			</span>
			<span
				v-if="fieldData.htmlSettings.required"
				:class="`ui-fields__label--required ${fieldData.basisSettings.type}__label ${fieldData.basisSettings.type}__label--required`"
			>
				{{ fieldData.dependentSettings.requiredText }}
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
			fieldDataValue: ''
		};
	},
	computed: {
		fieldData() {
			return this.$uiFields.getField(this.form, this.name);
		}
	}
};
</script>
