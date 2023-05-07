const path = require("path");
const dbuilderConfig = require("./dbuilder.config.json");

function getLocales() {
  if (dbuilderConfig && dbuilderConfig.i18n && dbuilderConfig.i18n.supports) {
    return dbuilderConfig.i18n.supports.map(({ value }) => value);
  }

  return ["gb"];
}

function getOutput() {
  if (dbuilderConfig && dbuilderConfig.paths && dbuilderConfig.paths.locales) {
    return path.join(dbuilderConfig.paths.locales, "$LOCALE.json");
  }
  return "locales";
}

module.exports = {
  contextSeparator: "_",
  createOldCatalogs: false,
  defaultNamespace: "translation",
  defaultValue: "",
  indentation: 2,
  keepRemoved: true,
  keySeparator: false,
  lexers: {
    ts: [{ lexer: "JavascriptLexer" }],
    tsx: [{ lexer: "JsxLexer" }],
    js: [{ lexer: "JavascriptLexer" }],
    jsx: [{ lexer: "JsxLexer" }],
    default: ["JavascriptLexer"],
  },
  locales: getLocales(),
  namespaceSeparator: false,
  output: getOutput(),
  pluralSeparator: false,
  input: ["src/**/*.{jsx,tsx,js,ts}", "src/*.{jsx,tsx,js,ts}"],
  sort: true,
  skipDefaultValues: false,
  useKeysAsDefaultValue: true,
  verbose: true,
  failOnWarnings: false,
  failOnUpdate: false,
  customValueTemplate: null,
  resetDefaultValueLocale: null,
  i18nextOptions: null,
};
