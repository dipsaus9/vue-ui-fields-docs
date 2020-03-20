<template>
	<div>
		<client-only>
			<div v-if="uiFields && uiFields.fieldsets" :class="uiFields.classes">
				<component
					:is="uiFields.component"
					v-for="(fieldset, i) of uiFields.fieldsets"
					v-show="fieldset.conditionValue"
					:key="i"
					:class="[
						'ui-fields__fieldset',
						fieldset.classes,
						fieldset.conditionValue ? 'ui-fields__fieldset--enabled' : 'ui-fields__fieldset--disabled'
					]"
				>
					<template v-if="fieldset.conditionValue">
						<template v-for="(field, index) of fieldset.fields">
							<component
								:is="field.uiFieldsData.componentType"
								v-if="field.uiFieldsData.componentType !== 'component'"
								v-show="field.conditionValue"
								:key="index"
								:visible-field="field.conditionValue ? true : false"
								:form-name="fieldName"
								:fieldset-index="i"
								:fieldset-name="fieldset.name"
								:field-index="index"
							/>
							<component
								:is="fieldset.component"
								v-else-if="field.conditionValue && field.uiFieldsData.componentType === 'component'"
								:key="index"
								:class="['ui-fields__component-container']"
							>
								<component
									:is="field.component.name"
									v-if="field.component && field.component.content"
									v-bind="field.component.props"
									:class="field.component.classes"
									v-html="field.component.content"
								/>
								<component
									:is="field.component.name"
									v-else-if="field.component"
									v-bind="field.component.props"
									:class="field.component.classes"
								/>
							</component>
						</template>
					</template>
				</component>
			</div>
		</client-only>
	</div>
</template>

<script>
export default {
	props: {
		fieldName: {
			type: String,
			default: 'form'
		}
	},
	computed: {
		uiFields() {
			return this.findCorrectFields(this.$store.state.uiFields.fields);
		}
	},
	watch: {
		uiFields: {
			handler() {
				this.$forceUpdate();
			},
			deep: true
		}
	},
	created() {
		if (process.client) {
			this.$store.dispatch('uiFields/updateFromLocalStorage');
		}
	},
	methods: {
		findCorrectFields(fields) {
			return fields.find((field) => field.name === this.$props.fieldName) || [];
		}
	}
};
</script>
