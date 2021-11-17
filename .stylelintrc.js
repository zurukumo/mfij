module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "selector-class-pattern": null,
    "scss/at-rule-no-unknown": true,
  },
};
