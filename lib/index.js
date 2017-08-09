'use babel';

import config from './config-schema';
import settings from './settings';

export default {
  config,

  activate(state) {
    console.log('activated: This optional method is called when your package is activated');
    settings.apply();
  },

  deactivate(state) {
    console.log('deactivated: This optional method is called when the window is shutting down');
  }
};
