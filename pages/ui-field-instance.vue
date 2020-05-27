/* eslint-disable vue/html-indent */
<template>
	<section class="page-details">
		<div class="intro">
			<h1 class="intro__title">
				Ui-field instance
			</h1>
			<p class="intro__info">
				First of all, you need to define a new form with the function.
			</p>
		</div>
		<div class="usage">
			< VueCodeHighlight language="javascript">
				mounted() {
					this.$uiFields.new([form-name]);

					this.$uiFields.setFields([form-name], [
						{
							name: [input-name],
							type: [input-type],
							validation: [
								{
									name: [validation-name]
									options: [validation-options]
								}
							]
						}
					]);
				}
			< /VueCodeHighlight>
		</div>
	</section>
</template>

