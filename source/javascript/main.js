'use strict';

/*------------------------------------*\
 * JS Main entry file
 \*------------------------------------*/
import './config';

// Import utilities.
import moduleInit from '@utilities/module-init';

// Import Singletons
import '@utilities/detect-touch';
import '@utilities/detect-keyboard-focus';

// Import modules.
import Example from '@components/example';
// import {OpenMenuButton, CloseMenuButton } from '@components/menu';
import Menu from '@components/menu'

// Initialize modules.

// Sync
moduleInit.sync('[js-hook-module-example]', Example);
// moduleInit.sync('[js-hook-module-open-menu]', OpenMenuButton)
// moduleInit.sync('[js-hook-module-close-menu]', CloseMenuButton)

moduleInit.sync('[js-hook-module-menu]', Menu)

// Async
// moduleInit.async('[js-hook-module-example]', () => import('@components/example'));
