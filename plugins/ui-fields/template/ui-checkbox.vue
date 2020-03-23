<template>
	<div
		v-if="fieldData"
		:class="[
			`ui-fields__field ui-fields__field--${fieldData.type} ${fieldData.HTMLProperties.classes}`,
			!pristine ? `ui-fields__field--${fieldData.errors.classes.pristine}` : '',
			canBeValid && valid === true ? `ui-fields__field--${fieldData.errors.classes.valid}` : '',
			valid === false ? `ui-fields__field--${fieldData.errors.classes.error}` : ''
		]"
	>
		<div
			v-for="(option, index) in fieldData.options"
			:key="index"
			:class="[`ui-fields__checkbox-container ${fieldData.type}__element`, option.classes]"
		>
			<input
				v-if="visibleField"
				:id="`${fieldsetName}__${fieldData.name}_${index + 1}`"
				v-model="fieldDataValue"
				:value="option.value"
				:name="option.name"
				:type="fieldData.type"
				v-bind="fieldData.HTMLProperties"
				:class="`ui-fields__input ${fieldData.type}__input`"
				@input="checkErrors('input')"
				@change="checkErrors('change')"
				@blur="checkErrors('blur')"
			/>
			<label
				:class="`ui-fields__element ${fieldData.type}__element`"
				:for="`${fieldsetName}__${fieldData.name}_${index + 1}`"
			>
				<span
					:class="[
						fieldData.HTMLProperties.required
							? `${fieldData.type}__label--is-required ui-fields__label ${fieldData.type}__label`
							: `ui-fields__label ${fieldData.type}__label`
					]"
					v-html="option.label"
				>
				</span>
			</label>
		</div>
		<component
			:is="fieldData.component.name"
			v-if="fieldData.component"
			v-bind="fieldData.component.props"
			:class="fieldData.component.classes"
		>
			{{ fieldData.component.content }}
		</component>
		<ui-error
			v-if="fieldData.errors.showErrors"
			:form-name="formName"
			:fieldset-index="fieldsetIndex"
			:field-index="fieldData.name"
			:component-name="component"
		/>
	</div>
</template>
<script>
import mixinSettings from './../helpers/mixin.js';
export default {
	mixins: [mixinSettings],
	data() {
		return {
			component: 'ui-checkbox'
		};
	}
};
</script>
