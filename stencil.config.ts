import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'velo-branches-table',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
      inlineDynamicImports: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
