const eslintConfig = defineConfig([
  ...next(['core-web-vitals']),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'lib/generated/prisma/**',
  ]),
]);

export default eslintConfig;
