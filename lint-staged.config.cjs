/* eslint-env node */
module.exports = {
  "src/**/*.{js,jsx,ts,tsx,vue}": [
    "prettier --write",
    "eslint --fix",
    () => "vue-tsc --noEmit -p tsconfig.json --composite false --skipLibCheck"
  ]
};
