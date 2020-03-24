<template>
	<div>
		<input
			:id="`${form}__${name}`"
			v-model="value"
			:name="fieldData.name"
			:type="fieldData.type"
			v-bind="fieldData.htmlSettings"
			:class="`ui-fields__input ${fieldData.type}__input`"
			@blur="setValue"
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
			<uiErrors :form="form" :name="name" />
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
	data: () => {
		return {
			component: 'ui-text'
		};
	},
	computed: {
		fieldData() {
			return this.$uiFields.getField(this.form, this.name);
		},
		value: {
			get() {
				return this.$uiFields.getValue(this.form, this.name);
			},
			set(value) {
				this.$uiFields.setValue(this.form, this.name, value, false);
			}
		}
	},
	methods: {
		setValue($event) {
			this.$uiFields.setValue(this.form, this.name, $event.target.value);
		}
	}
};
</script>
