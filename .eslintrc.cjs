module.exports = {
  extends: ["@nvon/eslint-config/eslint-configs/nextjs.cjs"],
  settings: {
    "import/core-modules": ["@emotion/cache", "clsx", "@mui/system"],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
    {
      files: ["**/*Styles.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
          },
        ],
      },
    },
  ],
};
