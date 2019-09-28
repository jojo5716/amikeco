const { name  } = require('@root/package.json');

// Ajax urls
export const URL_AJAX_APP_SETTINGS = `/ajax/${name}/settings`;
export const URL_APP_TRANSLATIONS = `/ajax/${name}/translations`;
export const URL_APP_HEADER_PROPS = `/ajax/${name}/header/props`;
export const URL_APP_FOOTER_PROPS = `/ajax/${name}/footer/props`;

// App pages
export const URL_HOME = '/'; // eslint-disable-line import/prefer-default-export
