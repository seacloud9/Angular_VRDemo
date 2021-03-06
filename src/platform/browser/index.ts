export * from './directives';
export * from './pipes';
export * from './providers';

import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { PROVIDERS } from './providers';

export const BROWSER_PROVIDERS = [
  ...PROVIDERS,
  ...DIRECTIVES,
  ...PIPES
];
