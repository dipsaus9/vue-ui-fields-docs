import { resolve, join } from 'path';
import {
	PLUGINS_DIR,
	TEMPLATES_DIR,
	DEFAULT_OPTIONS,
	HELPERS_DIR,
	MESSAGES_DIR,
	STORE_DIR,
	ROOT_DIR,
	RULES_DIR
} from './constants.js';
import { readdirSync } from 'fs';

export default function (moduleoptions) {
	const pluginsPath = join(__dirname, PLUGINS_DIR);
	const helpersPath = join(__dirname, HELPERS_DIR);
	const templatesPath = join(__dirname, TEMPLATES_DIR);
	const messagesPath = join(__dirname, MESSAGES_DIR);
	const storePath = join(__dirname, STORE_DIR);
	const rulesPath = join(__dirname, RULES_DIR);

	const options = { ...DEFAULT_OPTIONS };

	const requiredPlugins = ['store', 'instance'];

	const templatesOptions = {
		...options,
		PLUGINS_DIR,
		TEMPLATES_DIR,
		HELPERS_DIR
	};

	/**
	 * Create template files
	 */
	for (const file of readdirSync(helpersPath)) {
		this.addTemplate({
			src: resolve(helpersPath, file),
			fileName: join(ROOT_DIR, file),
			options: templatesOptions
		});
	}

	/**
	 * Create template files
	 */
	for (const file of readdirSync(rulesPath)) {
		this.addTemplate({
			src: resolve(rulesPath, file),
			fileName: join(ROOT_DIR + '/rules/', file),
			options: templatesOptions
		});
	}

	/**
	 * Create template files
	 */
	for (const file of readdirSync(storePath)) {
		this.addTemplate({
			src: resolve(storePath, file),
			fileName: join(ROOT_DIR, file),
			options: templatesOptions
		});
	}

	/**
	 * Add all plugins
	 */
	for (const file of requiredPlugins) {
		this.addPlugin({
			src: resolve(pluginsPath, `${file}.js`),
			fileName: join(ROOT_DIR, `plugin.${file}.js`)
		});
	}

	this.extendBuild((config) => {
		for (const file of readdirSync(templatesPath)) {
			const name = file
				.split('-')
				.map((string) => string.charAt(0).toUpperCase() + string.slice(1))
				.join('')
				.split('.vue')
				.filter((item) => item)
				.join('');
			const src = resolve(templatesPath, file);
			config.resolve.alias[name] = src;
		}

		config.resolve.alias['uiFieldsLanguageNL'] = resolve(messagesPath, 'nl.json');
		config.resolve.alias['uiFieldsLanguageEN'] = resolve(messagesPath, 'en.json');

		config.resolve.alias['uiFieldsValidationRules'] = resolve(rulesPath, 'index');
	});
}

// module.exports.meta = require("../package.json");
