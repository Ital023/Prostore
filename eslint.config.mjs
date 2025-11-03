import next from 'eslint-config-next';

export default [
  ...next(['core-web-vitals']),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'lib/generated/prisma/**',
    ],
  },
];
