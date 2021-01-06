import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'velo-branches-table',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
      inlineDynamicImports: true,
      externalRuntime: false,
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
